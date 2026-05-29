# MCP Tools Specification (Mock APIs)

此文件定義了 CookSmart Backend 暴露給 Rasa Agent 的 MCP (Model Context Protocol) Tools。在 MVP 階段，我們將在 `backend` 的 Express 伺服器中以 Mock 資料的方式實作這些 endpoint。

## 1. 搜尋食譜推薦
- **Tool Name**: `search_recipes`
- **Description**: 根據使用者目前的食材與飲食偏好，搜尋並回傳合適的食譜。
- **Parameters**:
  - `ingredients` (Array of Strings): 冰箱現有的食材（例：`["tomato", "egg"]`）
  - `preference` (String): 使用者的偏好（例：`"healthy"`, `"quick"`）
- **Mock Response**:
  ```json
  {
    "status": "success",
    "data": [
      {
        "recipe_id": "r001",
        "name": "番茄炒蛋",
        "missing_ingredients": ["蔥"]
      }
    ]
  }
  ```

## 2. 加入購物清單
- **Tool Name**: `add_to_shopping_list`
- **Description**: 將缺少的食材加入使用者的 CookSmart 購物清單中。
- **Parameters**:
  - `items` (Array of Strings): 欲購買的食材清單（例：`["蔥"]`）
- **Mock Response**:
  ```json
  {
    "status": "success",
    "message": "已成功加入購物清單"
  }
  ```

## 3. 取得長期飲食檔案
- **Tool Name**: `get_user_dietary_profile`
- **Description**: 取得使用者的過敏原或長期飲食目標，作為 Agent 推薦時的 Context。
- **Parameters**: None
- **Mock Response**:
  ```json
  {
    "status": "success",
    "data": {
      "allergies": ["peanut"],
      "dietary_goal": "keto"
    }
  }
  ```

## 4. 管理員：切換功能開關 (Admin Tool)
- **Tool Name**: `toggle_admin_feature_flag`
- **Description**: 提供給開發者的後台維運工具，用語音或文字控制系統功能。
- **Parameters**:
  - `feature_name` (String): 功能名稱（例：`"ai_recipe_generation"`）
  - `status` (Boolean): 開啟或關閉
- **Mock Response**:
  ```json
  {
    "status": "success",
    "message": "Feature 'ai_recipe_generation' is now enabled."
  }
  ```
