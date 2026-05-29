import { useTranslation } from 'react-i18next';
import { Recipe } from '../types';

// ─── Premium Recipe Images ──────────────────────────────────────────

const RECIPE_IMAGE_KEYS: Record<number, string> = {
  1: 'soup',
  2: 'salmon',
  3: 'chicken',
  4: 'pancakes',
  5: 'curry',
  6: 'yogurt',
  7: 'bibimbap',
  8: 'frittata',
  9: 'aglio',
  0: 'quinoa',
};

const STEP_IMAGES = [
  '/images/recipes/step_1.png',
  '/images/recipes/step_2.png',
  '/images/recipes/step_3.png',
  '/images/recipes/step_4.png',
];

// ─── English Translations for Recipe Data ───────────────────────────

// 10 base recipe translations (IDs 1-10 map to base, 11-20 to same base, etc.)
const BASE_RECIPES_EN: Record<number, { title: string; description: string; steps: string[] }> = {
  1: { 
    title: 'Roasted Tomato Soup', 
    description: 'Warm and cozy classic soup with rich tomato aroma and crispy bread.',
    steps: [
      'Cut the tomatoes in half, roughly chop the onion, and crush the garlic.',
      'Place in a baking dish, drizzle with olive oil, and bake at 200 degrees for 30 minutes until slightly charred.',
      'Blend the roasted vegetables in a blender until creamy, add a little broth to adjust consistency if needed.',
      'Serve with toasted crispy bread.'
    ]
  },
  2: { 
    title: 'Pan-Seared Salmon', 
    description: 'Omega-3 rich main dish, simply seasoned to bring out the natural freshness.',
    steps: [
      'Pat the salmon dry, season evenly with salt and black pepper.',
      'Heat a little oil in a pan, place the salmon skin-side down.',
      'Sear over medium heat for about 4 minutes until golden, flip and sear for another 3 minutes.',
      'Add garlic and butter to melt, and spoon over the fish before serving.'
    ]
  },
  3: { 
    title: 'Mediterranean Grilled Chicken', 
    description: 'Classic Mediterranean flavor, marinated with herbs, tender and juicy.',
    steps: [
      'Score the chicken breast, marinate with minced garlic, olive oil, and herbs.',
      'Chop tomatoes and place on a baking tray with the marinated chicken.',
      'Bake in the oven at 200 degrees for about 20 minutes.',
      'Check if fully cooked, then serve with a squeeze of lemon juice for extra flavor.'
    ]
  },
  4: { 
    title: 'Oat Protein Pancakes', 
    description: 'Perfect high-protein brunch — no worrying about excess carbs.',
    steps: [
      'Blend the oats into a fine powder in a blender.',
      'Add egg and milk, and mix well into a batter.',
      'Heat a pan slightly and pour in the batter.',
      'Cook until bubbles form on the surface, then flip and cook for 1 more minute.'
    ]
  },
  5: { 
    title: 'Thai Green Curry Chicken', 
    description: 'Rich and aromatic Thai curry with coconut milk and fresh herbs.',
    steps: [
      'Dice the onion and cut the chicken breast into pieces.',
      'Sauté the onion until soft, then add green curry paste to release the aroma.',
      'Add the chicken and stir-fry until the surface turns white.',
      'Pour in coconut milk and simmer on low heat for 10 minutes until chicken is cooked through.'
    ]
  },
  6: { 
    title: 'Berry Yogurt Bowl', 
    description: 'Fresh and light berry bowl packed with antioxidants and probiotics.',
    steps: [
      'Pour unsweetened yogurt into a bowl as the base.',
      'Wash and drain the blueberries.',
      'Spread the blueberries evenly over the yogurt.',
      'Sprinkle a layer of oats on top and enjoy.'
    ]
  },
  7: { 
    title: 'Korean Bibimbap', 
    description: 'Colorful Korean rice bowl with assorted vegetables and savory sauce.',
    steps: [
      'Blanch the spinach, drain, and mix with a little sesame oil.',
      'Fry a sunny-side-up egg in a pan.',
      'Place rice in a bowl, top with spinach and the fried egg.',
      'Add a tablespoon of gochujang (Korean chili paste) and mix well to serve.'
    ]
  },
  8: { 
    title: 'Mushroom Spinach Frittata', 
    description: 'Italian-style baked egg dish with earthy mushrooms and spinach.',
    steps: [
      'Slice the mushrooms, wash and chop the spinach.',
      'Beat the eggs in a bowl with a pinch of salt.',
      'Sauté garlic in a hot pan, add mushrooms and spinach and stir-fry briefly.',
      'Pour in the egg mixture and cook on low heat until set.'
    ]
  },
  9: { 
    title: 'Spaghetti Aglio e Olio', 
    description: 'Classic Italian garlic olive oil pasta — simple yet restaurant-quality.',
    steps: [
      'Boil water with a pinch of salt, cook spaghetti until al dente (about 80% done).',
      'Slice the garlic.',
      'Add garlic slices to cold oil, slowly fry on low heat until golden, then remove.',
      'Toss the cooked pasta in the garlic oil, and garnish with the crispy garlic slices.'
    ]
  },
  0: { 
    title: 'Avocado Quinoa Bowl', 
    description: 'Nutrient-dense superfood bowl with creamy avocado and fluffy quinoa.',
    steps: [
      'Rinse quinoa and cook with a 1:1.5 ratio of water, then let it cool.',
      'Halve the avocado, remove the pit, and slice or dice.',
      'Wash and dice the tomato.',
      'Layer quinoa at the bottom of a bowl, top with avocado and tomato, and drizzle with olive oil.'
    ]
  },
};

// Map recipe ID → base index (1→1, 11→1, 21→1, ..., 10→0, 20→0, ...)
function getBaseIndex(id: number): number {
  return id % 10;
}

// Variation label
function getVariationLabel(id: number, lang: string): string {
  const cycle = Math.floor((id - 1) / 10);
  if (cycle === 0) return '';
  if (lang === 'en-US') return ` (Variation ${cycle})`;
  if (lang === 'zh-CN') return ` (变奏版 ${cycle})`;
  return ` (變奏版 ${cycle})`;
}

// ─── Translations ───────────────────────────────────────────────

const TAG_EN: Record<string, string> = {
  '全部': 'All',
  '快速': 'Quick',
  '健康': 'Healthy',
  '素食': 'Vegetarian',
  '純素': 'Vegan',
  '蛋奶素': 'Lacto-ovo Veg',
  '高蛋白': 'High Protein',
  '低熱量': 'Low Cal',
  '隨機': 'Random',
  '早餐': 'Breakfast',
  '晚餐': 'Dinner',
  '甜點': 'Dessert',
  '泰式': 'Thai',
  '韓式': 'Korean',
  '義式': 'Italian',
  '湯品': 'Soup',
  '沙拉': 'Salad',
  '主食': 'Main',
  '無麩質': 'Gluten Free',
};

const TIME_EN: Record<string, string> = {
  '10 分鐘': '10 mins',
  '15 分鐘': '15 mins',
  '20 分鐘': '20 mins',
  '25 分鐘': '25 mins',
  '30 分鐘': '30 mins',
  '35 分鐘': '35 mins',
  '40 分鐘': '40 mins',
  '45 分鐘': '45 mins',
  '60 分鐘': '60 mins',
};

const CATEGORY_EN: Record<string, string> = {
  '生鮮蔬果': 'Produce',
  '蛋白質': 'Protein',
  '調味料': 'Seasoning',
  '主食': 'Staples',
  '其他': 'Other',
};

const INGREDIENT_EN: Record<string, string> = {
  '番茄': 'Tomato',
  '大蒜': 'Garlic',
  '洋蔥': 'Onion',
  '麵包': 'Bread',
  '雞胸肉': 'Chicken Breast',
  '椰奶': 'Coconut Milk',
  '鮭魚': 'Salmon',
  '橄欖油': 'Olive Oil',
  '優格': 'Yogurt',
  '燕麥': 'Oats',
  '義大利麵': 'Spaghetti',
  '菠菜': 'Spinach',
  '藍莓': 'Blueberries',
  '藜麥': 'Quinoa',
  '蘑菇': 'Mushroom',
  '酪梨': 'Avocado',
  '雞蛋': 'Egg',
  '韓式辣醬': 'Gochujang',
  '鮮奶': 'Milk',
};

const AMOUNT_EN: Record<string, string> = {
  '1 大匙': '1 tbsp',
  '1 把': '1 handful',
  '1 杯': '1 cup',
  '1 片': '1 slice',
  '1 碗': '1 bowl',
  '1 顆': '1',
  '100ml': '100ml',
  '2 大匙': '2 tbsp',
  '2 片': '2 slices',
  '2 瓣': '2 cloves',
  '2 顆': '2',
  '200g': '200g',
  '200ml': '200ml',
  '3 瓣': '3 cloves',
  '3 顆': '3',
  '5 瓣': '5 cloves',
  '半杯': '1/2 cup',
  '半顆': '1/2',
  '少許': 'to taste',
};

// ─── Helper Hook ────────────────────────────────────────────────────

export function useLocalizedRecipe(recipe: Recipe): Recipe {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const numId = parseInt(recipe.id, 10);
  if (isNaN(numId)) return recipe; // AI-generated recipes etc.

  const baseIndex = getBaseIndex(numId);
  const baseEn = BASE_RECIPES_EN[baseIndex];

  // Image override applies to ALL languages
  const baseImage = `/images/recipes/${RECIPE_IMAGE_KEYS[baseIndex]}.png`;
  
  const recipeWithPremiumImages = {
    ...recipe,
    image: baseImage,
    steps: recipe.steps.map((step, idx) => ({
      ...step,
      image: STEP_IMAGES[idx] || step.image,
    }))
  };

  if (lang !== 'en-US') return recipeWithPremiumImages;

  // English-specific overrides
  const variation = getVariationLabel(numId, lang);

  return {
    ...recipeWithPremiumImages,
    title: baseEn ? `${baseEn.title}${variation}` : recipe.title,
    description: baseEn?.description || recipe.description,
    time: TIME_EN[recipe.time] || recipe.time,
    tags: recipe.tags.map(tag => TAG_EN[tag] || tag),
    ingredients: recipe.ingredients.map(ing => ({
      ...ing,
      name: INGREDIENT_EN[ing.name] || ing.name,
      amount: AMOUNT_EN[ing.amount] || ing.amount,
      category: (CATEGORY_EN[ing.category] || ing.category) as any,
    })),
    steps: recipeWithPremiumImages.steps.map((step, idx) => ({
      ...step,
      text: baseEn?.steps[idx] || step.text,
    }))
  };
}

// Batch version for lists
export function useLocalizedRecipes(recipes: Recipe[]): Recipe[] {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return recipes.map(r => {
    const numId = parseInt(r.id, 10);
    if (isNaN(numId)) return r;

    const baseIndex = getBaseIndex(numId);
    const baseEn = BASE_RECIPES_EN[baseIndex];
    const baseImage = `/images/recipes/${RECIPE_IMAGE_KEYS[baseIndex]}.png`;
    
    const recipeWithPremiumImages = {
      ...r,
      image: baseImage,
      steps: r.steps.map((step, idx) => ({
        ...step,
        image: STEP_IMAGES[idx] || step.image,
      }))
    };

    if (lang !== 'en-US') return recipeWithPremiumImages;

    const variation = getVariationLabel(numId, lang);
    return {
      ...recipeWithPremiumImages,
      title: baseEn ? `${baseEn.title}${variation}` : r.title,
      description: baseEn?.description || r.description,
      time: TIME_EN[r.time] || r.time,
      tags: r.tags.map(tag => TAG_EN[tag] || tag),
      ingredients: r.ingredients.map(ing => ({
        ...ing,
        name: INGREDIENT_EN[ing.name] || ing.name,
        amount: AMOUNT_EN[ing.amount] || ing.amount,
        category: (CATEGORY_EN[ing.category] || ing.category) as any,
      })),
      steps: recipeWithPremiumImages.steps.map((step, idx) => ({
        ...step,
        text: baseEn?.steps[idx] || step.text,
      }))
    };
  });
}

// Single tag translation
export function useLocalizedTag() {
  const { i18n } = useTranslation();
  return (tag: string) => {
    if (i18n.language === 'en-US') return TAG_EN[tag] || tag;
    return tag;
  };
}
