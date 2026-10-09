// for dummy and initial sample data

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const plans = [
    {
      name: 'Fiber 200',
      type: 'Residential',
      speed: '200 Mbps',
      cost: 99900,
      status: 'ACTIVE',
    },
    {
      name: 'Business Pro',
      type: 'Business',
      speed: '500 Mbps',
      cost: 249900,
      status: 'ACTIVE',
    },
    {
      name: 'Government Plus',
      type: 'Government',
      speed: '1 Gbps',
      cost: 499900,
      status: 'ACTIVE',
    },
  ] as const;

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { name: plan.name },
      update: {},
      create: plan,
    });
  }

  const fiberPlan = await prisma.plan.findUnique({ where: { name: 'Fiber 200' } });
  const businessPlan = await prisma.plan.findUnique({ where: { name: 'Business Pro' } });
  const governmentPlan = await prisma.plan.findUnique({ where: { name: 'Government Plus' } });

  const customerData: Array<{
    name: string;
    email: string;
    type: 'RESIDENTIAL' | 'BUSINESS' | 'GOVERNMENT' | 'COMMERCIAL';
    planId?: string | null;
    usage: string;
    balance: string;
    status: 'ACTIVE' | 'INACTIVE' | 'PENDING' | 'SUSPENDED';
    area: string;
    since: Date;
  }> = [
    {
      name: 'Jonathan Landoy',
      email: 'jonathan@example.com',
      type: 'RESIDENTIAL',
      planId: fiberPlan?.id,
      usage: '5000 MB',
      balance: '1000',
      status: 'ACTIVE',
      area: 'Rizal',
      since: new Date('2023-01-15T00:00:00.000Z'),
    },
    {
      name: 'Guiller DelaCruz',
      email: 'guiller.delaCruz@example.com',
      type: 'COMMERCIAL',
      planId: businessPlan?.id,
      usage: '10000 MB',
      balance: '2500',
      status: 'PENDING',
      area: 'Manila',
      since: new Date('2023-03-20T00:00:00.000Z'),
    },
    {
      name: 'Vanna Banana',
      email: 'vanna.banana@example.com',
      type: 'GOVERNMENT',
      planId: governmentPlan?.id,
      usage: '5000 MB',
      balance: '1000',
      status: 'SUSPENDED',
      area: 'Cebu',
      since: new Date('2023-01-15T00:00:00.000Z'),
    },
  ];

  const adminData = {
    name: 'Diverge Admin',
    email: 'admin@diverge.com',
  };

  const technicianData: {
    name: string;
    email: string;
    location: string;
    phone: string;
    status: 'ON_SITE' | 'TRAVELING' | 'AVAILABLE' | 'OFF_DUTY' | 'UNAVAILABLE';
    rating: number;
  } = {
    name: 'Christian Devera',
    email: 'deveratech@diverge.com',
    location: 'Rizal',
    phone: '+639171234567',
    status: 'AVAILABLE',
    rating: 4.8,
  };

  for (const customer of customerData) {
    const existingUser = await prisma.user.findUnique({ where: { email: customer.email } });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          email: customer.email,
          password: 'seed-password',
          role: 'CUSTOMER',
          customer: {
            create: {
              accountId: `ACC-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
              name: customer.name,
              email: customer.email,
              type: customer.type,
              planId: customer.planId ?? null,
              usage: customer.usage,
              balance: customer.balance,
              status: customer.status,
              area: customer.area,
              since: customer.since,
            },
          },
        },
      });
    }
  }

  const existingAdminUser = await prisma.user.findUnique({ where: { email: adminData.email } });
  if (!existingAdminUser) {
    await prisma.user.create({
      data: {
        email: adminData.email,
        password: 'seed-password',
        role: 'ADMIN',
        admin: {
          create: {
            name: adminData.name,
          },
        },
      },
    });
  }

  const existingTechnicianUser = await prisma.user.findUnique({ where: { email: technicianData.email } });
  if (!existingTechnicianUser) {
    await prisma.user.create({
      data: {
        email: technicianData.email,
        password: 'seed-password',
        role: 'TECHNICIAN',
        technician: {
          create: {
            name: technicianData.name,
            location: technicianData.location,
            phone: technicianData.phone,
            status: technicianData.status,
            rating: technicianData.rating,
          },
        },
      },
    });
  }

  const seededCustomers = await prisma.customer.findMany({
    include: {
      plan: true,
    },
  });

  const invoiceTemplates = [
    {
      customerEmail: 'jonathan@example.com',
      invoiceNumber: 'INV-2026-09-001',
      amount: 99900,
      dueDate: new Date('2026-09-24T00:00:00.000Z'),
      paymentMethod: 'GCASH',
      status: 'PENDING',
      period: 'September 2026',
      paymentStatus: 'PENDING',
      paymentMethodLabel: 'Gcash',
    },
    {
      customerEmail: 'jonathan@example.com',
      invoiceNumber: 'INV-2026-08-001',
      amount: 99900,
      dueDate: new Date('2026-08-24T00:00:00.000Z'),
      paymentMethod: 'MAYA',
      status: 'PAID',
      period: 'August 2026',
      paymentStatus: 'PAID',
      paymentMethodLabel: 'Maya',
    },
    {
      customerEmail: 'jonathan@example.com',
      invoiceNumber: 'INV-2026-07-001',
      amount: 99900,
      dueDate: new Date('2026-07-24T00:00:00.000Z'),
      paymentMethod: 'BANK_TRANSFER',
      status: 'PAID',
      period: 'July 2026',
      paymentStatus: 'PAID',
      paymentMethodLabel: 'Bank Transfer',
    },
    {
      customerEmail: 'guiller.delaCruz@example.com',
      invoiceNumber: 'INV-2026-09-002',
      amount: 249900,
      dueDate: new Date('2026-09-30T00:00:00.000Z'),
      paymentMethod: 'GCASH',
      status: 'PAID',
      period: 'September 2026',
      paymentStatus: 'PAID',
      paymentMethodLabel: 'Gcash',
    },
    {
      customerEmail: 'guiller.delaCruz@example.com',
      invoiceNumber: 'INV-2026-08-002',
      amount: 249900,
      dueDate: new Date('2026-08-30T00:00:00.000Z'),
      paymentMethod: 'BANK_TRANSFER',
      status: 'PAID',
      period: 'August 2026',
      paymentStatus: 'PAID',
      paymentMethodLabel: 'Bank Transfer',
    },
    {
      customerEmail: 'guiller.delaCruz@example.com',
      invoiceNumber: 'INV-2026-07-002',
      amount: 249900,
      dueDate: new Date('2026-07-30T00:00:00.000Z'),
      paymentMethod: 'MAYA',
      status: 'OVERDUE',
      period: 'July 2026',
      paymentStatus: 'PENDING',
      paymentMethodLabel: 'Maya',
    },
    {
      customerEmail: 'vanna.banana@example.com',
      invoiceNumber: 'INV-2026-08-001',
      amount: 499900,
      dueDate: new Date('2026-08-30T00:00:00.000Z'),
      paymentMethod: 'BANK_TRANSFER',
      status: 'PAID',
      period: 'August 2026',
      paymentStatus: 'PAID',
      paymentMethodLabel: 'Bank Transfer',
    },
    {
      customerEmail: 'vanna.banana@example.com',
      invoiceNumber: 'INV-2026-07-001',
      amount: 499900,
      dueDate: new Date('2026-07-30T00:00:00.000Z'),
      paymentMethod: 'GCASH',
      status: 'PAID',
      period: 'July 2026',
      paymentStatus: 'PAID',
      paymentMethodLabel: 'Gcash',
    },
    {
      customerEmail: 'vanna.banana@example.com',
      invoiceNumber: 'INV-2026-06-001',
      amount: 499900,
      dueDate: new Date('2026-06-30T00:00:00.000Z'),
      paymentMethod: 'BANK_TRANSFER',
      status: 'OVERDUE',
      period: 'June 2026',
      paymentStatus: 'PENDING',
      paymentMethodLabel: 'Bank Transfer',
    },
  ] as const;

  for (const invoiceTemplate of invoiceTemplates) {
    const customer = seededCustomers.find((entry) => entry.email === invoiceTemplate.customerEmail);

    if (!customer) continue;

    const existingInvoice = await prisma.invoice.findUnique({
      where: { invoiceNumber: invoiceTemplate.invoiceNumber },
    });

    if (!existingInvoice) {
      const createdInvoice = await prisma.invoice.create({
        data: {
          customerId: customer.id,
          planId: customer.planId ?? undefined,
          invoiceNumber: invoiceTemplate.invoiceNumber,
          email: customer.email,
          contact: '+639123456789',
          amount: invoiceTemplate.amount,
          dueDate: invoiceTemplate.dueDate,
          paymentMethod: invoiceTemplate.paymentMethodLabel,
          status: invoiceTemplate.status,
        },
      });

      const invoicePayment = await prisma.payment.findFirst({
        where: {
          customerId: customer.id,
          invoiceId: createdInvoice.id,
          period: invoiceTemplate.period,
        },
      });

      if (!invoicePayment) {
        await prisma.payment.create({
          data: {
            customerId: customer.id,
            invoiceId: createdInvoice.id,
            period: invoiceTemplate.period,
            amount: invoiceTemplate.amount,
            due: invoiceTemplate.dueDate,
            method: invoiceTemplate.paymentMethodLabel,
            status: invoiceTemplate.paymentStatus,
          },
        });
      }
    }
  }

  console.log('Sample plans, customers, admin, technician, invoices, and payments created successfully.');
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });