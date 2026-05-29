import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, User, Utensils, Heart, Shield, Globe, HelpCircle, LogOut } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Settings() {
  const { t, i18n } = useTranslation();

  const sections = [
    {
      title: t('settings.accountSecurity'),
      items: [
        { icon: User, label: t('settings.editProfile'), path: '/profile/edit', desc: t('settings.editProfileDesc') },
        { icon: Shield, label: t('settings.privacySec'), path: '/settings/privacy', desc: t('settings.privacySecDesc') },
      ]
    },
    {
      title: t('settings.preferences'),
      items: [
        { icon: Utensils, label: t('settings.dietary'), path: '/profile/dietary', desc: t('settings.dietaryDesc') },
        { icon: Globe, label: t('settings.language'), path: '/settings/language', desc: t('settings.languageDesc') },
      ]
    },
    {
      title: t('settings.others'),
      items: [
        { icon: Heart, label: t('settings.savedItems'), path: '/profile/saved', desc: t('settings.savedItemsDesc') },
        { icon: HelpCircle, label: t('settings.help'), path: '/about', desc: t('settings.helpDesc') },
      ]
    }
  ];

  return (
    <div className="pb-32 px-5 max-w-md mx-auto">
      {/* Header */}
      <header className="pt-6 mb-8">
        <h1 className="text-3xl font-bold font-display text-on-surface mb-2">{t('settings.title')}</h1>
        <p className="text-on-surface-variant text-sm">{t('settings.description')}</p>
      </header>

      {/* Settings List */}
      <div className="space-y-8">
        {sections.map((section, sIdx) => (
          <div key={section.title}>
            <h2 className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-4 ml-2">
              {section.title}
            </h2>
            <div className="bg-white rounded-3xl overflow-hidden border border-outline-variant shadow-sm">
              {section.items.map((item, iIdx) => (
                <motion.div
                  key={item.label}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (sIdx * 2 + iIdx) * 0.05 }}
                >
                  <Link 
                    to={item.path}
                    className={`flex items-center gap-4 p-4 hover:bg-surface-container transition-colors group ${
                      iIdx < section.items.length - 1 ? 'border-b border-outline-variant' : ''
                    }`}
                  >
                    <div className="bg-primary/5 text-primary w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-on-surface">{item.label}</p>
                      <p className="text-[11px] text-on-surface-variant font-medium">{item.desc}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-on-surface-variant" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Logout button */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 mb-20 px-2"
      >
        <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-surface-container text-on-surface font-bold text-sm hover:bg-error/10 hover:text-error transition-all border border-outline-variant">
          <LogOut className="w-4 h-4" />
          {t('settings.logout')}
        </button>
      </motion.div>
    </div>
  );
}
