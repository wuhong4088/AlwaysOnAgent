export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  category: '生鮮蔬果' | '蛋白質' | '調味料' | '主食' | '其他';
  checked: boolean;
  image?: string;
}

export interface Step {
  text: string;
  image?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  tags: string[];
  prepTime: string;
  ingredients: Ingredient[];
  steps: Step[];
}

export interface UserPreferences {
  vegetarian: boolean;
  glutenFree: boolean;
  nutAllergy: boolean;
  dairyAllergy: boolean;
}

export interface NotificationSettings {
  dailyMealSuggestions: boolean;
  shoppingListReminders: boolean;
  systemUpdates: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}
