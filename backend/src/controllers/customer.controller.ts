import type { Request, Response, NextFunction } from 'express';

import {
  createCustomer,
  getAllBillingInvoices,
  getAllCustomers,
  getCustomerBillingByUserId,
  getCustomerById,
  updateCustomer,
  updateInvoiceStatus,
} from '../services/customer.service.js';
import { createCustomerSchema, updateCustomerSchema } from '../validators/customer.validator.js';

export async function listCustomers(req: Request, res: Response, next: NextFunction) {
  try {
    const customers = await getAllCustomers();
    res.status(200).json({ data: customers, total: customers.length });
  } catch (error) {
    next(error);
  }
}

export async function getCustomer(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const customerId = Array.isArray(id) ? id[0] : id;
    const customer = await getCustomerById(customerId);

    if (!customer) {
      res.status(404).json({ message: 'Customer not found' });
      return;
    }

    res.status(200).json({ data: customer });
  } catch (error) {
    next(error);
  }
}

export async function getCustomerBilling(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required' });
      return;
    }

    const invoices = await getCustomerBillingByUserId(req.user.userId);
    res.status(200).json({ data: invoices });
  } catch (error) {
    next(error);
  }
}

export async function listBillingInvoices(req: Request, res: Response, next: NextFunction) {
  try {
    const invoices = await getAllBillingInvoices();
    res.status(200).json({ data: invoices, total: invoices.length });
  } catch (error) {
    next(error);
  }
}

export async function updateBillingStatus(req: Request, res: Response, next: NextFunction) {
  try {
    const { invoiceId } = req.params;
    const invoiceKey = Array.isArray(invoiceId) ? invoiceId[0] : invoiceId;
    const status = req.body?.status;

    if (!status || !['Paid', 'Pending', 'Overdue'].includes(status)) {
      res.status(400).json({ message: 'A valid invoice status is required' });
      return;
    }

    const invoice = await updateInvoiceStatus(invoiceKey, status);
    res.status(200).json({ data: invoice, message: 'Invoice status updated successfully' });
  } catch (error) {
    next(error);
  }
}

export async function createCustomerController(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = createCustomerSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        message: 'Validation failed',
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const customer = await createCustomer(parsed.data);
    res.status(201).json({ data: customer, message: 'Customer created successfully' });
  } catch (error) {
    next(error);
  }
}

export async function updateCustomerController(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const customerId = Array.isArray(id) ? id[0] : id;
    const parsed = updateCustomerSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        message: 'Validation failed',
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const customer = await updateCustomer({
      id: customerId,
      ...parsed.data,
    });

    res.status(200).json({ data: customer, message: 'Customer updated successfully' });
  } catch (error) {
    next(error);
  }
}
