import { OpenAIService } from './openaiService';
import { ShoppingListResult } from '../types/shoppingList';

const openai = new OpenAIService();

/**
 * Derives a shopping list from a recipe's ingredients.
 * Normalizes duplicates by converting to lowercase and deduplicating.
 */
export class ShoppingListService {
  async generate(recipeId: string): Promise<ShoppingListResult> {
    const recipe = await openai.generateRecipe(recipeId);

    // Normalize: lowercase, trim, deduplicate
    const seen = new Set<string>();
    const items: string[] = [];
    for (const ing of recipe.ingredients) {
      const normalized = ing.toLowerCase().trim();
      if (!seen.has(normalized)) {
        seen.add(normalized);
        items.push(ing);
      }
    }

    return { recipeId, items };
  }
}
