import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, TrendingUp } from "lucide-react";

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ["home", "about", "services", "why-choose-us", "portfolio", "testimonials", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Reviews", href: "#testimonials", id: "testimonials" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group" id="logo-anchor">
            <div className="p-2 bg-brand-green/10 rounded-xl group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
              <TrendingUp className="w-6 h-6 text-brand-green group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-brand-black">
                Brand<span className="text-brand-green">Lift</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.2em] font-medium text-gray-400">
                Marketing
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 hover:text-brand-green ${
                  activeSection === link.id ? "text-brand-green font-bold" : "text-gray-600"
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-green rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-sm font-semibold rounded-full bg-brand-black text-white hover:bg-brand-green transition-all duration-300 flex items-center gap-1.5 focus:outline-none cursor-pointer border border-transparent shadow hover:shadow-brand-green/25 hover:-translate-y-0.5"
              id="quote-trigger-btn"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-brand-green focus:outline-none rounded-lg hover:bg-gray-50 transition-colors"
              aria-label="Toggle Menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-[72px] left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 transform ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
        id="mobile-nav-drawer"
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                activeSection === link.id
                  ? "bg-brand-green/10 text-brand-green"
                  : "text-gray-700 hover:bg-gray-50 hover:text-brand-green"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 px-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 text-center text-sm font-semibold rounded-xl bg-brand-green text-white hover:bg-brand-green-dark transition-colors flex items-center justify-center gap-2 shadow"
              id="mobile-quote-trigger-btn"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
