import { Router } from 'express';

import { loginController } from '../controllers/auth.controller.js';
import { requireAuth } from '../middleware/authMiddleware.js';

export const authRouter = Router();

authRouter.post('/login', loginController);
authRouter.get('/me', requireAuth, (req, res) => {
	res.json({ data: req.user });
});
