export interface BeforeAfterItem {
  id: string;
  title: string;
  category: 'facetas' | 'lentes' | 'reabilitacao' | 'diastema';
  patientTag: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  teethCount: string;
  duration: string;
}

export interface ProcedureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  idealFor: string;
  duration: string;
  image: string;
  badge?: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
  procedure: string;
  source: 'Google' | 'Instagram' | 'WhatsApp';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuizState {
  complaint: string;
  previousTreatment: string;
  timeline: string;
}
