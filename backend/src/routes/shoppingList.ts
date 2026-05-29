import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { sendSuccess, sendError } from '../utils/response';
import { ShoppingListService } from '../services/shoppingListService';

const router = Router();
const shoppingListService = new ShoppingListService();

/** POST /shopping-list/generate — derives a shopping list from recipe ingredients. */
router.post('/generate', asyncHandler(async (req, res) => {
  const { recipeId } = req.body;
  if (!recipeId) return sendError(res, 'recipeId is required', 400);

  const list = await shoppingListService.generate(recipeId);
  sendSuccess(res, list);
}));

export { router as shoppingListRouter };
