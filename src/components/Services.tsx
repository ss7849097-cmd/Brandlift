import React, { useState } from "react";
import * as Icons from "lucide-react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  
  // SEO Audit tool state
  const [auditUrl, setAuditUrl] = useState("");
  const [auditEmail, setAuditEmail] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState("");
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const resolveIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.HelpCircle className="w-6 h-6 text-brand-green" />;
    return <IconComponent className="w-6 h-6 text-brand-green group-hover:text-white transition-colors duration-300" />;
  };

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditUrl.trim() || !auditEmail.trim()) return;

    setIsAuditing(true);
    setAuditResult(null);

    const steps = [
      "Analyzing meta tags and page titles...",
      "Measuring speed indexes & server response time...",
      "Evaluating core web vitals and SSL configurations...",
      "Checking mobile user experience responsiveness...",
      "Generating customized Kerala-targeted search forecast...",
    ];

    let currentStepIdx = 0;
    setAuditStep(steps[0]);

    const stepInterval = setInterval(() => {
      currentStepIdx++;
      if (currentStepIdx < steps.length) {
        setAuditStep(steps[currentStepIdx]);
      } else {
        clearInterval(stepInterval);
        setIsAuditing(false);
        setAuditResult({
          score: 84,
          speed: "Good (1.2s First Contentful Paint)",
          seoScore: 92,
          issuesCount: 3,
          suggestions: [
            "Missing meta descriptions on 4 service pages.",
            "Compress hero images to WebP to save 1.4s load time.",
            "Improve alt-tags for Google Images search optimization."
          ],
        });
      }
    }, 900);
  };

  return (
    <section id="services" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold text-brand-green uppercase tracking-[0.2em] block">
            OUR CORE EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
            Comprehensive Digital Services to Double Your Sales
          </h2>
          <p className="text-base text-gray-500">
            We provide powerful, end-to-end digital marketing and creative services designed to build absolute trust and expand your business output.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setSelectedService(srv)}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              id={`service-card-${srv.id}`}
            >
              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green transition-all duration-300">
                  {resolveIcon(srv.iconName)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-black group-hover:text-brand-green transition-colors duration-200">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-normal">
                    {srv.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action indicator link */}
              <div className="pt-6 mt-6 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-brand-green transition-colors">
                <span>VIEW OFFERS & BENEFITS</span>
                <Icons.ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Large Highlight segment / Floating SEO Audit Tool Banner */}
        <div className="mt-20 p-8 sm:p-12 bg-brand-black text-white rounded-3xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/15 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Callout Info */}
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 bg-brand-green/10 border border-brand-green/20 text-brand-green rounded-full text-xs font-bold uppercase tracking-widest inline-block">
                IN-HOUSE UTILITY TOOL
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Unlock Your Instant & Free Web SEO Performance Audit
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Want to identify why your competitors rank higher on Google search results? Type your domain and primary email address. Our simulator analyzes core rankings factors immediately.
              </p>
              
              <div className="flex gap-4 items-center pt-2">
                <div className="flex -space-x-2">
                  {["https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100",
                    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=100"
                  ].map((src, i) => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-brand-black object-cover" src={src} referrerPolicy="no-referrer" alt="auditor user" />
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-medium">Over <span className="text-brand-green font-bold">120+ Kerala brands</span> checked this month.</p>
              </div>
            </div>

            {/* Audit Input Form */}
            <div className="lg:col-span-6 bg-brand-gray-dark/40 border border-white/5 rounded-2xl p-6 sm:p-8">
              {!auditResult ? (
                <form onSubmit={handleRunAudit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">Website Address</label>
                    <input
                      type="url"
                      placeholder="e.g. https://mybusiness.com"
                      value={auditUrl}
                      onChange={(e) => setAuditUrl(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green text-white transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">Your Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@company.com"
                      value={auditEmail}
                      onChange={(e) => setAuditEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-green text-white transition-colors"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isAuditing}
                    className="w-full py-3.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-sm select-none cursor-pointer disabled:bg-gray-700"
                  >
                    {isAuditing ? (
                      <>
                        <Icons.Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>{auditStep}</span>
                      </>
                    ) : (
                      <>
                        <Icons.Search className="w-4 h-4" />
                        <span>Launch Free Audit Now</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h4 className="font-bold text-white text-lg">Audit Scorecard</h4>
                    <span className="px-3 py-1 rounded bg-brand-green/20 text-brand-green font-bold text-sm">Actionable Report</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                      <span className="block text-3xl font-black text-brand-green">{auditResult.score}%</span>
                      <span className="text-3xs text-gray-400 font-semibold uppercase tracking-wider block mt-1">SEO Health</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                      <span className="block text-2xs font-extrabold text-blue-400 leading-tight block truncate mt-1.5">{auditResult.speed}</span>
                      <span className="text-3xs text-gray-400 font-semibold uppercase tracking-wider block mt-2">Loading Speed</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase block">Recommendations:</span>
                    <ul className="space-y-1.5">
                      {auditResult.suggestions.map((s: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <Icons.AlertTriangle className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setAuditResult(null);
                      setAuditUrl("");
                      setAuditEmail("");
                    }}
                    className="w-full py-2.5 border border-white/15 hover:border-brand-green rounded-xl text-xs font-semibold text-gray-400 hover:text-brand-green transition-all"
                  >
                    Reset & Audit New Site
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* Services Details Modal / Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full border border-gray-100 animate-scale-up relative">
            
            {/* Header backdrop color */}
            <div className="bg-brand-black p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-green/20 rounded-lg text-brand-green">
                  {(Icons as any)[selectedService.iconName] && React.createElement((Icons as any)[selectedService.iconName], { className: "w-5 h-5" })}
                </div>
                <h3 className="text-lg font-extrabold">{selectedService.title}</h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Icons.X className="w-5 h-5" />
              </button>
            </div>

            {/* Content body */}
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <span className="text-3xs font-extrabold text-brand-green tracking-widest uppercase block">Service Overview</span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {selectedService.detailedDescription}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-3xs font-extrabold text-brand-black tracking-widest uppercase block">What We Deliver:</span>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedService.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-brand-black font-semibold">
                      <Icons.CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-gray-100 flex gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-3 text-center rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-bold text-xs shadow-md transition-colors block"
                >
                  Book this Service
                </a>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-3 text-xs font-semibold rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
