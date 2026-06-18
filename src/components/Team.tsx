import React, { useState } from 'react';
import { teamMembers } from '../data';
import { TeamMember } from '../types';
import { X, GraduationCap, Globe, Shield, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Team() {
  const [activePartner, setActivePartner] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="py-24 bg-white border-t border-zinc-100 relative">
      {/* Decorative ambient background */}
      <div className="absolute left-1/3 top-1/3 w-[350px] h-[350px] bg-navy/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-10 bg-gold" />
            <span className="text-sm font-mono tracking-wider text-navy uppercase font-bold">Uzman Kadromuz</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy tracking-tight leading-tight">
            Seçkin Kurucu Ortaklarımız & Avukatlarımız
          </h2>
          <p className="text-base text-zinc-650 leading-relaxed font-sans mt-2 font-light">
            Haklarınızı savunan, alanında derin deneyime sahip kurucu ortaklarımız ve avukatlarımızla tanışın.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setActivePartner(member)}
              className="group bg-zinc-55/60 border border-zinc-200/80 hover:border-gold/30 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full shadow-sm"
            >
              {/* Member Image Wrapper */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Visual subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </div>

              {/* Info section inside Card */}
              <div className="p-6 flex-grow flex flex-col justify-between bg-zinc-50 border-t border-zinc-150">
                <div className="space-y-1">
                  <span className="text-xs font-mono tracking-widest text-gold uppercase font-bold">
                    {member.title}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-navy tracking-tight group-hover:text-gold transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-sm font-sans text-zinc-500 line-clamp-1 font-light">
                    {member.role}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-gold transition-colors mt-6 font-bold">
                  <span>Detaylı Özgeçmiş</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Team Member Resume Detail Modal */}
      <AnimatePresence>
        {activePartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePartner(null)}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-xl border border-zinc-200 shadow-2xl overflow-hidden z-10"
            >
              {/* Gold Top Trim */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-navy" />

              <button
                onClick={() => setActivePartner(null)}
                className="absolute top-5 right-5 p-2 text-zinc-400 hover:text-navy bg-white rounded-full border border-zinc-200 hover:bg-zinc-105 transition-all cursor-pointer z-20"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                
                {/* Photo portion */}
                <div className="md:col-span-5 bg-zinc-100 relative min-h-[300px] md:min-h-full">
                  <img
                    src={activePartner.image}
                    alt={activePartner.name}
                    className="w-full h-full object-cover object-top opacity-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="p-4 bg-navy/95 border border-white/10 rounded-lg shadow-xl text-center">
                      <span className="block text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold">TBB Baro Sicili</span>
                      <span className="block text-sm font-mono font-bold text-gold mt-1.5">{activePartner.barAssociation}</span>
                    </div>
                  </div>
                </div>

                {/* Resume details portion */}
                <div className="md:col-span-7 p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                  
                  <div className="space-y-1">
                    <span className="text-sm font-mono tracking-wider text-gold uppercase font-bold">
                      {activePartner.title}
                    </span>
                    <h3 className="text-3xl font-serif font-bold text-navy tracking-tight">
                      {activePartner.name}
                    </h3>
                    <p className="text-base text-zinc-700 font-sans border-b border-zinc-100 pb-4 font-semibold leading-relaxed">
                      {activePartner.role}
                    </p>
                  </div>

                  {/* Biography */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2 font-bold">
                      <Shield className="w-5 h-5 text-gold" />
                      Mesleki Profil
                    </h4>
                    <p className="text-sm text-zinc-650 font-sans leading-relaxed font-light">
                      {activePartner.bio}
                    </p>
                  </div>

                  {/* Education list */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2 font-bold">
                      <GraduationCap className="w-5 h-5 text-gold" />
                      Eğitim Geçmişi
                    </h4>
                    <ul className="space-y-2">
                      {activePartner.education.map((edu, idx) => (
                        <li key={idx} className="text-sm text-zinc-650 flex items-start gap-2 font-light">
                          <span className="text-gold mt-0.5">•</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Languages spoken */}
                  <div className="space-y-3_5">
                    <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2 font-bold">
                      <Globe className="w-5 h-5 text-gold" />
                      Yabancı Diller
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {activePartner.languages.map((lang, idx) => (
                        <span key={idx} className="px-3.5 py-1.5 text-xs font-mono text-zinc-700 bg-zinc-50 border border-zinc-200 rounded font-semibold">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Ethics Disclaimer */}
                  <div className="pt-5 border-t border-zinc-100">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                      <Award className="w-4 h-4 text-gold" />
                      <span>Türkiye Barolar Birliği Meslek Kuralları'na uygun resmi baro kaydıdır.</span>
                    </div>
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
