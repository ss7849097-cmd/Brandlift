import React, { useState, useEffect, useRef } from "react";
import { Check, Target, Users, Sparkles, MapPin } from "lucide-react";
import { COUNTERS } from "../data";

// Custom IntersectionObserver CountUp for premium user feel
function DynamicCounter({ value, suffix, label }: { value: number; suffix: string; label: string; key?: React.Key }) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = elementRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [triggered]);

  useEffect(() => {
    if (!triggered) return;

    let start = 0;
    const duration = 1500; // 1.5s animation
    const increment = value / (duration / 16); // ~60fps
    
    const countTimer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(countTimer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(countTimer);
  }, [triggered, value]);

  return (
    <div
      ref={elementRef}
      className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-brand-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      <span className="text-4xl font-extrabold text-brand-black block mb-2 font-mono">
        {count}
        <span className="text-brand-green">{suffix}</span>
      </span>
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-gray-light/60 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Interactive Left Side Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Main Decorative Card */}
              <div className="relative z-10 p-8 sm:p-10 bg-brand-black text-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/20 rounded-full filter blur-3xl pointer-events-none" />
                
                <span className="text-xs font-bold text-brand-green uppercase tracking-widest block mb-4">
                  OUR ESSENCE
                </span>
                
                <blockquote className="text-xl sm:text-2xl font-light italic leading-relaxed mb-6">
                  "Grow. Create. Succeed."
                </blockquote>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  BrandLift Marketing is a results-driven digital marketing company that helps businesses grow their online presence through innovative and creative solutions. We provide professional digital services for startups, entrepreneurs, and established brands.
                </p>

                <div className="space-y-4 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-gray-300 font-medium">Perinthalmanna, Kerala, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-gray-300 font-medium">ROI & Conversion Led Approach</span>
                  </div>
                </div>
              </div>

              {/* Behind Accent Block */}
              <div className="absolute -inset-4 bg-brand-green/10 rounded-[36px] -rotate-1 -z-10" />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-extrabold text-brand-green uppercase tracking-[0.2em] block">
                ABOUT BRANDLIFT MARKETING
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
                Empowering Businesses With Modern Digital Solutions
              </h2>
              <p className="text-base text-gray-500 leading-relaxed">
                BrandLift Marketing helps businesses grow, increase visibility, and achieve long-term success through innovative digital strategies and creative solutions. We combine marketing expertise with creative design to deliver measurable results.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Data-Backed Keyword Expansion Strategies",
                "Stunning Visual Identity & Design assets",
                "End-to-End Managed Dropshipping setups",
                "High Retention, Scroll-Stopping Video Editing",
              ].map((value, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 h-5 w-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {COUNTERS.map((cnt) => (
                <DynamicCounter
                  key={cnt.id}
                  value={cnt.value}
                  suffix={cnt.suffix}
                  label={cnt.label}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
