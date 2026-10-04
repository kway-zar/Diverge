import type { NextFunction, Request, Response } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err);

  res.status(500).json({
    message: 'Internal server error',
    error: err.message,
  });
}

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    message: `Route not found: ${req.originalUrl}`,
  });
}
