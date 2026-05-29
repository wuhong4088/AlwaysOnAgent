import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Switch from '../components/ui/Switch';
import { Leaf, Wheat, TriangleAlert, Milk, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';

export default function DietaryPreferences() {
  const { t } = useTranslation();
  const [prefs, setPrefs] = useState({
    vegetarian: true,
    glutenFree: false,
    nutAllergy: true,
    dairyAllergy: false,
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const options = [
    { 
      key: 'vegetarian', 
      label: t('dietary.vegetarian'), 
      desc: t('dietary.vegetarianDesc'), 
      icon: Leaf,
      bg: 'bg-green-100',
      color: 'text-green-700'
    },
    { 
      key: 'glutenFree', 
      label: t('dietary.glutenFree'), 
      desc: t('dietary.glutenFreeDesc'), 
      icon: Wheat,
      bg: 'bg-yellow-100',
      color: 'text-yellow-700'
    },
    { 
      key: 'nutAllergy', 
      label: t('dietary.nutAllergy'), 
      desc: t('dietary.nutAllergyDesc'), 
      icon: TriangleAlert,
      bg: 'bg-red-100',
      color: 'text-red-700'
    },
    { 
      key: 'dairyAllergy', 
      label: t('dietary.dairyAllergy'), 
      desc: t('dietary.dairyAllergyDesc'), 
      icon: Milk,
      bg: 'bg-blue-100',
      color: 'text-blue-700'
    },
  ];

  return (
    <div className="pt-4 px-5 pb-24 max-w-md mx-auto">
      <div className="mb-6">
        <h2 className="font-display text-xl font-bold text-on-surface mb-1">{t('dietary.title')}</h2>
        <p className="text-on-surface-variant text-xs leading-relaxed">{t('dietary.subtitle')}</p>
      </div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bento-card p-3"
      >
        <div className="flex flex-col gap-1">
          {options.map((opt, idx) => (
            <div key={opt.key}>
              <div className="flex items-center justify-between p-3 bg-surface rounded-xl hover:bg-surface-container transition-colors group">
                <div className="flex items-center gap-3">
                  <div className={cn("w-9 h-9 rounded-full flex items-center justify-center shrink-0", opt.bg, opt.color)}>
                    <opt.icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-on-surface block leading-tight">{opt.label}</span>
                    <span className="text-[10px] text-on-surface-variant font-medium leading-none">{opt.desc}</span>
                  </div>
                </div>
                <Switch 
                  checked={prefs[opt.key as keyof typeof prefs]} 
                  onChange={(val) => setPrefs(prev => ({ ...prev, [opt.key]: val }))}
                  variant={opt.key === 'nutAllergy' ? 'error' : 'primary'}
                />
              </div>
              {idx < options.length - 1 && <hr className="border-surface-container-highest mx-2 my-0.5 opacity-30" />}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="mt-8 flex justify-center">
        <button 
          onClick={handleSave}
          className="w-full max-w-xs bg-cta text-white font-bold py-3 px-8 rounded-full hover:bg-cta-hover transition-all shadow-md active:scale-95 text-sm"
        >
          {t('dietary.save')}
        </button>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-50 flex items-center justify-center px-10"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                className="bg-white rounded-[32px] p-8 flex flex-col items-center text-center shadow-2xl w-full max-w-xs"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2">{t('dietary.saveSuccess')}</h3>
                <p className="text-sm text-on-surface-variant mb-6">{t('dietary.saveSuccessDesc')}</p>
                <button 
                  onClick={() => setShowSuccess(false)}
                  className="w-full py-3 bg-primary text-white rounded-full font-bold text-sm"
                >
                  {t('dietary.awesome')}
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
