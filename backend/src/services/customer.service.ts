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
  paymentMethod: 'Gcash' | 'Bank Transfer' | 'Maya' | 'Demo GCash' | 'Demo Maya' | 'Demo Card' | '-';
  status: 'Paid' | 'Pending' | 'Overdue';
};

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
      case 'DEMO_GCASH':
        return 'Demo GCash';
      case 'DEMO_MAYA':
        return 'Demo Maya';
      case 'DEMO_CARD':
        return 'Demo Card';
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
  const result = await prisma.customer.findMany({
    include: { plan: true },
    orderBy: { createdAt: 'desc' },
  });

  return result.map((customer) => serializeCustomerRecord(customer));
}

export async function getCustomerById(id: string): Promise<CustomerRecord | undefined> {
  const result = await prisma.customer.findUnique({
    where: { id },
    include: { plan: true },
  });

  if (!result) return undefined;
  return serializeCustomerRecord(result);
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

export async function getCustomerActivePlanByUserId(userId: string) {
  const customer = await prisma.customer.findFirst({
    where: { userId },
    include: {
      plan: true,
      subscriptions: {
        where: { status: 'ACTIVE' },
        include: { plan: true },
        orderBy: { updatedAt: 'desc' },
        take: 1,
      },
    },
  });
  if (!customer) return null;

  const activeSubscription = customer.subscriptions[0];
  const plan = activeSubscription?.plan ?? customer.plan;
  if (!plan) return null;

  return {
    id: plan.id,
    name: plan.name,
    speed: plan.speed,
    cost: plan.cost,
    status: activeSubscription?.status ?? customer.status,
    effectiveAt: activeSubscription?.updatedAt ?? customer.updatedAt,
  };
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
  paymentMethod: string = 'DEMO_GCASH',
): Promise<{ currentInvoice: BillingInvoiceRecord; paymentReference: string; upcomingInvoiceID: string | null }> {
  if (!['DEMO_GCASH', 'DEMO_MAYA', 'DEMO_CARD'].includes(paymentMethod)) {
    throw new Error('Only demo-ledger payment methods are enabled');
  }

  const customer = await prisma.customer.findFirst({ where: { userId }, include: { plan: true } });
  if (!customer) throw new Error('Customer not found');

  const existingInvoice = await prisma.invoice.findFirst({
    where: { customerId: customer.id, ...buildInvoiceLookup(invoiceKey) },
  });
  if (!existingInvoice) throw new Error('Invoice not found');
  if (existingInvoice.status === 'PAID') throw new Error('Invoice is already paid');

  const outstandingAmount = Math.max(0, existingInvoice.amount - existingInvoice.creditAmount);
  if (outstandingAmount <= 0) throw new Error('Invoice has no outstanding balance');

  const settledAt = new Date();
  const result = await prisma.$transaction(async (transaction) => {
    const updatedInvoiceCount = await transaction.invoice.updateMany({
      where: {
        id: existingInvoice.id,
        status: { not: 'PAID' },
        creditAmount: existingInvoice.creditAmount,
      },
      data: { status: 'PAID', paymentMethod },
    });
    if (updatedInvoiceCount.count !== 1) throw new Error('Invoice has already changed; reload and try again');

    const updatedPayment = await transaction.payment.updateMany({
      where: { invoiceId: existingInvoice.id, status: 'PENDING' },
      data: {
        amount: outstandingAmount,
        method: paymentMethod,
        status: 'PAID',
        settledAt,
      },
    });

    if (updatedPayment.count === 0) {
      await transaction.payment.create({
        data: {
          customerId: customer.id,
          invoiceId: existingInvoice.id,
          period: existingInvoice.dueDate.toISOString().slice(0, 7),
          amount: outstandingAmount,
          due: existingInvoice.dueDate,
          method: paymentMethod,
          status: 'PAID',
          settledAt,
        },
      });
    }

    const subscription = await transaction.subscription.findFirst({
      where: { customerId: customer.id, status: 'ACTIVE' },
      include: { plan: true },
      orderBy: { updatedAt: 'desc' },
    });
    const nextPlan = subscription?.plan ?? customer.plan;
    let upcomingInvoiceNumber: string | null = null;
    if (nextPlan?.cost && nextPlan.cost > 0) {
      const nextYear = existingInvoice.dueDate.getUTCFullYear();
      const nextMonthIndex = existingInvoice.dueDate.getUTCMonth() + 1;
      const lastDay = new Date(Date.UTC(nextYear, nextMonthIndex + 1, 0)).getUTCDate();
      const billingDay = subscription?.billingDay ?? existingInvoice.dueDate.getUTCDate();
      const nextDueDate = new Date(Date.UTC(nextYear, nextMonthIndex, Math.min(billingDay, lastDay)));
      const nextPeriod = `${nextDueDate.getUTCFullYear()}-${String(nextDueDate.getUTCMonth() + 1).padStart(2, '0')}`;
      upcomingInvoiceNumber = `INV-${nextPeriod.replace('-', '')}-${(subscription?.id ?? customer.id).toUpperCase()}`;
      const alreadyGenerated = await transaction.invoice.findUnique({ where: { invoiceNumber: upcomingInvoiceNumber } });

      if (!alreadyGenerated) {
        const upcomingInvoice = await transaction.invoice.create({
          data: {
            customerId: customer.id,
            planId: nextPlan.id,
            invoiceNumber: upcomingInvoiceNumber,
            email: customer.email,
            contact: existingInvoice.contact,
            amount: nextPlan.cost,
            dueDate: nextDueDate,
            paymentMethod: null,
            status: 'PENDING',
            lineItems: {
              create: {
                description: `${nextPlan.name} service for ${nextPeriod}`,
                quantity: 1,
                unitAmount: nextPlan.cost,
                amount: nextPlan.cost,
              },
            },
          },
        });
        await transaction.payment.create({
          data: {
            customerId: customer.id,
            invoiceId: upcomingInvoice.id,
            period: nextPeriod,
            amount: nextPlan.cost,
            due: nextDueDate,
            method: null,
            status: 'PENDING',
          },
        });
      }
    }

    const [paidInvoice, payment] = await Promise.all([
      transaction.invoice.findUniqueOrThrow({
        where: { id: existingInvoice.id },
        include: { customer: true, plan: true },
      }),
      transaction.payment.findFirstOrThrow({
        where: { invoiceId: existingInvoice.id, status: 'PAID', settledAt },
      }),
    ]);
    return { paidInvoice, payment, upcomingInvoiceNumber };
  });

  return {
    currentInvoice: serializeInvoiceRecord({
      id: result.paidInvoice.id,
      customerId: result.paidInvoice.customerId,
      invoiceNumber: result.paidInvoice.invoiceNumber,
      customer: {
        name: result.paidInvoice.customer.name,
        email: result.paidInvoice.customer.email,
        accountId: result.paidInvoice.customer.accountId,
      },
      plan: result.paidInvoice.plan,
      contact: result.paidInvoice.contact,
      amount: result.paidInvoice.amount,
      dueDate: result.paidInvoice.dueDate,
      paymentMethod: result.paidInvoice.paymentMethod,
      status: result.paidInvoice.status,
    }),
    paymentReference: result.payment.id,
    upcomingInvoiceID: result.upcomingInvoiceNumber,
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

    if (customer.status === 'ACTIVE' && customer.planId) {
      const startedAt = customer.since;
      await prisma.subscription.create({
        data: {
          customerId: customer.id,
          planId: customer.planId,
          billingDay: startedAt.getUTCDate(),
          startedAt,
          status: 'ACTIVE',
        },
      });
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

    const [, updated] = await prisma.$transaction([
      prisma.user.update({
        where: { id: existing.userId },
        data: { email: updates.email ?? existing.email },
      }),
      prisma.customer.update({
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
      }),
    ]);

    const activeSubscription = await prisma.subscription.findFirst({
      where: { customerId: updated.id, status: 'ACTIVE' },
    });

    if (updated.status === 'ACTIVE' && updated.planId) {
      if (activeSubscription) {
        await prisma.subscription.update({
          where: { id: activeSubscription.id },
          data: { planId: updated.planId },
        });
      } else {
        await prisma.subscription.create({
          data: {
            customerId: updated.id,
            planId: updated.planId,
            billingDay: updated.since.getUTCDate(),
            startedAt: new Date(),
            status: 'ACTIVE',
          },
        });
      }
    } else if (activeSubscription) {
      await prisma.subscription.update({
        where: { id: activeSubscription.id },
        data: { status: 'PAUSED' },
      });
    }

    return serializeCustomerRecord(updated);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Customer update failed');
  }
}
