import React from "react";
import * as Icons from "lucide-react";
import { WHY_CHOOSE_US } from "../data";

export default function WhyChooseUs() {
  const renderIcon = (name: string) => {
    const IconComponent = (Icons as any)[name];
    if (!IconComponent) return <Icons.CheckCircle className="w-6 h-6 text-brand-green" />;
    return <IconComponent className="w-5 h-5 text-brand-green" />;
  };

  return (
    <section id="why-choose-us" className="py-24 bg-brand-gray-light/40 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold text-brand-green uppercase tracking-[0.2em] block">
            WHY PARTNER WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black tracking-tight leading-tight">
            Our Blueprint for Your Outstanding Conversion & Growth
          </h2>
          <p className="text-base text-gray-500">
            Learn why hundreds of brands choose BrandLift Marketing in Kerala and across India to scale their online positioning.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-white border border-gray-100/80 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand-green/20 transition-all duration-300 group flex gap-5"
            >
              {/* Icon Container with custom subtle light gradients */}
              <div className="shrink-0">
                <div className="p-3 bg-brand-green/10 rounded-xl group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                  {renderIcon(item.iconName)}
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-brand-black group-hover:text-brand-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inner Interactive Conversion Quote banner */}
        <div className="mt-16 text-center max-w-xl mx-auto p-2 border border-gray-100 rounded-full bg-white shadow-sm flex flex-col sm:flex-row items-center gap-3 justify-between">
          <div className="px-5 py-2 text-center sm:text-left">
            <span className="block text-[11px] font-extrabold text-brand-green tracking-wider uppercase">Are you ready to scale?</span>
            <span className="text-2xs text-gray-400 font-semibold uppercase">Consult with us in 5 Seconds.</span>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-black hover:bg-brand-green text-white text-xs font-bold font-mono tracking-tight text-center transition-colors"
          >
            LET'S CONVERSATE
          </a>
        </div>

      </div>
    </section>
  );
}
