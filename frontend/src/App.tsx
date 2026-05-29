import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import DietaryPreferences from './pages/DietaryPreferences';
import Settings from './pages/Settings';
import LanguageSettings from './pages/LanguageSettings';
import RecipeDetail from './pages/RecipeDetail';
import ShoppingList from './pages/ShoppingList';
import Orders from './pages/Orders';
import SavedRecipes from './pages/SavedRecipes';
import CreateAccount from './pages/CreateAccount';
import About from './pages/About';
import TopBar from './components/layout/TopBar';
import SmartAssistant from './components/SmartAssistant';
import { useLocation } from 'react-router-dom';

function MainLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isSplash = location.pathname === '/splash';
  
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <div className="w-full max-w-md bg-surface min-h-screen shadow-2xl relative flex flex-col">
        {!isSplash && <TopBar />}
        <main className="flex-grow">
          {children}
          {!isSplash && <SmartAssistant />}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/splash" replace />} />
          <Route path="/splash" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
          <Route path="/profile/dietary" element={<DietaryPreferences />} />
          <Route path="/profile/saved" element={<SavedRecipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/language" element={<LanguageSettings />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/shopping-list/:id" element={<ShoppingList />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
