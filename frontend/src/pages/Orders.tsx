import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Package, ReceiptText, ArrowRight, Plus } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { RECIPES } from '../data';
import { useLocalizedRecipes } from '../lib/localize';
import { useTranslation } from 'react-i18next';

export default function Orders() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState('');

  // We mock the past recipes to act as "Stores"
  const localizedRecipes = useLocalizedRecipes(RECIPES);
  const pastRecipes = localizedRecipes.map((recipe, idx) => ({
    ...recipe,
    lastOrdered: idx === 0 ? t('orders.justNow') : t('orders.twoDaysAgo'),
    price: t('orders.freeDelivery'),
  }));

  const handleReorder = (recipeId: string, ingredients: any[]) => {
    const saved = localStorage.getItem('shopping_lists');
    let lists = [];
    if (saved) {
      try {
        lists = JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (recipe) {
      const newListData = {
        ...recipe,
        itemsCount: ingredients.length,
        progress: 0,
        lastUpdated: '剛剛' // hardcoded or can be changed later
      };
      
      const existingIndex = lists.findIndex((l: any) => l.id === recipe.id);
      if (existingIndex >= 0) {
        lists[existingIndex] = { ...lists[existingIndex], ...newListData };
      } else {
        lists.unshift(newListData);
      }
      
      localStorage.setItem('shopping_lists', JSON.stringify(lists));
      window.dispatchEvent(new Event('shopping_lists_updated'));
    }

    setToastMessage(t('orders.readdedToCart'));
    setTimeout(() => {
      setToastMessage('');
      navigate(`/shopping-list/all`, { state: { selectedIds: ingredients.map(i => i.id) } });
    }, 500); // Navigate a bit after toast
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
            {t('orders.title')}
          </h1>
          <div className="w-10"></div> {/* Spacer to center title */}
        </header>

        {/* Removed Tabs */}
      </div>

      <div className="flex-1 overflow-x-hidden">
        <div className="divide-y divide-outline-variant/20">
          {pastRecipes.map((recipe) => (
            <div key={recipe.id} className="pt-2 pb-0 space-y-1">
                  {/* Store Header */}
                  <div className="px-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-outline-variant/50">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title} 
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop';
                          }}
                        />
                      </div>
                      <div>
                        <h2 className="font-bold text-on-surface text-sm">{recipe.title}</h2>
                      </div>
                    </div>
                    <Link
                      to={`/recipe/${recipe.id}`}
                      className="w-6 h-6 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors shrink-0"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                    {/* Horizontal Items List */}
                  <div className="px-4">
                    <div className="flex gap-2.5 overflow-x-auto snap-x hide-scrollbar mb-2">
                      {recipe.ingredients.slice(0, 5).map((ing, i) => (
                        <div key={ing.id} className="w-24 shrink-0 snap-start flex flex-col">
                          <div className="relative aspect-square w-full rounded-xl bg-surface-container-low mb-1.5 overflow-hidden">
                            {ing.image ? (
                              <img 
                                src={ing.image} 
                                alt={ing.name} 
                                className="w-full h-full object-cover" 
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop';
                                }}
                              />
                            ) : (
                              <div className="w-full h-full bg-surface-container flex items-center justify-center text-on-surface-variant font-bold text-lg">
                                {ing.name.charAt(0)}
                              </div>
                            )}
                            {/* Add button overlay */}
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                const saved = localStorage.getItem('shopping_lists');
                                let lists = [];
                                if (saved) {
                                  try { lists = JSON.parse(saved); } catch (e) {}
                                }
                                const existingIndex = lists.findIndex((l: any) => l.id === recipe.id);
                                if (existingIndex >= 0) {
                                  // Update count and ensure ingredients array has this item
                                  lists[existingIndex].itemsCount = (lists[existingIndex].itemsCount || 0) + 1;
                                  lists[existingIndex].lastUpdated = '剛剛';
                                  if (!lists[existingIndex].ingredients) lists[existingIndex].ingredients = [];
                                  lists[existingIndex].ingredients.push(ing);
                                } else {
                                  lists.unshift({
                                    ...recipe,
                                    ingredients: [ing],
                                    itemsCount: 1,
                                    progress: 0,
                                    lastUpdated: '剛剛'
                                  });
                                }
                                localStorage.setItem('shopping_lists', JSON.stringify(lists));
                                window.dispatchEvent(new Event('shopping_lists_updated'));
                                setToastMessage(t('orders.addedToCart', { item: ing.name }));
                                setTimeout(() => setToastMessage(''), 2500);
                              }}
                              className="absolute bottom-1.5 right-1.5 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-transform z-10"
                            >
                              <Plus className="w-4 h-4 font-bold" />
                            </button>
                          </div>
                          <h3 className="font-medium text-[13px] text-on-surface leading-snug line-clamp-2 mt-1">
                            {ing.name}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-24 left-1/2 z-50 px-6 py-3 bg-inverse-surface text-inverse-on-surface rounded-full shadow-lg whitespace-nowrap text-sm font-medium"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
