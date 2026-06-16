import React from "react";
import { ArrowRight, ChevronRight, Play, CheckCircle, TrendingUp, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";
import heroImg from "../assets/images/hero_marketing_growth_1781593745344.jpg";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-white overflow-hidden"
    >
      {/* Decorative soft glowing backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-green/5 rounded-full filter blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/5 right-1/10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text (Col span 7 on lg) */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center text-center lg:text-left">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/10 text-brand-green font-medium text-xs sm:text-sm self-center lg:self-start shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-green animate-pulse" />
              <span>Leading Digital Agency in Perinthalmanna, India</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </motion.div>

            {/* Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-black leading-tight sm:leading-none"
              >
                Elevate Your Brand with{" "}
                <span className="relative inline-block text-brand-black">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand-black via-brand-green to-emerald-600">
                    BrandLift
                  </span>
                  <span className="absolute left-0 right-0 bottom-1 h-3 bg-brand-green/10 -rotate-1 -z-10 rounded" />
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Transform your business with expert SEO, Digital Marketing, Dropshipping Solutions, Video Editing, and Graphic Design services. Let's create your path to growth.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 rounded-full bg-brand-green text-white font-bold leading-none hover:bg-brand-green-dark transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-brand-green/20 hover:shadow-xl hover:shadow-brand-green/35 flex items-center justify-center gap-2 cursor-pointer font-sans"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <a
                href="#services"
                className="px-8 py-4 rounded-full bg-white border border-gray-200 text-brand-black hover:border-brand-green hover:text-brand-green transition-all duration-300 font-bold leading-none flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                Our Services
              </a>
            </motion.div>

            {/* Simple Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                <span>100% Custom Strategy</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                <span>Local & Global Excellence</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest">
                <CheckCircle className="w-4 h-4 text-brand-green" />
                <span>Affordable Solutions</span>
              </div>
            </motion.div>

          </div>

          {/* Right graphics (Col span 5 on lg) */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            
            {/* Visual Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-md sm:max-w-md lg:max-w-full aspect-[4/3] sm:aspect-square lg:aspect-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white glow-hover bg-brand-gray-light"
            >
              <img
                src={heroImg}
                alt="BrandLift Modern Digital Space illustration"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating widget 1: Active growth rating */}
            <motion.div
              initial={{ x: 60, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-6 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3.5 max-w-[210px] hover:scale-105 transition-transform duration-300"
            >
              <div className="p-2.5 bg-brand-green/10 rounded-xl">
                <TrendingUp className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <span className="block text-xl font-extrabold text-brand-black">10x</span>
                <span className="block text-2xs text-gray-400 font-semibold uppercase tracking-wider">Average Leads Boom</span>
              </div>
            </motion.div>

            {/* Floating widget 2: SEO Badge */}
            <motion.div
              initial={{ x: -60, y: 40, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 max-w-[200px] hover:scale-105 transition-transform duration-300"
            >
              <div className="p-2.5 bg-brand-black text-white rounded-xl">
                <Award className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <span className="block text-sm font-extrabold text-brand-black leading-tight">Google Rank #1</span>
                <span className="block text-3xs text-gray-400 font-semibold uppercase tracking-wider">SEO Core Optimization</span>
              </div>
            </motion.div>

            {/* Tiny abstract dots */}
            <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-brand-green animate-ping" />
            <div className="absolute top-1/4 -right-4 w-3.5 h-3.5 rounded-full bg-brand-green/20" />
            <div className="absolute bottom-1/3 -left-4 w-5 h-5 rounded-full bg-brand-black/5" />
          </div>

        </div>
      </div>
    </section>
  );
}
