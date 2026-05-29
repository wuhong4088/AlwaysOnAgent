# CookSmart Always-On Agent MVP 願景與提案整合

## 核心願景 (Core Vision)
將原本基於文字輸入的 CookSmart 食譜推薦系統，轉型為**「隨時待命的語音廚房助理」**。透過 Rasa 的 Always-On Agent 架構，這個助理不僅具備長期記憶能力，還能主動操作後台系統為使用者服務。

## 四大提案整合 (Four Key Enhancements)

### 1. 語音廚房助理 (Voice-First Coworker)
**傳統 CookSmart**：使用者須在手機上點擊 UI 並輸入食材。
**Always-On Agent**：結合 Speechmatics (ASR) 與 Rime (TTS)，使用者只需說「嗨 CookSmart，我冰箱有雞蛋跟番茄，今晚可以煮什麼？」，Agent 就用語音給出推薦，讓使用者在廚房可以雙手並用做菜。

### 2. 跨 Session 飲食記憶 (Long-Term Dietary Memory)
**傳統 CookSmart**：無狀態，每次使用都是重新開始。
**Always-On Agent**：利用 Rasa CALM 作為大腦，記住使用者的過敏原（如花生）、飲食偏好（如生酮飲食），以及過去幾週已經吃過的食譜，自動調整推薦邏輯，無須反覆提醒。

### 3. 主動工具操作 (Agentic MCP Integration)
**傳統 CookSmart**：單純生成字串，後續操作由前端邏輯硬編碼處理。
**Always-On Agent**：Agent 透過 Model Context Protocol (MCP) 直接呼叫 CookSmart Backend 提供的 Mock API。例如，Agent 能主動將欠缺的食材「加入購物清單」，並直接告知使用者處理進度。

### 4. 後台維運助理 (Admin Coworker)
**傳統 CookSmart**：維運人員需要登入 C# Admin 系統點擊 UI 修改 Feature Flag 或封鎖帳號。
**Always-On Agent**：身兼管理員身分，開發者可以直接對 Agent 下達指令（如：「把推薦食譜的數量改為 5 個」），Agent 便會透過 MCP 去呼叫 Admin Backend API 完成設定。
