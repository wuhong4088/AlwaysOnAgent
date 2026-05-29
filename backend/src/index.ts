import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { env } from './config/env';
import { authRouter } from './routes/auth';
import { mealRouter } from './routes/meal';
import { mvpRecipeRouter } from './routes/mvpRecipe';
import { shoppingListRouter } from './routes/shoppingList';
import { redirectRouter } from './routes/redirect';
import { mcpRouter } from './routes/mcpRoutes';

const app: Express = express();

// ── Middleware ──────────────────────────────────────────────
app.use(cors({ origin: env.frontendUrl }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// ── Health ─────────────────────────────────────────────────
app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Cook Smart API is running',
    timestamp: new Date().toISOString(),
  });
});

// ── MVP Routes ─────────────────────────────────────────────
app.use('/auth', authRouter);
app.use('/meal', mealRouter);
app.use('/recipe', mvpRecipeRouter);
app.use('/shopping-list', shoppingListRouter);
app.use('/redirect', redirectRouter);

// ── MCP Mock Tools Routes ──────────────────────────────────
app.use('/mcp', mcpRouter);

// ── Centralized Error Handler ──────────────────────────────
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error('[Error]', err.message);
  const message = env.nodeEnv === 'development' ? err.message : 'Something went wrong';
  res.status(500).json({ success: false, error: message });
});

// ── Start ──────────────────────────────────────────────────
app.listen(env.port, () => {
  console.log(`🍳 Cook Smart API running on http://localhost:${env.port}`);
  console.log(`📚 Health check: http://localhost:${env.port}/health`);
  if (!env.openaiApiKey) {
    console.log('⚠️  No OPENAI_API_KEY set — using mock data fallback');
  }
});
