import dotenv from 'dotenv';
dotenv.config();

export const env = {
  port: parseInt(process.env.PORT || '4000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'replace_me',
  openaiApiKey: process.env.OPENAI_API_KEY || '',
  openaiModel: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  instacartBaseUrl: process.env.INSTACART_BASE_URL || 'https://www.instacart.com/store/search',
};
