import { Prisma } from '@prisma/client';
import { randomUUID } from 'node:crypto';

import { prisma } from '../db/prisma.js';

const CENTS_PER_PESO = 100;

function formatAmount(amount: number): string {
  return `₱${(amount / CENTS_PER_PESO).toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;
}

function monthBounds(period: string): { start: Date; end: Date } {
  const [year, month] = period.split('-').map(Number);
  const manilaOffsetMs = 8 * 60 * 60 * 1000;
  return {
    start: new Date(Date.UTC(year, month - 1, 1) - manilaOffsetMs),
    end: new Date(Date.UTC(year, month, 1) - manilaOffsetMs),
  };
}

function validPeriod(period: string): boolean {
  return /^\d{4}-(0[1-9]|1[0-2])$/.test(period);
}

export async function getBillingSummary(period: string) {
  if (!validPeriod(period)) {
    throw new Error('Billing period must use YYYY-MM format');
  }

  const { start, end } = monthBounds(period);
  const [payments, invoices, creditNotes, overdueInvoices, suspendedAccountCount] = await Promise.all([
    prisma.payment.findMany({
      where: {
        status: 'PAID',
        settledAt: { gte: start, lt: end },
      },
      select: { amount: true },
    }),
    prisma.invoice.findMany({
      where: { status: { not: 'PAID' } },
      select: { customerId: true, amount: true, creditAmount: true, dueDate: true },
    }),
    prisma.creditNote.findMany({
      where: { status: 'ISSUED', issuedAt: { gte: start, lt: end } },
      select: { amount: true },
    }),
    prisma.invoice.findMany({
      where: { status: { not: 'PAID' }, dueDate: { lt: new Date(Date.now() - 31 * 24 * 60 * 60 * 1000) } },
      select: { customerId: true, amount: true, creditAmount: true },
    }),
    prisma.customer.count({ where: { status: 'SUSPENDED' } }),
  ]);

  const now = new Date();
  let pendingAmount = 0;
  let overdueAmount = 0;
  let pendingCount = 0;
  let overdueCount = 0;

  for (const invoice of invoices) {
    const balanceDue = Math.max(0, invoice.amount - invoice.creditAmount);
    if (balanceDue === 0) continue;
    if (invoice.dueDate < now) {
      overdueAmount += balanceDue;
      overdueCount += 1;
    } else {
      pendingAmount += balanceDue;
      pendingCount += 1;
    }
  }

  return {
    period,
    currency: 'PHP',
    collectedThisMonth: payments.reduce((sum, payment) => sum + payment.amount, 0),
    collectedPaymentCount: payments.length,
    pendingAmount,
    pendingInvoiceCount: pendingCount,
    overdueAmount,
    overdueInvoiceCount: overdueCount,
    overdue31DayAccountCount: new Set(
      overdueInvoices.filter((invoice) => invoice.amount > invoice.creditAmount).map((invoice) => invoice.customerId),
    ).size,
    suspendedAccountCount,
    creditNotesIssuedThisMonth: creditNotes.reduce((sum, creditNote) => sum + creditNote.amount, 0),
    creditNoteCount: creditNotes.length,
  };
}

export async function listBillingInvoices(options: {
  page: number;
  limit: number;
  status?: 'PAID' | 'PENDING' | 'OVERDUE';
  search?: string;
  dueFrom?: Date;
  dueTo?: Date;
}) {
  const now = new Date();
  const conditions: Prisma.InvoiceWhereInput[] = [];

  if (options.status === 'PAID') {
    conditions.push({ status: 'PAID' });
  } else if (options.status === 'OVERDUE') {
    conditions.push({ status: { not: 'PAID' } }, { dueDate: { lt: now } });
  } else if (options.status === 'PENDING') {
    conditions.push({ status: { not: 'PAID' } }, { dueDate: { gte: now } });
  }

  if (options.dueFrom || options.dueTo) {
    const dueDate: Prisma.DateTimeFilter = {};
    if (options.dueFrom) dueDate.gte = options.dueFrom;
    if (options.dueTo) dueDate.lte = options.dueTo;
    conditions.push({ dueDate });
  }

  if (options.search?.trim()) {
    const search = options.search.trim();
    conditions.push({
      OR: [
        { invoiceNumber: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { customer: { name: { contains: search, mode: 'insensitive' } } },
        { customer: { accountId: { contains: search, mode: 'insensitive' } } },
      ],
    });
  }

  const where: Prisma.InvoiceWhereInput = conditions.length ? { AND: conditions } : {};

  const [invoices, total] = await Promise.all([
    prisma.invoice.findMany({
      where,
      include: { customer: true, plan: true },
      orderBy: [{ dueDate: 'desc' }, { id: 'desc' }],
      skip: (options.page - 1) * options.limit,
      take: options.limit,
    }),
    prisma.invoice.count({ where }),
  ]);

  return {
    data: invoices.map((invoice) => ({
      id: invoice.id,
      invoiceID: invoice.invoiceNumber,
      customerId: invoice.customerId,
      account: invoice.customer.name,
      accountId: invoice.customer.accountId,
      email: invoice.customer.email,
      contact: invoice.contact,
      plan: invoice.plan?.name ?? 'Unassigned',
      amount: formatAmount(invoice.amount),
      amountCents: invoice.amount,
      dueDate: invoice.dueDate.toISOString().slice(0, 10),
      paymentMethod: invoice.paymentMethod ?? '-',
      status: invoice.status === 'PAID' ? 'Paid' : invoice.dueDate < now ? 'Overdue' : 'Pending',
    })),
    page: options.page,
    limit: options.limit,
    total,
  };
}

export async function issueCreditNote(invoiceKey: string, amount: number, reason: string, createdById: string) {
  const trimmedKey = invoiceKey.trim();
  const lookup = /^[0-9a-fA-F]{24}$/.test(trimmedKey)
    ? { id: trimmedKey }
    : { invoiceNumber: trimmedKey };

  return prisma.$transaction(async (transaction) => {
    const invoice = await transaction.invoice.findFirst({ where: lookup });
    if (!invoice) throw new Error('Invoice not found');
    if (!Number.isSafeInteger(amount) || amount <= 0) throw new Error('Credit amount must be positive integer cents');

    const updated = await transaction.invoice.updateMany({
      where: { id: invoice.id, creditAmount: { lte: invoice.amount - amount } },
      data: { creditAmount: { increment: amount } },
    });
    if (updated.count !== 1) throw new Error('Credit amount exceeds the remaining invoice balance');

    return transaction.creditNote.create({
      data: {
        creditNumber: `CN-${new Date().getUTCFullYear()}-${randomUUID().slice(0, 8).toUpperCase()}`,
        customerId: invoice.customerId,
        invoiceId: invoice.id,
        amount,
        reason: reason.trim(),
        createdById,
      },
    });
  });
}

function dueDateForMonth(year: number, monthIndex: number, billingDay: number): Date {
  const lastDay = new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
  return new Date(Date.UTC(year, monthIndex, Math.min(billingDay, lastDay)));
}

export async function runBillingCycle(period: string, requestedByUserId: string) {
  if (!validPeriod(period)) {
    throw new Error('Billing period must use YYYY-MM format');
  }

  const { start } = monthBounds(period);
  let run = await prisma.billingRun.findUnique({ where: { periodKey: period } });
  let isNewRun = false;

  if (!run) {
    try {
      run = await prisma.billingRun.create({
        data: { periodKey: period, requestedByUserId },
      });
      isNewRun = true;
    } catch (error) {
      if (!(error instanceof Prisma.PrismaClientKnownRequestError) || error.code !== 'P2002') throw error;
      run = await prisma.billingRun.findUnique({ where: { periodKey: period } });
    }
  }

  if (!run) throw new Error('Unable to initialize billing run');
  if (run.status === 'COMPLETED') return run;
  if (run.status === 'RUNNING' && !isNewRun && Date.now() - run.createdAt.getTime() < 10 * 60 * 1000) return run;

  await prisma.billingRun.update({
    where: { id: run.id },
    data: { status: 'RUNNING', completedAt: null },
  });

  const customersWithoutSubscription = await prisma.customer.findMany({
    where: {
      status: 'ACTIVE',
      planId: { not: null },
      subscriptions: { none: { status: 'ACTIVE' } },
    },
    select: { id: true, planId: true, since: true },
  });
  for (const customer of customersWithoutSubscription) {
    if (!customer.planId) continue;
    await prisma.subscription.upsert({
      where: {
        customerId_planId_startedAt: {
          customerId: customer.id,
          planId: customer.planId,
          startedAt: customer.since,
        },
      },
      create: {
        customerId: customer.id,
        planId: customer.planId,
        billingDay: customer.since.getUTCDate(),
        startedAt: customer.since,
        status: 'ACTIVE',
      },
      update: { status: 'ACTIVE' },
    });
  }

  const subscriptions = await prisma.subscription.findMany({
    where: { status: 'ACTIVE', startedAt: { lt: new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, 1)) } },
    include: { customer: { include: { plan: true } }, plan: true },
  });

  let createdCount = 0;
  let skippedCount = 0;
  let failureCount = 0;
  const [year, month] = period.split('-').map(Number);

  for (const subscription of subscriptions) {
    const existingItem = await prisma.billingRunItem.findUnique({
      where: { billingRunId_subscriptionId: { billingRunId: run.id, subscriptionId: subscription.id } },
    });
    if (existingItem?.status === 'CREATED' || existingItem?.status === 'SKIPPED') {
      if (existingItem.status === 'CREATED') createdCount += 1;
      else skippedCount += 1;
      continue;
    }

    if (subscription.customer.status !== 'ACTIVE' || !subscription.plan.cost || subscription.plan.cost <= 0) {
      await prisma.billingRunItem.upsert({
        where: { billingRunId_subscriptionId: { billingRunId: run.id, subscriptionId: subscription.id } },
        create: {
          billingRunId: run.id,
          subscriptionId: subscription.id,
          customerId: subscription.customerId,
          status: 'SKIPPED',
          error: 'Customer is not active or plan has no billable price',
        },
        update: { status: 'SKIPPED', error: 'Customer is not active or plan has no billable price' },
      });
      skippedCount += 1;
      continue;
    }

    const dueDate = dueDateForMonth(year, month - 1, subscription.billingDay);
    const invoiceNumber = `INV-${period.replace('-', '')}-${subscription.id.toUpperCase()}`;

    try {
      const invoice = await prisma.$transaction(async (transaction) => {
        const createdInvoice = await transaction.invoice.create({
          data: {
            customerId: subscription.customerId,
            planId: subscription.planId,
            invoiceNumber,
            email: subscription.customer.email,
            contact: '',
            amount: subscription.plan.cost!,
            dueDate,
            paymentMethod: null,
            status: 'PENDING',
            lineItems: {
              create: {
                description: `${subscription.plan.name} service for ${period}`,
                quantity: 1,
                unitAmount: subscription.plan.cost!,
                amount: subscription.plan.cost!,
              },
            },
          },
        });
        await transaction.payment.create({
          data: {
            customerId: subscription.customerId,
            invoiceId: createdInvoice.id,
            period,
            amount: subscription.plan.cost!,
            due: dueDate,
            method: null,
            status: 'PENDING',
          },
        });
        await transaction.billingRunItem.upsert({
          where: { billingRunId_subscriptionId: { billingRunId: run!.id, subscriptionId: subscription.id } },
          create: {
            billingRunId: run!.id,
            subscriptionId: subscription.id,
            customerId: subscription.customerId,
            invoiceId: createdInvoice.id,
            status: 'CREATED',
          },
          update: { invoiceId: createdInvoice.id, status: 'CREATED', error: null },
        });
        return createdInvoice;
      });
      createdCount += 1;
      void invoice;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        await prisma.billingRunItem.upsert({
          where: { billingRunId_subscriptionId: { billingRunId: run.id, subscriptionId: subscription.id } },
          create: {
            billingRunId: run.id,
            subscriptionId: subscription.id,
            customerId: subscription.customerId,
            status: 'SKIPPED',
            error: 'Invoice already exists for this billing period',
          },
          update: { status: 'SKIPPED', error: 'Invoice already exists for this billing period' },
        });
        skippedCount += 1;
      } else {
        await prisma.billingRunItem.upsert({
          where: { billingRunId_subscriptionId: { billingRunId: run.id, subscriptionId: subscription.id } },
          create: {
            billingRunId: run.id,
            subscriptionId: subscription.id,
            customerId: subscription.customerId,
            status: 'FAILED',
            error: 'Invoice creation failed',
          },
          update: { status: 'FAILED', error: 'Invoice creation failed' },
        });
        failureCount += 1;
      }
    }
  }

  return prisma.billingRun.update({
    where: { id: run.id },
    data: {
      status: failureCount > 0 ? 'FAILED' : 'COMPLETED',
      completedAt: new Date(),
      createdCount,
      skippedCount,
      failureCount,
    },
  });
}
