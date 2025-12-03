import { LucideIcon } from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  growth: number;
  metric: string;
  before: number;
  after: number;
}