import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY || '';
const hasValidKey = apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.length > 10;
const ai = hasValidKey ? new GoogleGenAI({ apiKey }) : null;

const STEP_IMAGES = [
  '/images/recipes/step_1.png',
  '/images/recipes/step_2.png',
  '/images/recipes/step_3.png',
  '/images/recipes/step_4.png',
];

const MOCK_RECIPES_ZH = [
  {
    title: "番茄炒蛋",
    description: "家常經典菜，簡單快速，營養美味。番茄的酸甜搭配嫩滑的雞蛋，讓人百吃不厭。",
    time: "10 分鐘",
    prepTime: "5 min prep",
    tags: ["快速", "健康", "早餐"],
    image: "/images/recipes/frittata.png",
    ingredients: [
      { name: "番茄", amount: "2 顆", category: "生鮮蔬果" },
      { name: "雞蛋", amount: "3 顆", category: "蛋白質" },
      { name: "蔥花", amount: "適量", category: "調味料" },
      { name: "鹽", amount: "少許", category: "調味料" },
    ],
    steps: [
      { text: "番茄切塊備用，雞蛋打散加入少許鹽攪拌均勻。" },
      { text: "熱鍋加油，倒入蛋液，用筷子快速劃散成嫩蛋塊，盛出備用。" },
      { text: "同鍋加少許油，放入番茄翻炒至出汁，加入少許糖提鮮。" },
      { text: "將炒好的蛋塊倒回鍋中，與番茄快速翻炒均勻，撒上蔥花即可。" },
    ],
  },
  {
    title: "蒜香義大利麵",
    description: "經典的蒜香橄欖油義大利麵，簡單食材就能做出餐廳等級的美味。",
    time: "15 分鐘",
    prepTime: "5 min prep",
    tags: ["快速", "晚餐"],
    image: "/images/recipes/aglio.png",
    ingredients: [
      { name: "義大利麵", amount: "200g", category: "主食" },
      { name: "大蒜", amount: "5 瓣", category: "調味料" },
      { name: "橄欖油", amount: "3 大匙", category: "調味料" },
      { name: "辣椒片", amount: "適量", category: "調味料" },
      { name: "巴西里", amount: "少許", category: "生鮮蔬果" },
    ],
    steps: [
      { text: "煮一鍋加鹽的滾水，放入義大利麵按包裝指示煮至彈牙。" },
      { text: "大蒜切薄片，用中小火在橄欖油中慢慢煎至金黃色，加入辣椒片。" },
      { text: "撈出煮好的麵條放入蒜香油中，加入半杯煮麵水翻拌均勻。" },
      { text: "撒上巴西里碎，依口味調整鹽和黑胡椒即可上桌。" },
    ],
  },
  {
    title: "日式味噌湯",
    description: "溫暖療癒的日式經典湯品，豆腐與海帶的完美搭配，簡單卻充滿層次感。",
    time: "10 分鐘",
    prepTime: "5 min prep",
    tags: ["健康", "素食", "低熱量"],
    image: "/images/recipes/soup.png",
    ingredients: [
      { name: "味噌", amount: "2 大匙", category: "調味料" },
      { name: "嫩豆腐", amount: "半盒", category: "蛋白質" },
      { name: "乾海帶芽", amount: "1 小把", category: "其他" },
      { name: "蔥花", amount: "適量", category: "調味料" },
    ],
    steps: [
      { text: "將乾海帶芽泡水 5 分鐘至軟化，瀝乾備用。嫩豆腐切小丁。" },
      { text: "鍋中加入 500ml 水煮至微滾，放入海帶芽和豆腐。" },
      { text: "取一小碗，將味噌用少許熱水化開，倒入鍋中攪拌均勻（注意不要煮沸）。" },
      { text: "盛碗後撒上蔥花，趁熱享用。" },
    ],
  },
];

const MOCK_RECIPES_EN = [
  {
    title: "Tomato and Egg Stir-fry",
    description: "A classic, quick, and nutritious home-style dish. The sweet and sour tomatoes pair perfectly with the tender eggs.",
    time: "10 mins",
    prepTime: "5 min prep",
    tags: ["Quick", "Healthy", "Breakfast"],
    image: "/images/recipes/frittata.png",
    ingredients: [
      { name: "Tomato", amount: "2", category: "Produce" },
      { name: "Egg", amount: "3", category: "Protein" },
      { name: "Scallion", amount: "to taste", category: "Seasoning" },
      { name: "Salt", amount: "pinch", category: "Seasoning" },
    ],
    steps: [
      { text: "Chop tomatoes. Beat eggs with a pinch of salt." },
      { text: "Heat oil in a pan, scramble the eggs quickly until tender, then remove." },
      { text: "In the same pan, stir-fry tomatoes until juicy, add a little sugar." },
      { text: "Return the eggs to the pan, toss with tomatoes, and garnish with scallions." },
    ],
  },
  {
    title: "Garlic Spaghetti",
    description: "Classic Aglio e Olio. Simple ingredients make a restaurant-quality meal.",
    time: "15 mins",
    prepTime: "5 min prep",
    tags: ["Quick", "Dinner"],
    image: "/images/recipes/aglio.png",
    ingredients: [
      { name: "Spaghetti", amount: "200g", category: "Staples" },
      { name: "Garlic", amount: "5 cloves", category: "Seasoning" },
      { name: "Olive Oil", amount: "3 tbsp", category: "Seasoning" },
      { name: "Chili flakes", amount: "to taste", category: "Seasoning" },
      { name: "Parsley", amount: "pinch", category: "Produce" },
    ],
    steps: [
      { text: "Boil salted water and cook pasta until al dente." },
      { text: "Slice garlic, fry gently in olive oil until golden, add chili flakes." },
      { text: "Toss pasta in the garlic oil, adding a splash of pasta water." },
      { text: "Garnish with parsley and season with salt and pepper." },
    ],
  },
  {
    title: "Miso Soup",
    description: "A comforting Japanese classic with tofu and seaweed.",
    time: "10 mins",
    prepTime: "5 min prep",
    tags: ["Healthy", "Vegetarian", "Low Cal"],
    image: "/images/recipes/soup.png",
    ingredients: [
      { name: "Miso paste", amount: "2 tbsp", category: "Seasoning" },
      { name: "Silken tofu", amount: "1/2 block", category: "Protein" },
      { name: "Wakame seaweed", amount: "1 handful", category: "Other" },
      { name: "Scallion", amount: "to taste", category: "Seasoning" },
    ],
    steps: [
      { text: "Soak wakame in water for 5 mins. Cube the tofu." },
      { text: "Bring 500ml of water to a simmer, add wakame and tofu." },
      { text: "Dissolve miso in a little hot water, then stir into the soup (do not boil)." },
      { text: "Garnish with scallions and serve hot." },
    ],
  },
];

export const generateRecipe = async (ingredients: string, lang: string = 'en-US') => {
  const isEn = lang === 'en-US';
  const mockRecipes = isEn ? MOCK_RECIPES_EN : MOCK_RECIPES_ZH;

  // No valid API key -> return localized mock recipe
  if (!ai) {
    await new Promise(r => setTimeout(r, 1200));
    return mockRecipes[Math.floor(Math.random() * mockRecipes.length)];
  }

  const promptZh = `
    你是一個專業的 AI 廚師助手。
    使用者有以下食材：${ingredients}。
    請根據這些食材生成一個創意食譜。
    
    你必須從以下圖片清單中選擇一張最符合該食譜的主圖片 URL：
    ["/images/recipes/soup.png", "/images/recipes/salad.png", "/images/recipes/salmon.png", "/images/recipes/tofu.png", "/images/recipes/pasta.png", "/images/recipes/curry.png", "/images/recipes/pancakes.png", "/images/recipes/frittata.png", "/images/recipes/tacos.png", "/images/recipes/bowl.png"]
    
    回覆格式必須為以下 JSON:
    {
      "title": "食譜名稱",
      "description": "簡短描述",
      "time": "烹飪時間(例如: 20 分鐘)",
      "prepTime": "準備時間(例如: 10 min prep)",
      "tags": ["標籤1", "標籤2"],
      "image": "選中的圖片 URL",
      "ingredients": [
        {"name": "食材1", "amount": "份量", "category": "分類(生鮮蔬果/蛋白質/調味料/其他)"}
      ],
      "steps": [
        {"text": "步驟1"},
        {"text": "步驟2"}
      ]
    }
  `;

  const promptEn = `
    You are a professional AI chef assistant.
    The user has the following ingredients: ${ingredients}.
    Please generate a creative recipe based on these ingredients.
    
    You must select the most appropriate image URL for the recipe from this list:
    ["/images/recipes/soup.png", "/images/recipes/salad.png", "/images/recipes/salmon.png", "/images/recipes/tofu.png", "/images/recipes/pasta.png", "/images/recipes/curry.png", "/images/recipes/pancakes.png", "/images/recipes/frittata.png", "/images/recipes/tacos.png", "/images/recipes/bowl.png"]
    
    The response MUST be in the following JSON format:
    {
      "title": "Recipe Title",
      "description": "Short description",
      "time": "Cooking time (e.g., 20 mins)",
      "prepTime": "Prep time (e.g., 10 min prep)",
      "tags": ["Tag1", "Tag2"],
      "image": "Selected image URL",
      "ingredients": [
        {"name": "Ingredient1", "amount": "Amount", "category": "Category(Produce/Protein/Seasoning/Other)"}
      ],
      "steps": [
        {"text": "Step 1"},
        {"text": "Step 2"}
      ]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: isEn ? promptEn : promptZh,
      config: {
        responseMimeType: "application/json"
      }
    });
    
    const text = response.text || '{}';
    const parsed = JSON.parse(text);

    // Provide a fallback image just in case
    if (!parsed.image) parsed.image = '/images/recipes/bowl.png';

    // Note: We deliberately do NOT inject step images for AI-generated recipes 
    // to prevent confusing mismatches (e.g., showing salmon for a tofu soup step).

    return parsed;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
