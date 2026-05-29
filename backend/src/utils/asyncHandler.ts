import { Request, Response, NextFunction } from 'express';

/** Wraps an async route handler to eliminate repetitive try/catch boilerplate. */
export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch(next);
};
