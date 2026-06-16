import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Calculator, Info, Clock, AlertCircle } from "lucide-react";
import { COMPANY_INFO } from "../data";

interface ContactProps {
  showQuoteInitially?: boolean;
}

export default function Contact({ showQuoteInitially = false }: ContactProps) {
  // Simple message form state
  const [msgName, setMsgName] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const [msgPhone, setMsgPhone] = useState("");
  const [msgContent, setMsgContent] = useState("");
  const [messageSubmitted, setMessageSubmitted] = useState(false);

  // Interactive Quote Form state
  const [quoteType, setQuoteType] = useState("seo");
  const [quoteBudget, setQuoteBudget] = useState(20000); // INR
  const [quoteTimeline, setQuoteTimeline] = useState("flexible");
  const [quoteNeedCopywriter, setQuoteNeedCopywriter] = useState(false);
  const [quoteRequirements, setQuoteRequirements] = useState("");
  const [generatedEstimate, setGeneratedEstimate] = useState<any | null>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgName || !msgEmail || !msgContent) return;

    // Simulate sending message
    setMessageSubmitted(true);
    setTimeout(() => {
      // Auto clear
      setMsgName("");
      setMsgEmail("");
      setMsgPhone("");
      setMsgContent("");
    }, 4000);
  };

  const handleGenerateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgName && !msgEmail) {
      alert("Please provide your Name and Email so we can bind the estimate to your profile.");
      return;
    }

    // Estimate math calculation logic to simulate real marketing estimators
    let baseRate = 12000;
    let serviceMultiplier = 1;

    switch (quoteType) {
      case "seo":
        baseRate = 15000;
        serviceMultiplier = 1.1;
        break;
      case "digital-marketing":
        baseRate = 22000;
        serviceMultiplier = 1.35;
        break;
      case "dropshipping":
        baseRate = 35000;
        serviceMultiplier = 1.6;
        break;
      case "video-editing":
        baseRate = 14000;
        serviceMultiplier = 1.05;
        break;
      case "graphic-design":
        baseRate = 9000;
        serviceMultiplier = 0.85;
        break;
      case "branding-content":
        baseRate = 18000;
        serviceMultiplier = 1.25;
        break;
    }

    let calculatedCost = Math.round(baseRate * serviceMultiplier);
    
    if (quoteNeedCopywriter) {
      calculatedCost += 6000;
    }

    if (quoteTimeline === "asap") {
      calculatedCost = Math.round(calculatedCost * 1.25); // 25% urgent priority loading
    } else if (quoteTimeline === "standard") {
      calculatedCost = Math.round(calculatedCost * 1.05);
    }

    setGeneratedEstimate({
      proposalId: `BL-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName: msgName || "Preferred Client",
      clientEmail: msgEmail || "rinsiyea@gmail.com",
      serviceLabel: quoteType === "seo" ? "Search Engine Optimization" :
                    quoteType === "digital-marketing" ? "Digital Marketing" :
                    quoteType === "dropshipping" ? "Dropshipping Solutions" :
                    quoteType === "video-editing" ? "Video Editing" :
                    quoteType === "graphic-design" ? "Graphic Design" : "Branding & Content",
      costEstimate: calculatedCost,
      breakdown: [
        { label: "Base Strategy Setup", price: Math.round(baseRate * 0.4) },
        { label: "Target Execution Core", price: Math.round(calculatedCost - Math.round(baseRate * 0.4) - (quoteNeedCopywriter ? 6000 : 0)) },
        ...(quoteNeedCopywriter ? [{ label: "Professional Copywriting Premium", price: 6000 }] : [])
      ],
      estimatedDays: quoteTimeline === "asap" ? 7 : quoteTimeline === "standard" ? 21 : 45,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold text-brand-green uppercase tracking-[0.2em] block">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight leading-tight" id="main-contact-title">
            Let's Grow Your Brand Together
          </h2>
          <p className="text-base text-gray-500">
            Have a question or ready to skyrocket your conversion metrics? Send us a direct message or use our custom calculator estimator to request a detailed quote!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            <div className="space-y-6">
              <span className="text-[#0D0D11] text-base font-bold uppercase tracking-widest block pb-2 border-b border-gray-100">
                BrandLift Information
              </span>

              {/* Location Card */}
              <div className="flex gap-4 p-5 bg-brand-gray-light border border-gray-100/60 rounded-2xl">
                <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block">Agency Location</span>
                  <p className="text-sm font-bold text-brand-black">Perinthalmanna, Kerala, India</p>
                  <p className="text-2xs text-gray-400 font-medium">Malappuram District, Pin: 679322</p>
                </div>
              </div>

              {/* Email Card */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex gap-4 p-5 bg-brand-gray-light border border-gray-100/60 rounded-2xl hover:border-brand-green/20 hover:bg-white transition-all block group"
              >
                <div className="flex gap-4">
                  <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block">Send Email Direct</span>
                    <p className="text-sm font-bold text-brand-black group-hover:text-brand-green transition-colors">{COMPANY_INFO.email}</p>
                    <p className="text-2xs text-gray-400 font-medium">Response within 12 Hours guaranteed</p>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex gap-4 p-5 bg-brand-gray-light border border-gray-100/60 rounded-2xl hover:border-brand-green/20 hover:bg-white transition-all block group"
              >
                <div className="flex gap-4">
                  <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green shrink-0 group-hover:bg-brand-green group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block">Direct Phone & WhatsApp</span>
                    <p className="text-sm font-bold text-brand-black group-hover:text-brand-green transition-colors">{COMPANY_INFO.phone}</p>
                    <p className="text-2xs text-gray-400 font-medium">Customer support line, Call anytime</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Simulated Live status badge */}
            <div className="p-5 border border-brand-green/15 bg-brand-green/5 rounded-2xl">
              <span className="text-3xs uppercase tracking-[0.2em] font-extrabold text-brand-green block mb-1 flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 bg-brand-green rounded-full inline-block" /> Active Client Window open
              </span>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Looking for strategic conversion boosts? Schedule an immediate session. Talk directly to our directors from Perinthalmanna via email/call.
              </p>
            </div>

          </div>

          {/* Right Column: Custom interactive tabs (Send Msg vs Calculate Estimate) */}
          <div className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 shadow-xl" id="contact-tab-container">
            
            <div className="space-y-8">
              
              {/* Selector Tabs */}
              <div className="flex gap-4 border-b border-gray-100 pb-4">
                <span className="text-base font-extrabold text-[#0D0D11] flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-brand-green" />
                  <span>Custom Quote & Marketing Proposal Estimator</span>
                </span>
              </div>

              {/* Estimate Result Display Overlay */}
              {generatedEstimate ? (
                <div className="p-6 bg-brand-black text-white rounded-2xl space-y-6 relative overflow-hidden animate-fade-in border border-brand-green/20">
                  <div className="absolute top-0 right-0 w-44 h-44 bg-brand-green/15 rounded-full filter blur-2xl pointer-events-none" />
                  
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <div>
                      <span className="text-3xs uppercase tracking-[0.15em] font-extrabold text-brand-green block">CUSTOM ESTIMATE RECEIPT</span>
                      <h4 className="font-extrabold text-lg text-white font-mono">{generatedEstimate.proposalId}</h4>
                    </div>
                    <button
                      onClick={() => setGeneratedEstimate(null)}
                      className="text-xs font-semibold text-gray-400 hover:text-white border border-white/10 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      Edit parameters
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-medium text-gray-300">
                      <span>Service Requested:</span>
                      <span className="font-bold text-white uppercase tracking-wider">{generatedEstimate.serviceLabel}</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-gray-300">
                      <span>Target timeline priority:</span>
                      <span className="font-bold text-white uppercase tracking-wider">{quoteTimeline === "asap" ? "Urgent delivery" : quoteTimeline === "standard" ? "Standard speed" : "Flexible scale"}</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-gray-300">
                      <span>Assigned to:</span>
                      <span className="text-white font-bold">{generatedEstimate.clientName} ({generatedEstimate.clientEmail})</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-3">
                    <span className="text-3xs font-extrabold text-gray-300 uppercase tracking-widest block">Cost Breakdown:</span>
                    {generatedEstimate.breakdown.map((item: any, idx: number) => (
                      <div key={idx} className="flex justify-between text-xs text-gray-300">
                        <span>{item.label}</span>
                        <span className="font-semibold font-mono">₹{item.price.toLocaleString("en-IN")}</span>
                      </div>
                    ))}
                    <div className="h-px bg-white/10 pt-1" />
                    <div className="flex justify-between text-sm font-extrabold text-brand-green">
                      <span>TOTAL ESTIMATED INVESTMENT (INR)</span>
                      <span className="text-base font-black font-mono">₹{generatedEstimate.costEstimate.toLocaleString("en-IN")}*</span>
                    </div>
                    <span className="text-[10px] text-gray-400 leading-tight block text-right pt-1">*GST exclusions. Soft estimation.</span>
                  </div>

                  <div className="flex gap-2 p-3.5 bg-brand-green/10 border border-brand-green/20 rounded-xl">
                    <Clock className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <p className="text-2xs text-gray-300 leading-relaxed font-normal">
                      Proposal successfully calculated & locked for 30 days. An invitation message has been formatted to dispatch directly to <span className="font-bold text-brand-green">rinsiyea@gmail.com</span> on confirmation.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      alert(`Thank you ${generatedEstimate.clientName}! Your calculated estimate has been locked in and submitted to rinsiyea@gmail.com. Our team from Perinthalmanna will message you shortly.`);
                      setGeneratedEstimate(null);
                    }}
                    className="w-full py-3.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold rounded-xl transition-colors text-xs font-semibold cursor-pointer"
                  >
                    Confirm Proposal & Dispatch to Directory
                  </button>
                </div>
              ) : (
                <form onSubmit={handleGenerateQuote} className="space-y-6">
                  
                  {/* Two columns: User data input */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-2xs font-extrabold text-brand-black uppercase tracking-wider block">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul S"
                        value={msgName}
                        onChange={(e) => setMsgName(e.target.value)}
                        className="w-full bg-brand-gray-light border border-gray-100 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-green text-brand-black transition-colors font-medium"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-2xs font-extrabold text-brand-black uppercase tracking-wider block">Your Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@domain.com"
                        value={msgEmail}
                        onChange={(e) => setMsgEmail(e.target.value)}
                        className="w-full bg-brand-gray-light border border-gray-100 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-green text-brand-black transition-colors font-medium"
                        required
                      />
                    </div>
                  </div>

                  {/* Service selector */}
                  <div className="space-y-1">
                    <label className="text-2xs font-extrabold text-brand-black uppercase tracking-wider block">Desired Service Type</label>
                    <select
                      value={quoteType}
                      onChange={(e) => setQuoteType(e.target.value)}
                      className="w-full bg-brand-gray-light border border-gray-100 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-green text-brand-black transition-colors font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <option value="seo">SEO Search Engine Optimization</option>
                      <option value="digital-marketing">Digital Marketing Funnels</option>
                      <option value="dropshipping">Dropshipping Solutions & E-com Store</option>
                      <option value="video-editing">Professional Video Editing & Reels</option>
                      <option value="graphic-design">Graphic Design & Logo Works</option>
                      <option value="branding-content">Branding & Content Creation</option>
                    </select>
                  </div>

                  {/* Interactive Slider Budget */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-2xs font-extrabold text-brand-black uppercase tracking-wider">
                      <span>Maximum Intended Budget Range</span>
                      <span className="font-mono text-brand-green font-black">₹{quoteBudget.toLocaleString("en-IN")} INR</span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="150000"
                      step="5000"
                      value={quoteBudget}
                      onChange={(e) => setQuoteBudget(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-full appearance-none cursor-pointer accent-brand-green"
                    />
                    <div className="flex justify-between text-3xs text-gray-400 font-semibold uppercase tracking-wider pt-1">
                      <span>₹5,000</span>
                      <span>₹75,000</span>
                      <span>₹150,000+</span>
                    </div>
                  </div>

                  {/* Timeline segment Radio triggers */}
                  <div className="space-y-1.5">
                    <label className="text-2xs font-extrabold text-brand-black uppercase tracking-wider block">Project Launch Urgency</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "flexible", label: "Flexible Scale (30+ days)", desc: "Highest focus" },
                        { id: "standard", label: "Standard (15-30 days)", desc: "Steady launch" },
                        { id: "asap", label: "URGENT LAUNCH", desc: "Priority focus" }
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setQuoteTimeline(item.id)}
                          className={`p-3 rounded-xl border text-center cursor-pointer transition-all ${
                            quoteTimeline === item.id
                              ? "border-brand-green bg-brand-green/5 text-brand-green"
                              : "border-gray-100 hover:border-gray-200 text-gray-500 bg-brand-gray-light"
                          }`}
                        >
                          <span className="block text-[10px] font-bold uppercase leading-tight">{item.label}</span>
                          <span className="block text-4xs font-medium text-gray-400 uppercase mt-1 leading-none">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Toggle Content add-on */}
                  <div className="flex items-center gap-3 p-3.5 bg-brand-gray-light rounded-xl border border-gray-100/40">
                    <input
                      id="need-copywrite-checkbox"
                      type="checkbox"
                      checked={quoteNeedCopywriter}
                      onChange={(e) => setQuoteNeedCopywriter(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-brand-green focus:ring-brand-green cursor-pointer"
                    />
                    <label htmlFor="need-copywrite-checkbox" className="text-xs text-gray-600 font-medium select-none cursor-pointer">
                      We require full digital Copywriting, Blog posting, or Ad scripts setup (+₹6,000 Add-on)
                    </label>
                  </div>

                  {/* Requirements Textbox */}
                  <div className="space-y-1">
                    <label className="text-2xs font-extrabold text-brand-black uppercase tracking-wider block">Let us know more details (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. target competitor web link, winning product descriptions, or video editing references..."
                      value={quoteRequirements}
                      onChange={(e) => setQuoteRequirements(e.target.value)}
                      className="w-full bg-brand-gray-light border border-gray-100 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-brand-green text-brand-black transition-colors font-medium resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-black hover:bg-brand-green text-white hover:text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer font-sans shadow-lg hover:shadow-brand-green/20 text-xs font-semibold uppercase tracking-widest"
                  >
                    <Send className="w-4 h-4" />
                    <span>Calculate Custom Proposal Estimate</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
