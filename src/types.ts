export interface ServiceOffering {
  id: string;
  title: string;
  iconName: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  recommendedFor: string;
  presetMessage: string;
}

export interface ProblemSolution {
  id: string;
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
  iconName: string;
  category: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  keyActions: string[];
  iconName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  flag: string;
  domain: string;
  date: string;
  rating: number;
  story: string;
  outcome: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  culturalContext: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Confidentialité & Ethique' | 'Deroulement & Consultation' | 'Vodun & Tradition' | 'Paiement & Tarifs';
}

export interface WhatsAppConfig {
  phoneNumber: string; // Default: e.g., +229 97 00 00 00 or customizable
  formattedDisplay: string;
  isOnline: boolean;
  responseTime: string;
}

export interface BookingFormData {
  fullName: string;
  country: string;
  whatsappNumber: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export type ModalType = 'booking' | 'elementorGuide' | 'legalNotice' | 'privacyPolicy' | 'terms' | null;
