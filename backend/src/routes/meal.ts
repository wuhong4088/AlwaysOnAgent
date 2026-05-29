import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess, sendError } from '../utils/response';
import { MealService } from '../services/mealService';

const router = Router();
const mealService = new MealService();

/** POST /meal/suggest — returns 3 meal suggestions based on preference. */
router.post('/suggest', asyncHandler(async (req, res) => {
  const { preference } = req.body;
  if (!preference) return sendError(res, 'preference is required', 400);

  const recipes = await mealService.suggest(preference);
  sendSuccess(res, { recipes });
}));

export { router as mealRouter };
