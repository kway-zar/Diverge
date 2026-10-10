import { Router } from 'express';

import {
  createCustomerController,
  getCustomer,
  getCustomerBilling,
  listBillingInvoices,
  listCustomers,
  updateCustomerController,
} from '../controllers/customer.controller.js';
import { requireAuth, requireRole } from '../middleware/authMiddleware.js';
import { prisma } from '../db/prisma.js';
import { payCustomerInvoice } from '../services/customer.service.js';

export const customerRouter = Router();

customerRouter.get('/me', requireAuth, requireRole(['CUSTOMER']), async (req, res, next) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required' });
      return;
    }

    const customer = await prisma.customer.findFirst({
      where: { userId: req.user.userId },
      include: { plan: true },
    });

    if (!customer) {
      res.status(404).json({ message: 'Customer account not found for this user' });
      return;
    }

    res.status(200).json({ data: customer });
  } catch (error) {
    next(error);
  }
});

customerRouter.get('/me/billing', requireAuth, requireRole(['CUSTOMER']), getCustomerBilling);
customerRouter.post('/me/billing/pay', requireAuth, requireRole(['CUSTOMER']), async (req, res, next) => {
  const invoiceId = req.body?.invoiceId;
  if (typeof invoiceId !== 'string' || !invoiceId.trim()) {
    res.status(400).json({ message: 'Invoice ID is required' });
    return;
  }
  const methodMap: Record<string, string> = {
    GCASH: 'DEMO_GCASH',
    MAYA: 'DEMO_MAYA',
    CARD: 'DEMO_CARD',
  };
  const method = typeof req.body?.method === 'string' ? methodMap[req.body.method] : undefined;
  if (req.body?.paymentMode !== 'INTERNAL_DEMO' || !method) {
    res.status(400).json({ message: 'Choose GCash, Maya, or card for the internal demo settlement. No external provider is contacted.' });
    return;
  }
  try {
    const result = await payCustomerInvoice(req.user!.userId, invoiceId, method);
    res.status(200).json({
      data: result.currentInvoice,
      paymentReference: result.paymentReference,
      message: 'Demo settlement recorded. No funds were moved.',
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Invoice not found') {
      res.status(404).json({ message: error.message });
      return;
    }
    if (error instanceof Error && (error.message.includes('already paid') || error.message.includes('already changed') || error.message.includes('outstanding balance'))) {
      res.status(409).json({ message: error.message });
      return;
    }
    next(error);
  }
});
customerRouter.get('/billing', requireAuth, requireRole(['ADMIN']), listBillingInvoices);

customerRouter.get('/', requireAuth, requireRole(['ADMIN']), listCustomers);
customerRouter.get('/:id', requireAuth, requireRole(['ADMIN']), getCustomer);
customerRouter.post('/', requireAuth, requireRole(['ADMIN']), createCustomerController);
customerRouter.put('/:id', requireAuth, requireRole(['ADMIN']), updateCustomerController);
