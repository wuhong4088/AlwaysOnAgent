import { OpenAIService } from './openaiService';
import { RecipeDetail } from '../types/recipe';

const openai = new OpenAIService();

/**
 * Fetches recipe details from OpenAI or mock catalog.
 */
export class MvpRecipeService {
  async generate(recipeId: string): Promise<RecipeDetail> {
    return openai.generateRecipe(recipeId);
  }
}
