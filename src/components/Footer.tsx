import React, { useState, useEffect } from "react";
import { TrendingUp, ArrowUp, Mail, Phone, MapPin, ExternalLink, Heart } from "lucide-react";
import { COMPANY_INFO } from "../data";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-black text-white pt-20 pb-8 relative overflow-hidden border-t border-white/5">
      
      {/* Decorative vector */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-green/3 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo, tagline, about brief */}
          <div className="md:col-span-5 space-y-6">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="p-2 bg-brand-green/10 rounded-xl group-hover:bg-brand-green group-hover:scale-105 transition-all">
                <TrendingUp className="w-5 h-5 text-brand-green group-hover:text-white transition-colors" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Brand<span className="text-brand-green">Lift</span>
              </span>
            </a>
            
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              We help businesses grow, increase visibility, and achieve long-term success through innovative digital strategies and creative design solutions. Combining marketing psychology with cutting edge visuals to deliver measurable parameters.
            </p>

            <blockquote className="border-l-2 border-brand-green pl-4 italic text-sm font-light text-gray-300">
              "{COMPANY_INFO.tagline}"
            </blockquote>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-brand-green uppercase tracking-widest">
              QUICK NAVIGATION
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { name: "Home", href: "#home" },
                { name: "About BrandLift", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Portfolio Case Studies", href: "#portfolio" },
                { name: "Contact & Location", href: "#contact" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-brand-green transition-colors font-medium hover:translate-x-1 duration-250 inline-block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Location & support card footer */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold text-brand-green uppercase tracking-widest">
              OFFICE HOURS & LOCATION
            </h4>
            
            <div className="space-y-3.5 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <p className="leading-relaxed font-normal">
                  {COMPANY_INFO.fullAddress}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-green transition-colors font-medium">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-brand-green transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Separator, copyrights details & scroll-to-top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-3xs text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} BrandLift Marketing. All Rights Reserved. Created in Perinthalmanna, Kerala, India.
          </p>
          <p className="text-3xs text-gray-500 uppercase tracking-widest flex items-center justify-center gap-1">
            <span>Constructed with</span>
            <Heart className="w-3 h-3 text-brand-green fill-brand-green" />
            <span>for Growth-driven Founders</span>
          </p>
        </div>

      </div>

      {/* Floating Scroll To Top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 p-3 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl shadow-lg hover:shadow-brand-green/20 hover:-translate-y-0.5 transition-all cursor-pointer focus:outline-none ${
          showScroll ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"
        }`}
        aria-label="Scroll back to top"
        id="scroll-to-top-btn"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
