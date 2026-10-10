import { Router } from 'express';

import { requireAuth, requireRole } from '../middleware/authMiddleware.js';
import { getBillingSummary, issueCreditNote, listBillingInvoices, runBillingCycle } from '../services/billing.service.js';

export const billingRouter = Router();

billingRouter.use(requireAuth, requireRole(['ADMIN']));

billingRouter.get('/summary', async (req, res, next) => {
  try {
    const period = typeof req.query.period === 'string'
      ? req.query.period
      : new Date().toISOString().slice(0, 7);
    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(period)) {
      res.status(400).json({ message: 'Billing period must use YYYY-MM format' });
      return;
    }
    const data = await getBillingSummary(period);
    res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
});

billingRouter.get('/invoices', async (req, res, next) => {
  try {
    const page = Number(req.query.page ?? 1);
    const limit = Number(req.query.limit ?? 25);
    const status = typeof req.query.status === 'string' ? req.query.status.toUpperCase() : undefined;
    const search = typeof req.query.search === 'string' ? req.query.search : undefined;

    if (!Number.isInteger(page) || page < 1 || !Number.isInteger(limit) || limit < 1 || limit > 100) {
      res.status(400).json({ message: 'Page must be positive and limit must be between 1 and 100' });
      return;
    }
    if (status && !['PAID', 'PENDING', 'OVERDUE'].includes(status)) {
      res.status(400).json({ message: 'Status must be PAID, PENDING, or OVERDUE' });
      return;
    }

    const data = await listBillingInvoices({
      page,
      limit,
      status: status as 'PAID' | 'PENDING' | 'OVERDUE' | undefined,
      search,
    });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

billingRouter.post('/invoices/:invoiceId/credit-notes', async (req, res, next) => {
  try {
    const invoiceId = Array.isArray(req.params.invoiceId) ? req.params.invoiceId[0] : req.params.invoiceId;
    const amountCents = req.body?.amountCents;
    const reason = req.body?.reason;
    if (!Number.isSafeInteger(amountCents) || amountCents <= 0 || typeof reason !== 'string' || reason.trim().length < 5 || reason.trim().length > 500) {
      res.status(400).json({ message: 'A positive amountCents and a 5-500 character reason are required' });
      return;
    }
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required' });
      return;
    }

    const data = await issueCreditNote(invoiceId, amountCents, reason, req.user.userId);
    res.status(201).json({ data, message: 'Credit note issued' });
  } catch (error) {
    if (error instanceof Error && error.message === 'Invoice not found') {
      res.status(404).json({ message: error.message });
      return;
    }
    if (error instanceof Error && error.message.startsWith('Credit amount')) {
      res.status(409).json({ message: error.message });
      return;
    }
    next(error);
  }
});

billingRouter.post('/refresh-cycle', async (req, res, next) => {
  try {
    const period = req.body?.period;
    if (typeof period !== 'string' || !/^\d{4}-(0[1-9]|1[0-2])$/.test(period)) {
      res.status(400).json({ message: 'A billing period in YYYY-MM format is required' });
      return;
    }
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required' });
      return;
    }

    const data = await runBillingCycle(period, req.user.userId);
    res.status(200).json({ data, message: 'Billing cycle processed' });
  } catch (error) {
    next(error);
  }
});
