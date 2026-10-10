import { Router } from 'express';

import { authRouter } from './auth.routes.js';
import { billingRouter } from './billing.routes.js';
import { customerRouter } from './customer.routes.js';
import { adminTicketRouter, customerTicketRouter, technicianRouter } from './ticket.routes.js';
import { adminPlanRouter, customerPlanRouter } from './plan.routes.js';
import { technicianAdminRouter } from './technician-admin.routes.js';

export const apiRouter = Router();

apiRouter.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is ready' });
});

apiRouter.use('/auth', authRouter);
apiRouter.use('/customers', customerRouter);
apiRouter.use('/customers/me/tickets', customerTicketRouter);
apiRouter.use('/v1/admin/billing', billingRouter);
apiRouter.use('/v1/admin/tickets', adminTicketRouter);
apiRouter.use('/v1/admin/plans', adminPlanRouter);
apiRouter.use('/v1/admin/technicians', technicianAdminRouter);
apiRouter.use('/v1/technician', technicianRouter);
apiRouter.use('/v1/customer/plans', customerPlanRouter);
