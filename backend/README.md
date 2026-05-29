# Cook Smart Backend

Node.js + Express + TypeScript API server for the Cook Smart MVP.

## MVP Endpoints

| Route | Method | Description |
|---|---|---|
| `/health` | GET | Health check |
| `/auth/register` | POST | Register a new user |
| `/auth/login` | POST | Login |
| `/meal/suggest` | POST | Get 3 meal suggestions by preference (quick/healthy/random) |
| `/recipe/generate` | POST | Get full recipe detail by recipeId |
| `/shopping-list/generate` | POST | Get shopping list from recipe ingredients |
| `/redirect/instacart` | GET | Redirect to Instacart search URL |

## Quick Start

```bash
cp .env.example .env
npm install
npm run dev    # → http://localhost:4000
```

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `PORT` | Server port | `4000` |
| `OPENAI_API_KEY` | OpenAI key (leave empty for mock data) | _(empty)_ |
| `OPENAI_MODEL` | Model to use | `gpt-4.1-mini` |
| `FRONTEND_URL` | CORS origin | `http://localhost:5173` |
| `INSTACART_BASE_URL` | Instacart redirect base | `https://www.instacart.com/store/search` |

## Architecture

```
src/
├── config/env.ts          # Centralized env config
├── routes/                # Express route handlers
│   ├── auth.ts
│   ├── meal.ts
│   ├── mvpRecipe.ts
│   ├── shoppingList.ts
│   └── redirect.ts
├── services/              # Business logic
│   ├── openaiService.ts   # OpenAI + mock fallback
│   ├── authService.ts
│   ├── mealService.ts
│   ├── mvpRecipeService.ts
│   ├── shoppingListService.ts
│   └── redirectService.ts
├── types/                 # TypeScript interfaces
├── utils/                 # Shared utilities
└── index.ts               # App entry point
```

## Mock Fallback

When `OPENAI_API_KEY` is not set, the API returns deterministic mock data covering 9 recipes across 3 categories (quick, healthy, random). This allows full E2E testing without OpenAI costs.
