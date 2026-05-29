import OpenAI from 'openai';
import { env } from '../config/env';
import { MealSuggestion, MealPreference } from '../types/meal';
import { RecipeDetail } from '../types/recipe';

/**
 * Encapsulates all OpenAI API interactions.
 * Falls back to deterministic mock data when OPENAI_API_KEY is not configured.
 */
export class OpenAIService {
  private client: OpenAI | null = null;

  constructor() {
    if (env.openaiApiKey) {
      this.client = new OpenAI({ apiKey: env.openaiApiKey });
    } else {
      console.log('[OpenAIService] No API key configured — using mock fallback.');
    }
  }

  /** Returns true if a real OpenAI client is available. */
  get isAvailable(): boolean {
    return this.client !== null;
  }

  /** Suggest 3 meals based on a user preference. */
  async suggestMeals(preference: MealPreference): Promise<MealSuggestion[]> {
    if (!this.client) return this.mockSuggestMeals(preference);

    try {
      const response = await this.client.chat.completions.create({
        model: env.openaiModel,
        messages: [
          {
            role: 'system',
            content: `You are a helpful cooking assistant. Return exactly 3 meal suggestions as a JSON array.
Each object must have: id (string like "recipe_1"), name (string), summary (string, one sentence).
Respond ONLY with the JSON array, no extra text.`,
          },
          {
            role: 'user',
            content: `Suggest 3 ${preference} meals for a busy working professional.`,
          },
        ],
        response_format: { type: 'json_object' },
      });

      const parsed = JSON.parse(response.choices[0].message.content || '{}');
      return parsed.recipes || parsed;
    } catch (error) {
      console.error('[OpenAIService] suggestMeals error, falling back to mock:', error);
      return this.mockSuggestMeals(preference);
    }
  }

  /** Generate full recipe detail for a given recipe name/id. */
  async generateRecipe(recipeName: string): Promise<RecipeDetail> {
    if (!this.client) return this.mockGenerateRecipe(recipeName);

    try {
      const response = await this.client.chat.completions.create({
        model: env.openaiModel,
        messages: [
          {
            role: 'system',
            content: `You are a professional chef. Return a recipe as a JSON object with:
id (string), title (string), description (string), ingredients (array of strings), steps (array of strings).
Respond ONLY with the JSON object, no extra text.`,
          },
          {
            role: 'user',
            content: `Generate a detailed recipe for: ${recipeName}`,
          },
        ],
        response_format: { type: 'json_object' },
      });

      return JSON.parse(response.choices[0].message.content || '{}');
    } catch (error) {
      console.error('[OpenAIService] generateRecipe error, falling back to mock:', error);
      return this.mockGenerateRecipe(recipeName);
    }
  }

  // ── Mock fallbacks ──────────────────────────────────────────────

  private mockSuggestMeals(preference: MealPreference): MealSuggestion[] {
    const suggestions: Record<MealPreference, MealSuggestion[]> = {
      quick: [
        { id: 'recipe_1', name: 'Chicken Salad', summary: 'Fast high-protein salad for weeknight dinner' },
        { id: 'recipe_2', name: 'Garlic Pasta', summary: 'Simple pantry-friendly pasta' },
        { id: 'recipe_3', name: 'Beef Rice Bowl', summary: 'Comforting bowl meal in under 30 minutes' },
      ],
      healthy: [
        { id: 'recipe_4', name: 'Quinoa Buddha Bowl', summary: 'Nutrient-packed grain bowl with roasted veggies' },
        { id: 'recipe_5', name: 'Grilled Salmon', summary: 'Omega-3 rich salmon with steamed broccoli' },
        { id: 'recipe_6', name: 'Mediterranean Wrap', summary: 'Light whole-wheat wrap with hummus and greens' },
      ],
      random: [
        { id: 'recipe_7', name: 'Spaghetti Carbonara', summary: 'Classic Italian pasta with creamy egg sauce' },
        { id: 'recipe_8', name: 'Chicken Tikka Masala', summary: 'Tender chicken in creamy tomato curry' },
        { id: 'recipe_9', name: 'Veggie Stir Fry', summary: 'Colorful vegetables tossed in savory sauce' },
      ],
    };
    return suggestions[preference] || suggestions.random;
  }

  private mockGenerateRecipe(recipeName: string): RecipeDetail {
    const catalog: Record<string, RecipeDetail> = {
      recipe_1: {
        id: 'recipe_1', title: 'Chicken Salad',
        description: 'A quick and healthy chicken salad.',
        ingredients: ['2 chicken breasts', '1 head romaine lettuce', '1 tomato', '1/2 cucumber', '2 tbsp olive oil', '1 lemon'],
        steps: ['Cook the chicken.', 'Chop vegetables.', 'Slice chicken and combine.', 'Dress with olive oil and lemon.', 'Serve.'],
      },
      recipe_2: {
        id: 'recipe_2', title: 'Garlic Pasta',
        description: 'Simple pantry-friendly garlic pasta.',
        ingredients: ['400g spaghetti', '6 cloves garlic', '1/4 cup olive oil', '1/2 tsp red pepper flakes', 'Parmesan cheese', 'Salt'],
        steps: ['Cook pasta until al dente.', 'Sauté sliced garlic in olive oil.', 'Add red pepper flakes.', 'Toss in pasta with cooking water.', 'Top with parmesan.'],
      },
      recipe_3: {
        id: 'recipe_3', title: 'Beef Rice Bowl',
        description: 'Comforting bowl meal in under 30 minutes.',
        ingredients: ['300g ground beef', '2 cups cooked rice', '2 tbsp soy sauce', '1 tbsp sesame oil', '2 green onions', '1 egg'],
        steps: ['Brown the beef.', 'Season with soy sauce and sesame oil.', 'Fry the egg sunny-side up.', 'Assemble rice, beef, and egg in bowl.', 'Garnish with green onions.'],
      },
      recipe_4: {
        id: 'recipe_4', title: 'Quinoa Buddha Bowl',
        description: 'Nutrient-packed grain bowl with roasted veggies.',
        ingredients: ['1 cup quinoa', '1 sweet potato', '1 cup chickpeas', '1 avocado', '2 cups spinach', 'Tahini dressing'],
        steps: ['Cook quinoa.', 'Roast sweet potato and chickpeas.', 'Arrange all ingredients in a bowl.', 'Drizzle with tahini dressing.'],
      },
      recipe_5: {
        id: 'recipe_5', title: 'Grilled Salmon',
        description: 'Omega-3 rich salmon with steamed broccoli.',
        ingredients: ['2 salmon fillets', '2 cups broccoli', '2 tbsp olive oil', '1 lemon', 'Salt and pepper', 'Garlic powder'],
        steps: ['Season salmon with olive oil and spices.', 'Grill salmon 4-5 min per side.', 'Steam broccoli.', 'Serve with lemon wedge.'],
      },
      recipe_6: {
        id: 'recipe_6', title: 'Mediterranean Wrap',
        description: 'Light whole-wheat wrap with hummus and greens.',
        ingredients: ['2 whole-wheat wraps', '4 tbsp hummus', '1 cucumber', '1 tomato', 'Feta cheese', 'Mixed greens'],
        steps: ['Spread hummus on wraps.', 'Add chopped vegetables and feta.', 'Roll tightly.', 'Slice in half and serve.'],
      },
      recipe_7: {
        id: 'recipe_7', title: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta with creamy egg sauce and crispy pancetta.',
        ingredients: ['400g spaghetti', '200g pancetta', '4 eggs', '100g parmesan cheese', '1 tsp black pepper', 'Salt'],
        steps: ['Cook spaghetti.', 'Fry pancetta until crispy.', 'Whisk eggs with parmesan and pepper.', 'Toss hot pasta with pancetta.', 'Stir in egg mixture off heat.', 'Serve immediately.'],
      },
      recipe_8: {
        id: 'recipe_8', title: 'Chicken Tikka Masala',
        description: 'Tender chicken in creamy tomato curry sauce.',
        ingredients: ['500g chicken breast', '200ml heavy cream', '400g tomato sauce', '2 tbsp tikka masala spice', '1 onion', 'Basmati rice'],
        steps: ['Cut and marinate chicken.', 'Grill chicken.', 'Sauté onions and spices.', 'Add tomato sauce and cream.', 'Combine with chicken and simmer.', 'Serve with rice.'],
      },
      recipe_9: {
        id: 'recipe_9', title: 'Veggie Stir Fry',
        description: 'Colorful vegetables tossed in savory sauce.',
        ingredients: ['1 bell pepper', '1 zucchini', '1 cup broccoli', '2 tbsp soy sauce', '1 tbsp sesame oil', '2 cups cooked rice'],
        steps: ['Chop all vegetables.', 'Heat sesame oil in a wok.', 'Stir fry vegetables on high heat.', 'Add soy sauce.', 'Serve over rice.'],
      },
    };

    // Try by id first, then try to find by name match
    if (catalog[recipeName]) return catalog[recipeName];

    const byName = Object.values(catalog).find(
      (r) => r.title.toLowerCase() === recipeName.toLowerCase()
    );
    if (byName) return byName;

    // Ultimate fallback
    return catalog.recipe_1;
  }
}
