import React from 'react';
import { Scale, MapPin, Phone, Mail, Award, Lock, Landmark, FileText } from 'lucide-react';
import { contactDetails } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-zinc-400 font-sans py-16 relative overflow-hidden border-t border-white/10">
      {/* Decorative vertical glowing lines in background */}
      <div className="absolute top-0 bottom-0 left-10 w-[1px] bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-10 w-[1px] bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo Name & Slogans */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold/10 border border-gold/20 rounded-lg">
                <Scale className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block font-sans text-base font-bold tracking-wider text-white uppercase">
                  NoName
                </span>
                <span className="block text-[9px] font-mono tracking-[3px] text-zinc-400 uppercase mt-0.5">
                  Hukuk Bürosu
                </span>
              </div>
            </div>
            
            <p className="text-xs text-zinc-300 leading-relaxed max-w-sm">
              Müvekkillerimizin hukuki haklarını korumak ve geliştirmek amacıyla mesleki etik ilkelerinden ödün vermeden güvenilir çözüm odaklı faaliyet göstermekteyiz.
            </p>

            <div className="flex gap-4 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <Lock className="w-3.5 h-3.5 text-gold" />
                <span>%100 Sır Saklama</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                <Landmark className="w-3.5 h-3.5 text-gold" />
                <span>İstanbul Barosu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-2">
              Hızlı Bağlantılar
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs font-semibold">
              <a href="#hero" className="hover:text-gold transition-colors">Ana Sayfa</a>
              <a href="#about" className="hover:text-gold transition-colors">Büromuz Hakkında</a>
              <a href="#practice-areas" className="hover:text-gold transition-colors">Faaliyet Alanları</a>
              <a href="#team" className="hover:text-gold transition-colors">Uzman Kadromuz</a>
              <a href="#contact" className="hover:text-gold transition-colors">Bize Ulaşın</a>
            </div>
          </div>

          {/* Contact details list */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-2">
              Büro Bilgilerimiz
            </h4>
            <div className="space-y-3.5 text-xs leading-relaxed text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{contactDetails.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>Telefon: {contactDetails.phone} &nbsp;/ Fax: {contactDetails.fax}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>{contactDetails.emails[0]}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Turkish Bar Association (TBB) Ethical Representation Compliance Disclaimers */}
        <div className="pt-8 text-[11px] text-zinc-500 space-y-4 leading-relaxed font-sans">
          <p className="border-l-2 border-gold/30 pl-4 text-justify">
            <strong>Yasal Uyarı / Bilgilendirme:</strong> Bu web sitesinde yer alan tüm bilgiler, Türkiye Barolar Birliği'nin Reklam Yasağı Yönetmeliği ve ilgili meslek kurallarına uygun olarak, yalnızca bilgilendirme amacıyla hazırlanmıştır. Sitede yer alan hiçbir bilgi hukuki tavsiye veya danışmanlık niteliği taşımamaktadır ve bu bilgiler doğrultusunda hareket edilmesinden doğacak sorumluluk müvekkil adayına aittir. Sitedeki veriler avukat-müvekkil ilişkisi kurulması daveti değildir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-[10px] uppercase font-mono tracking-wider text-zinc-500 text-center sm:text-left">
            <span>© {currentYear} NoName Hukuk Bürosu. Tüm Hakları Saklıdır.</span>
            <div className="flex gap-4">
              <span>Şişli / İstanbul Barosu</span>
              <span>•</span>
              <span>Tasarım: NoName Medya</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
