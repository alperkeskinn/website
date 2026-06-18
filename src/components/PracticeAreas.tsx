import React, { useState } from 'react';
import { 
  Building2, 
  ShieldAlert, 
  Home, 
  Scale, 
  X,
  ArrowRight,
  Gavel
} from 'lucide-react';
import { practiceAreas } from '../data';
import { PracticeArea } from '../types';
import { motion, AnimatePresence } from 'motion/react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Building2, // Ticaret ve Şirketler Hukuku
  ShieldAlert, // İş ve Sosyal Güvenlik Hukuku
  Home, // Gayrimenkul ve İmar Hukuku
  Scale, // Aile ve Boşanma Hukuku
};

export default function PracticeAreas() {
  const [selectedFilter, setSelectedFilter] = useState<'tumu' | 'sirketler' | 'bireysel'>('tumu');
  const [activePracticeDetail, setActivePracticeDetail] = useState<PracticeArea | null>(null);

  const filteredAreas = practiceAreas.filter(area => {
    if (selectedFilter === 'tumu') return true;
    return area.category === selectedFilter;
  });

  return (
    <section id="practice-areas" className="py-24 bg-zinc-50 border-t border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-10 bg-gold" />
              <span className="text-sm font-mono tracking-wider text-navy uppercase font-bold">Ana Çözüm Küşatları</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy tracking-tight leading-tight">
              Faaliyet Alanlarımız
            </h2>
            <p className="text-base text-zinc-650 leading-relaxed font-sans font-light">
              Geniş bir yelpazede, kurucularımız ve kıdemli avukatlarımızın uzmanlaştığı başlıca hukuk disiplinleri.
            </p>
          </div>

          {/* Filter Action Toggles */}
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={() => setSelectedFilter('tumu')}
              className={`px-5 py-2.5 text-sm font-mono tracking-wider uppercase rounded border transition-all cursor-pointer ${
                selectedFilter === 'tumu'
                  ? 'bg-navy text-white border-navy font-bold shadow-sm'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-navy'
              }`}
            >
              Tüm Faaliyetler
            </button>
            <button
              onClick={() => setSelectedFilter('sirketler')}
              className={`px-5 py-2.5 text-sm font-mono tracking-wider uppercase rounded border transition-all cursor-pointer ${
                selectedFilter === 'sirketler'
                  ? 'bg-navy text-white border-navy font-bold shadow-sm'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-navy'
              }`}
            >
              Kurumsal & Ticari
            </button>
            <button
              onClick={() => setSelectedFilter('bireysel')}
              className={`px-5 py-2.5 text-sm font-mono tracking-wider uppercase rounded border transition-all cursor-pointer ${
                selectedFilter === 'bireysel'
                  ? 'bg-navy text-white border-navy font-bold shadow-sm'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-navy'
              }`}
            >
              Bireysel & Ailevi
            </button>
          </div>
        </div>

        {/* Practice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredAreas.map((area) => {
            const Icon = iconMap[area.iconName] || Scale;
            return (
              <div
                key={area.id}
                onClick={() => setActivePracticeDetail(area)}
                className="group p-8 rounded-xl bg-white border border-zinc-200 hover:border-gold/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-gold transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy group-hover:text-gold transition-colors leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light line-clamp-4">
                    {area.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-mono text-gold mt-8 font-bold group-hover:gap-3 transition-all">
                  <span>Süreci İncele</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Pristine Detail Overlay Modal */}
      <AnimatePresence>
        {activePracticeDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePracticeDetail(null)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-xl border border-zinc-200 shadow-2xl p-6 md:p-8 z-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-navy" />
              
              <button
                onClick={() => setActivePracticeDetail(null)}
                className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-navy bg-zinc-100 rounded-full transition-all cursor-pointer"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-6 pt-4">
                <div className="p-3 bg-navy text-gold rounded-lg shrink-0">
                  {React.createElement(iconMap[activePracticeDetail.iconName] || Scale, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-xs font-mono tracking-wider text-gold uppercase font-bold">
                    {activePracticeDetail.category === 'sirketler' ? 'Kurumsal & Ticaret Sektörü' : 'Bireysel & Özel Savunma'}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy mt-1">
                    {activePracticeDetail.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-base text-zinc-700 leading-relaxed">
                <p className="font-bold text-zinc-800">
                  {activePracticeDetail.description}
                </p>
                <p className="text-sm text-zinc-650 py-5 px-6 bg-zinc-50 rounded-lg border border-zinc-200/85 font-sans leading-relaxed font-light">
                  {activePracticeDetail.detailedDescription}
                </p>
                
                <div className="border-t border-zinc-100 pt-5 mt-6">
                  <div className="flex items-center gap-2.5 text-xs text-zinc-500 font-mono">
                    <Gavel className="w-5 h-5 text-gold shrink-0" />
                    <span>TBB Meslek İlkeleri çerçevesinde bilgilendirme amaçlı hazırlanmıştır.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
