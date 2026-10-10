import { Router } from 'express';

import { requireAuth, requireRole } from '../middleware/authMiddleware.js';
import { prisma } from '../db/prisma.js';

export const technicianAdminRouter = Router();
technicianAdminRouter.use(requireAuth, requireRole(['ADMIN']));

function displayStatus(status: string) {
  switch (status) {
    case 'ON_SITE': return 'On-Site';
    case 'TRAVELING': return 'Traveling';
    case 'OFF_DUTY': return 'Off-Duty';
    case 'UNAVAILABLE': return 'Unavailable';
    default: return 'Available';
  }
}

technicianAdminRouter.get('/', async (_req, res, next) => {
  try {
    const technicians = await prisma.technician.findMany({
      include: {
        fieldReports: { include: { ticket: true }, orderBy: { date: 'desc' } },
        reviews: { orderBy: { date: 'desc' } },
        metrics: true,
        jobs: { include: { ticket: true }, orderBy: { createdAt: 'asc' } },
      },
      orderBy: { name: 'asc' },
    });
    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);

    res.json({ data: technicians.map((technician) => {
      const currentJobs = technician.jobs.filter((job) => job.ticket.status !== 'RESOLVED');
      const reviews = technician.reviews;
      const rating = reviews.length
        ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
        : technician.rating;
      const completedThisMonth = technician.fieldReports.filter((report) => report.date >= monthStart).length;
      return {
        id: technician.id,
        userId: technician.userId,
        name: technician.name,
        location: technician.location,
        rating,
        phoneNo: technician.phone,
        status: displayStatus(technician.status),
        currentJob: currentJobs[0]?.ticket.ticketNumber ?? 'Unassigned',
        completed: technician.completedJobsCount,
        queue: currentJobs.length,
        overview: {
          jobsCompleted: technician.completedJobsCount,
          thisMonth: completedThisMonth,
          avgResolution: 0,
          joined: technician.createdAt.toISOString(),
        },
        metrics: technician.metrics.map((metric) => ({
          id: metric.id,
          label: metric.label,
          benchmark: metric.benchmark,
          score: metric.score,
        })),
        fieldReports: technician.fieldReports.map((report) => ({
          id: report.id,
          ticketId: report.ticket.ticketNumber,
          engineerId: technician.id,
          date: report.date.toISOString(),
          status: report.status,
          description: report.description,
          timeOnSite: report.timeOnSite,
          parts: report.parts ?? '',
        })),
        reviews: reviews.map((review) => ({
          id: review.id,
          reviewer: review.reviewer,
          rating: review.rating,
          date: review.date.toISOString(),
          comment: review.comment,
        })),
      };
    }) });
  } catch (error) {
    next(error);
  }
});

technicianAdminRouter.patch('/:technicianId/status', async (req, res, next) => {
  try {
    const technicianId = Array.isArray(req.params.technicianId) ? req.params.technicianId[0] : req.params.technicianId;
    const statusMap: Record<string, 'AVAILABLE' | 'ON_SITE' | 'TRAVELING' | 'OFF_DUTY' | 'UNAVAILABLE'> = {
      Available: 'AVAILABLE',
      'On-Site': 'ON_SITE',
      Traveling: 'TRAVELING',
      'Off-Duty': 'OFF_DUTY',
      Unavailable: 'UNAVAILABLE',
    };
    const status = typeof req.body?.status === 'string' ? statusMap[req.body.status] : undefined;
    if (!status) {
      res.status(400).json({ message: 'A valid technician status is required' });
      return;
    }
    const technician = await prisma.technician.update({ where: { id: technicianId }, data: { status } });
    res.json({ data: technician, message: 'Technician status updated' });
  } catch (error) {
    next(error);
  }
});
