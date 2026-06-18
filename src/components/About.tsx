import React from 'react';
import { Eye, Award, Lock, Zap } from 'lucide-react';
import { corporateValues } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  Eye,
  Award,
  Lock,
  Zap,
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative border-t border-zinc-100 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[250px] h-[250px] bg-navy/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title and Subheading */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-10 bg-gold" />
            <span className="text-sm font-mono tracking-wider text-navy uppercase font-bold">Biz Kimiz?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy tracking-tight leading-tight">
            NoName Hukuk Bürosu
          </h2>
          <p className="text-base sm:text-lg text-zinc-700 leading-relaxed font-sans mt-2">
            Kurulduğumuz günden bu yana, adalete olan inancımız ve meslek etik kurallarına bağlılığımızla, karmaşık hukuki süreçleri müvekkillerimiz için anlaşılır ve şeffaf kılmayı amaçlıyoruz.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-navy leading-snug">
              Hukuki İhtiyaçlarınıza Pratik ve Profesyonel Çözümler
            </h3>
            <p className="text-base text-zinc-650 leading-relaxed font-light">
              NoName Hukuk Bürosu, kurumsal yapısı ve uzman kadrosuyla müvekkillerinin hukuki ihtiyaçlarına hızlı, güvenilir ve pratik çözümler sunmayı ilke edinmiştir. Bizler, hukukun üstünlüğü ilkesini her unsurun üzerinde tutmaktayız.
            </p>
            <p className="text-base text-zinc-650 leading-relaxed font-light">
              Müvekkil profilimizi yerli holdinglerden çokuluslu yatırımlara, girişim modellerinden seçkin bireysel dava dosyalarına uzanan geniş bir yelpaze süslemektedir. Her bir uyuşmazlığı akademik titizlikle analiz ediyor, kurumsal raporlama modellerimizle süreci yönetilebilir kılıyoruz.
            </p>

            {/* Static Stats Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-zinc-200">
              <div className="space-y-2 border-l-2 border-gold pl-4">
                <span className="block text-xl font-serif font-bold text-navy">Şeffaf Süreç Yönetimi</span>
                <span className="block text-sm text-zinc-600 leading-relaxed">Müvekkillerimizi her aşamada detaylı bilgilendiriyoruz.</span>
              </div>
              <div className="space-y-2 border-l-2 border-gold pl-4">
                <span className="block text-xl font-serif font-bold text-navy">Alanında Uzman Kadro</span>
                <span className="block text-sm text-zinc-600 leading-relaxed">Farklı hukuk dallarında tecrübeli uzman dava kadrosu.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group">
            {/* Elegant Image Framed nicely */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-100 shadow-2xl">
              <img
                src="/src/assets/images/regenerated_image_1781815425809.jpg"
                alt="NoName Hukuk Ofis Atmosferi"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-750 opacity-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Corporate Values Section */}
        <div className="space-y-12 pt-12 border-t border-zinc-150">
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-8 bg-gold" />
            <span className="text-sm font-mono tracking-wider text-navy uppercase font-bold">Kurumsal Değerlerimiz</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corporateValues.map((val) => {
              const Icon = iconMap[val.iconName] || Award;
              return (
                <div
                  key={val.id}
                  className="p-8 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-gold/40 hover:bg-white transition-all duration-350 group shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                      <Icon className="w-6 h-6 animate-pulse" />
                    </div>
                    <h4 className="font-serif font-bold text-navy text-xl">
                      {val.title}
                    </h4>
                    <p className="text-sm text-zinc-600 leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
