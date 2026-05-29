import { motion } from 'motion/react';
import { User, Mail, Lock, RotateCcw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CreateAccount() {
  const { t } = useTranslation();
  return (
    <div className="pt-24 px-5 pb-32 max-w-md mx-auto min-h-screen flex flex-col justify-center gap-10">
      <div className="text-center">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold font-display text-on-surface mb-3"
        >
          {t('createAccount.title')}
        </motion.h2>
        <motion.p 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-on-surface-variant font-medium leading-relaxed"
        >
          {t('createAccount.subtitle')}
        </motion.p>
      </div>

      <motion.form 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6 bg-surface-container-lowest p-8 rounded-3xl ambient-shadow border border-surface-container-high"
      >
        {[
          { label: t('createAccount.username'), id: 'name', placeholder: t('createAccount.usernamePlaceholder'), icon: User },
          { label: t('createAccount.email'), id: 'email', placeholder: t('createAccount.emailPlaceholder'), icon: Mail, type: 'email' },
          { label: t('createAccount.password'), id: 'password', placeholder: t('createAccount.passwordPlaceholder'), icon: Lock, type: 'password' },
          { label: t('createAccount.confirmPassword'), id: 'confirm', placeholder: t('createAccount.confirmPasswordPlaceholder'), icon: RotateCcw, type: 'password' },
        ].map((field) => (
          <div key={field.id} className="flex flex-col gap-2">
            <label className="text-xs font-bold text-on-surface ml-1" htmlFor={field.id}>{field.label}</label>
            <div className="relative">
              <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline-variant" />
              <input 
                id={field.id}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                className="w-full h-14 bg-surface-container-low border-transparent rounded-2xl py-2 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
              />
            </div>
          </div>
        ))}

        <div className="pt-4">
          <button 
            type="submit"
            className="w-full bg-cta text-white font-bold py-4 rounded-full hover:bg-cta-hover active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            {t('createAccount.register')}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.form>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <Link to="/home" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors hover:underline">
          {t('createAccount.alreadyHaveAccount')}
        </Link>
      </motion.div>
    </div>
  );
}
