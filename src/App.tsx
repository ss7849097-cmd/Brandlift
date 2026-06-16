import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MessageSquareCode } from "lucide-react";

export default function App() {
  
  // Custom scrolling handoff to focus directly onto the Interactive Quote Estimator
  const handleFocusEstimator = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      
      // Auto blink the contact title to attract cursor view
      const mainContactTitle = document.getElementById("main-contact-title");
      if (mainContactTitle) {
        mainContactTitle.classList.add("text-brand-green");
        setTimeout(() => {
          mainContactTitle.classList.remove("text-brand-green");
        }, 1500);
      }
    }
  };

  const whatsappUrl = "https://wa.me/919495530640?text=Hello%20BrandLift%20Marketing!%20I%20visited%20your%20website%20and%20would%20love%20to%20get%20a%20free%20quote%20for%20my%20business.";

  return (
    <div className="bg-white min-h-screen text-brand-black flex flex-col relative antialiased">
      {/* Background radial accent blur grids */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/3 rounded-full filter blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-emerald-500/2 rounded-full filter blur-3xl pointer-events-none -z-10" />

      {/* Modern sticky Header */}
      <Header onOpenQuote={handleFocusEstimator} />

      {/* Main Container contents */}
      <main className="flex-grow">
        {/* HERO SECTION */}
        <Hero onOpenQuote={handleFocusEstimator} />

        {/* ABOUT SECTION */}
        <About />

        {/* SERVICES SECTION */}
        <Services />

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* PORTFOLIO SECTION */}
        <Portfolio />

        {/* TESTIMONIALS SECTION */}
        <Testimonials />

        {/* CONTACT SECTION WITH ESTIMATOR */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP INTEGRATION */}
      <div className="fixed bottom-6 left-6 z-40 group flex items-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-3.5 rounded-full shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer border border-[#25D366]/20"
          id="whatsapp-floating-btn"
          title="Chat on WhatsApp"
        >
          {/* Custom high-contrast SVG path for perfect WhatsApp brand accuracy */}
          <svg
            className="w-6 h-6 fill-current text-white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.289 1.973 13.82 1.571 12.18 1.571 6.744 1.571 2.32 5.941 2.316 11.369c-.001 1.742.469 3.44 1.354 4.953l-.364 1.332z" />
          </svg>
        </a>

        {/* Dynamic sliding tooltips */}
        <div className="absolute left-16 bg-brand-black text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10 flex items-center gap-1.5">
          <span className="w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
          <span>WhatsApp support online</span>
        </div>
      </div>
    </div>
  );
}

