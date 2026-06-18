export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  iconName: string;
  category: 'sirketler' | 'bireysel' | 'danismanlik';
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  education: string[];
  languages: string[];
  barAssociation: string;
  image: string;
}

export interface Publication {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
}

export interface CorporateValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
