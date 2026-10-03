import type { Request, Response, NextFunction } from 'express';

import { createCustomer, getAllCustomers, getCustomerById } from '../services/customer.service.js';
import { createCustomerSchema } from '../validators/customer.validator.js';

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
