import React, { useState } from "react";
import { ArrowUpRight, CheckCircle, ExternalLink, Sparkles, TrendingUp, X } from "lucide-react";
import { PORTFOLIO } from "../data";
import { PortfolioItem } from "../types";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Extended Case Study metrics to simulate high-end project files
  const caseStudies: Record<string, { objective: string; challenges: string; solutions: string; resultsText: string; metric: string; metricLabel: string }> = {
    port1: {
      objective: "To reboot branding and design modern social posts to boost organic conversion and capture Kerala's lifestyle consumers.",
      challenges: "Poor visual engagement, low digital reach, and inconsistent graphic posting frequency.",
      solutions: "Formulated a unified green-aesthetic content grid, wrote professional copy hooks, and scaled cinematic product story layouts.",
      resultsText: "Achieved record organic user reach and massive increases in customer product inquiry rates within 45 days.",
      metric: "240%",
      metricLabel: "Followers Gained"
    },
    port2: {
      objective: "Define complete brand geometry, tech illustration patterns, and typography guidelines to convey enterprise authority.",
      challenges: "Vague messaging, outdated look, and inconsistent brand style guidelines.",
      solutions: "Engineered high-contrast minimal black-green grid systems, customized modern logo vectors, and delivered complete digital styles guides.",
      resultsText: "Enabled cohesive launch across 3 digital products, yielding high investor approval ratings and standard team onboarding.",
      metric: "100%",
      metricLabel: "Brand Alignment"
    },
    port3: {
      objective: "Produce captivating cinematic Instagram Reels capturing the majestic backwaters and landscapes of Kerala to boost tourism bookings.",
      challenges: "Viewers losing interest in under 3 seconds; generic royalty audio.",
      solutions: "Implemented fast cuts, premium sound design (sfx), tailored color lookup tables (LUTs), and captivating scrolling captions.",
      resultsText: "Went viral with 1.2M+ organic video views and boosted booking conversion rates on checkout portals by 45%.",
      metric: "1.2M",
      metricLabel: "Organic Views"
    },
    port4: {
      objective: "Launch e-commerce scale campaign through Facebook and Instagram paid systems targeting tech and trend consumers.",
      challenges: "High customer acquisition costs (CAC) and sluggish checkout conversion funnels.",
      solutions: "Built high-converting copy, optimized landing pages for fast loading, and targeted precision lookalike and retargeting segments.",
      resultsText: "Completely scaled dropshipping e-store revenues, outperforming original budget performance thresholds.",
      metric: "9.2x",
      metricLabel: "Target ROI"
    }
  };

  const categories = ["All", "Social Media", "Logo Design", "Video Editing", "Marketing Campaigns"];

  const filteredPortfolio = activeCategory === "All"
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold text-brand-green uppercase tracking-[0.2em] block">
            OUR WORKS PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
            Designed to Impress, Engineered to Convert
          </h2>
          <p className="text-base text-gray-500">
            Browse through some of our success stories where the combination of design finesse and tactical digital marketing achieved unmatched brand scaling.
          </p>
        </div>

        {/* Categories Tab selectors */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-brand-black text-white shadow-md shadow-brand-black/10"
                  : "bg-brand-gray-light text-gray-500 hover:bg-gray-100 hover:text-brand-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="portfolio-grid">
          {filteredPortfolio.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              id={`portfolio-card-${item.id}`}
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-gray-light">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/95 backdrop-blur-md rounded-full text-brand-black opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow">
                    <ArrowUpRight className="w-5 h-5 text-brand-green" />
                  </div>
                </div>
                
                {/* Floating Category Tag */}
                <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full text-[10px] font-extrabold text-brand-black shadow-sm uppercase tracking-wider">
                  {item.category}
                </span>
              </div>

              {/* Data block */}
              <div className="p-6 space-y-3 border-t border-gray-50 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-extrabold text-brand-black group-hover:text-brand-green transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Sub tags */}
                <div className="pt-4 flex flex-wrap gap-1.5">
                  {item.tags.map((tg, i) => (
                    <span key={i} className="px-2.5 py-1 bg-brand-gray-light text-[10px] font-semibold text-gray-500 rounded-lg">
                      #{tg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Lightbox Modal */}
      {selectedProject && (() => {
        const study = caseStudies[selectedProject.id] || {
          objective: "To deliver high-impact digital solutions.",
          challenges: "Unoptimized branding funnel and lack of visibility.",
          solutions: "Implemented complete content schedules and strategic target campaigns.",
          resultsText: "Successfully elevated conversion performance across core channels.",
          metric: "Inc.",
          metricLabel: "Growth"
        };

        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-gray-100 animate-scale-up relative max-h-[90vh] flex flex-col">
              
              {/* Cover Image */}
              <div className="relative aspect-[21/9] bg-brand-gray-light shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 to-brand-black/20" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-brand-black/50 hover:bg-brand-black text-white rounded-full transition-colors cursor-pointer"
                  aria-label="Close case study"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-6 text-white space-y-1">
                  <span className="text-3xs uppercase tracking-widest font-extrabold text-brand-green">{selectedProject.category} Case Study</span>
                  <h3 className="text-xl sm:text-2xl font-bold">{selectedProject.title}</h3>
                </div>
              </div>

              {/* Scrollable Content details */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
                
                {/* Metric callout */}
                <div className="p-5 bg-brand-green/5 border border-brand-green/10 rounded-2xl flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-3xs uppercase tracking-[0.15em] font-extrabold text-gray-400 block">KEY OUTCOME ACHIEVED</span>
                    <p className="text-xs text-gray-700 font-semibold leading-relaxed">
                      {study.resultsText}
                    </p>
                  </div>
                  <div className="text-right shrink-0 border-l border-brand-green/20 pl-4 sm:pl-6">
                    <span className="block text-3xl font-extrabold text-brand-green font-mono">{study.metric}</span>
                    <span className="text-4xs text-gray-400 uppercase tracking-wider font-extrabold block leading-none">{study.metricLabel}</span>
                  </div>
                </div>

                {/* Grid details */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 p-4 bg-brand-gray-light rounded-xl">
                      <span className="text-4xs uppercase tracking-widest font-extrabold text-gray-400 block">Objective</span>
                      <p className="text-xs text-gray-600 leading-relaxed font-normal">{study.objective}</p>
                    </div>
                    <div className="space-y-1.5 p-4 bg-brand-gray-light rounded-xl">
                      <span className="text-4xs uppercase tracking-widest font-extrabold text-gray-400 block">Client Challenges</span>
                      <p className="text-xs text-gray-600 leading-relaxed font-normal">{study.challenges}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-brand-black text-white rounded-xl space-y-1.5">
                    <div className="flex items-center gap-1.5 text-brand-green">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span className="text-4xs uppercase tracking-widest font-extrabold">BrandLift Custom Action Plan</span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed font-light">{study.solutions}</p>
                  </div>
                </div>

              </div>

              {/* Footer action */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex gap-3 shrink-0 justify-end">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-bold text-xs shadow transition-colors"
                >
                  Consult on similar project
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Close Case
                </button>
              </div>

            </div>
          </div>
        );
      })()}
    </section>
  );
}
