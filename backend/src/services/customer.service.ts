import { prisma } from '../db/prisma.js';
import type { CreateCustomerInput } from '../validators/customer.validator.js';

export type CustomerRecord = {
  id: string;
  accountID: string;
  name: string;
  email: string;
  type: 'Residential' | 'Business' | 'Government' | 'Commercial';
  plan: string;
  planId?: string;
  usage: string;
  balance: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Suspended';
  area: string;
  since: string;
  createdAt: string;
  updatedAt: string;
};

const customers: CustomerRecord[] = [
  {
    id: 'cust-1001',
    accountID: 'ACC-1001',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    type: 'Residential',
    plan: 'Fiber 200',
    usage: '80%',
    balance: '0',
    status: 'Active',
    area: 'Cebu City',
    since: '2024-01-18T00:00:00.000Z',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'cust-1002',
    accountID: 'ACC-1002',
    name: 'BluePeak Retail',
    email: 'retail@bluepeak.ph',
    type: 'Business',
    plan: 'Business Pro',
    usage: '65%',
    balance: '1500',
    status: 'Pending',
    area: 'Mandaue',
    since: '2024-03-20T00:00:00.000Z',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

function mapPrismaCustomerType(type: string): CustomerRecord['type'] {
  const normalized = type.toLowerCase();

  if (normalized === 'business') return 'Business';
  if (normalized === 'government') return 'Government';
  if (normalized === 'commercial') return 'Commercial';
  return 'Residential';
}

function mapPrismaStatus(status: string): CustomerRecord['status'] {
  const normalized = status.toLowerCase();

  if (normalized === 'inactive') return 'Inactive';
  if (normalized === 'pending') return 'Pending';
  if (normalized === 'suspended') return 'Suspended';
  return 'Active';
}

function serializeCustomerRecord(data: {
  id: string;
  accountId: string;
  name: string;
  email: string;
  type: string;
  plan?: { name?: string | null } | null;
  usage?: string | null;
  balance?: string | null;
  status: string;
  area?: string | null;
  since: Date;
  createdAt: Date;
  updatedAt: Date;
}): CustomerRecord {
  return {
    id: data.id,
    accountID: data.accountId,
    name: data.name,
    email: data.email,
    type: mapPrismaCustomerType(data.type),
    plan: data.plan?.name ?? 'Unassigned',
    usage: data.usage ?? '0',
    balance: data.balance ?? '0',
    status: mapPrismaStatus(data.status),
    area: data.area ?? 'N/A',
    since: data.since.toISOString(),
    createdAt: data.createdAt.toISOString(),
    updatedAt: data.updatedAt.toISOString(),
  };
}

export async function getAllCustomers(): Promise<CustomerRecord[]> {
  try {
    const result = await prisma.customer.findMany({
      include: { plan: true },
      orderBy: { createdAt: 'desc' },
    });

    return result.map((customer) => serializeCustomerRecord(customer));
  } catch {
    return [...customers];
  }
}

export async function getCustomerById(id: string): Promise<CustomerRecord | undefined> {
  try {
    const result = await prisma.customer.findUnique({
      where: { id },
      include: { plan: true },
    });

    if (!result) return customers.find((customer) => customer.id === id);
    return serializeCustomerRecord(result);
  } catch {
    return customers.find((customer) => customer.id === id);
  }
}

export async function createCustomer(input: CreateCustomerInput): Promise<CustomerRecord> {
  try {
    const accountId = `ACC-${Date.now()}`;
    const created = await prisma.user.create({
      data: {
        email: input.email,
        password: 'temporary-password',
        role: 'CUSTOMER',
        customer: {
          create: {
            accountId,
            name: input.name,
            email: input.email,
            type: input.type.toUpperCase().replace(/\s+/g, '_') as never,
            usage: input.usage,
            balance: input.balance,
            status: input.status.toUpperCase() as never,
            area: input.area,
            since: new Date(),
          },
        },
      },
      include: { customer: true },
    });

    const customer = created.customer;
    if (!customer) {
      throw new Error('Customer was not created');
    }

    return serializeCustomerRecord(customer);
  } catch {
    const now = new Date().toISOString();
    const customer: CustomerRecord = {
      id: `cust-${Date.now()}`,
      accountID: `ACC-${Date.now()}`,
      name: input.name,
      email: input.email,
      type: input.type,
      plan: input.plan,
      usage: input.usage,
      balance: input.balance,
      status: input.status,
      area: input.area,
      since: now,
      createdAt: now,
      updatedAt: now,
    };

    customers.unshift(customer);
    return customer;
  }
}
