import { PracticeArea, TeamMember, Publication, CorporateValue } from './types';

export const practiceAreas: PracticeArea[] = [
  {
    id: 'ticaret-ve-sirketler',
    title: 'Ticaret ve Şirketler Hukuku',
    description: 'Şirket kuruluşları, birleşme ve devralmalar, sözleşme hazırlığı ve ticari uyuşmazlıkların çözümü.',
    detailedDescription: 'NoName Hukuk Bürosu olarak, yerli ve yabancı sermayeli şirketlerin tescili, şube açılışları, genel kurul ve yönetim kurulu süreçlerinin takibi, birleşme ve devralmalar (M&A), ortaklık sözleşmelerinin (SHA) hazırlanması ve her türlü ticari ihtilafının sulh veya dava yoluyla çözümlenmesi konularında kurumsal danışmanlık hizmeti sunmaktayız.',
    iconName: 'Building2',
    category: 'sirketler'
  },
  {
    id: 'is-ve-sosyal-guvenlik',
    title: 'İş ve Sosyal Güvenlik Hukuku',
    description: 'İş sözleşmeleri, kıdem ve ihbar tazminatları, işe iade davaları ve işçi-işveren ilişkileri yönetimi.',
    detailedDescription: 'İşçi ve işveren haklarının dengeli biçimde korunması, toplu ve bireysel iş sözleşmelerinin yasaya uyumluluğu, fazla mesai, kıdem ve ihbar tazminatı alacakları konularında tecrübeli kadromuzla yanınızdayız. Olası uyuşmazlıklarda zorunlu arabuluculuk ve mahkeme süreçlerini titizlikle takip ediyoruz.',
    iconName: 'ShieldAlert',
    category: 'bireysel'
  },
  {
    id: 'gayrimenkul-ve-imar',
    title: 'Gayrimenkul ve İmar Hukuku',
    description: 'Tapu iptal ve tescil davaları, kira sözleşmeleri, tahliye davaları ve mülkiyet uyuşmazlıkları.',
    detailedDescription: 'Gayrimenkul satın alım/satım süreçleri, kat karşılığı inşaat sözleşmeleri, kentsel dönüşüm uyuşmazlıkları, kiralama hukuku, kiracının tahliyesi süreçleri ve tapu sicili nezdinde tescil, iptal ile tedbir taleplerinin idaresi alanında uzmanlaşmış avukatlarımızla etkin takip sağlıyoruz.',
    iconName: 'Home',
    category: 'sirketler'
  },
  {
    id: 'aile-ve-bosanma',
    title: 'Aile ve Boşanma Hukuku',
    description: 'Anlaşmalı ve çekişmeli boşanma davaları, velayet, nafaka ve mal rejimi tasfiyesi süreçleri.',
    detailedDescription: 'Medeni kanunumuz kapsamında aile birliğinin korunması, anlaşmalı ve çekişmeli boşanma davaları, müşterek çocukların velayeti, nafaka ve tazminat takipleri ile evlilik öncesi/sonrası mal rejimi sözleşmelerinin tanzimi konularında mutlak gizlilik prensibiyle çalışıyoruz.',
    iconName: 'Scale',
    category: 'bireysel'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'dilan-ozturk-1',
    name: 'Av. Dilan Öztürk',
    title: 'Kurucu Ortak / Kıdemli Avukat',
    role: 'Şirketler, Ticaret ve Sözleşmeler Hukuku',
    bio: 'NoName Hukuk Bürosu\'nun kurucu ortağı olup, uzun yıllardır kurumsal şirket yapılanmaları, ulusal ve uluslararası ticaret sözleşmeleri ile uyuşmazlık çözümleri süreçlerinde müvekkillerine yüksek standartlarda danışmanlık yapmaktadır.',
    education: [
      'Marmara Üniversitesi Hukuk Fakültesi (Lisans)',
      'İstanbul Üniversitesi (Özel Hukuk Yüksek Lisans)'
    ],
    languages: ['Türkçe (Anadil)', 'İngilizce (İleri Düzey)'],
    barAssociation: 'İstanbul Barosu - Sicil No: 41253',
    image: '/src/assets/images/regenerated_image_1781815144794.png'
  },
  {
    id: 'dilan-ozturk-2',
    name: 'Av. Dilan Öztürk',
    title: 'Kurucu Ortak / İş Hukuku Sorumlusu',
    role: 'İşçi-İşveren İlişkileri ve Sosyal Güvenlik Davaları',
    bio: 'Özellikle toplu iş sözleşmelerinin yasaya uyumluluğu, fazla mesai, tazminat alacakları ve zorunlu arabuluculuk süreçlerinin müzakere edilmesi konularında uzmanlaşmıştır.',
    education: [
      'Galatasaray Üniversitesi Hukuk Fakültesi (Lisans)',
      'King\'s College London (Sözleşmeler Hukuku LLM)'
    ],
    languages: ['Türkçe (Anadil)', 'İngilizce (İleri Düzey)', 'Fransızca (Orta Düzey)'],
    barAssociation: 'İstanbul Barosu - Sicil No: 41253',
    image: '/src/assets/images/regenerated_image_1781815146345.png'
  },
  {
    id: 'dilan-ozturk-3',
    name: 'Av. Dilan Öztürk',
    title: 'Kıdemli Avukat / Ceza & Aile Danışmanı',
    role: 'Ceza Savunması, Boşanma ve Mülkiyet Uyuşmazlıkları',
    bio: 'Anlaşmalı ve çekişmeli boşanma davaları, velayet, nafaka, mal rejimi paylaşımlarının yanı sıra, ekonomik ceza hukuku ve savunma stratejileri takibini üstlenmektedir.',
    education: [
      'Ankara Üniversitesi Hukuk Fakültesi (Lisans)'
    ],
    languages: ['Türkçe (Anadil)', 'İngilizce (İleri Düzey)'],
    barAssociation: 'İstanbul Barosu - Sicil No: 41253',
    image: '/src/assets/images/regenerated_image_1781815147410.png'
  }
];

export const corporateValues: CorporateValue[] = [
  {
    id: 'seffaf-surec',
    title: 'Şeffaf Süreç Yönetimi',
    description: 'Müvekkillerimizi her aşamada detaylı bilgilendiriyor, gereksiz riskler yerine rasyonel ve gerçekçi çözümler sunuyoruz.',
    iconName: 'Eye'
  },
  {
    id: 'uzman-kadro',
    title: 'Alanında Uzman Kadro',
    description: 'Farklı hukuk dallarında uzmanlaşmış profesyonel ekibimiz aracılığıyla, her dosyaya akademik titizlikle yaklaşıyoruz.',
    iconName: 'Award'
  },
  {
    id: 'etik-kurallar',
    title: 'Meslek Etik Kuralları',
    description: 'Avukatlık Kanunu ve TBB Meslek Kuralları çerçevesinde, sır saklama ve sadakat yükümlülüğümüzü kutsal sayıyoruz.',
    iconName: 'Lock'
  },
  {
    id: 'adalete-inanc',
    title: 'Adalete İnanç ve Disiplin',
    description: 'Karmaşık hukuki süreçleri basitleştiriyor, hızlı aksiyon alan, analitik ve sonuç odaklı bir çalışma yürütüyoruz.',
    iconName: 'Zap'
  }
];

export const contactDetails = {
  address: 'Adalet Mahallesi, Hukuk Plaza Kat: 12 No: 45, Şişli / İstanbul',
  phone: '+90 (212) 555 01 23',
  fax: '+90 (212) 555 01 24',
  emails: ['info@nonamehukuk.com', 'danisma@nonamehukuk.com']
};
