import type { NextFunction, Request, Response } from 'express';

import { loginUser } from '../services/auth.service.js';
import { loginSchema } from '../validators/auth.validator.js';

export async function loginController(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = loginSchema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        message: 'Validation failed',
        errors: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const result = await loginUser(parsed.data.email, parsed.data.password);

    res.status(200).json({
      message: 'Login successful',
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Invalid email or password') {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    next(error);
  }
}
