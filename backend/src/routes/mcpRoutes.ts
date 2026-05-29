import { Router, Request, Response } from 'express';

export const mcpRouter = Router();

// 1. 搜尋食譜推薦
mcpRouter.post('/search_recipes', (req: Request, res: Response) => {
  const { ingredients, preference } = req.body;
  
  console.log(`[MCP Tool] search_recipes called with ingredients: ${ingredients}, preference: ${preference}`);

  // Mock Data
  res.json({
    status: 'success',
    data: [
      {
        recipe_id: 'r001',
        name: '番茄炒蛋',
        missing_ingredients: ['蔥']
      }
    ]
  });
});

// 2. 加入購物清單
mcpRouter.post('/add_to_shopping_list', (req: Request, res: Response) => {
  const { items } = req.body;

  console.log(`[MCP Tool] add_to_shopping_list called with items: ${items}`);

  // Mock Data
  res.json({
    status: 'success',
    message: '已成功加入購物清單'
  });
});

// 3. 取得長期飲食檔案
mcpRouter.get('/get_user_dietary_profile', (req: Request, res: Response) => {
  console.log(`[MCP Tool] get_user_dietary_profile called`);

  // Mock Data
  res.json({
    status: 'success',
    data: {
      allergies: ['peanut'],
      dietary_goal: 'keto'
    }
  });
});

// 4. 管理員：切換功能開關
mcpRouter.post('/toggle_admin_feature_flag', (req: Request, res: Response) => {
  const { feature_name, status } = req.body;

  console.log(`[MCP Tool] toggle_admin_feature_flag called with feature_name: ${feature_name}, status: ${status}`);

  // Mock Data
  res.json({
    status: 'success',
    message: `Feature '${feature_name}' is now ${status ? 'enabled' : 'disabled'}.`
  });
});
