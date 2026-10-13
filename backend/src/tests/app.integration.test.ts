import request from 'supertest';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { app } from '../app.js';
import { prisma } from '../db/prisma.js';
import { loginUser } from '../services/auth.service.js';
import { signToken } from '../utils/jwt.js';

vi.mock('../db/prisma.js', () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
    },
  },
}));

vi.mock('../services/auth.service.js', () => ({
  loginUser: vi.fn(),
}));

describe('backend integration tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns the backend health status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'ok', service: 'diverge-backend' });
  });

  it('logs in a valid user and returns a token', async () => {
    vi.mocked(loginUser).mockResolvedValue({
      token: 'signed-token',
      user: {
        id: 'user-1',
        email: 'admin@diverge.com',
        role: 'ADMIN',
      },
    });

    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'admin@diverge.com', password: 'secure-password' });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      message: 'Login successful',
      token: 'signed-token',
      user: {
        email: 'admin@diverge.com',
        role: 'ADMIN',
      },
    });
  });

  it('returns the authenticated user payload for a valid bearer token', async () => {
    const token = signToken({ userId: 'user-2', email: 'customer@diverge.com', role: 'CUSTOMER' });

    vi.mocked(prisma.user.findUnique).mockResolvedValue({
      id: 'user-2',
      email: 'customer@diverge.com',
      role: 'CUSTOMER',
      password: 'hashed-password',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-01'),
    } as any);

    const response = await request(app)
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        userId: 'user-2',
        email: 'customer@diverge.com',
        role: 'CUSTOMER',
      },
    });
  });
});
