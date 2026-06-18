import React from 'react';
import { Scale, ChevronRight, Award, Shield, FileSpreadsheet, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExplorePractice: () => void;
  onExploreAbout: () => void;
}

export default function Hero({ onExplorePractice, onExploreAbout }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center bg-navy overflow-hidden pt-28"
    >
      {/* Cinematic Background Image w/ Deep Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920"
          alt="NoName Hukuk Ofisi"
          className="w-full h-full object-cover object-center opacity-30 scale-100 filter contrast-125 saturate-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent" />
      </div>

      {/* Decorative Golden Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Taglines and Text Content */}
          <div className="lg:col-span-11 xl:col-span-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full"
            >
              <Scale className="w-4 h-4 text-gold" />
              <span className="text-xs font-mono tracking-widest text-gold uppercase font-semibold">
                NoName Hukuk Bürosu
              </span>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.12]"
              >
                Hukukta Güven, Deneyim ve <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold font-bold">
                  Çözüm Odaklı Yaklaşım
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg sm:text-xl lg:text-2xl text-zinc-200 max-w-3xl leading-relaxed font-sans font-light"
              >
                Bireysel ve kurumsal müvekkillerimize ulusal ve uluslararası standartlarda profesyonel hukuki danışmanlık ve avukatlık hizmeti sunuyoruz. Karmaşık süreçleri rasyonel ve pratik metotlarla çözüme ulaştırıyoruz.
              </motion.p>
            </div>

            {/* Actions Nav */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={onExplorePractice}
                className="px-8 py-4.5 bg-gradient-to-r from-gold to-amber-600 hover:opacity-95 text-navy font-bold text-sm font-mono uppercase tracking-wider rounded-md transition-all duration-300 shadow-xl shadow-gold/10 flex items-center gap-2.5 cursor-pointer group"
              >
                Faaliyet Alanlarımız
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                onClick={onExploreAbout}
                className="px-8 py-4.5 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 text-white font-semibold text-sm font-mono uppercase tracking-wider rounded-md transition-all duration-300 cursor-pointer"
              >
                Büromuz Hakkında
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
