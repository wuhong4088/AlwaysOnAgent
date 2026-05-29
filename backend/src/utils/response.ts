import { Response } from 'express';

/** Sends a standardised success response. */
export const sendSuccess = (res: Response, data: unknown, statusCode = 200): void => {
  res.status(statusCode).json({ success: true, data });
};

/** Sends a standardised error response. */
export const sendError = (res: Response, message: string, statusCode = 500): void => {
  res.status(statusCode).json({ success: false, error: message });
};
