import React, { useState, useEffect } from 'react';
import { Scale, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

export default function Header({ activeSection, onSectionClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Ana Sayfa' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'practice-areas', label: 'Faaliyet Alanları' },
    { id: 'team', label: 'Ekibimiz' },
    { id: 'contact', label: 'İletişim' }
  ];

  const handleNavClick = (id: string) => {
    onSectionClick(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
          : 'bg-gradient-to-b from-navy/90 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="p-2.5 bg-gold/15 border border-gold/30 rounded-lg group-hover:border-gold/60 transition-colors">
            <Scale className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <span className="block font-sans text-lg font-bold tracking-wider text-white uppercase">
              NoName
            </span>
            <span className="block text-[9px] font-mono tracking-[4px] text-zinc-400 uppercase mt-0.5">
              Hukuk Bürosu
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 cursor-pointer hover:text-gold ${
                activeSection === item.id ? 'text-gold font-semibold' : 'text-zinc-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
          <div className="h-4 w-[1px] bg-white/10" />
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
            <Globe className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span>TR</span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Menüyü Aç/Kapat"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-navy border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-base font-medium py-1 transition-colors ${
                    activeSection === item.id ? 'text-gold pl-2 border-l-2 border-gold' : 'text-zinc-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-[1px] bg-white/10 w-full my-1" />
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pl-1">
                <Globe className="w-4 h-4 text-gold" />
                <span>Türkçe / İstanbul Barosu</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
