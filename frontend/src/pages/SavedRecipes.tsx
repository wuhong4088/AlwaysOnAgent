import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Timer, BookmarkX, Heart } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getCategoryColor } from '../data';
import { Recipe } from '../types';

export default function SavedRecipes() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('saved_recipes');
    if (saved) {
      try {
        setSavedRecipes(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse saved recipes', e);
      }
    }
  }, []);

  const handleRemove = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = savedRecipes.filter(r => r.id !== id);
    setSavedRecipes(updated);
    localStorage.setItem('saved_recipes', JSON.stringify(updated));
  };

  return (
    <div className="pb-32 min-h-screen bg-white flex flex-col">
      <div className="sticky top-0 z-30 bg-white">
        {/* Header */}
        <header className="px-4 py-2 flex items-center justify-between">
          <button 
            onClick={() => navigate('/profile')}
            className="p-2 -ml-2 rounded-full hover:bg-surface-container-low transition-colors text-on-surface"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-base font-bold text-on-surface absolute left-1/2 -translate-x-1/2">
            {t('profile.savedRecipes', { defaultValue: 'Saved Recipes' })}
          </h1>
          <div className="w-10"></div>
        </header>
      </div>

      <div className="flex-1 overflow-x-hidden pt-4 px-5">
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {savedRecipes.length > 0 ? (
              savedRecipes.map((recipe, idx) => (
                <motion.article 
                  key={recipe.id}
                  layout
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className="bento-card flex flex-col p-0 overflow-hidden hover:scale-[1.01] w-full max-w-[331px] mx-auto min-h-[320px] relative"
                >
                  <button 
                    onClick={(e) => handleRemove(e, recipe.id)}
                    className="absolute top-2 left-2 z-10 w-8 h-8 bg-surface-container-lowest/90 backdrop-blur-sm rounded-full flex items-center justify-center text-error hover:scale-110 transition-transform shadow-sm"
                  >
                    <Heart className="w-4 h-4 fill-current" />
                  </button>

                  <Link to={`/recipe/${recipe.id}`} className="relative h-[120px] w-full overflow-hidden shrink-0">
                    <img 
                      alt={recipe.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={recipe.image || '/images/recipes/bowl.png'}
                    />
                    <div className="absolute top-2 right-2 bg-surface-container-lowest/90 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
                      <Timer className="w-3 h-3 text-primary" />
                      <span className="text-[10px] font-bold text-on-surface">{recipe.time}</span>
                    </div>
                  </Link>
                  <div className="p-4 flex flex-col gap-2 flex-grow justify-between">
                    <div>
                      <h3 className="font-display text-lg font-bold text-on-surface mb-0.5 group-hover:text-primary transition-colors line-clamp-1">
                        {recipe.title}
                      </h3>
                      <p className="text-on-surface-variant text-xs line-clamp-2 leading-relaxed">
                        {recipe.description}
                      </p>
                    </div>
                    <div className="flex gap-1.5 overflow-x-auto no-scrollbar mask-gradient-right">
                      {(recipe.tags || []).map(tag => (
                        <span key={tag} className={`whitespace-nowrap px-2 py-0.5 rounded-full text-[9px] font-bold ${getCategoryColor(tag)}`}>
                          {t(`tags.${tag}`, { defaultValue: tag })}
                        </span>
                      ))}
                    </div>
                    <div className="mt-1">
                      <Link 
                        to={`/recipe/${recipe.id}`}
                        className="block w-full py-2.5 rounded-full bg-cta text-white font-bold text-sm text-center hover:bg-cta-hover transition-colors shadow-md active:scale-[0.98]"
                      >
                        {t('home.viewRecipe', { defaultValue: 'View Recipe' })}
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center justify-center py-16 text-on-surface-variant"
              >
                <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mb-4 text-on-surface-variant/50">
                  <BookmarkX className="w-8 h-8" />
                </div>
                <p className="text-base font-bold">{t('profile.noSavedRecipes', { defaultValue: 'No Saved Recipes' })}</p>
                <p className="text-xs opacity-60 text-center mt-1 px-4">{t('profile.saveRecipesHint', { defaultValue: 'Find recipes you like and tap the heart icon to save them here.' })}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
