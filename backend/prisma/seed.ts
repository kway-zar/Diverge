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
      name: 'Guiller Santos',
      email: 'guiller.santos@example.com',
      type: 'COMMERCIAL',
      planId: businessPlan?.id,
      usage: '10000 MB',
      balance: '2500',
      status: 'PENDING',
      area: 'Manila',
      since: new Date('2023-03-20T00:00:00.000Z'),
    },
    {
      name: 'Vanna Mae',
      email: 'vanna.mae@example.com',
      type: 'GOVERNMENT',
      planId: governmentPlan?.id,
      usage: '5000 MB',
      balance: '1000',
      status: 'SUSPENDED',
      area: 'Cebu',
      since: new Date('2023-01-15T00:00:00.000Z'),
    },
  ];

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

  console.log('Sample plans and customers created successfully.');
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });