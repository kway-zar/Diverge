import { Router } from 'express';
import { randomUUID } from 'node:crypto';

import { requireAuth, requireRole } from '../middleware/authMiddleware.js';
import { prisma } from '../db/prisma.js';

export const customerTicketRouter = Router();
export const adminTicketRouter = Router();
export const technicianRouter = Router();

function toTicketResponse(ticket: {
  id: string;
  ticketNumber: string;
  issue: string;
  category: string;
  priority: string;
  status: string;
  sla: string | null;
  escalatedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
  customer: { id: string; name: string };
  assignedTo?: { id: string; name: string } | null;
  technicianReview?: { id: string } | null;
}) {
  return {
    id: ticket.id,
    ticketID: ticket.ticketNumber,
    customerId: ticket.customer.id,
    subscriber: ticket.customer.name,
    issue: ticket.issue,
    category: ticket.category,
    priority: ticket.priority[0] + ticket.priority.slice(1).toLowerCase(),
    assignedTo: ticket.assignedTo?.name ?? 'Unassigned',
    assignedTechnicianId: ticket.assignedTo?.id,
    status: ticket.status === 'IN_PROGRESS' ? 'In Progress' : ticket.status[0] + ticket.status.slice(1).toLowerCase(),
    SLA: ticket.escalatedAt ? 'Escalated' : ticket.status !== 'RESOLVED' && Date.now() - ticket.createdAt.getTime() > 60 * 60 * 1000 ? 'Breached' : ticket.sla ?? '2 business hours',
    isEscalated: Boolean(ticket.escalatedAt),
    created: ticket.createdAt.toISOString(),
    updated: ticket.updatedAt.toISOString(),
    hasEvaluation: Boolean(ticket.technicianReview),
  };
}

customerTicketRouter.use(requireAuth, requireRole(['CUSTOMER']));
customerTicketRouter.get('/', async (req, res, next) => {
  try {
    const customer = await prisma.customer.findFirst({ where: { userId: req.user!.userId } });
    if (!customer) {
      res.status(404).json({ message: 'Customer account not found' });
      return;
    }
    const tickets = await prisma.ticket.findMany({
      where: { customerId: customer.id },
      include: { customer: true, assignedTo: true, technicianReview: { select: { id: true } } },
      orderBy: { updatedAt: 'desc' },
    });
    res.json({ data: tickets.map(toTicketResponse) });
  } catch (error) {
    next(error);
  }
});

customerTicketRouter.post('/:ticketId/review', async (req, res, next) => {
  try {
    const ticketId = Array.isArray(req.params.ticketId) ? req.params.ticketId[0] : req.params.ticketId;
    const rating = req.body?.rating;
    const comment = typeof req.body?.comment === 'string' ? req.body.comment.trim() : '';
    if (!Number.isInteger(rating) || rating < 1 || rating > 5 || comment.length < 5 || comment.length > 1000) {
      res.status(400).json({ message: 'Provide a rating from 1-5 and a 5-1000 character comment' });
      return;
    }

    const customer = await prisma.customer.findFirst({ where: { userId: req.user!.userId } });
    if (!customer) {
      res.status(404).json({ message: 'Customer account not found' });
      return;
    }
    const ticket = await prisma.ticket.findFirst({
      where: { id: ticketId, customerId: customer.id },
      include: { assignedTo: true, technicianReview: true },
    });
    if (!ticket) {
      res.status(404).json({ message: 'Ticket not found' });
      return;
    }
    if (ticket.status !== 'RESOLVED' || !ticket.assignedToId || !ticket.assignedTo) {
      res.status(409).json({ message: 'A technician can be evaluated after the assigned ticket is resolved' });
      return;
    }
    if (ticket.technicianReview) {
      res.status(409).json({ message: 'This ticket already has an evaluation' });
      return;
    }

    const review = await prisma.$transaction(async (transaction) => {
      const created = await transaction.technicianReview.create({
        data: {
          technicianId: ticket.assignedToId!,
          customerId: customer.id,
          ticketId: ticket.id,
          reviewer: customer.name,
          rating,
          date: new Date(),
          comment,
        },
      });
      const reviews = await transaction.technicianReview.findMany({
        where: { technicianId: ticket.assignedToId! },
        select: { rating: true },
      });
      const average = reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;
      await transaction.technician.update({
        where: { id: ticket.assignedToId! },
        data: { rating: average },
      });
      return created;
    });
    res.status(201).json({ data: review, message: 'Technician evaluation submitted' });
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'P2002') {
      res.status(409).json({ message: 'This ticket already has an evaluation' });
      return;
    }
    next(error);
  }
});

customerTicketRouter.post('/', async (req, res, next) => {
  try {
    const issue = typeof req.body?.issue === 'string' ? req.body.issue.trim() : '';
    const description = typeof req.body?.description === 'string' ? req.body.description.trim() : '';
    const category = typeof req.body?.category === 'string' ? req.body.category.trim() : '';
    if (issue.length < 4 || issue.length > 120 || description.length < 10 || description.length > 2000 || category.length < 2 || category.length > 80) {
      res.status(400).json({ message: 'Issue, category, and a 10-2000 character description are required' });
      return;
    }

    const customer = await prisma.customer.findFirst({ where: { userId: req.user!.userId } });
    if (!customer) {
      res.status(404).json({ message: 'Customer account not found' });
      return;
    }

    const ticket = await prisma.ticket.create({
      data: {
        customerId: customer.id,
        ticketNumber: `TKT-${new Date().getUTCFullYear()}-${randomUUID().slice(0, 8).toUpperCase()}`,
        issue,
        description,
        category,
        priority: 'MEDIUM',
        status: 'OPEN',
        sla: '2 business hours',
      },
      include: { customer: true, assignedTo: true },
    });
    res.status(201).json({ data: toTicketResponse(ticket), message: 'Support ticket created' });
  } catch (error) {
    next(error);
  }
});

adminTicketRouter.use(requireAuth, requireRole(['ADMIN']));
adminTicketRouter.get('/', async (_req, res, next) => {
  try {
    const tickets = await prisma.ticket.findMany({
      include: { customer: true, assignedTo: true },
      orderBy: { updatedAt: 'desc' },
    });
    res.json({ data: tickets.map(toTicketResponse) });
  } catch (error) {
    next(error);
  }
});

adminTicketRouter.get('/technicians', async (_req, res, next) => {
  try {
    const technicians = await prisma.technician.findMany({
      where: { status: 'AVAILABLE' },
      select: { id: true, name: true, location: true, status: true, queueCount: true },
      orderBy: { name: 'asc' },
    });
    res.json({ data: technicians });
  } catch (error) {
    next(error);
  }
});

adminTicketRouter.post('/', async (req, res, next) => {
  try {
    const accountId = typeof req.body?.accountId === 'string' ? req.body.accountId.trim() : '';
    const issue = typeof req.body?.issue === 'string' ? req.body.issue.trim() : '';
    const description = typeof req.body?.description === 'string' ? req.body.description.trim() : '';
    const category = typeof req.body?.category === 'string' ? req.body.category.trim() : '';
    if (!accountId || issue.length < 4 || issue.length > 120 || description.length < 10 || description.length > 2000 || category.length < 2 || category.length > 80) {
      res.status(400).json({ message: 'A customer account ID, issue, category, and valid description are required' });
      return;
    }
    const customer = await prisma.customer.findUnique({ where: { accountId } });
    if (!customer) {
      res.status(404).json({ message: 'Customer account not found' });
      return;
    }
    const ticket = await prisma.ticket.create({
      data: {
        customerId: customer.id,
        ticketNumber: `TKT-${new Date().getUTCFullYear()}-${randomUUID().slice(0, 8).toUpperCase()}`,
        issue,
        description,
        category,
        priority: 'MEDIUM',
        status: 'OPEN',
        sla: '2 business hours',
      },
      include: { customer: true, assignedTo: true },
    });
    res.status(201).json({ data: toTicketResponse(ticket), message: 'Support ticket created' });
  } catch (error) {
    next(error);
  }
});

adminTicketRouter.post('/auto-assign', async (_req, res, next) => {
  try {
    const [openTickets, technicians] = await Promise.all([
      prisma.ticket.findMany({
        where: { status: 'OPEN', assignedToId: null },
        include: { customer: true },
        orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }],
      }),
      prisma.technician.findMany({
        where: { status: 'AVAILABLE' },
        orderBy: [{ queueCount: 'asc' }, { rating: 'desc' }],
      }),
    ]);
    const workload = new Map(technicians.map((technician) => [technician.id, technician.queueCount]));
    const assigned: Array<{ ticketNumber: string; technician: string }> = [];

    for (const ticket of openTickets) {
      const area = ticket.customer.area?.toLowerCase();
      const orderedTechnicians = [...technicians].sort((left, right) => {
        const leftArea = area && left.location.toLowerCase().includes(area) ? 0 : 1;
        const rightArea = area && right.location.toLowerCase().includes(area) ? 0 : 1;
        return leftArea - rightArea || (workload.get(left.id) ?? 0) - (workload.get(right.id) ?? 0) || right.rating - left.rating;
      });
      const technician = orderedTechnicians[0];
      if (!technician) break;

      await prisma.$transaction(async (transaction) => {
        await transaction.ticket.update({
          where: { id: ticket.id },
          data: { assignedToId: technician.id, status: 'IN_PROGRESS' },
        });
        await transaction.job.upsert({
          where: { ticketId: ticket.id },
          create: {
            ticketId: ticket.id,
            technicianId: technician.id,
            subscriber: ticket.customer.name,
            address: ticket.customer.area ?? 'Address not provided',
            phone: '',
            priority: ticket.priority,
            status: 'ASSIGNED',
            issue: ticket.issue,
          },
          update: { technicianId: technician.id, status: 'ASSIGNED' },
        });
        await transaction.technician.update({
          where: { id: technician.id },
          data: { queueCount: { increment: 1 } },
        });
      });
      workload.set(technician.id, (workload.get(technician.id) ?? 0) + 1);
      assigned.push({ ticketNumber: ticket.ticketNumber, technician: technician.name });
    }

    res.json({
      data: { assigned, assignedCount: assigned.length, unassignedCount: openTickets.length - assigned.length },
      message: `Assigned ${assigned.length} ticket${assigned.length === 1 ? '' : 's'}`,
    });
  } catch (error) {
    next(error);
  }
});

adminTicketRouter.post('/escalate-overdue', async (_req, res, next) => {
  try {
    const breachThreshold = new Date(Date.now() - 60 * 60 * 1000);
    const tickets = await prisma.ticket.findMany({
      where: {
        status: { in: ['OPEN', 'IN_PROGRESS', 'PENDING'] },
        createdAt: { lt: breachThreshold },
        escalatedAt: null,
      },
      select: { id: true, priority: true },
    });
    for (const ticket of tickets) {
      await prisma.$transaction(async (transaction) => {
        await transaction.ticket.update({
          where: { id: ticket.id },
          data: { priority: 'CRITICAL', escalatedAt: new Date(), sla: 'Escalated' },
        });
        await transaction.job.updateMany({
          where: { ticketId: ticket.id },
          data: { priority: 'CRITICAL' },
        });
      });
    }
    res.json({ data: { escalatedCount: tickets.length }, message: `Escalated ${tickets.length} overdue ticket${tickets.length === 1 ? '' : 's'}` });
  } catch (error) {
    next(error);
  }
});

adminTicketRouter.patch('/:ticketId/priority', async (req, res, next) => {
  try {
    const ticketId = Array.isArray(req.params.ticketId) ? req.params.ticketId[0] : req.params.ticketId;
    const priority = req.body?.priority;
    if (!['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'].includes(priority)) {
      res.status(400).json({ message: 'Priority must be LOW, MEDIUM, HIGH, or CRITICAL' });
      return;
    }
    const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });
    if (!ticket) {
      res.status(404).json({ message: 'Ticket not found' });
      return;
    }
    const updated = await prisma.$transaction(async (transaction) => {
      const nextTicket = await transaction.ticket.update({ where: { id: ticket.id }, data: { priority } });
      await transaction.job.updateMany({
        where: { ticketId: ticket.id },
        data: { priority },
      });
      return nextTicket;
    });
    res.json({ data: updated, message: 'Ticket priority updated' });
  } catch (error) {
    next(error);
  }
});

adminTicketRouter.post('/:ticketId/escalate', async (req, res, next) => {
  try {
    const ticketId = Array.isArray(req.params.ticketId) ? req.params.ticketId[0] : req.params.ticketId;
    const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });
    if (!ticket) {
      res.status(404).json({ message: 'Ticket not found' });
      return;
    }
    if (ticket.status === 'RESOLVED') {
      res.status(409).json({ message: 'Resolved tickets cannot be escalated' });
      return;
    }
    const updated = await prisma.$transaction(async (transaction) => {
      const nextTicket = await transaction.ticket.update({
        where: { id: ticket.id },
        data: { priority: 'CRITICAL', escalatedAt: new Date(), sla: 'Escalated' },
      });
      await transaction.job.updateMany({ where: { ticketId: ticket.id }, data: { priority: 'CRITICAL' } });
      return nextTicket;
    });
    res.json({ data: updated, message: 'Ticket escalated to critical priority' });
  } catch (error) {
    next(error);
  }
});

adminTicketRouter.post('/:ticketId/assign', async (req, res, next) => {
  try {
    const ticketId = Array.isArray(req.params.ticketId) ? req.params.ticketId[0] : req.params.ticketId;
    const technicianId = req.body?.technicianId;
    if (typeof technicianId !== 'string' || !/^[0-9a-fA-F]{24}$/.test(technicianId)) {
      res.status(400).json({ message: 'A valid technician ID is required' });
      return;
    }

    const [ticket, technician] = await Promise.all([
      prisma.ticket.findUnique({ where: { id: ticketId }, include: { customer: true } }),
      prisma.technician.findUnique({ where: { id: technicianId } }),
    ]);
    if (!ticket || !technician) {
      res.status(404).json({ message: 'Ticket or technician not found' });
      return;
    }
    if (technician.status !== 'AVAILABLE') {
      res.status(409).json({ message: 'Only available technicians can be assigned' });
      return;
    }
    if (ticket.status === 'RESOLVED') {
      res.status(409).json({ message: 'Resolved tickets cannot be assigned' });
      return;
    }

    const jobPriority = ticket.priority;
    const data = await prisma.$transaction(async (transaction) => {
      await transaction.ticket.update({
        where: { id: ticket.id },
        data: { assignedToId: technician.id, status: 'IN_PROGRESS' },
      });
      await transaction.job.upsert({
        where: { ticketId: ticket.id },
        create: {
          ticketId: ticket.id,
          technicianId: technician.id,
          subscriber: ticket.customer.name,
          address: ticket.customer.area ?? 'Address not provided',
          phone: '',
          priority: jobPriority,
          status: 'ASSIGNED',
          issue: ticket.issue,
        },
        update: { technicianId: technician.id, status: 'ASSIGNED', priority: jobPriority },
      });
      const queueCount = await transaction.job.count({
        where: { technicianId: technician.id, ticket: { status: { not: 'RESOLVED' } } },
      });
      await transaction.technician.update({
        where: { id: technician.id },
        data: { queueCount },
      });
      return transaction.ticket.findUniqueOrThrow({
        where: { id: ticket.id },
        include: { customer: true, assignedTo: true },
      });
    });
    res.json({ data: toTicketResponse(data), message: 'Ticket assigned' });
  } catch (error) {
    next(error);
  }
});

technicianRouter.use(requireAuth, requireRole(['TECHNICIAN']));
technicianRouter.patch('/status', async (req, res, next) => {
  try {
    const status = req.body?.status;
    if (status !== 'AVAILABLE' && status !== 'UNAVAILABLE' && status !== 'OFF_DUTY') {
      res.status(400).json({ message: 'Choose AVAILABLE, UNAVAILABLE, or OFF_DUTY' });
      return;
    }
    const technician = await prisma.technician.findUnique({ where: { userId: req.user!.userId } });
    if (!technician) {
      res.status(404).json({ message: 'Technician profile not found' });
      return;
    }
    const updated = await prisma.technician.update({ where: { id: technician.id }, data: { status } });
    res.json({ data: updated, message: `Availability set to ${status}` });
  } catch (error) {
    next(error);
  }
});

technicianRouter.get('/evaluation', async (req, res, next) => {
  try {
    const technician = await prisma.technician.findUnique({ where: { userId: req.user!.userId } });
    if (!technician) {
      res.status(404).json({ message: 'Technician profile not found' });
      return;
    }
    const [reviews, completedJobsCount] = await Promise.all([
      prisma.technicianReview.findMany({
        where: { technicianId: technician.id },
        orderBy: { date: 'desc' },
      }),
      prisma.job.count({ where: { technicianId: technician.id, ticket: { status: 'RESOLVED' } } }),
    ]);
    const breakdown = [5, 4, 3, 2, 1].map((stars) => ({
      stars,
      count: reviews.filter((review) => review.rating === stars).length,
    }));
    const averageRating = reviews.length
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;
    res.json({
      data: {
        averageRating,
        reviewCount: reviews.length,
        breakdown,
        completedJobsCount,
        reviews: reviews.map((review) => ({
          id: review.id,
          reviewer: review.reviewer,
          rating: review.rating,
          date: review.date.toISOString(),
          comment: review.comment,
        })),
      },
    });
  } catch (error) {
    next(error);
  }
});

technicianRouter.get('/jobs', async (req, res, next) => {
  try {
    const technician = await prisma.technician.findUnique({ where: { userId: req.user!.userId } });
    if (!technician) {
      res.status(404).json({ message: 'Technician profile not found' });
      return;
    }
    const jobs = await prisma.job.findMany({
      where: { technicianId: technician.id },
      include: { ticket: true },
      orderBy: { createdAt: 'asc' },
    });
    const serializedJobs = jobs.map((job) => ({
        id: job.id,
        ticketID: job.ticket.ticketNumber,
        subscriber: job.subscriber,
        address: job.address,
        phone: job.phone,
        priority: job.priority[0] + job.priority.slice(1).toLowerCase(),
        status: job.status === 'EN_ROUTE' ? 'En Route' : job.status === 'ON_SITE' ? 'On-Site' : 'Assigned',
        timeLeft: job.timeLeft ?? 'On schedule',
        issue: job.issue,
        accessNote: job.accessNote ?? 'No access notes provided',
        isCompleted: job.ticket.status === 'RESOLVED',
      }));
    res.json({
      technician: { name: technician.name, location: technician.location, status: technician.status },
      data: serializedJobs.filter((job) => !job.isCompleted),
      completed: serializedJobs.filter((job) => job.isCompleted),
    });
  } catch (error) {
    next(error);
  }
});

technicianRouter.patch('/jobs/:jobId/status', async (req, res, next) => {
  try {
    const jobId = Array.isArray(req.params.jobId) ? req.params.jobId[0] : req.params.jobId;
    const nextStatus = req.body?.status;
    if (nextStatus !== 'ASSIGNED' && nextStatus !== 'EN_ROUTE' && nextStatus !== 'ON_SITE') {
      res.status(400).json({ message: 'Status must be ASSIGNED, EN_ROUTE, or ON_SITE' });
      return;
    }
    const technician = await prisma.technician.findUnique({ where: { userId: req.user!.userId } });
    const job = technician ? await prisma.job.findFirst({ where: { id: jobId, technicianId: technician.id } }) : null;
    if (!job) {
      res.status(404).json({ message: 'Assigned job not found' });
      return;
    }
    const result = await prisma.$transaction(async (transaction) => {
      const updated = await transaction.job.updateMany({
        where: { id: job.id, technicianId: technician!.id, status: job.status },
        data: { status: nextStatus },
      });
      if (updated.count !== 1) return false;
      await transaction.technician.update({
        where: { id: technician!.id },
        data: { status: nextStatus === 'EN_ROUTE' ? 'TRAVELING' : nextStatus === 'ON_SITE' ? 'ON_SITE' : 'AVAILABLE' },
      });
      return true;
    });
    if (!result) {
      res.status(409).json({ message: 'Job status changed; refresh and try again' });
      return;
    }
    res.json({ message: 'Job status updated' });
  } catch (error) {
    next(error);
  }
});

technicianRouter.post('/jobs/:jobId/field-reports', async (req, res, next) => {
  try {
    const jobId = Array.isArray(req.params.jobId) ? req.params.jobId[0] : req.params.jobId;
    const { description, timeOnSite, parts = '', outcome } = req.body ?? {};
    if (typeof description !== 'string' || description.trim().length < 10 || typeof timeOnSite !== 'string' || timeOnSite.trim().length < 2 || !['FULLY_RESOLVED', 'PARTIALLY_SOLVED', 'NEEDS_FOLLOW_UP', 'CANNOT_COMPLETE'].includes(outcome)) {
      res.status(400).json({ message: 'Valid resolution, time on site, and outcome are required' });
      return;
    }
    const technician = await prisma.technician.findUnique({ where: { userId: req.user!.userId } });
    const job = technician ? await prisma.job.findFirst({ where: { id: jobId, technicianId: technician.id }, include: { ticket: true } }) : null;
    if (!job) {
      res.status(404).json({ message: 'Assigned job not found' });
      return;
    }

    const resolved = outcome === 'FULLY_RESOLVED';
    const result = await prisma.$transaction(async (transaction) => {
      const report = await transaction.technicianFieldReport.create({
        data: {
          technicianId: technician!.id,
          ticketId: job.ticketId,
          date: new Date(),
          status: outcome,
          description: description.trim(),
          timeOnSite: timeOnSite.trim(),
          parts: typeof parts === 'string' ? parts.trim() : '',
        },
      });
      await transaction.ticket.update({
        where: { id: job.ticketId },
        data: { status: resolved ? 'RESOLVED' : 'PENDING' },
      });
      if (resolved) {
        const queueCount = await transaction.job.count({
          where: { technicianId: technician!.id, ticket: { status: { not: 'RESOLVED' } } },
        });
        await transaction.technician.update({
          where: { id: technician!.id },
          data: { completedJobsCount: { increment: 1 }, queueCount, status: queueCount === 0 ? 'AVAILABLE' : 'ON_SITE' },
        });
      }
      return report;
    });
    res.status(201).json({ data: result, message: 'Field report submitted' });
  } catch (error) {
    next(error);
  }
});
