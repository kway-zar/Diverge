import bcrypt from 'bcryptjs';

import { prisma } from '../db/prisma.js';
import type { AuthRole } from '../utils/jwt.js';
import { signToken } from '../utils/jwt.js';

export type AuthLoginResult = {
  token: string;
  user: {
    id: string;
    email: string;
    role: AuthRole;
    customerId?: string | null;
  };
};

export async function loginUser(email: string, password: string): Promise<AuthLoginResult> {
  const user = await prisma.user.findUnique({
    where: { email },
    include: { customer: true },
  });

  if (!user) {
    throw new Error('Invalid email or password');
  }

  const storedPassword = user.password || '';
  const isPasswordValid = storedPassword.startsWith('$2')
    ? await bcrypt.compare(password, storedPassword)
    : password === storedPassword;

  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  const token = signToken({
    userId: user.id,
    email: user.email,
    role: user.role as AuthRole,
  });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
      role: user.role as AuthRole,
      customerId: user.customer?.id ?? null,
    },
  };
}
