import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  cartCount: number;
  onHomeClick: () => void;
  onCartClick: () => void;
  onBotClick?: () => void;
  isSolid?: boolean;
}

export default function Header({ cartCount, onHomeClick, onCartClick, onBotClick, isSolid = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showSolid = isScrolled || isSolid;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={onHomeClick}>
            <div className="h-12 md:h-16 relative flex items-center justify-center group-hover:scale-105 transition-transform">
              <img 
                src="/Image/logo.png" 
                alt="Tấn Văn Media" 
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if image not found
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/logo/200/200';
                }}
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#courses" onClick={(e) => { e.preventDefault(); onHomeClick(); setTimeout(() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className={`text-sm font-medium transition-colors ${showSolid ? 'text-slate-600 hover:text-indigo-600' : 'text-white/80 hover:text-white'}`}>
              Khóa học
            </a>
            <a 
              href="/bots" 
              onClick={(e) => { 
                e.preventDefault(); 
                // We need a way to trigger navigate('/bots') from here.
                // Since Header doesn't have navigate, I'll add onBotClick prop.
                onBotClick?.();
              }} 
              className={`text-sm font-medium transition-colors ${showSolid ? 'text-slate-600 hover:text-indigo-600' : 'text-white/80 hover:text-white'}`}
            >
              BOT
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); onHomeClick(); }} className={`text-sm font-medium transition-colors ${showSolid ? 'text-slate-600 hover:text-indigo-600' : 'text-white/80 hover:text-white'}`}>
              Về chúng tôi
            </a>
            <div 
              onClick={onCartClick}
              className="relative cursor-pointer group p-2 hover:bg-slate-100/10 rounded-full transition-colors"
            >
              <ShoppingCart className={`w-6 h-6 ${showSolid ? 'text-slate-700' : 'text-white'}`} />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white"
                >
                  {cartCount}
                </motion.span>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <div onClick={onCartClick} className="relative cursor-pointer p-2">
              <ShoppingCart className={`w-6 h-6 ${showSolid ? 'text-slate-700' : 'text-white'}`} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${showSolid ? 'text-slate-700' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 md:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              <a 
                href="#courses" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 font-medium py-2 border-b border-slate-50"
              >
                Khóa học
              </a>
              <a 
                href="/bots" 
                onClick={() => { setIsMobileMenuOpen(false); onBotClick?.(); }}
                className="text-slate-700 font-medium py-2 border-b border-slate-50"
              >
                BOT
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 font-medium py-2"
              >
                Về chúng tôi
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
