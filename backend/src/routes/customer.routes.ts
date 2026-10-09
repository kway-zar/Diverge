import { Router } from 'express';

import {
  createCustomerController,
  getCustomer,
  getCustomerBilling,
  listBillingInvoices,
  listCustomers,
  updateBillingStatus,
  updateCustomerController,
} from '../controllers/customer.controller.js';
import { payCustomerInvoice, getCustomerBillingByUserId } from '../services/customer.service.js';
import { requireAuth, requireRole } from '../middleware/authMiddleware.js';
import { prisma } from '../db/prisma.js';

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
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required' });
      return;
    }

    const { invoiceId, paymentMethod = '-' } = req.body ?? {};
    const invoiceKey = Array.isArray(invoiceId) ? invoiceId[0] : invoiceId;

    if (!invoiceKey) {
      res.status(400).json({ message: 'Invoice ID is required' });
      return;
    }

    const { currentInvoice, nextInvoice } = await payCustomerInvoice(req.user.userId, invoiceKey, paymentMethod);
    const invoices = await getCustomerBillingByUserId(req.user.userId);

    res.status(200).json({
      data: invoices,
      currentInvoice,
      nextInvoice,
      message: 'Invoice payment processed successfully',
    });
  } catch (error) {
    next(error);
  }
});
customerRouter.get('/billing', requireAuth, requireRole(['ADMIN']), listBillingInvoices);
customerRouter.patch('/billing/:invoiceId/status', requireAuth, requireRole(['ADMIN']), updateBillingStatus);

customerRouter.get('/', listCustomers);
customerRouter.get('/:id', getCustomer);
customerRouter.post('/', createCustomerController);
customerRouter.put('/:id', updateCustomerController);
