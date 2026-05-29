import * as fs from 'fs';
import { RECIPES } from '../src/data';

const fileStr = fs.readFileSync('src/i18n.ts', 'utf8');

// We need translations for the 19 ingredients, 19 amounts, and 10 base recipes.
const enIg: Record<string, string> = {
  '番茄': 'Tomato', '大蒜': 'Garlic', '洋蔥': 'Onion', '麵包': 'Bread', '鮭魚': 'Salmon',
  '橄欖油': 'Olive Oil', '雞胸肉': 'Chicken Breast', '燕麥': 'Oats', '雞蛋': 'Egg',
  '鮮奶': 'Milk', '椰奶': 'Coconut Milk', '優格': 'Yogurt', '藍莓': 'Blueberry',
  '菠菜': 'Spinach', '韓式辣醬': 'Gochujang', '蘑菇': 'Mushroom',
  '義大利麵': 'Spaghetti', '藜麥': 'Quinoa', '酪梨': 'Avocado'
};
const cnIg: Record<string, string> = {
  '番茄': '番茄', '大蒜': '大蒜', '洋蔥': '洋葱', '麵包': '面包', '鮭魚': '鲑鱼',
  '橄欖油': '橄榄油', '雞胸肉': '鸡胸肉', '燕麥': '燕麦', '雞蛋': '鸡蛋',
  '鮮奶': '鲜奶', '椰奶': '椰奶', '優格': '酸奶', '藍莓': '蓝莓',
  '菠菜': '菠菜', '韓式辣醬': '韩式辣酱', '蘑菇': '蘑菇',
  '義大利麵': '意大利面', '藜麥': '藜麦', '酪梨': '牛油果'
};

const enAm: Record<string, string> = {
  '3 顆': '3', '3 瓣': '3 cloves', '半顆': '1/2', '2 片': '2 slices', '1 片': '1 slice',
  '2 瓣': '2 cloves', '1 大匙': '1 tbsp', '200g': '200g', '1 顆': '1', '1 杯': '1 cup',
  '2 顆': '2', '100ml': '100ml', '200ml': '200ml', '半杯': '1/2 cup', '少許': 'to taste',
  '1 把': '1 handful', '1 碗': '1 bowl', '5 瓣': '5 cloves', '2 大匙': '2 tbsp'
};
const cnAm: Record<string, string> = {
  '3 顆': '3 颗', '3 瓣': '3 瓣', '半顆': '半颗', '2 片': '2 片', '1 片': '1 片',
  '2 瓣': '2 瓣', '1 大匙': '1 大汤匙', '200g': '200g', '1 顆': '1 颗', '1 杯': '1 杯',
  '2 顆': '2 颗', '100ml': '100ml', '200ml': '200ml', '半杯': '半杯', '少許': '少许',
  '1 把': '1 把', '1 碗': '1 碗', '5 瓣': '5 瓣', '2 大匙': '2 大汤匙'
};

const enCat: Record<string, string> = {
  '生鮮蔬果': 'Produce', '蛋白質': 'Proteins', '調味料': 'Condiments', '主食': 'Carbs', '其他': 'Other'
};
const cnCat: Record<string, string> = {
  '生鮮蔬果': '生鲜蔬果', '蛋白質': '蛋白质', '調味料': '调味料', '主食': '主食', '其他': '其他'
};

// Base 10 recipes
const enRecipes = [
  { title: 'Italian Roasted Tomato Soup', desc: 'Warm and cozy classic soup with rich tomato aroma and crispy bread.', steps: [
    'Cut tomatoes in half, chop onion into chunks, crush garlic.',
    'Place in a baking dish, drizzle with olive oil, bake at 200°C for 30 mins.',
    'Blend roasted veggies into a soup, add broth if needed.',
    'Serve with crispy toasted bread.'
  ]},
  { title: 'Pan-Seared Salmon', desc: 'Omega-3 rich delicious main, simply seasoned for freshness.', steps: [
    'Wash and dry salmon, season evenly with salt and pepper.',
    'Heat pan with a little oil, place salmon skin down.',
    'Searing medium heat for 4 mins, flip and cook 3 mins.',
    'Add garlic and butter before serving, melt over fish.'
  ]},
  { title: 'Mediterranean Chicken', desc: 'Classic Mediterranean flavors, marinated tender and juicy.', steps: [
    'Score chicken breast, marinate with minced garlic, olive oil, and herbs.',
    'Chop tomatoes, place on baking sheet with chicken.',
    'Bake at 200°C for about 20 mins.',
    'Check if cooked through, drizzle with lemon juice.'
  ]},
  { title: 'Oat Protein Pancakes', desc: 'Perfect high-protein brunch, worry-free carbs.', steps: [
    'Blend oats into powder in a blender.',
    'Mix with egg and milk to form a batter.',
    'Heat a pan slightly, pour in batter.',
    'Cook until bubbles form, flip and cook for 1 min.'
  ]},
  { title: 'Thai Green Curry Chicken', desc: 'Rich coconut and lemongrass aroma, spicy and appetizing.', steps: [
    'Dice onion and chicken breast.',
    'Sauté onion until soft, add green curry paste until fragrant.',
    'Add chicken and stir-fry until color changes.',
    'Pour in coconut milk and simmer for 10 mins.'
  ]},
  { title: 'Berry Yogurt Bowl', desc: 'Antioxidant-rich refreshing breakfast to wake you up.', steps: [
    'Pour unsweetened yogurt into a bowl as base.',
    'Wash and drain blueberries.',
    'Spread blueberries evenly over yogurt.',
    'Sprinkle a layer of oats to finish.'
  ]},
  { title: 'Korean Bibimbap', desc: 'Rich veggies and spicy sauce, balanced and tasty.', steps: [
    'Blanch spinach, drain, and mix with sesame oil.',
    'Fry a sunny-side-up egg.',
    'Place rice in a bowl, top with spinach and egg.',
    'Add a tablespoon of Gochujang and mix well.'
  ]},
  { title: 'Mushroom Spinach Frittata', desc: 'Protein and veggies for a great weekend morning.', steps: [
    'Slice mushrooms, wash and cut spinach.',
    'Beat eggs with a pinch of salt.',
    'Sauté garlic, add mushrooms and spinach, cook briefly.',
    'Pour in eggs, cook on low heat until set.'
  ]},
  { title: 'Garlic Aglio e Olio', desc: 'Purest Italian flavor with just a few ingredients.', steps: [
    'Boil salted water and cook spaghetti until al dente.',
    'Slice garlic.',
    'Fry garlic in cold oil on low heat until golden, remove garlic.',
    'Toss pasta in the garlic oil, top with crispy garlic slices.'
  ]},
  { title: 'Avocado Quinoa Bowl', desc: 'Healthy energy source packed with plant protein and good fats.', steps: [
    'Wash quinoa, cook with 1:1.5 water ratio, let cool.',
    'Cut avocado in half, pit, and slice or cube.',
    'Wash and dice tomatoes.',
    'Place quinoa in bowl, top with avocado and tomatoes, drizzle with olive oil.'
  ]}
];

const cnRecipes = [
  { title: '意式烤番茄汤', desc: '温暖舒适的经典汤品，浓郁的番茄香气搭配酥脆面包，暖心又暖胃。', steps: [
    '将番茄对半切开，洋葱切大块，大蒜拍碎。',
    '放入烤盘，淋上橄榄油，以200度烤30分钟至表面微焦。',
    '将烤好的蔬菜放入果汁机打成浓汤，可加少许高汤调整浓稠度。',
    '搭配烤至酥脆的面包片一起享用。'
  ]},
  { title: '香煎三文鱼排', desc: '富含Omega-3的美味主食，简单调味就能带出食材本身的鲜甜。', steps: [
    '三文鱼洗净擦干水分，表面均匀抹上盐巴与黑胡椒。',
    '平底锅热锅，加入少许油，将三文鱼皮朝下放入。',
    '中火煎约4分钟至表面金黄，翻面继续煎约3分钟。',
    '起锅前加入大蒜与黄油稍微融化淋在鱼肉上即可。'
  ]},
  { title: '地中海烤鸡胸', desc: '经典地中海风味，多种香料腌制，肉质软嫩多汁。', steps: [
    '鸡胸肉表面划刀，加入蒜碎、橄榄油与香料腌制。',
    '番茄切块，与腌好的鸡胸肉放上烤盘。',
    '放入烤箱以200度烤约20分钟。',
    '确认中心熟透后即可出炉，淋上些许柠檬汁更提味。'
  ]},
  { title: '燕麦蛋白松饼', desc: '完美的高蛋白早午餐选择，不用担心碳水超标。', steps: [
    '将燕麦放入果汁机打成粉状。',
    '加入鸡蛋、鲜奶均匀搅拌成面糊。',
    '平底锅微微加热，倒入适量面糊。',
    '煎至表面起泡后翻面，再煎约1分钟即可。'
  ]},
  { title: '泰式绿咖喱鸡', desc: '浓郁椰香与香茅的完美融合，微辣的口感超级下饭。', steps: [
    '洋葱切丁，鸡胸肉切块备用。',
    '热锅将洋葱炒软后，加入绿咖喱酱炒香。',
    '放入鸡肉拌炒至表面变色。',
    '倒入椰奶小火炖煮10分钟至鸡肉熟透。'
  ]},
  { title: '莓果酸奶碗', desc: '充满抗氧化物的清爽早点，酸甜适中适合唤醒慵懒的早晨。', steps: [
    '将无糖酸奶倒入碗中作为基底。',
    '蓝莓洗净后沥干水分。',
    '将蓝莓均匀铺在酸奶上。',
    '最后撒上一层燕麦即可享用。'
  ]},
  { title: '韩式拌饭', desc: '丰富的蔬菜与微辣的拌饭酱，营养均衡又美味。', steps: [
    '菠菜川烫后沥干，加入少许芝麻油拌匀。',
    '平底锅煎一颗半熟蛋。',
    '碗中盛入白饭，摆上菠菜与煎蛋。',
    '最后加入一大匙韩式辣酱拌匀即可。'
  ]},
  { title: '蘑菇菠菜烘蛋', desc: '丰富的蛋白质与蔬菜，适合周末早晨的悠闲时光。', steps: [
    '蘑菇切片，菠菜洗净切段备用。',
    '鸡蛋打入碗中加入少许盐巴打匀。',
    '热锅炒香大蒜，放入蘑菇与菠菜略炒。',
    '倒入蛋液，小火烘至蛋液凝固即可。'
  ]},
  { title: '蒜香蒜片意大利面', desc: '最纯粹的意式风味，只需要简单的几样食材。', steps: [
    '滚水中加入少许盐巴，将意大利面煮至8分熟。',
    '大蒜切片备用。',
    '冷油下蒜片，小火煸至蒜片呈金黄色后捞出。',
    '将面条放入蒜油中拌炒，撒上酥脆蒜片即可。'
  ]},
  { title: '牛油果藜麦碗', desc: '清爽健康的能量来源，充满丰富的植物蛋白与优质脂肪。', steps: [
    '将藜麦洗净后，以1:1.5的水量煮熟放凉备用。',
    '牛油果对半切开，去籽后切成薄片或块状。',
    '番茄洗净切丁。',
    '将藜麦铺于碗底，依序摆上牛油果与番茄，淋上橄榄油即可。'
  ]}
];

// Generate recipes block directly reading from data.ts
function generateRecipesBlock(recipesArr, suffixTranslate = null) {
  let output = `{\n`;
  for (let i = 0; i < RECIPES.length; i++) {
    const r = RECIPES[i];
    // Find base index (0 to 9)
    const baseIdx = ((parseInt(r.id) - 1) % 10);
    const obj = recipesArr[baseIdx];
    
    // Add variations if id > 10
    let title = obj.title;
    if (parseInt(r.id) > 10) {
      const match = r.title.match(/\(變奏版 (\d+)\)/);
      if (match) {
         if (suffixTranslate === 'en') title += ` (Variant ${match[1]})`;
         else if (suffixTranslate === 'cn') title += ` (变奏版 ${match[1]})`;
         else title += ` (變奏版 ${match[1]})`;
      }
    }
    
    output += `      '${r.id}': {\n`;
    output += `        title: ${JSON.stringify(title)},\n`;
    output += `        description: ${JSON.stringify(obj.desc ? obj.desc : obj.description)},\n`;
    output += `        steps: {\n`;
    obj.steps.forEach((step, idx) => {
      output += `          '${idx}': ${JSON.stringify(step)},\n`;
    });
    output += `        }\n`;
    output += `      },\n`;
  }
  output += `    }`;
  return output;
}

// Generate components
function formatObj(obj: Record<string, string>) {
  return '{\n' + Object.keys(obj).map(k => `      '${k}': ${JSON.stringify(obj[k])}`).join(',\n') + '\n    }';
}

// Same for TW
const twIg = Object.fromEntries(uniqueIg.map(i => [i, i]));
const twAm = Object.fromEntries(uniqueAm.map(i => [i, i]));
const twCat = Object.fromEntries(Object.keys(cnCat).map(k => [k, k]));
const twRecipes = RECIPES.slice(0,10).map(r => ({
  title: r.title, description: r.description, steps: r.steps.map(s => s.text)
}));

const twRecipesBlock = generateRecipesBlock(twRecipes);
const cnRecipesBlock = generateRecipesBlock(cnRecipes, 'cn');
const enRecipesBlock = generateRecipesBlock(enRecipes, 'en');

// Patch the file
function replaceBlock(str: string, section: string, langMarker: string, replacement: string) {
  // Find the exact block. We'll split the file and recombine
  // This is a bit tricky with regex, instead we parse carefully
  const regex = new RegExp(`(${section}:\\s*\\{[\\s\\S]*?\\n\\s{4}\\})`, 'g');
  // Find the correct section based on langMarker (e.g. "zhTW = {")
  const langMatch = str.indexOf(langMarker);
  if (langMatch === -1) return str;
  // find the block after the langMarker
  const nextLangMatch = str.indexOf('const ', langMatch + 10) === -1 ? str.length : str.indexOf('const ', langMatch + 10);
  
  const span = str.substring(langMatch, nextLangMatch);
  const newSpan = span.replace(regex, (match) => {
      // Replaces ALL matches inside this span? We only want the specific section.
      return match;
  });
  return str; // Actually regex replace is fragile.
}

// Since JS regex on large objects is fragile, let's just emit the 3 files cleanly!
let outStr = fileStr;

// We know the exact structure of src/i18n.ts because we wrote it.
// We can just construct it.
const finalContent = `import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 繁體中文
const zhTW = {
  translation: {
    languageSettings: {
      title: '語言',
      description: '自定義您偏好的語言設定。',
      appLanguage: '應用程式語言',
      appLanguageDesc: '選擇您希望在應用程式中看到的語言',
    },
    nav: {
      home: '首頁',
      shoppingList: '購物清單',
      profile: '個人檔案',
    },
    profile: {
      nameLabel: '姓名',
      emailLabel: '電子郵件',
      phoneLabel: '手機號碼',
      mockName: '林小明',
      mockEmail: 'xiaoming.lin@example.com',
      title: '個人資料',
      subtitle: '管理您的帳戶設定與聯絡資訊',
      changeAvatar: '更換大頭貼',
      avatarSize: '建議尺寸 500x500px',
      save: '儲存變更',
      saving: '儲存中...',
      saveSuccess: '儲存成功！',
      personalInfo: '個人資料',
      personalInfoDesc: '管理您的帳戶詳細資訊與密碼。',
      purchaseHistory: '購買記錄',
      purchaseHistoryDesc: '查看您過去的訂單。',
      dietary: '飲食偏好',
      dietaryDesc: '設定過敏原與飲食限制。',
      savedRecipes: '收藏食譜',
      savedRecipesDesc: '您喜愛的食譜清單。',
      systemSettings: '系統設定',
      systemSettingsDesc: '語言、通知與隱私。',
      logout: '退出登錄'
    },
    createAccount: {
      title: '建立帳號',
      subtitle: '加入 Cook Smart，開啟您的烹飪禪意之旅。',
      username: '使用者名稱',
      usernamePlaceholder: '輸入您的使用者名稱',
      email: '電子郵件',
      emailPlaceholder: '輸入您的電子郵件',
      password: '密碼',
      passwordPlaceholder: '設定至少 8 碼的密碼',
      confirmPassword: '確認密碼',
      confirmPasswordPlaceholder: '再次輸入您的密碼',
      register: '註冊',
      alreadyHaveAccount: '已有帳號？登入'
    },
    topbar: {
      searchPlaceholder: '搜尋食譜...',
      back: '返回',
      menuAbout: '關於 Cook Smart',
      logout: '退出登錄'
    },
    ingredients: ${formatObj(twIg)},
    categories: ${formatObj(twCat)},
    amounts: ${formatObj(twAm)},
    assistant: {
      error: '抱歉，生成食譜時發生錯誤。請稍後再試。',
      title: '智慧食譜生成器',
      askIngredients: '您目前有哪些食材？',
      placeholder: '例如：番茄、雞蛋、洋蔥...',
      generating: 'AI 正撰寫食譜中...',
      generateBtn: '開始生成食譜',
      time: '烹飪時間',
      difficulty: '難易度',
      easy: '簡單',
      ingredients: '所需食材：',
      steps: '步驟說明：',
      regenerate: '重新生成',
      save: '儲存食譜'
    },
    home: {
      heroTitle: '今天想吃什麼？',
      heroSubtitle: '挑選一個分類，我們為您推薦餐點。',
      categories: {
        all: '全部',
        quick: '快速',
        healthy: '健康',
        vegetarian: '素食',
        highProtein: '高蛋白',
        lowCalorie: '低熱量',
        random: '隨機',
        breakfast: '早餐',
        dinner: '晚餐',
      },
      searchResults: '搜尋結果: "{{query}}"',
      recommendations: '推薦食譜',
      searchHint: '根據您的關鍵字「{{query}}」篩選出的推薦內容',
      viewAll: '查看全部',
      viewRecipe: '查看食譜',
      noResults: '找不到相關食譜',
      tryOtherKeywords: '試試搜尋其他關鍵字',
    },
    tags: {
      "蛋奶素": "蛋奶素",
      "健康": "健康",
      "晚餐": "晚餐",
      "低熱量": "低熱量",
      "高蛋白": "高蛋白",
      "早餐": "早餐",
      "甜點": "甜點",
      "快速": "快速",
      "素食": "素食",
      "純素": "純素",
    },
    times: {
      "30 分鐘": "30 分鐘",
      "20 分鐘": "20 分鐘",
      "25 分鐘": "25 分鐘",
      "15 分鐘": "15 分鐘",
      "40 分鐘": "40 分鐘",
      "5 分鐘": "5 分鐘",
      "35 分鐘": "35 分鐘"
    },
    recipes: ${twRecipesBlock}
  },
};

// 簡體中文
const zhCN = {
  translation: {
    languageSettings: {
      title: '语言',
      description: '自定义您偏好的语言设置。',
      appLanguage: '应用程序语言',
      appLanguageDesc: '选择您希望在应用程序中看到的语言',
    },
    nav: {
      home: '首页',
      shoppingList: '购物清单',
      profile: '个人档案',
    },
    profile: {
      nameLabel: '姓名',
      emailLabel: '电子邮件',
      phoneLabel: '手机号码',
      mockName: '林小明',
      mockEmail: 'xiaoming.lin@example.com',
      title: '个人资料',
      subtitle: '管理您的帐户设置与联系信息',
      changeAvatar: '更换头像',
      avatarSize: '建议尺寸 500x500px',
      save: '保存更改',
      saving: '保存中...',
      saveSuccess: '保存成功！',
      personalInfo: '个人资料',
      personalInfoDesc: '管理您的帐户详细信息与密码。',
      purchaseHistory: '购买记录',
      purchaseHistoryDesc: '查看您过去的订单。',
      dietary: '饮食偏好',
      dietaryDesc: '设置过敏原与饮食限制。',
      savedRecipes: '收藏食谱',
      savedRecipesDesc: '您喜爱的食谱清单。',
      systemSettings: '系统设置',
      systemSettingsDesc: '语言、通知与隐私。',
      logout: '退出登录'
    },
    createAccount: {
      title: '创建帐户',
      subtitle: '加入 Cook Smart，开启您的烹饪禅意之旅。',
      username: '用户名',
      usernamePlaceholder: '输入您的用户名',
      email: '电子邮件',
      emailPlaceholder: '输入您的电子邮件',
      password: '密码',
      passwordPlaceholder: '设定至少 8 码的密码',
      confirmPassword: '确认密码',
      confirmPasswordPlaceholder: '再次输入您的密码',
      register: '注册',
      alreadyHaveAccount: '已有帐户？登录'
    },
    topbar: {
      searchPlaceholder: '搜索食谱...',
      back: '返回',
      menuAbout: '关于 Cook Smart',
      logout: '退出登录'
    },
    ingredients: ${formatObj(cnIg)},
    categories: ${formatObj(cnCat)},
    amounts: ${formatObj(cnAm)},
    assistant: {
      error: '抱歉，生成食谱时发生错误。请稍后再试。',
      title: '智慧食谱生成器',
      askIngredients: '您目前有哪些食材？',
      placeholder: '例如：番茄、鸡蛋、洋葱...',
      generating: 'AI 正撰写食谱中...',
      generateBtn: '开始生成食谱',
      time: '烹饪时间',
      difficulty: '难易度',
      easy: '简单',
      ingredients: '所需食材：',
      steps: '步骤说明：',
      regenerate: '重新生成',
      save: '保存食谱'
    },
    home: {
      heroTitle: '今天想吃什么？',
      heroSubtitle: '挑选一个分类，我们为您推荐餐点。',
      categories: {
        all: '全部',
        quick: '快速',
        healthy: '健康',
        vegetarian: '素食',
        highProtein: '高蛋白',
        lowCalorie: '低热量',
        random: '随机',
        breakfast: '早餐',
        dinner: '晚餐',
      },
      searchResults: '搜索结果: "{{query}}"',
      recommendations: '推荐食谱',
      searchHint: '根据您的关键字「{{query}}」筛选出的推荐内容',
      viewAll: '查看全部',
      viewRecipe: '查看食谱',
      noResults: '找不到相关食谱',
      tryOtherKeywords: '试试搜索其他关键字',
    },
    tags: {
      "蛋奶素": "蛋奶素",
      "健康": "健康",
      "晚餐": "晚餐",
      "低热量": "低热量",
      "高蛋白": "高蛋白",
      "早餐": "早餐",
      "甜点": "甜点",
      "快速": "快速",
      "素食": "素食",
      "纯素": "纯素",
    },
    times: {
      "30 分鐘": "30 分钟",
      "20 分鐘": "20 分钟",
      "25 分鐘": "25 分钟",
      "15 分鐘": "15 分钟",
      "40 分鐘": "40 分钟",
      "5 分鐘": "5 分钟",
      "35 分鐘": "35 分钟"
    },
    recipes: ${cnRecipesBlock}
  },
};

// 英文
const en = {
  translation: {
    languageSettings: {
      title: 'Language',
      description: 'Customize your preferred language settings.',
      appLanguage: 'App Language',
      appLanguageDesc: 'Select the language you want to see in the app',
    },
    nav: {
      home: 'Home',
      shoppingList: 'List',
      profile: 'Profile',
    },
    profile: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      phoneLabel: 'Phone Number',
      mockName: 'Xiaoming Lin',
      mockEmail: 'xiaoming.lin@example.com',
      title: 'Profile',
      subtitle: 'Manage your account settings and contact info',
      changeAvatar: 'Change Avatar',
      avatarSize: 'Recommended size 500x500px',
      save: 'Save Changes',
      saving: 'Saving...',
      saveSuccess: 'Saved!',
      personalInfo: 'Personal Info',
      personalInfoDesc: 'Manage your account details and password.',
      purchaseHistory: 'Purchase History',
      purchaseHistoryDesc: 'View your past orders.',
      dietary: 'Dietary Preferences',
      dietaryDesc: 'Set allergens and dietary restrictions.',
      savedRecipes: 'Saved Recipes',
      savedRecipesDesc: 'List of your favorite recipes.',
      systemSettings: 'System Settings',
      systemSettingsDesc: 'Language, notifications, and privacy.',
      logout: 'Log out'
    },
    createAccount: {
      title: 'Create Account',
      subtitle: 'Join Cook Smart and start your culinary zen journey.',
      username: 'Username',
      usernamePlaceholder: 'Enter your username',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      password: 'Password',
      passwordPlaceholder: 'Set a password with at least 8 characters',
      confirmPassword: 'Confirm Password',
      confirmPasswordPlaceholder: 'Re-enter your password',
      register: 'Register',
      alreadyHaveAccount: 'Already have an account? Log in'
    },
    topbar: {
      searchPlaceholder: 'Search recipes...',
      back: 'Back',
      menuAbout: 'About Cook Smart',
      logout: 'Log out'
    },
    ingredients: ${formatObj(enIg)},
    categories: ${formatObj(enCat)},
    amounts: ${formatObj(enAm)},
    assistant: {
      error: 'Sorry, an error occurred while generating the recipe. Please try again later.',
      title: 'Smart Recipe Generator',
      askIngredients: 'What ingredients do you have right now?',
      placeholder: 'E.g., tomato, eggs, onion...',
      generating: 'AI is writing recipe...',
      generateBtn: 'Generate Recipe',
      time: 'Cooking Time',
      difficulty: 'Difficulty',
      easy: 'Easy',
      ingredients: 'Ingredients required:',
      steps: 'Step by step:',
      regenerate: 'Regenerate',
      save: 'Save Recipe'
    },
    home: {
      heroTitle: 'What to eat today?',
      heroSubtitle: 'Pick a category, and we will recommend meals for you.',
      categories: {
        all: 'All',
        quick: 'Quick',
        healthy: 'Healthy',
        vegetarian: 'Vegetarian',
        highProtein: 'High Protein',
        lowCalorie: 'Low Calorie',
        random: 'Random',
        breakfast: 'Breakfast',
        dinner: 'Dinner',
      },
      searchResults: 'Search Results: "{{query}}"',
      recommendations: 'Recommended Recipes',
      searchHint: 'Recommended content filtered by your keyword "{{query}}"',
      viewAll: 'View All',
      viewRecipe: 'View Recipe',
      noResults: 'No relevant recipes found',
      tryOtherKeywords: 'Try other keywords',
    },
    tags: {
      "蛋奶素": "Ovo-Lacto Vegetarian",
      "健康": "Healthy",
      "晚餐": "Dinner",
      "低熱量": "Low Calorie",
      "高蛋白": "High Protein",
      "早餐": "Breakfast",
      "甜點": "Dessert",
      "快速": "Quick",
      "素食": "Vegetarian",
      "純素": "Vegan",
    },
    times: {
      "30 分鐘": "30 mins",
      "20 分鐘": "20 mins",
      "25 分鐘": "25 mins",
      "15 分鐘": "15 mins",
      "40 分鐘": "40 mins",
      "5 分鐘": "5 mins",
      "35 分鐘": "35 mins"
    },
    recipes: ${enRecipesBlock}
  },
};

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    'zh-TW': zhTW,
    'zh-CN': zhCN
  },
  lng: 'zh-TW',
  fallbackLng: 'zh-TW',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
`;

// wait, I missed the recipe / shoppingList strings that were in i18n
// I'll extract them from the original file and splice them back.
// Since the file is getting complex, let me just run a script that merges them properly to preserve goToOrder etc!
EOF
