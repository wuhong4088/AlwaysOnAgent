import { Router } from 'express';
import { sendSuccess, sendError } from '../utils/response';
import { RedirectService } from '../services/redirectService';

const router = Router();
const redirectService = new RedirectService();

/** GET /redirect/instacart?q=chicken,lettuce,tomato — returns Instacart search URL. */
router.get('/instacart', (req, res) => {
  const q = req.query.q as string;
  if (!q) return sendError(res, 'q query parameter is required', 400);

  const terms = q.split(',').map((t) => t.trim());
  const url = redirectService.buildInstacartUrl(terms);

  // Support both redirect and JSON mode for local testing
  if (req.query.json === 'true') {
    return sendSuccess(res, { url });
  }
  res.redirect(url);
});

export { router as redirectRouter };
