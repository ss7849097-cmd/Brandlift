import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-brand-gray-light/60 scroll-mt-12 relative overflow-hidden">
      
      {/* Abstract circles */}
      <div className="absolute top-1/2 left-[-100px] w-64 h-64 bg-brand-green/5 rounded-full filter blur-2xl" />
      <div className="absolute top-1/3 right-[-100px] w-80 h-80 bg-brand-green/5 rounded-full filter blur-3xl animate-pulse-slow" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold text-brand-green uppercase tracking-[0.2em] block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
            What Growing Brands Say About BrandLift
          </h2>
          <p className="text-sm text-gray-500">
            Read direct feedback from e-commerce store founders, lead developers, and startups we helped scale.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="relative">
          {/* Main Card Frame */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-16 h-16 text-brand-green/10" />

            {/* Testimonials Slide loop */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Profile details column */}
              <div className="md:col-span-4 text-center md:text-left space-y-4 flex flex-col items-center md:items-start shrink-0">
                <div className="relative">
                  <img
                    src={TESTIMONIALS[activeIndex].avatar}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-md border-2 border-brand-green/20"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-brand-green p-1.5 rounded-lg text-white">
                    <Quote className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-extrabold text-brand-black">{TESTIMONIALS[activeIndex].name}</h4>
                  <span className="block text-2xs font-semibold text-gray-400 uppercase tracking-wider">{TESTIMONIALS[activeIndex].role}</span>
                  <span className="block text-xs font-bold text-brand-green">{TESTIMONIALS[activeIndex].company}</span>
                </div>
              </div>

              {/* Message text details */}
              <div className="md:col-span-8 space-y-6">
                
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1">
                  {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Main Text */}
                <p className="text-base sm:text-lg text-brand-black/80 font-medium leading-relaxed italic text-center md:text-left">
                  "{TESTIMONIALS[activeIndex].text}"
                </p>

                {/* Counter index */}
                <div className="text-right text-xs font-semibold text-gray-400 select-none">
                  <span className="text-brand-green font-extrabold font-mono">{activeIndex + 1}</span> / {TESTIMONIALS.length}
                </div>
              </div>

            </div>
          </div>

          {/* Carousel Arrows Controls */}
          <div className="flex justify-center md:justify-end gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full bg-white border border-gray-100 hover:border-brand-green hover:text-brand-green text-gray-600 shadow-md hover:shadow-lg transition-all focus:outline-none cursor-pointer"
              aria-label="Previous testimonial"
              id="carousel-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full bg-white border border-gray-100 hover:border-brand-green hover:text-brand-green text-gray-600 shadow-md hover:shadow-lg transition-all focus:outline-none cursor-pointer"
              aria-label="Next testimonial"
              id="carousel-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
