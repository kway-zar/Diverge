import { z } from 'zod';

export const createCustomerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').trim(),
  email: z.string().email('Invalid email address'),
  type: z.enum(['Residential', 'Business', 'Government', 'Commercial']),
  plan: z.string().min(2, 'Plan is required'),
  status: z.enum(['Active', 'Inactive', 'Pending', 'Suspended']).default('Pending'),
  area: z.string().min(2, 'Area is required').trim(),
  usage: z.string().default('0'),
  balance: z.string().default('0'),
});

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;
