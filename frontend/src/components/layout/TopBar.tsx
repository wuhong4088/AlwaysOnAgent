import React, { useState, useEffect } from 'react';
import { Menu, Search, X, ChevronLeft, Home, User, ShoppingBag, Settings, LogOut, Info, Heart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

import { USER_AVATAR } from '../../data';

export default function TopBar() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const showBack = location.pathname !== '/' && location.pathname !== '/home' && !isSearching;
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  // Toggle search and menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Clear search and close menu when navigating
  useEffect(() => {
    if (!isHomePage) {
      setIsSearching(false);
      setSearchQuery('');
    }
    setIsMenuOpen(false);
  }, [location.pathname, isHomePage]);

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
    if (isSearching) {
      setSearchQuery('');
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isHomePage) {
      navigate(`/home?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Sync searchQuery with URL params if they exist
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    if (q && isHomePage) {
      setSearchQuery(q);
      setIsSearching(true);
    }
  }, [location.search, isHomePage]);

  // Update URL as user types on home page for live search
  useEffect(() => {
    if (isSearching && isHomePage && searchQuery !== '') {
      navigate(`/home?q=${encodeURIComponent(searchQuery)}`, { replace: true });
    } else if (isSearching && isHomePage && searchQuery === '') {
      navigate('/home', { replace: true });
    }
  }, [searchQuery, isSearching, isHomePage, navigate]);

  const menuItems = [
    { icon: Home, label: t('nav.home'), path: '/home' },
    { icon: ShoppingBag, label: t('nav.list'), path: '/shopping-list/all' },
    { icon: Heart, label: t('profile.savedRecipes'), path: '/profile/saved' },
    { icon: User, label: t('nav.profile'), path: '/profile' },
    { icon: Info, label: t('topbar.menuAbout'), path: '/about' },
    { icon: Settings, label: t('settings.title'), path: '/settings' },
  ];

  return (
    <header className="bg-surface border-b border-outline-variant shadow-none w-full top-0 z-40 sticky transition-all duration-300">
      <div className="relative flex justify-center items-center w-full px-5 py-2 max-w-md mx-auto h-12">
        {isSearching ? (
          <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-on-surface-variant" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('topbar.searchPlaceholder')}
                className="w-full h-8 bg-surface-container-low border-none rounded-full pl-9 pr-3 text-xs focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <button 
              type="button"
              onClick={handleSearchToggle}
              className="text-on-surface-variant hover:bg-surface-container p-1.5 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <>
            {showBack ? (
              <button 
                onClick={() => {
                  if (location.pathname === '/profile') {
                    navigate('/home');
                  } else if (location.pathname === '/orders') {
                    navigate('/profile');
                  } else if (location.pathname.startsWith('/recipe/')) {
                    navigate('/home');
                  } else if (location.pathname.startsWith('/shopping-list/')) {
                    navigate('/home');
                  } else {
                    navigate(-1);
                  }
                }}
                className="absolute left-5 text-primary hover:bg-surface-container transition-colors rounded-full p-1.5 flex items-center"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="ml-0.5 text-xs font-medium">{t('topbar.back')}</span>
              </button>
            ) : (
              <button 
                onClick={toggleMenu}
                aria-label="Menu" 
                className="absolute left-5 text-primary hover:bg-surface-container transition-colors rounded-full p-1.5"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            
            <Link to="/home" className="font-display font-bold text-primary text-[19px] tracking-tight">
              Cook Smart
            </Link>

            {isHomePage ? (
              <button 
                onClick={handleSearchToggle}
                aria-label="Search" 
                className="absolute right-5 text-on-surface hover:bg-surface-container transition-colors rounded-full p-1.5"
              >
                <Search className="w-5 h-5" />
              </button>
            ) : (
              <Link to="/profile" className="absolute right-5 hover:bg-surface-container transition-colors rounded-full p-0.5">
                <img 
                  alt="User profile avatar" 
                  className="w-7 h-7 rounded-full object-cover border border-outline-variant" 
                  src={USER_AVATAR} 
                />
              </Link>
            )}
          </>
        )}
      </div>

      {/* Side Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[50]"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-xs bg-surface z-[60] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-outline-variant flex items-center justify-between">
                <div>
                  <h2 className="font-display font-bold text-primary text-xl">Cook Smart</h2>
                  <p className="text-[10px] text-on-surface-variant font-bold tracking-widest opacity-60">EVERYDAY ASSISTANT</p>
                </div>
                <button onClick={toggleMenu} className="p-2 hover:bg-surface-container rounded-full transition-colors">
                  <X className="w-5 h-5 text-on-surface-variant" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-3">
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 group ${
                        location.pathname === item.path 
                          ? 'bg-primary/5 text-primary' 
                          : 'text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${location.pathname === item.path ? 'text-primary' : 'text-on-surface-variant'}`} />
                      <span className="font-bold text-sm tracking-tight">{item.label}</span>
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-outline-variant px-4">
                  <div className="bg-primary/5 rounded-3xl p-4 flex items-center gap-3 mb-6">
                    <img 
                      alt="User profile" 
                      className="w-10 h-10 rounded-full border border-white shadow-sm"
                      src={USER_AVATAR} 
                    />
                    <div>
                      <p className="font-bold text-sm text-on-surface text-center">{t('profile.mockName')}</p>
                      <p className="text-[10px] text-on-surface-variant">{t('profile.mockEmail')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-outline-variant">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/splash');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-surface-container text-on-surface-variant font-bold text-sm hover:bg-error/10 hover:text-error transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  {t('topbar.logout')}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
