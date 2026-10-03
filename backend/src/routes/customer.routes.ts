import { Router } from 'express';

import {
  createCustomerController,
  getCustomer,
  listCustomers,
} from '../controllers/customer.controller.js';

export const customerRouter = Router();

customerRouter.get('/', listCustomers);
customerRouter.get('/:id', getCustomer);
customerRouter.post('/', createCustomerController);
