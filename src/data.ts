import { ServiceItem, WhyChooseUsItem, PortfolioItem, TestimonialItem, CounterItem } from "./types";

export const COMPANY_INFO = {
  name: "BrandLift Marketing",
  tagline: "Grow. Create. Succeed.",
  location: "Perinthalmanna, Kerala, India",
  fullAddress: "BrandLift Marketing Office, Perinthalmanna, Malappuram, Kerala, 679322, India",
  phone: "+91 9495530640",
  email: "rinsiyea@gmail.com",
};

export const COUNTERS: CounterItem[] = [
  { id: "cnt1", value: 150, suffix: "+", label: "Brands Elevated" },
  { id: "cnt2", value: 350, suffix: "+", label: "Successful Campaigns" },
  { id: "cnt3", value: 98, suffix: "%", label: "Client Satisfaction" },
  { id: "cnt4", value: 5, suffix: "x", label: "Average Traffic ROI" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    shortDescription: "Increase website rankings and organic traffic.",
    detailedDescription: "Dominate search engine results and drive highly intentful users to your website. We specialize in local SEO for Kerala businesses as well as global SEO for e-commerce, technical audits, and content strategy.",
    iconName: "Search",
    benefits: ["Keyword Research & Analytics", "On-Page & Off-Page SEO", "Technical Site Audits", "Competitor SEO Analysis"]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Grow your brand with powerful online strategies.",
    detailedDescription: "High-ROI digital advertising across Google, Meta, and social networks. We build custom funnels that capture users and convert them into brand loyalists.",
    iconName: "TrendingUp",
    benefits: ["Paid Search Campaigns (PPC)", "Conversion Rate Optimization", "Lead Generation Funnels", "Performance Analytics"]
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    shortDescription: "Boost engagement and grow a community on top platforms.",
    detailedDescription: "Turn your social channels into powerhouses of customer growth. We curate content, manage communities, and operate highly effective social ads.",
    iconName: "Users",
    benefits: ["Platform Management (Meta, Insta, LinkedIn)", "Content Scheduling & Analytics", "Community Interaction", "Influencer Collaborations"]
  },
  {
    id: "dropshipping",
    title: "Dropshipping Solutions",
    shortDescription: "Build and scale successful e-commerce businesses.",
    detailedDescription: "End-to-end dropshipping setup. We help you pick winning products, design beautiful high-converting Shopify websites, configure fast suppliers, and launch ads that scale.",
    iconName: "ShoppingBag",
    benefits: ["Shopify Store Setup & Design", "Winning Product Research", "Supplier Connection & Automation", "High-Converting Ad Templates"]
  },
  {
    id: "video-editing",
    title: "Professional Video Editing",
    shortDescription: "Professional reels, ads, and promotional videos.",
    detailedDescription: "Engaging, high-retention video assets optimized for Instagram Reels, YouTube Shorts, TikTok, and corporate commercials. Sound design, pacing, and visual storytelling.",
    iconName: "Video",
    benefits: ["Instagram Reels & Social Short Edits", "Commercial Promo Editing", "Cinematics & Color Grading", "Subtitles, SFX & Motion Graphics"]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    shortDescription: "Creative logos, social media posts, and branding materials.",
    detailedDescription: "Visually stunning deliverables that command attention. We design standard creative assets that set you apart from competitors while maintaining brand consistency.",
    iconName: "Palette",
    benefits: ["High-impact Marketing Graphics", "Creative Logo Solutions", "Social Media Post Templates", "Business Collaterals & Stationary"]
  },
  {
    id: "branding-content",
    title: "Branding & Content Creation",
    shortDescription: "Create a memorable and powerful brand identity.",
    detailedDescription: "Define who you are, how you speak, and how you look. We craft brand style guides, tone of voice documentation, copywriting assets, and beautiful digital templates.",
    iconName: "Sparkles",
    benefits: ["Complete Brand Identity Design", "Creative Copywriting", "Style Guidelines & Typography", "Multi-channel Content Calendars"]
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "why1",
    title: "Innovative Strategies",
    description: "We don't do cookie-cutter marketing. You get advanced, bespoke marketing blueprints tailored specifically to your audience and business goals.",
    iconName: "Cpu"
  },
  {
    id: "why2",
    title: "Creative Designs",
    description: "Our design work blends visual hierarchy with powerful marketing psychology to create clean graphic and video assets that convert viewers.",
    iconName: "Layers"
  },
  {
    id: "why3",
    title: "Affordable Solutions",
    description: "Smarter options designed to scale. Get professional, enterprise-grade marketing and dropshipping execution at highly budget-friendly tiers.",
    iconName: "PiggyBank"
  },
  {
    id: "why4",
    title: "Professional Support",
    description: "Our digital experts based in Kerala are always available to collaborate. You get transparent and comprehensive communication every step of the way.",
    iconName: "Headphones"
  },
  {
    id: "why5",
    title: "Results-Driven Approach",
    description: "We focus heavily on metrics that actually matter (leads, sales, ROI, cost-per-click) instead of superficial vanity vanity metrics.",
    iconName: "BarChart3"
  },
  {
    id: "why6",
    title: "Customer Satisfaction",
    description: "Your business growth is our ultimate objective. We take immense pride in fostering deep, long-term partnerships with our clients.",
    iconName: "Heart"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "port1",
    title: "EcoFresh Campaign Boost",
    category: "Social Media",
    description: "A comprehensive organic and paid Instagram strategy that grew EcoFresh's follower base by 240% and directly drove record monthly product inquiries.",
    tags: ["Strategy", "Instagram", "Copywriting"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "port2",
    title: "Apex Labs Branding",
    category: "Logo Design",
    description: "Constructed a bold, minimalist typography system, logo design, and unified color palette styled meticulously to suit a high-performance modern tech startup.",
    tags: ["Vector", "Styleguide", "Typography"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "port3",
    title: "Travel Kerala Cinematic Reel",
    category: "Video Editing",
    description: "Directed and edited a fast-paced cinematic travel promotion for a luxury tourism operator, earning over 1.2 million viral plays on TikTok and Reels.",
    tags: ["Color Grading", "Sound Design", "Social Ads"],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "port4",
    title: "Spark Dropship Revenue Expansion",
    category: "Marketing Campaigns",
    description: "Engineered and scaled a dual Shopify-Meta ads campaign strategy, generating a spectacular 9.2x marketing ROI for a trendsetting e-commerce retailer.",
    tags: ["Paid Ads", "Shopify Setup", "Conversion Funnel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test1",
    name: "Aravind KP",
    role: "Founder & Director",
    company: "Zest Retailers India",
    rating: 5,
    text: "BrandLift Marketing transformed our Shopify store. Their dropshipping setup and Meta ad copy were sensational. We grew from barely making any sales to scaling consistent orders daily. Extremely professional team in Perinthalmanna!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test2",
    name: "Riya Mathew",
    role: "Marketing Manager",
    company: "Kochi Organic Delights",
    rating: 5,
    text: "Their SEO service is top-notch. Our food delivery brand ranked first on Google for Malappuram-Kochi local searches. Organic clicks skyrocketed. We couldn't be happier with their results-driven digital strategies.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "test3",
    name: "Faris Rahman",
    role: "Co-Founder",
    company: "SwiftDrive Car Rentals",
    rating: 5,
    text: "The social media design and cinematic reels they edited for our Kerala fleet launch absolutely blew our expectations out of the water. Highly engaging motion and layout. BrandLift has solid expertise in video editing and graphic works.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];
