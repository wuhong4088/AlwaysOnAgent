import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Splash() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="relative w-full h-screen max-w-md mx-auto overflow-hidden bg-background bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:24px_24px] flex items-center justify-center">
      {/* Scattered Post-it Notes */}
      <motion.div 
        initial={{ y: -50, rotate: -15, opacity: 0 }}
        animate={{ y: 0, rotate: -15, opacity: 0.75 }}
        className="absolute w-28 h-28 bg-[#ff85a2] rounded-sm top-[8%] -left-4 shadow-md flex items-center justify-center p-4 text-center"
      >
        <span className="text-xl font-bold text-gray-800 font-handwriting">{t('splash.note1')}</span>
      </motion.div>

      <motion.div 
        initial={{ y: -50, rotate: 20, opacity: 0 }}
        animate={{ y: 0, rotate: 20, opacity: 0.75 }}
        transition={{ delay: 0.2 }}
        className="absolute w-32 h-32 bg-[#7cd3f7] rounded-sm top-[18%] -right-6 shadow-md flex items-center justify-center p-4 text-center"
      >
        <span className="text-xl font-bold text-gray-800 font-handwriting">{t('splash.note2')}</span>
      </motion.div>

      <motion.div 
        initial={{ y: 50, rotate: 12, opacity: 0 }}
        animate={{ y: 0, rotate: 12, opacity: 0.75 }}
        transition={{ delay: 0.4 }}
        className="absolute w-28 h-28 bg-[#a3e635] rounded-sm bottom-[22%] -left-8 shadow-md flex items-center justify-center p-4 text-center"
      >
        <span className="text-xl font-bold text-gray-800 font-handwriting">{t('splash.note3')}</span>
      </motion.div>

      <motion.div 
        initial={{ y: 50, rotate: -8, opacity: 0 }}
        animate={{ y: 0, rotate: -8, opacity: 0.75 }}
        transition={{ delay: 0.6 }}
        className="absolute w-36 h-36 bg-[#fb923c] rounded-sm bottom-[10%] -right-4 shadow-md flex items-center justify-center p-4 text-center"
      >
        <span className="text-2xl font-bold text-gray-800 font-handwriting">{t('splash.note4')}</span>
      </motion.div>

      {/* Main Post-it Note */}
      <motion.div 
        initial={{ scale: 0.5, rotate: -3, opacity: 0 }}
        animate={{ scale: 1, rotate: -3, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.8 }}
        className="z-20 w-80 h-80 flex items-center justify-center bg-[#fde047] rounded-sm post-it-shadow"
      >
        <div className="w-64 h-64 flex flex-col items-center justify-center gap-4">
          <ChefHat className="w-24 h-24 text-gray-800 opacity-90" />
          <h1 className="text-3xl font-black text-gray-800 font-display text-center">Cook Smart</h1>
        </div>
      </motion.div>
    </main>
  );
}
