import { AuthUser, AuthRegisterRequest, AuthLoginRequest } from '../types/auth';
import { signToken } from '../utils/jwt';

/**
 * In-memory auth service for MVP. Structured so a real DB can replace the store later.
 */
const users: Map<string, { id: string; email: string; password: string }> = new Map();
let userCounter = 0;

export class AuthService {
  async register(req: AuthRegisterRequest): Promise<{ token: string; user: AuthUser }> {
    // Check for duplicate
    for (const u of users.values()) {
      if (u.email === req.email) {
        throw new Error('Email already registered');
      }
    }

    userCounter++;
    const id = `u_${userCounter}`;
    users.set(id, { id, email: req.email, password: req.password });

    const token = signToken({ id, email: req.email });
    return { token, user: { id, email: req.email } };
  }

  async login(req: AuthLoginRequest): Promise<{ token: string; user: AuthUser }> {
    for (const u of users.values()) {
      if (u.email === req.email && u.password === req.password) {
        const token = signToken({ id: u.id, email: u.email });
        return { token, user: { id: u.id, email: u.email } };
      }
    }
    throw new Error('Invalid email or password');
  }
}
