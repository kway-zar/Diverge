import { prisma } from '../db/prisma.js';
import type { CreateCustomerInput, UpdateCustomerInput } from '../validators/customer.validator.js';

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

export type BillingInvoiceRecord = {
  id: string;
  invoiceID: string;
  customerId: string;
  account: string;
  email: string;
  contact: string;
  plan: string;
  amount: string;
  dueDate: string;
  paymentMethod: 'Gcash' | 'Bank Transfer' | 'Maya' | '-';
  status: 'Paid' | 'Pending' | 'Overdue';
};

const seededCustomers: CustomerRecord[] = [
  {
    id: 'seed-jonathan-landoy',
    accountID: 'ACC-SEED-001',
    name: 'Jonathan Landoy',
    email: 'jonathan@example.com',
    type: 'Residential',
    plan: 'Fiber 200',
    usage: '5000 MB',
    balance: '1000',
    status: 'Active',
    area: 'Rizal',
    since: '2023-01-15T00:00:00.000Z',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'seed-guiller-delacruz',
    accountID: 'ACC-SEED-002',
    name: 'Guiller DelaCruz',
    email: 'guiller.delaCruz@example.com',
    type: 'Commercial',
    plan: 'Business Pro',
    usage: '10000 MB',
    balance: '2500',
    status: 'Pending',
    area: 'Manila',
    since: '2023-03-20T00:00:00.000Z',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'seed-vanna-banana',
    accountID: 'ACC-SEED-003',
    name: 'Vanna Banana',
    email: 'vanna.banana@example.com',
    type: 'Government',
    plan: 'Government Plus',
    usage: '5000 MB',
    balance: '1000',
    status: 'Suspended',
    area: 'Cebu',
    since: '2023-01-15T00:00:00.000Z',
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

function mapCustomerTypeToPrisma(type: string): string {
  switch (type) {
    case 'Business':
      return 'BUSINESS';
    case 'Government':
      return 'GOVERNMENT';
    case 'Commercial':
      return 'COMMERCIAL';
    default:
      return 'RESIDENTIAL';
  }
}

function mapStatusToPrisma(status: string): string {
  switch (status) {
    case 'Inactive':
      return 'INACTIVE';
    case 'Pending':
      return 'PENDING';
    case 'Suspended':
      return 'SUSPENDED';
    default:
      return 'ACTIVE';
  }
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

function isPastDueDate(dueDate: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);

  return due < today;
}

function toUiInvoiceStatus(status: string, dueDate: Date): BillingInvoiceRecord['status'] {
  if (status === 'PAID') {
    return 'Paid';
  }

  if (isPastDueDate(dueDate)) {
    return 'Overdue';
  }

  return 'Pending';
}

function toUiPaymentMethod(method?: string | null, status?: string): BillingInvoiceRecord['paymentMethod'] {
  const normalized = method?.trim();

  if (normalized) {
    switch (normalized.toUpperCase()) {
      case 'GCASH':
        return 'Gcash';
      case 'BANK_TRANSFER':
        return 'Bank Transfer';
      case 'MAYA':
        return 'Maya';
      default:
        break;
    }
  }

  if (status === 'PAID') {
    return 'Gcash';
  }

  return '-';
}

function formatInvoiceAmount(amount: number): string {
  return `₱${(amount / 100).toLocaleString('en-PH')}`;
}

function buildInvoiceLookup(invoiceKey: string) {
  const trimmedKey = invoiceKey.trim();
  const isMongoId = /^[0-9a-fA-F]{24}$/.test(trimmedKey);

  return isMongoId
    ? { id: trimmedKey }
    : { invoiceNumber: trimmedKey };
}

function serializeInvoiceRecord(data: {
  id: string;
  customerId: string;
  invoiceNumber: string;
  customer: { name: string; email: string; accountId: string; };
  plan?: { name?: string | null } | null;
  contact: string;
  amount: number;
  dueDate: Date;
  paymentMethod?: string | null;
  status: string;
}): BillingInvoiceRecord {
  return {
    id: data.id,
    invoiceID: data.invoiceNumber,
    customerId: data.customerId,
    account: data.customer.name,
    email: data.customer.email,
    contact: data.contact,
    plan: data.plan?.name ?? 'Unassigned',
    amount: formatInvoiceAmount(data.amount),
    dueDate: new Date(data.dueDate).toISOString().slice(0, 10),
    paymentMethod: toUiPaymentMethod(data.paymentMethod, data.status),
    status: toUiInvoiceStatus(data.status, data.dueDate),
  };
}

export async function getAllCustomers(): Promise<CustomerRecord[]> {
  try {
    const result = await prisma.customer.findMany({
      include: { plan: true },
      orderBy: { createdAt: 'desc' },
    });

    return result.map((customer) => serializeCustomerRecord(customer));
  } catch (error) {
    console.error('Customer DB lookup failed, using seeded fallback data.', error);
    return seededCustomers;
  }
}

export async function getCustomerById(id: string): Promise<CustomerRecord | undefined> {
  try {
    const result = await prisma.customer.findUnique({
      where: { id },
      include: { plan: true },
    });

    if (!result) return undefined;
    return serializeCustomerRecord(result);
  } catch {
    return undefined;
  }
}

export async function getAllBillingInvoices(): Promise<BillingInvoiceRecord[]> {
  const invoices = await prisma.invoice.findMany({
    include: {
      customer: true,
      plan: true,
    },
    orderBy: { dueDate: 'desc' },
  });

  return invoices.map((invoice) => serializeInvoiceRecord({
    id: invoice.id,
    customerId: invoice.customerId,
    invoiceNumber: invoice.invoiceNumber,
    customer: {
      name: invoice.customer.name,
      email: invoice.customer.email,
      accountId: invoice.customer.accountId,
    },
    plan: invoice.plan,
    contact: invoice.contact,
    amount: invoice.amount,
    dueDate: invoice.dueDate,
    paymentMethod: invoice.paymentMethod,
    status: invoice.status,
  }));
}

export async function getCustomerBillingByUserId(userId: string): Promise<BillingInvoiceRecord[]> {
  const customer = await prisma.customer.findFirst({
    where: { userId },
  });

  if (!customer) {
    return [];
  }

  return getCustomerBillingByCustomerId(customer.id);
}

export async function getCustomerBillingByCustomerId(customerId: string): Promise<BillingInvoiceRecord[]> {
  const invoices = await prisma.invoice.findMany({
    where: { customerId },
    include: {
      customer: true,
      plan: true,
    },
    orderBy: { dueDate: 'desc' },
  });

  return invoices.map((invoice) => serializeInvoiceRecord({
    id: invoice.id,
    customerId: invoice.customerId,
    invoiceNumber: invoice.invoiceNumber,
    customer: {
      name: invoice.customer.name,
      email: invoice.customer.email,
      accountId: invoice.customer.accountId,
    },
    plan: invoice.plan,
    contact: invoice.contact,
    amount: invoice.amount,
    dueDate: invoice.dueDate,
    paymentMethod: invoice.paymentMethod,
    status: invoice.status,
  }));
}

export async function payCustomerInvoice(
  userId: string,
  invoiceKey: string,
  paymentMethod: string = '-',
): Promise<{ currentInvoice: BillingInvoiceRecord; nextInvoice: BillingInvoiceRecord }> {
  const customer = await prisma.customer.findFirst({
    where: { userId },
    include: { plan: true },
  });

  if (!customer) {
    throw new Error('Customer not found');
  }

  const existingInvoice = await prisma.invoice.findFirst({
    where: {
      customerId: customer.id,
      ...buildInvoiceLookup(invoiceKey),
    },
    include: {
      customer: true,
      plan: true,
    },
  });

  if (!existingInvoice) {
    throw new Error('Invoice not found');
  }

  const selectedMethod = paymentMethod && paymentMethod !== '-' ? paymentMethod : existingInvoice.paymentMethod || 'GCASH';

  const paidInvoice = await prisma.invoice.update({
    where: { id: existingInvoice.id },
    data: {
      status: 'PAID',
      paymentMethod: selectedMethod,
    },
    include: {
      customer: true,
      plan: true,
    },
  });

  await prisma.payment.updateMany({
    where: { invoiceId: existingInvoice.id },
    data: {
      status: 'PAID',
      method: selectedMethod,
    },
  });

  const nextDueDate = new Date(existingInvoice.dueDate);
  nextDueDate.setMonth(nextDueDate.getMonth() + 1);
  const nextInvoiceNumber = `INV-${nextDueDate.getFullYear()}-${String(nextDueDate.getMonth() + 1).padStart(2, '0')}-${String(Date.now() % 10000).padStart(4, '0')}`;

  const nextInvoice = await prisma.invoice.create({
    data: {
      customerId: customer.id,
      planId: existingInvoice.planId ?? customer.planId ?? undefined,
      invoiceNumber: nextInvoiceNumber,
      email: customer.email,
      contact: existingInvoice.contact,
      amount: existingInvoice.amount,
      dueDate: nextDueDate,
      paymentMethod: '-',
      status: 'PENDING',
    },
    include: {
      customer: true,
      plan: true,
    },
  });

  await prisma.payment.create({
    data: {
      customerId: customer.id,
      invoiceId: nextInvoice.id,
      period: nextDueDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      amount: nextInvoice.amount,
      due: nextDueDate,
      method: '-',
      status: 'PENDING',
    },
  });

  return {
    currentInvoice: serializeInvoiceRecord({
      id: paidInvoice.id,
      customerId: paidInvoice.customerId,
      invoiceNumber: paidInvoice.invoiceNumber,
      customer: {
        name: paidInvoice.customer.name,
        email: paidInvoice.customer.email,
        accountId: paidInvoice.customer.accountId,
      },
      plan: paidInvoice.plan,
      contact: paidInvoice.contact,
      amount: paidInvoice.amount,
      dueDate: paidInvoice.dueDate,
      paymentMethod: paidInvoice.paymentMethod,
      status: paidInvoice.status,
    }),
    nextInvoice: serializeInvoiceRecord({
      id: nextInvoice.id,
      customerId: nextInvoice.customerId,
      invoiceNumber: nextInvoice.invoiceNumber,
      customer: {
        name: nextInvoice.customer.name,
        email: nextInvoice.customer.email,
        accountId: nextInvoice.customer.accountId,
      },
      plan: nextInvoice.plan,
      contact: nextInvoice.contact,
      amount: nextInvoice.amount,
      dueDate: nextInvoice.dueDate,
      paymentMethod: nextInvoice.paymentMethod,
      status: nextInvoice.status,
    }),
  };
}

export async function updateInvoiceStatus(
  invoiceKey: string,
  status: 'Paid' | 'Pending' | 'Overdue',
): Promise<BillingInvoiceRecord> {
  const prismaStatus = status === 'Paid' ? 'PAID' : status === 'Overdue' ? 'OVERDUE' : 'PENDING';
  const paymentStatus = status === 'Paid' ? 'PAID' : 'PENDING';

  const existingInvoice = await prisma.invoice.findFirst({
    where: buildInvoiceLookup(invoiceKey),
    include: {
      customer: true,
      plan: true,
    },
  });

  if (!existingInvoice) {
    throw new Error('Invoice not found');
  }

  const nextPaymentMethod = status === 'Paid'
    ? (existingInvoice.paymentMethod && existingInvoice.paymentMethod !== '-' ? existingInvoice.paymentMethod : 'GCASH')
    : '-';

  const invoice = await prisma.invoice.update({
    where: { id: existingInvoice.id },
    data: {
      status: prismaStatus,
      paymentMethod: nextPaymentMethod,
    },
    include: {
      customer: true,
      plan: true,
    },
  });

  await prisma.payment.updateMany({
    where: { invoiceId: invoice.id },
    data: {
      status: paymentStatus,
      method: nextPaymentMethod,
    },
  });

  return serializeInvoiceRecord({
    id: invoice.id,
    customerId: invoice.customerId,
    invoiceNumber: invoice.invoiceNumber,
    customer: {
      name: invoice.customer.name,
      email: invoice.customer.email,
      accountId: invoice.customer.accountId,
    },
    plan: invoice.plan,
    contact: invoice.contact,
    amount: invoice.amount,
    dueDate: invoice.dueDate,
    paymentMethod: invoice.paymentMethod,
    status: invoice.status,
  });
}

export async function createCustomer(input: CreateCustomerInput): Promise<CustomerRecord> {
  try {
    const accountId = `ACC-${Date.now()}`;
    const plan = await prisma.plan.upsert({
      where: { name: input.plan },
      update: {},
      create: {
        name: input.plan,
        type: input.type,
        speed: 'N/A',
        cost: 0,
        status: 'ACTIVE',
      },
    });

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
            planId: plan.id,
            usage: input.usage,
            balance: input.balance,
            status: input.status.toUpperCase() as never,
            area: input.area,
            since: new Date(),
          },
        },
      },
      include: { customer: { include: { plan: true } } },
    });

    const customer = created.customer;
    if (!customer) {
      throw new Error('Customer was not created');
    }

    return serializeCustomerRecord(customer);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Customer creation failed');
  }
}

export async function updateCustomer(input: UpdateCustomerInput): Promise<CustomerRecord> {
  const { id, ...updates } = input;

  try {
    const existing = await prisma.customer.findUnique({
      where: { id },
      include: { plan: true },
    });

    if (!existing) {
      throw new Error('Customer not found');
    }

    const nextType = updates.type ? mapCustomerTypeToPrisma(updates.type) : existing.type;
    const nextStatus = updates.status ? mapStatusToPrisma(updates.status) : existing.status;
    const nextPlanName = updates.plan?.trim() || existing.plan?.name || 'Unassigned';

    const plan = updates.plan
      ? await prisma.plan.upsert({
          where: { name: nextPlanName },
          update: { type: nextType, status: 'ACTIVE' },
          create: {
            name: nextPlanName,
            type: nextType,
            speed: 'N/A',
            cost: 0,
            status: 'ACTIVE',
          },
        })
      : existing.plan;

    const updated = await prisma.customer.update({
      where: { id },
      data: {
        name: updates.name ?? existing.name,
        email: updates.email ?? existing.email,
        type: nextType as never,
        planId: plan?.id ?? existing.planId ?? undefined,
        usage: updates.usage ?? existing.usage ?? '0',
        balance: updates.balance ?? existing.balance ?? '0',
        status: nextStatus as never,
        area: updates.area ?? existing.area ?? 'N/A',
        since: updates.since ? new Date(updates.since) : existing.since,
      },
      include: { plan: true },
    });

    return serializeCustomerRecord(updated);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Customer update failed');
  }
}
