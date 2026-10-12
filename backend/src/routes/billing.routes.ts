import { Router } from 'express';

import { requireAuth, requireRole } from '../middleware/authMiddleware.js';
import { deleteBillingInvoice, getBillingSummary, issueCreditNote, listBillingInvoices, runBillingCycle } from '../services/billing.service.js';
import { enqueuePastDueSuspensions } from '../services/billing.worker.js';

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
    const dueFromParam = typeof req.query.dueFrom === 'string' ? req.query.dueFrom : undefined;
    const dueToParam = typeof req.query.dueTo === 'string' ? req.query.dueTo : undefined;
    const datePattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

    if (!Number.isInteger(page) || page < 1 || !Number.isInteger(limit) || limit < 1 || limit > 100) {
      res.status(400).json({ message: 'Page must be positive and limit must be between 1 and 100' });
      return;
    }
    if (status && !['PAID', 'PENDING', 'OVERDUE'].includes(status)) {
      res.status(400).json({ message: 'Status must be PAID, PENDING, or OVERDUE' });
      return;
    }
    if ((dueFromParam && !datePattern.test(dueFromParam)) || (dueToParam && !datePattern.test(dueToParam))) {
      res.status(400).json({ message: 'Due date filters must use YYYY-MM-DD format' });
      return;
    }
    if (dueFromParam && dueToParam && dueFromParam > dueToParam) {
      res.status(400).json({ message: 'Due date range is invalid' });
      return;
    }

    const data = await listBillingInvoices({
      page,
      limit,
      status: status as 'PAID' | 'PENDING' | 'OVERDUE' | undefined,
      search,
      dueFrom: dueFromParam ? new Date(`${dueFromParam}T00:00:00.000Z`) : undefined,
      dueTo: dueToParam ? new Date(`${dueToParam}T23:59:59.999Z`) : undefined,
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

billingRouter.delete('/invoices/:invoiceId', async (req, res, next) => {
  try {
    const invoiceId = Array.isArray(req.params.invoiceId) ? req.params.invoiceId[0] : req.params.invoiceId;
    const data = await deleteBillingInvoice(invoiceId);
    res.status(200).json({ data, message: 'Invoice removed' });
  } catch (error) {
    if (error instanceof Error && error.message === 'Invoice not found') {
      res.status(404).json({ message: error.message });
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

billingRouter.post('/br-01/run-suspensions', async (_req, res, next) => {
  try {
    const suspendedCount = await enqueuePastDueSuspensions();
    res.status(200).json({
      data: { suspendedCount },
      message: suspendedCount > 0
        ? `BR-01: suspended ${suspendedCount} account${suspendedCount === 1 ? '' : 's'} more than 31 days overdue`
        : 'BR-01: no accounts crossed the 31-day overdue threshold',
    });
  } catch (error) {
    next(error);
  }
});
