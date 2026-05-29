import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { User, Utensils, Heart, LogOut, ChevronRight, Camera, Settings, ReceiptText } from 'lucide-react';
import { USER_AVATAR } from '../data';
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div className="pb-32 px-5 max-w-md mx-auto">
      {/* Profile Header */}
      <section className="flex flex-col items-center pt-6 mb-8">
        <div className="relative mb-3">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-[100px] h-[100px] rounded-full overflow-hidden ambient-shadow-lg border-4 border-surface-container-lowest"
          >
            <img 
              alt={t('profile.mockName')}
              className="w-full h-full object-cover" 
              src={USER_AVATAR} 
            />
          </motion.div>
          <button className="absolute bottom-0 right-0 bg-cta text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:bg-cta-hover transition-all active:scale-90">
            <Camera className="w-3.5 h-3.5" />
          </button>
        </div>
        <motion.h2 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-xl font-bold text-on-surface mb-0.5"
        >
          {t('profile.mockName')}
        </motion.h2>
        <motion.p 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-on-surface-variant text-xs"
        >
          {t('profile.mockEmail')}
        </motion.p>
      </section>

      {/* Menu Options */}
      <div className="space-y-3">
        {[
          { icon: User, title: t('profile.personalInfo'), desc: t('profile.personalInfoDesc'), path: '/profile/edit' },
          { icon: ReceiptText, title: t('profile.purchaseHistory'), desc: t('profile.purchaseHistoryDesc'), path: '/orders' },
          { icon: Utensils, title: t('profile.dietary'), desc: t('profile.dietaryDesc'), path: '/profile/dietary' },
          { icon: Heart, title: t('profile.savedRecipes'), desc: t('profile.savedRecipesDesc'), path: '/profile/saved' },
          { icon: Settings, title: t('profile.systemSettings'), desc: t('profile.systemSettingsDesc'), path: '/settings' },
        ].map((item, idx) => (
          <motion.div
            key={item.path}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1 + 0.2 }}
          >
            <Link 
              to={item.path} 
              className="bento-card flex items-center gap-3 p-4 hover:scale-[1.01] group"
            >
              <div className="bg-primary/5 text-primary w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-on-surface text-sm">{item.title}</h3>
                <p className="text-[11px] text-on-surface-variant font-medium leading-tight">{item.desc}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Logout button */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 mb-20 flex justify-center"
      >
        <button className="bg-cta text-white px-8 py-3 rounded-full font-bold text-base hover:bg-cta-hover transition-all flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95">
          <LogOut className="w-4 h-4" />
          {t('profile.logout')}
        </button>
      </motion.div>
    </div>
  );
}
