import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Timer, SearchX } from 'lucide-react';
import { RECIPES, getCategoryColor } from '../data';
import { useLocalizedRecipes } from '../lib/localize';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  
  const searchCategories = [
    { id: '全部', label: t('home.categories.all') },
    { id: '快速', label: t('home.categories.quick') },
    { id: '健康', label: t('home.categories.healthy') },
    { id: '素食', label: t('home.categories.vegetarian') },
    { id: '高蛋白', label: t('home.categories.highProtein') },
    { id: '低熱量', label: t('home.categories.lowCalorie') },
    { id: '隨機', label: t('home.categories.random') },
    { id: '早餐', label: t('home.categories.breakfast') },
    { id: '晚餐', label: t('home.categories.dinner') },
  ];

  const searchQuery = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('q')?.toLowerCase() || '';
  }, [location.search]);

  const rawFilteredRecipes = useMemo(() => {
    let result = RECIPES;

    if (searchQuery) {
      result = result.filter(recipe => 
        recipe.title.toLowerCase().includes(searchQuery) || 
        recipe.description.toLowerCase().includes(searchQuery) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery))
      );
    } else if (activeCategory !== '全部') {
      if (activeCategory === '隨機') {
        // Just return a shuffled slice
        result = [...RECIPES].sort(() => Math.random() - 0.5).slice(0, 10);
      } else {
        result = result.filter(recipe => recipe.tags.includes(activeCategory));
      }
    }

    return result;
  }, [searchQuery, activeCategory]);

  const filteredRecipes = useLocalizedRecipes(rawFilteredRecipes);

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <AnimatePresence mode="wait">
        {!searchQuery && (
          <motion.section 
            key="hero"
            initial={{ height: 'auto', opacity: 1, scaleY: 1 }}
            exit={{ height: 0, opacity: 0, scaleY: 0, overflow: 'hidden' }}
            transition={{ duration: 0.3 }}
            className="pt-6 pb-4 px-5 bg-surface"
          >
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-on-surface font-display text-2xl font-bold text-center mb-1"
            >
              {t('home.heroTitle')}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-on-surface-variant text-sm text-center mb-6"
            >
              {t('home.heroSubtitle')}
            </motion.p>
            
            {/* Style Pills */}
            <div className="flex px-5 md:justify-center gap-2 overflow-x-auto pb-4 -mx-5 w-screen md:w-auto md:mx-0 hide-scrollbar h-[63px] items-center">
              <div className="w-1 shrink-0 md:hidden"></div>
              {searchCategories.map((style, idx) => (
                <motion.button
                  onClick={() => setActiveCategory(style.id)}
                  key={style.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className={`flex shrink-0 min-w-[61px] items-center justify-center rounded-full h-[35px] px-4 text-sm font-bold transition-colors whitespace-nowrap active:scale-95 ${
                    activeCategory === style.id 
                      ? 'bg-primary text-on-primary' 
                      : 'bg-secondary-container text-on-secondary-container hover:bg-outline-variant/30'
                  }`}
                >
                  {style.label}
                </motion.button>
              ))}
              <div className="w-1 shrink-0 md:hidden"></div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Recommendations Section */}
      <section className="px-5 pt-3">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-display text-lg font-bold text-on-surface">
              {searchQuery ? t('home.searchResults', { query: searchQuery }) : t('home.recommendations')}
            </h2>
            {searchQuery && (
              <p className="text-[10px] text-on-surface-variant mt-0.5">
                {t('home.searchHint', { query: searchQuery })}
              </p>
            )}
          </div>
          {!searchQuery && (
            <button
              onClick={() => setActiveCategory('全部')}
              className="text-primary font-bold text-xs hover:bg-surface-container px-2 py-1 rounded transition-colors"
            >
              {t('home.viewAll')}
            </button>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((recipe, idx) => (
                <motion.article 
                  key={recipe.id}
                  layout
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className="bento-card flex flex-col p-0 overflow-hidden hover:scale-[1.01] w-[331px] mx-auto min-h-[320px]"
                >
                  <Link to={`/recipe/${recipe.id}`} className="relative h-[120px] w-full overflow-hidden shrink-0">
                    <img 
                      alt={recipe.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={recipe.image}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop';
                      }}
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
                      {recipe.tags.map(tag => (
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
                        {t('home.viewRecipe')}
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
                <SearchX className="w-12 h-12 mb-3 opacity-20" />
                <p className="text-base font-bold">{t('home.noResults')}</p>
                <p className="text-xs opacity-60">{t('home.tryOtherKeywords')}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
