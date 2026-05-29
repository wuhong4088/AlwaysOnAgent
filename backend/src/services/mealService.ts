import { MealPreference, MealSuggestion } from '../types/meal';
import { OpenAIService } from './openaiService';

const openai = new OpenAIService();

/**
 * Validates the preference and delegates to OpenAI (or mock) for meal suggestions.
 */
export class MealService {
  private validPreferences: MealPreference[] = ['quick', 'healthy', 'random'];

  async suggest(preference: string): Promise<MealSuggestion[]> {
    if (!this.validPreferences.includes(preference as MealPreference)) {
      throw new Error(`Invalid preference. Must be one of: ${this.validPreferences.join(', ')}`);
    }
    return openai.suggestMeals(preference as MealPreference);
  }
}
