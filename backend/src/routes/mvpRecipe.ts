import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess, sendError } from '../utils/response';
import { MvpRecipeService } from '../services/mvpRecipeService';

const router = Router();
const recipeService = new MvpRecipeService();

/** POST /recipe/generate — returns full recipe detail for a given recipeId. */
router.post('/generate', asyncHandler(async (req, res) => {
  const { recipeId } = req.body;
  if (!recipeId) return sendError(res, 'recipeId is required', 400);

  const recipe = await recipeService.generate(recipeId);
  sendSuccess(res, recipe);
}));

export { router as mvpRecipeRouter };
