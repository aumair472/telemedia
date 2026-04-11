export interface Provider {
  name: string;
  speed: string;
  price: string;
  contract: string;
  bestFor: string;
  highlighted?: boolean;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  zip: string;
  serviceType: "home" | "business" | "bundle";
  message?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: string;
  label: string;
}
