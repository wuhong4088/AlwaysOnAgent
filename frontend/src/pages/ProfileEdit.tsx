import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, CheckCircle, Loader2 } from 'lucide-react';
import { USER_AVATAR } from '../data';
import { useTranslation } from 'react-i18next';

export default function ProfileEdit() {
  const { t } = useTranslation();
  const [profile, setProfile] = useState({
    name: t('profile.mockName'),
    email: t('profile.mockEmail'),
    phone: '0912345678',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setIsSaved(false);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      
      // Reset saved state after 2 seconds
      setTimeout(() => {
        setIsSaved(false);
      }, 2000);
    }, 800);
  };

  return (
    <div className="pt-6 px-5 pb-32 max-w-md mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold font-display text-on-surface">{t('profile.title')}</h2>
        <p className="text-sm text-on-surface-variant font-medium">{t('profile.subtitle')}</p>
      </div>

      <motion.form 
        onSubmit={handleSubmit}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-surface-container-lowest rounded-2xl p-6 ambient-shadow flex flex-col gap-8 border border-surface-container-highest"
      >
        {/* Avatar Section */}
        <div className="flex items-center gap-6 pb-6 border-b border-surface-variant/50">
          <div className="relative w-20 h-20 rounded-full overflow-hidden bg-surface-container-high group">
            <img 
              alt="Profile" 
              className="w-full h-full object-cover" 
              src={USER_AVATAR} 
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <Camera className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-on-surface">{t('profile.changeAvatar')}</span>
            <span className="text-xs text-on-surface-variant font-medium">{t('profile.avatarSize')}</span>
          </div>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-6">
          {[
            { label: t('profile.nameLabel'), id: 'name', type: 'text' },
            { label: t('profile.emailLabel'), id: 'email', type: 'email' },
            { label: t('profile.phoneLabel'), id: 'phone', type: 'tel' },
          ].map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant ml-1" htmlFor={field.id}>
                {field.label}
              </label>
              <input 
                id={field.id}
                type={field.type}
                value={profile[field.id as keyof typeof profile]}
                onChange={(e) => setProfile(prev => ({ ...prev, [field.id]: e.target.value }))}
                className="w-full h-14 px-5 bg-surface-container-low border-transparent rounded-2xl font-medium text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
              />
            </div>
          ))}
        </div>

        <button 
          type="submit"
          disabled={isSaving}
          className={`w-full h-14 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 ${
            isSaved ? 'bg-[#4ADE80] hover:bg-[#22C55E]' : 'bg-cta hover:bg-cta-hover'
          } ${isSaving ? 'opacity-80 cursor-not-allowed' : ''}`}
        >
          {isSaving ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : isSaved ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <CheckCircle className="w-5 h-5" />
          )}
          {isSaving ? t('profile.saving') : isSaved ? t('profile.saveSuccess') : t('profile.save')}
        </button>
      </motion.form>
    </div>
  );
}
