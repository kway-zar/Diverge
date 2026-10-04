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

  const customerData = [
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

  const technicianData = {
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

  console.log('Sample plans, customers, admin, and technician created successfully.');
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });