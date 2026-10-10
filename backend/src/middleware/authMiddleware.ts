import type { NextFunction, Request, Response } from 'express';

import type { AuthRole, AuthTokenPayload } from '../utils/jwt.js';
import { verifyToken } from '../utils/jwt.js';
import { prisma } from '../db/prisma.js';

declare global {
  namespace Express {
    interface Request {
      user?: AuthTokenPayload;
    }
  }
}

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ message: 'Authentication token is required' });
    return;
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    res.status(401).json({ message: 'Invalid or expired token' });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, role: true },
    });
    if (!user) {
      res.status(401).json({ message: 'User account is no longer available' });
      return;
    }

    req.user = {
      userId: user.id,
      email: user.email,
      role: user.role as AuthRole,
    };
    next();
  } catch (error) {
    next(error);
  }
}

export function requireRole(allowedRoles: AuthRole[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required' });
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({ message: 'Access denied for this role' });
      return;
    }

    next();
  };
}
