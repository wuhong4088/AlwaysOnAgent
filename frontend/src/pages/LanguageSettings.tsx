import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function LanguageSettings() {
  const { t, i18n } = useTranslation();
  
  const [language, setLanguage] = useState(i18n.language);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const languages = [
    { code: 'zh-TW', name: t('languageSettings.traditionalChinese') },
    { code: 'zh-CN', name: t('languageSettings.simplifiedChinese') },
    { code: 'en-US', name: t('languageSettings.english') },
  ];

  const handleSave = () => {
    if (language === i18n.language) return;
    setShowConfirm(true);
  };

  const confirmLanguageChange = () => {
    i18n.changeLanguage(language);
    localStorage.setItem('app_language', language);
    setShowConfirm(false);
  };

  return (
    <div className="pt-6 px-5 pb-32 max-w-md mx-auto relative h-full min-h-[calc(100vh-64px)]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-display text-on-surface mb-2">{t('languageSettings.title')}</h1>
        <p className="text-on-surface-variant text-sm">{t('languageSettings.description')}</p>
      </div>

      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col gap-6"
      >
        <div>
          <h2 className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-3 ml-2">
            {t('languageSettings.appLanguage')}
          </h2>
          <div className="bg-white rounded-3xl overflow-hidden border border-outline-variant shadow-sm">
            {languages.map((lang, idx) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`w-full flex items-center justify-between p-4 bg-white hover:bg-surface-container transition-colors ${
                  idx < languages.length - 1 ? 'border-b border-outline-variant' : ''
                }`}
              >
                <div className="flex flex-col items-start">
                  <span className="font-bold text-sm text-on-surface">{lang.name}</span>
                </div>
                {language === lang.code && (
                  <Check className="w-5 h-5 text-primary" />
                )}
              </button>
            ))}
          </div>
          <p className="text-xs text-on-surface-variant mt-3 px-2">
            {t('languageSettings.restartWarning')}
          </p>
        </div>
      </motion.section>

      {/* Save Button Fixed at Bottom */}
      <div className="fixed bottom-[80px] left-0 right-0 px-5 flex justify-center max-w-md mx-auto">
        <button
          onClick={handleSave}
          disabled={language === i18n.language}
          className={`w-full py-4 rounded-full font-bold text-base transition-all duration-300 shadow-md ${
            language !== i18n.language
              ? 'bg-primary text-white hover:bg-primary/90'
              : 'bg-outline-variant text-on-surface-variant opacity-50 cursor-not-allowed'
          }`}
        >
          {t('languageSettings.save')}
        </button>
      </div>

      {/* Confirmation Dialog Overlay */}
      <AnimatePresence>
        {showConfirm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[100]"
              onClick={() => setShowConfirm(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              className="fixed bottom-0 left-0 right-0 z-[101] bg-surface rounded-t-3xl p-6 shadow-xl pb-10 sm:max-w-md sm:mx-auto sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 sm:rounded-3xl"
            >
              <h3 className="text-xl font-bold text-on-surface mb-3">{t('languageSettings.confirmTitle')}</h3>
              <p className="text-sm text-on-surface-variant mb-6">{t('languageSettings.confirmMessage')}</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-3 bg-surface-container font-bold text-on-surface rounded-full hover:bg-outline-variant transition-colors"
                >
                  {t('languageSettings.cancel')}
                </button>
                <button
                  onClick={confirmLanguageChange}
                  className="flex-1 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors"
                >
                  {t('languageSettings.confirm')}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
