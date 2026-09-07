export type Language = 'hi' | 'en';

export interface TocItem {
  id: string;
  title: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
  tip?: string;
  badge?: string;
}
