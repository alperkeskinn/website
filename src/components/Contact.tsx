import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, Clock } from 'lucide-react';
import { contactDetails } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 border-t border-zinc-200 relative">
      {/* Decorative Blur and grid overlay */}
      <div className="absolute right-1/4 top-1/4 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 w-[250px] h-[250px] bg-navy/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-[2px] w-10 bg-gold" />
            <span className="text-sm font-mono tracking-wider text-navy uppercase font-bold">Ofisimiz ve Konum</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-navy tracking-tight leading-tight">
            İletişim Bilgilerimiz
          </h2>
          <p className="text-base text-zinc-700 leading-relaxed font-sans mt-2 font-light">
            Hukuki danışmanlık talepleriniz veya kurumsal randevu işlemleri için aşağıdaki resmi iletişim kanallarımız üzerinden büromuzla doğrudan irtibata geçebilirsiniz.
          </p>
        </div>

        {/* Contact info grid - 3 clean luxurious cards for elegant responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Adres */}
          <div className="p-8 rounded-xl bg-white border border-zinc-200 flex flex-col justify-between shadow-sm hover:border-gold/40 transition-colors relative group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-navy" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center">
                <MapPin className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-gold uppercase font-bold">Ofis Adresi</span>
                <h4 className="font-serif font-bold text-navy text-xl mt-1.5">Ulaşım ve Konum</h4>
              </div>
              <p className="text-sm text-zinc-600 leading-relaxed font-light">{contactDetails.address}</p>
            </div>
            <div className="pt-6 mt-6 border-t border-zinc-100">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono text-zinc-500 font-semibold">
                Merkezi Lokasyon / Şişli
              </span>
            </div>
          </div>

          {/* Card 2: Telefon */}
          <div className="p-8 rounded-xl bg-white border border-zinc-200 flex flex-col justify-between shadow-sm hover:border-gold/40 transition-colors relative group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-gold uppercase font-bold">Telefon & Faks</span>
                <h4 className="font-serif font-bold text-navy text-xl mt-1.5">Hızlı İrtibat Hattı</h4>
              </div>
              <div className="text-sm text-zinc-600 space-y-2 font-light">
                <p><strong>Telefon:</strong> {contactDetails.phone}</p>
                <p><strong>Faks:</strong> {contactDetails.fax}</p>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center gap-2 text-xs font-mono text-zinc-500 font-semibold">
              <Clock className="w-4 h-4 text-gold" />
              <span>Hafta içi: 09:00 - 18:00</span>
            </div>
          </div>

          {/* Card 3: E-Posta */}
          <div className="p-8 rounded-xl bg-white border border-zinc-200 flex flex-col justify-between shadow-sm hover:border-gold/40 transition-colors relative group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-navy" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-navy text-gold flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono tracking-widest text-gold uppercase font-bold">E-Posta</span>
                <h4 className="font-serif font-bold text-navy text-xl mt-1.5">Yazılı Başvurular</h4>
              </div>
              <div className="text-sm text-zinc-600 space-y-2 font-light">
                {contactDetails.emails.map((email, idx) => (
                  <span key={idx} className="block hover:text-gold transition-colors font-semibold">{email}</span>
                ))}
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-zinc-100">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-xs font-mono text-zinc-500 font-semibold">
                Yetkili Posta Havuzu
              </span>
            </div>
          </div>

        </div>

        {/* Informational ethics notice footer under the cards */}
        <div className="mt-12 p-8 rounded-xl bg-white border border-zinc-200 flex flex-col sm:flex-row items-center gap-5 shadow-sm">
          <div className="p-4 bg-navy text-gold rounded-lg shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <h5 className="font-serif font-bold text-navy text-lg">TBB Meslek Gizliliği ve Güvenlik İlkeleri</h5>
            <p className="text-sm text-zinc-550 mt-1 leading-relaxed font-light">
              Müvekkillerimize ait tüm bilgi ve başvurular, Türkiye Barolar Birliği Meslek Kuralları ile Avukatlık Kanunu çerçevesinde mutlak bir sır saklama ve sadakat yükümlülüğü ilkesiyle korunmaktadır.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
