export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string; // Dynamic icon rendering
  benefits: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: "Social Media" | "Logo Design" | "Video Editing" | "Marketing Campaigns";
  description: string;
  tags: string[];
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface CounterItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
