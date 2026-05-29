import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { RECIPES } from '../data';
import { ShoppingCart, Check, Carrot, Beef, Pipette, X, LayoutGrid, List, MoveDown, ShoppingBag, Trash2, AlertTriangle, ReceiptText } from 'lucide-react';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Define a type for the item based on the data structure
interface ShoppingItem {
  id: string;
  name: string;
  amount: string;
  category?: string;
  checked: boolean;
  quantity: number;
}

export default function ShoppingList() {
  const { t } = useTranslation();
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = RECIPES.find(r => r.id === id);
  const platformsRef = useRef<HTMLElement>(null);

  const [selectedVendor, setSelectedVendor] = useState<'amazon' | 'wholefoods' | 'instacart'>('amazon');
  const [groupByCategory, setGroupByCategory] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleClearAll = () => {
    if (id === 'all') {
      localStorage.removeItem('shopping_lists');
      window.dispatchEvent(new Event('shopping_lists_updated'));
    }
    setItems([]);
    setShowClearConfirm(false);
  };

  const initialItems = useMemo(() => {
    if (id === 'all') {
      const saved = localStorage.getItem('shopping_lists');
      if (saved) {
        try {
           const lists = JSON.parse(saved);
           const allItemsMap = new Map<string, ShoppingItem>();
           lists.forEach((list: any) => {
             // In true fashion, we only pull ingredients if they are added
             // We can just merge everything in the list payload
             (list.ingredients || []).forEach((ing: any) => {
               if (allItemsMap.has(ing.id)) {
                 const current = allItemsMap.get(ing.id)!;
                 // Increment quantity roughly by how many times we see it
                 current.quantity += 1;
               } else {
                 allItemsMap.set(ing.id, { ...ing, checked: false, quantity: 1 });
               }
             });
           });
           return Array.from(allItemsMap.values());
        } catch (e) {
          console.error('Failed to parse lists', e);
        }
      }
      return [];
    }

    if (!recipe) return [];
    const selectedIds = location.state?.selectedIds as string[] | undefined;
    
    if (selectedIds) {
      return recipe.ingredients
        .filter(ing => selectedIds.includes(ing.id))
        .map(ing => ({ ...ing, checked: false, quantity: 1 })) as ShoppingItem[];
    }
    return recipe.ingredients.map(ing => ({ ...ing, checked: false, quantity: 1 })) as ShoppingItem[];
  }, [recipe, location.state, id]);

  const [items, setItems] = useState<ShoppingItem[]>(initialItems);

  // Update total items count in smart assistant whenever local cart changes
  useEffect(() => {
    if (id === 'all') {
      // It's a derived view, you probably don't need to sync it back to lists format exactly,
      // but it represents the combined cart.
    }
  }, [items]);

  const totalPrice = useMemo(() => {
    return items.reduce((sum, item) => sum + (1.5 * item.quantity), 0);
  }, [items]);

  const vendors = useMemo(() => [
    { id: 'amazon', name: 'Amazon Fresh', price: `$ ${totalPrice.toFixed(2)}`, image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Amazon_Fresh_logo_2020.svg'},
    { id: 'wholefoods', name: 'Whole Foods', price: `$ ${(totalPrice * 1.3).toFixed(2)}`, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Whole_Foods_Market_201x_logo.svg/500px-Whole_Foods_Market_201x_logo.svg.png'},
    { id: 'instacart', name: 'Instacart', price: `$ ${(totalPrice * 1.1).toFixed(2)}`, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Instacart_carrot.svg/500px-Instacart_carrot.svg.png'},
  ], [totalPrice]);

  const updateQuantity = (itemId: string, delta: number) => {
    setItems(prev => prev.map(item => {
      if (item.id === itemId) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));

    // Optional: could sync back to localStorage if preferred
  };

  const groupedItems = useMemo(() => {
    if (!groupByCategory) return { [t('shoppingList.allCategory')]: items };
    
    return items.reduce((acc, item) => {
      const cat = item.category ? t(`categories.${item.category}`, { defaultValue: item.category }) : t('shoppingList.otherCategory');
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {} as Record<string, ShoppingItem[]>);
  }, [items, groupByCategory, t]);

  const scrollToPlatforms = () => {
    platformsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (id !== 'all' && !recipe) return <div className="p-10 text-center">{t('shoppingList.listNotFound')}</div>;

  return (
    <div className="pb-40 pt-6 px-5 max-w-md mx-auto min-h-screen bg-background">
      <div className="mb-8 flex justify-between items-start">
        <div>
          <h2 className="font-display text-2xl font-bold text-on-surface mb-2">{t('shoppingList.myCart')}</h2>
          <p className="text-on-surface-variant text-sm">{t('shoppingList.bestCombination')}</p>
        </div>
        {id === 'all' && (
          <button 
            onClick={() => navigate('/orders')}
            className="w-10 h-10 rounded-full border border-outline-variant bg-white flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors shadow-sm"
          >
            <ReceiptText className="w-5 h-5" />
          </button>
        )}
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="space-y-6 mb-10"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{t('shoppingList.itemsToBuy', { count: items.length })}</p>
            <button 
              onClick={() => setGroupByCategory(!groupByCategory)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
                groupByCategory ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant'
              }`}
            >
              {groupByCategory ? <List className="w-3 h-3" /> : <LayoutGrid className="w-3 h-3" />}
              {groupByCategory ? t('shoppingList.ungroup') : t('shoppingList.groupByCategory')}
            </button>
          </div>
          {items.length > 0 && id === 'all' && (
            <button
              onClick={() => setShowClearConfirm(true)}
              className="text-[10px] font-bold text-error bg-error/10 hover:bg-error/20 px-2.5 py-1 rounded-full transition-colors flex items-center gap-1"
            >
              <Trash2 className="w-3 h-3" />
              {t('shoppingList.clear')}
            </button>
          )}
        </div>

        {items.length > 0 ? (
          <div className="space-y-6">
            {(Object.entries(groupedItems) as [string, ShoppingItem[]][]).map(([category, catItems]) => (
              <div key={category} className="space-y-3">
                {groupByCategory && (
                  <h4 className="text-[10px] font-black text-on-surface-variant/60 uppercase tracking-[0.2em] pl-1">
                    {category} ({catItems.length})
                  </h4>
                )}
                <div className="space-y-2">
                  {catItems.map((item) => (
                    <motion.div
                      layout
                      key={item.id}
                      className="w-full flex items-center justify-between px-4 h-[44px] rounded-xl border bg-white border-outline-variant shadow-sm group"
                    >
                      <div className="flex-1 text-left mr-3 line-clamp-1">
                        <p className="font-bold text-[13px] text-on-surface truncate">
                          {t(`ingredients.${item.name.replace(/\s*\([^)]*\)/g, '')}`, { defaultValue: item.name.replace(/\s*\([^)]*\)/g, '') })}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
                        >
                          <span className="text-base font-bold leading-none">-</span>
                        </button>
                        
                        <div className="flex flex-col items-center min-w-[16px]">
                          <span className="text-[13px] font-bold text-on-surface leading-none">{item.quantity}</span>
                        </div>

                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container active:scale-95 transition-all"
                        >
                          <X className="w-2.5 h-2.5 rotate-45 stroke-[3]" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-surface-container-low rounded-2xl p-10 text-center border border-dashed border-outline-variant">
            <ShoppingCart className="w-12 h-12 text-outline-variant mx-auto mb-3" />
            <p className="text-on-surface-variant font-medium">{t('shoppingList.emptyState')}</p>
            <button 
              onClick={() => navigate('/home')}
              className="mt-4 text-primary font-bold text-sm"
            >
              {t('shoppingList.backToHome')}
            </button>
          </div>
        )}
      </motion.div>

      {items.length > 0 && (
        <section ref={platformsRef} className="mb-8 p-5 bg-white rounded-3xl border border-outline-variant shadow-sm scroll-mt-6">
          <h3 className="text-sm font-bold text-on-surface mb-4">{t('shoppingList.bestPlatform')}</h3>
          <div className="space-y-3">
            {vendors.map((vendor) => (
              <button
                key={vendor.id}
                onClick={() => setSelectedVendor(vendor.id as any)}
                className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                  selectedVendor === vendor.id 
                    ? 'border-primary bg-primary/5 ring-4 ring-primary/10' 
                    : 'border-outline-variant bg-white'
                }`}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl overflow-hidden mr-4 shadow-sm bg-white shrink-0 shrink-0">
                    <img src={vendor.image} alt={vendor.name} className="w-full h-full object-contain p-1" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-sm">{vendor.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-sm text-primary">{vendor.price}</p>
                  {vendor.id === 'amazon' && <span className="text-[8px] bg-secondary/10 text-secondary px-1.5 py-0.5 rounded-full font-bold">{t('shoppingList.cheapest')}</span>}
                </div>
              </button>
            ))}
          </div>
        </section>
      )}

      {items.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full p-5 bg-gradient-to-t from-background via-background to-transparent pb-8 z-40">
          <button 
            onClick={() => {
              const url = selectedVendor === 'amazon' ? 'https://www.amazon.com/fresh' : 'https://www.instacart.com';
              const vendor = vendors.find(v => v.id === selectedVendor)?.name;
              window.alert(t('shoppingList.redirectMessage', { vendor }));
            }}
            className="w-full bg-cta hover:bg-cta-hover text-white font-bold h-[45px] rounded-full shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            {t('shoppingList.goToOrder', { vendor: vendors.find(v => v.id === selectedVendor)?.name })}
          </button>
        </div>
      )}

      {/* Confirmation Modal for Clearing Items */}
      {showClearConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-error" />
              </div>
              <h3 className="font-bold text-lg text-on-surface mb-2">{t('shoppingList.confirmClearTitle')}</h3>
              <p className="text-on-surface-variant text-sm mb-6">
                {t('shoppingList.confirmClearMessage')}
              </p>
              <div className="flex gap-3 w-full">
                <button 
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 py-3 px-4 rounded-xl font-bold bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface"
                >
                  {t('shoppingList.cancel')}
                </button>
                <button 
                  onClick={handleClearAll}
                  className="flex-1 py-3 px-4 rounded-xl font-bold bg-error hover:bg-error/90 transition-colors text-white"
                >
                  {t('shoppingList.confirmClear')}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}


