import { Router } from 'express';

import { requireAuth, requireRole } from '../middleware/authMiddleware.js';
import { prisma } from '../db/prisma.js';

export const customerPlanRouter = Router();
export const adminPlanRouter = Router();

customerPlanRouter.use(requireAuth, requireRole(['CUSTOMER']));
customerPlanRouter.get('/offerings', async (_req, res, next) => {
  try {
    const plans = await prisma.plan.findMany({ where: { status: 'ACTIVE' }, orderBy: { cost: 'asc' } });
    res.json({ data: plans });
  } catch (error) {
    next(error);
  }
});

customerPlanRouter.get('/requests', async (req, res, next) => {
  try {
    const customer = await prisma.customer.findFirst({ where: { userId: req.user!.userId } });
    if (!customer) {
      res.status(404).json({ message: 'Customer account not found' });
      return;
    }
    const requests = await prisma.upgradeRequest.findMany({
      where: { customerId: customer.id },
      include: { initialPlan: true, finalPlan: true },
      orderBy: { requestedAt: 'desc' },
    });
    res.json({ data: requests });
  } catch (error) {
    next(error);
  }
});

customerPlanRouter.post('/requests', async (req, res, next) => {
  try {
    const finalPlanId = req.body?.planId;
    if (typeof finalPlanId !== 'string' || !/^[0-9a-fA-F]{24}$/.test(finalPlanId)) {
      res.status(400).json({ message: 'A valid plan ID is required' });
      return;
    }
    const customer = await prisma.customer.findFirst({ where: { userId: req.user!.userId } });
    if (!customer) {
      res.status(404).json({ message: 'Customer account not found' });
      return;
    }
    const plan = await prisma.plan.findFirst({ where: { id: finalPlanId, status: 'ACTIVE' } });
    if (!plan) {
      res.status(404).json({ message: 'Active plan not found' });
      return;
    }
    if (customer.planId === plan.id) {
      res.status(409).json({ message: 'This is already your current plan' });
      return;
    }
    const pendingRequest = await prisma.upgradeRequest.findFirst({
      where: { customerId: customer.id, status: 'PENDING' },
    });
    if (pendingRequest) {
      res.status(409).json({ message: 'You already have a pending plan change request' });
      return;
    }

    const request = await prisma.upgradeRequest.create({
      data: {
        customerId: customer.id,
        initialPlanId: customer.planId,
        finalPlanId: plan.id,
        status: 'PENDING',
      },
      include: { initialPlan: true, finalPlan: true },
    });
    res.status(201).json({ data: request, message: 'Plan change request submitted' });
  } catch (error) {
    next(error);
  }
});

adminPlanRouter.use(requireAuth, requireRole(['ADMIN']));
adminPlanRouter.get('/', async (_req, res, next) => {
  try {
    const plans = await prisma.plan.findMany({
      include: { _count: { select: { customers: true, subscriptions: true } } },
      orderBy: { cost: 'asc' },
    });
    res.json({ data: plans });
  } catch (error) {
    next(error);
  }
});

adminPlanRouter.post('/', async (req, res, next) => {
  try {
    const { name, type, speed, costCents } = req.body ?? {};
    if (typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 80 || typeof type !== 'string' || type.trim().length < 2 || type.trim().length > 40 || typeof speed !== 'string' || speed.trim().length < 2 || speed.trim().length > 80 || !Number.isSafeInteger(costCents) || costCents <= 0) {
      res.status(400).json({ message: 'Name, type, speed, and positive costCents are required' });
      return;
    }
    const plan = await prisma.plan.create({
      data: { name: name.trim(), type: type.trim(), speed: speed.trim(), cost: costCents, status: 'ACTIVE' },
    });
    res.status(201).json({ data: plan, message: 'Plan offering created' });
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'P2002') {
      res.status(409).json({ message: 'A plan with that name already exists' });
      return;
    }
    next(error);
  }
});

adminPlanRouter.patch('/:planId/status', async (req, res, next) => {
  try {
    const planId = Array.isArray(req.params.planId) ? req.params.planId[0] : req.params.planId;
    const status = req.body?.status;
    if (status !== 'ACTIVE' && status !== 'INACTIVE') {
      res.status(400).json({ message: 'Status must be ACTIVE or INACTIVE' });
      return;
    }
    const plan = await prisma.plan.update({ where: { id: planId }, data: { status } });
    res.json({ data: plan, message: 'Plan status updated' });
  } catch (error) {
    next(error);
  }
});

adminPlanRouter.get('/requests', async (_req, res, next) => {
  try {
    const requests = await prisma.upgradeRequest.findMany({
      include: { customer: true, initialPlan: true, finalPlan: true },
      orderBy: { requestedAt: 'asc' },
    });
    res.json({ data: requests });
  } catch (error) {
    next(error);
  }
});

adminPlanRouter.patch('/requests/:requestId', async (req, res, next) => {
  try {
    const requestId = Array.isArray(req.params.requestId) ? req.params.requestId[0] : req.params.requestId;
    const status = req.body?.status;
    if (status !== 'APPROVED' && status !== 'ON_HOLD') {
      res.status(400).json({ message: 'Status must be APPROVED or ON_HOLD' });
      return;
    }

    const request = await prisma.upgradeRequest.findUnique({
      where: { id: requestId },
      include: { customer: true, finalPlan: true },
    });
    if (!request) {
      res.status(404).json({ message: 'Plan change request not found' });
      return;
    }
    if (request.status !== 'PENDING') {
      res.status(409).json({ message: 'Only pending plan change requests can be reviewed' });
      return;
    }
    if (status === 'ON_HOLD') {
      const updatedRequest = await prisma.upgradeRequest.update({ where: { id: request.id }, data: { status } });
      res.json({ data: updatedRequest, message: 'Plan change request put on hold' });
      return;
    }
    if (!request.finalPlan || request.finalPlan.status !== 'ACTIVE') {
      res.status(409).json({ message: 'Requested plan is no longer active' });
      return;
    }

    const result = await prisma.$transaction(async (transaction) => {
      await transaction.upgradeRequest.update({ where: { id: request.id }, data: { status: 'APPROVED' } });
      await transaction.customer.update({ where: { id: request.customerId }, data: { planId: request.finalPlanId } });
      const subscription = await transaction.subscription.findFirst({
        where: { customerId: request.customerId, status: 'ACTIVE' },
      });
      if (subscription && request.finalPlanId) {
        await transaction.subscription.update({ where: { id: subscription.id }, data: { planId: request.finalPlanId } });
      } else if (request.finalPlanId) {
        await transaction.subscription.create({
          data: {
            customerId: request.customerId,
            planId: request.finalPlanId,
            billingDay: new Date().getUTCDate(),
            status: 'ACTIVE',
          },
        });
      }
      return transaction.upgradeRequest.findUniqueOrThrow({
        where: { id: request.id },
        include: { customer: true, initialPlan: true, finalPlan: true },
      });
    });
    res.json({ data: result, message: 'Plan change approved and subscription updated' });
  } catch (error) {
    next(error);
  }
});
