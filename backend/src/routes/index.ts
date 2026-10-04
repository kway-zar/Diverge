import { Router } from 'express';

import { authRouter } from './auth.routes.js';
import { customerRouter } from './customer.routes.js';

export const apiRouter = Router();

apiRouter.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is ready' });
});

apiRouter.use('/auth', authRouter);
apiRouter.use('/customers', customerRouter);
