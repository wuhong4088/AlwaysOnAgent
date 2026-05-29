# AlwaysOnAgent (CookSmart Hackathon MVP)

歡迎來到 AlwaysOnAgent 專案！這是我們為 2026 波士頓 Rasa "Always-On AI Coworker Hackathon" 所準備的參賽專案。

## 專案簡介
本專案基於現有的 CookSmart (餐點決策助理) 應用程式，並將其升級為具備長期記憶、語音互動以及主動操作工具能力的 **Always-On Digital Coworker**。

## 資料夾結構
為了在單一專案內快速驗證 MVP，我們將原本分散的 CookSmart MVC 專案複製並整合於此：

- `frontend/`: 複製自原 CookSmart 前端，提供使用者操作的 React UI。
- `backend/`: 複製自原 CookSmart Node.js 後端，我們將在此實作提供給 Agent 呼叫的 MCP Mock APIs。
- `docs/`: 本次 Hackathon 專屬的設計與架構文件。

## 設計文件導覽
要了解本次 Hackathon 我們如何改造 CookSmart，請參閱以下文件：
1. [MVP 願景與提案整合](docs/01_mvp_vision.md)
2. [系統架構設計](docs/02_architecture_design.md)
3. [MCP Tools API 規格](docs/03_mcp_tools_spec.md)
4. [Voice-First 使用者流程](docs/04_voice_user_flow.md)

## 開發指南
*(即將更新：如何同時啟動 Frontend, Backend 與 Rasa Agent)*
