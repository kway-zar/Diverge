import jwt from 'jsonwebtoken';

import { env } from '../config/env.js';

export type AuthRole = 'ADMIN' | 'CUSTOMER' | 'TECHNICIAN';

export type AuthTokenPayload = {
  userId: string;
  email: string;
  role: AuthRole;
};

export function signToken(payload: AuthTokenPayload): string {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: '7d' });
}

export function verifyToken(token: string): AuthTokenPayload | null {
  try {
    const decoded = jwt.verify(token, env.jwtSecret) as Partial<AuthTokenPayload>;

    if (!decoded.userId || !decoded.email || !decoded.role) {
      return null;
    }

    return {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role as AuthRole,
    };
  } catch {
    return null;
  }
}
