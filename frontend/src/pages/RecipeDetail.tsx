import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { RECIPES, getCategoryColor } from '../data';
import { useLocalizedRecipe } from '../lib/localize';
import { ListOrdered, UtensilsCrossed, ShoppingCart, Check, Heart, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

export default function RecipeDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  // Try to find the recipe in RECIPES, fallback to saved AI recipes
  const rawRecipe = RECIPES.find(r => r.id === id) || 
    (() => {
      const saved = localStorage.getItem('saved_recipes');
      if (saved) {
        try { return JSON.parse(saved).find((r: any) => r.id === id); } catch (e) {}
      }
      return undefined;
    })();

  const localizedRecipe = useLocalizedRecipe(rawRecipe || RECIPES[0]);
  const recipe = rawRecipe ? localizedRecipe : undefined;
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>(() => {
    // Default all ingredients to checked (true)
    const initial: Record<string, boolean> = {};
    recipe?.ingredients.forEach(ing => {
      initial[ing.id] = true;
    });
    return initial;
  });
  const [isSaved, setIsSaved] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const initial: Record<string, boolean> = {};
    recipe?.ingredients.forEach(ing => {
      initial[ing.id] = true;
    });
    setCheckedIngredients(initial);
  }, [recipe?.id]);

  useEffect(() => {
    if (!recipe) return;
    const saved = localStorage.getItem('saved_recipes');
    if (saved) {
      try {
        const lists = JSON.parse(saved);
        setIsSaved(lists.some((r: any) => r.id === recipe.id));
      } catch (e) {}
    }
  }, [recipe]);

  const toggleIngredient = (ingredientId: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [ingredientId]: !prev[ingredientId],
    }));
  };

  const toggleSave = () => {
    if (!recipe) return;
    const saved = localStorage.getItem('saved_recipes');
    let lists = [];
    if (saved) {
      try { lists = JSON.parse(saved); } catch (e) {}
    }
    
    if (isSaved) {
      lists = lists.filter((r: any) => r.id !== recipe.id);
    } else {
      lists.unshift(recipe);
    }
    
    localStorage.setItem('saved_recipes', JSON.stringify(lists));
    setIsSaved(!isSaved);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const handleGenerateShoppingList = () => {
    if (!recipe) return;

    // Save to localStorage so it appears in MyShoppingLists
    const saved = localStorage.getItem('shopping_lists');
    let lists = [];
    if (saved) {
      try {
        lists = JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved shopping lists', e);
      }
    }

    // Prepare list data
    const selectedIds = Object.entries(checkedIngredients)
      .filter(([_, isChecked]) => isChecked)
      .map(([ingId]) => ingId);

    const filteredIngredients = recipe.ingredients.filter(ing => selectedIds.includes(ing.id));

    const newListData = {
      ...recipe,
      ingredients: filteredIngredients,
      itemsCount: filteredIngredients.length,
      progress: 0,
      lastUpdated: '剛剛'
    };

    // Add or update the list
    const existingIndex = lists.findIndex((l: any) => l.id === recipe.id);
    if (existingIndex >= 0) {
      lists[existingIndex] = { ...lists[existingIndex], ...newListData };
    } else {
      lists.unshift(newListData);
    }

    localStorage.setItem('shopping_lists', JSON.stringify(lists));
    window.dispatchEvent(new Event('shopping_lists_updated'));

    navigate(`/shopping-list/all`, { state: { selectedIds } });
  };

  if (!recipe) return <div className="p-10 text-center">{t('recipe.notFound')}</div>;

  return (
    <div className="pb-32 bg-background min-h-screen">
      {/* Hero Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[45vh] w-full shrink-0"
      >
        <img 
          src={recipe.image || '/images/recipes/bowl.png'} 
          alt={recipe.title} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop';
          }}
        />
        
        {/* Floating Header Actions */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10 bg-gradient-to-b from-black/40 to-transparent">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur shadow-sm flex items-center justify-center text-on-surface hover:bg-surface transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={toggleSave}
            className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur shadow-sm flex items-center justify-center text-on-surface hover:bg-surface transition-colors"
          >
            <Heart className={`w-5 h-5 transition-colors ${isSaved ? 'fill-error text-error' : ''}`} />
          </button>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </motion.div>

      <div className="px-5 -mt-10 relative z-10">
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bento-card p-5 -mt-8 relative z-10"
        >
          <div className="flex gap-2 mb-3">
            {recipe.tags.map(tag => (
              <span key={tag} className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${getCategoryColor(tag)}`}>
                {t(`tags.${tag}`, { defaultValue: tag })}
              </span>
            ))}
            <span className="px-2 py-0.5 bg-primary/5 text-primary rounded-full text-[10px] font-bold">
              {recipe.prepTime}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-on-background mb-2">{recipe.title}</h1>
          <p className="text-on-surface-variant text-sm leading-relaxed">{recipe.description}</p>
        </motion.div>

        {/* Ingredients */}
        <section className="mt-8">
          <h2 className="text-lg font-bold mb-4 flex items-center">
            <UtensilsCrossed className="w-4 h-4 mr-2 text-primary" />
            {t('recipe.ingredients')}
          </h2>
          <div className="bento-card p-5">
            <ul className="space-y-3">
              {recipe.ingredients.map((ing) => (
                <li key={ing.id} className={cn(
                  "flex items-center border-b border-outline-variant/30 pb-3 last:border-0 last:pb-0 transition-opacity duration-300",
                  !checkedIngredients[ing.id] && "opacity-40"
                )}>
                  <button 
                    onClick={() => toggleIngredient(ing.id)}
                    className="flex-1 flex items-center group text-left"
                  >
                    <div className={cn(
                      "relative mr-3 w-5 h-5 border-[1.5px] rounded-full flex items-center justify-center transition-all duration-300",
                      checkedIngredients[ing.id] 
                        ? "border-primary bg-primary shadow-sm" 
                        : "border-outline-variant bg-surface-container-low"
                    )}>
                      {checkedIngredients[ing.id] && (
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                        >
                          <Check className="w-3 h-3 text-white stroke-[3]" />
                        </motion.div>
                      )}
                    </div>
                    <span className={cn(
                      "font-bold text-sm flex-1 transition-all",
                      checkedIngredients[ing.id] ? "text-on-surface" : "text-on-surface-variant line-through decoration-primary/50"
                    )}>
                      {ing.name}
                    </span>
                  </button>
                  <span className="text-xs font-bold text-on-surface-variant">
                    {ing.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Steps */}
        <section className="mt-8">
          <h2 className="text-lg font-bold mb-4 flex items-center">
            <ListOrdered className="w-4 h-4 mr-2 text-primary" />
            {t('recipe.steps')}
          </h2>
          <div className="space-y-4">
            {recipe.steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bento-card p-4 flex gap-3 flex-col"
              >
                {step.image && (
                  <img
                    src={step.image}
                    alt={`Step ${idx + 1}`}
                    className="w-full h-32 object-cover rounded-xl"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                )}
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 text-xs text-center">
                    {idx + 1}
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed pt-0.5">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-surface/80 backdrop-blur-md border-t border-outline-variant/30 p-4 z-40 pb-8 shadow-[0_-8px_30px_rgba(0,0,0,0.05)]">
        <button 
          onClick={handleGenerateShoppingList}
          className="w-full py-4 rounded-full bg-cta text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-cta-hover active:scale-[0.98] transition-all shadow-lg"
        >
          <ShoppingCart className="w-5 h-5" />
          {t('recipe.generateShoppingList', { count: Object.values(checkedIngredients).filter(Boolean).length })}
        </button>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-2 bg-inverse-surface text-inverse-on-surface rounded-full shadow-lg text-sm font-bold animate-in fade-in slide-in-from-top-5 duration-300">
          {isSaved ? t('profile.saveSuccessDesc', { defaultValue: 'Recipe saved to your favorites!' }) : 'Removed from favorites'}
        </div>
      )}
    </div>
  );
}
