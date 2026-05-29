import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, BrainCircuit, X, RefreshCw, Sparkles } from 'lucide-react';
import { generateRecipe } from '../services/geminiService';
import { Recipe } from '../types';
import { RECIPES } from '../data';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function SmartAssistant() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [ingredients, setIngredients] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Recipe | null>(null);
  const [listCount, setListCount] = useState(0);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const updateCount = () => {
      const saved = localStorage.getItem('shopping_lists');
      if (saved) {
        try {
          const lists = JSON.parse(saved);
          const totalItems = lists.reduce((sum: number, list: any) => sum + (list.itemsCount || 0), 0);
          setListCount(totalItems);
        } catch (e) {
          setListCount(0);
        }
      } else {
        setListCount(0);
      }
    };

    updateCount();
    window.addEventListener('shopping_lists_updated', updateCount);
    return () => window.removeEventListener('shopping_lists_updated', updateCount);
  }, []);

  const handleGenerate = async () => {
    if (!ingredients.trim()) return;
    setLoading(true);
    try {
      const recipe = await generateRecipe(ingredients, i18n.language);
      setResult(recipe);
    } catch (error) {
      alert(t('assistant.error'));
    } finally {
      setLoading(false);
    }
  };

  const location = useLocation();

  if (location.pathname.startsWith('/shopping-list')) {
    return null;
  }

  return (
    <>
      {/* Floating My Lists Button */}
      {listCount > 0 && (
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/shopping-list/all')}
          className="fixed bottom-24 right-5 z-40 bg-surface-container-high text-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-surface-container-highest transition-colors border border-outline-variant"
        >
          <ShoppingBag className="w-5 h-5" />
          
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white shadow-sm scale-90">
            {listCount > 99 ? '99+' : listCount}
          </div>
        </motion.button>
      )}

      {/* AI Assistant Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-5 z-40 bg-cta text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-cta-hover transition-colors"
      >
        <BrainCircuit className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ y: 50, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.9 }}
              className="bg-surface w-full max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] border border-outline-variant"
            >
              <div className="bg-primary p-6 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="w-6 h-6" />
                  <h3 className="font-bold text-lg">{t('assistant.title')}</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex flex-col gap-6">
                {!result ? (
                  <>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-on-surface-variant">{t('assistant.askIngredients')}</label>
                      <textarea 
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder={t('assistant.placeholder')}
                        className="w-full h-32 p-4 bg-surface-container-low border-transparent rounded-2xl font-medium text-on-surface focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                      />
                    </div>
                    <button 
                      onClick={handleGenerate}
                      disabled={loading || !ingredients.trim()}
                      className="w-full bg-cta text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                      {loading ? t('assistant.generating') : t('assistant.generateBtn')}
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col gap-4">
                    {result.image && (
                      <div className="w-full h-40 rounded-2xl overflow-hidden shadow-md shrink-0">
                        <img src={result.image} alt={result.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="bg-green-50 p-4 rounded-2xl border border-green-200">
                      <h4 className="font-bold text-primary text-xl mb-1">{result.title}</h4>
                      <p className="text-sm text-green-800">{result.description}</p>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-1 bg-surface-container p-3 rounded-xl text-center">
                        <span className="text-[10px] uppercase font-bold text-on-surface-variant block">{t('assistant.time')}</span>
                        <span className="text-sm font-bold text-primary">{result.time}</span>
                      </div>
                      <div className="flex-1 bg-surface-container p-3 rounded-xl text-center">
                        <span className="text-[10px] uppercase font-bold text-on-surface-variant block">{t('assistant.difficulty')}</span>
                        <span className="text-sm font-bold text-primary">{t('assistant.easy')}</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-bold text-sm mb-2">{t('assistant.ingredients')}</h5>
                      <ul className="grid grid-cols-2 gap-2">
                        {result.ingredients.map((ing, i) => (
                          <li key={i} className="text-xs bg-surface-container-high px-3 py-2 rounded-lg flex justify-between">
                            <span>{ing.name}</span>
                            <span className="font-bold text-on-surface-variant">{ing.amount}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-sm mb-2">{t('assistant.steps')}</h5>
                      <div className="space-y-4">
                        {result.steps.map((step, i) => (
                          <div key={i} className="flex gap-3 bg-surface-container p-3 rounded-xl">
                            <span className="shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">{i+1}</span>
                            <div className="flex-1 flex flex-col gap-2">
                              <p className="text-sm leading-relaxed">{step.text}</p>
                              {step.image && (
                                <img src={step.image} alt={`Step ${i+1}`} className="w-full h-24 object-cover rounded-lg" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button 
                        onClick={() => setResult(null)}
                        className="flex-1 py-3 rounded-full border-2 border-outline-variant font-bold text-sm text-on-surface-variant hover:bg-surface-container transition-colors"
                      >
                        {t('assistant.regenerate')}
                      </button>
                      <button 
                        onClick={() => {
                          if (!result) return;
                          const saved = localStorage.getItem('saved_recipes');
                          let lists = [];
                          if (saved) {
                            try { lists = JSON.parse(saved); } catch (e) {}
                          }
                          
                          // Avoid duplicates by title (since AI recipes don't have stable IDs)
                          const exists = lists.find((r: any) => r.title === result.title);
                          if (!exists) {
                            const aiRecipeId = 'ai_' + Date.now();
                            const newListData = {
                              ...result,
                              id: aiRecipeId,
                            };
                            lists.unshift(newListData);
                            localStorage.setItem('saved_recipes', JSON.stringify(lists));
                          }
                          
                          // Show toast
                          setShowToast(true);
                          setTimeout(() => setShowToast(false), 3000);
                        }}
                        className="flex-1 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-container transition-colors shadow-md"
                      >
                        {t('assistant.save')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-24 left-1/2 z-[60] px-6 py-3 bg-inverse-surface text-inverse-on-surface rounded-full shadow-lg whitespace-nowrap text-sm font-medium"
          >
            {t('profile.saveSuccessDesc', { defaultValue: 'Recipe saved to your favorites!' })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
