import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess, sendError } from '../utils/response';
import { AuthService } from '../services/authService';

const router = Router();
const authService = new AuthService();

/** POST /auth/register */
router.post('/register', asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return sendError(res, 'email and password are required', 400);

  try {
    const result = await authService.register({ email, password });
    sendSuccess(res, result, 201);
  } catch (err: any) {
    sendError(res, err.message, 409);
  }
}));

/** POST /auth/login */
router.post('/login', asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return sendError(res, 'email and password are required', 400);

  try {
    const result = await authService.login({ email, password });
    sendSuccess(res, result);
  } catch (err: any) {
    sendError(res, err.message, 401);
  }
}));

/** GET /auth/profile — mock profile placeholder */
router.get('/profile', asyncHandler(async (_req, res) => {
  sendSuccess(res, {
    id: 'u_1',
    email: 'user@example.com',
    name: 'Mock User',
  });
}));

export { router as authRouter };
