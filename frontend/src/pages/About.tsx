import { motion } from 'motion/react';
import { ChefHat, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="pt-6 px-5 pb-32 max-w-md mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col items-center gap-8"
      >
        {/* Logo */}
        <div className="flex flex-col items-center gap-3 pt-4">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center">
            <ChefHat className="w-10 h-10 text-primary" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold font-display text-on-surface">
              {t('about.title')}
            </h1>
            <p className="text-on-surface-variant text-sm mt-1">
              {t('about.version')}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="bento-card p-6 w-full">
          <p className="text-on-surface-variant text-sm text-center leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Features */}
        <div className="bento-card p-6 w-full space-y-4">
          <h2 className="text-sm font-bold text-on-surface">{t('about.features')}</h2>
          {['feature1', 'feature2', 'feature3'].map((key) => (
            <div key={key} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 shrink-0">
                <Heart className="w-3 h-3 text-primary" />
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t(`about.${key}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <p className="text-xs text-on-surface-variant/50 text-center">
          {t('about.copyright')}
        </p>
      </motion.div>
    </div>
  );
}
