import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export const signToken = (payload: object): string => {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: '7d' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, env.jwtSecret);
};
