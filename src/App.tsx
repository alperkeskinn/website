import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll handler targeting components
  const handleSectionClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Tracking active section with scroll positions
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'practice-areas', 'team', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for header spacing

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen text-zinc-800 antialiased font-sans flex flex-col justify-between selection:bg-gold/20 selection:text-navy">
      
      {/* Sticky regulatory top compliance alert matching Turkish Bar Association standards */}
      <div className="bg-navy border-b border-white/5 text-zinc-400 text-[10px] font-mono py-2.5 text-center select-none uppercase tracking-[2px] hidden sm:block">
        TBB Meslek Kuralları Uyarınca Bilgilendirme Amaçlı Kurumsal Web Platformudur.
      </div>

      {/* Main Brand Header Menu */}
      <Header activeSection={activeSection} onSectionClick={handleSectionClick} />

      {/* Corporate Content Stream */}
      <main className="flex-grow">
        
        {/* Cinematic Welcome Screen */}
        <Hero 
          onExplorePractice={() => handleSectionClick('practice-areas')}
          onExploreAbout={() => handleSectionClick('about')}
        />

        {/* Corporate Profile ("Hakkımızda" / "Biz Kimiz?") */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.div>

        {/* Practice Areas / Technical Legal Fields */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <PracticeAreas />
        </motion.div>

        {/* Partners & Attorney Rosters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <Team />
        </motion.div>

        {/* Read-only contact options & feedback messages panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.div>

      </main>

      {/* Compliant Footer Frame */}
      <Footer />
    </div>
  );
}
