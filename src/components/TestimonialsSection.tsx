import React from 'react';
import { Star, ShieldCheck, CheckCircle, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>VERIFIED CLIENT IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proof From <span className="text-gradient-purple">Brand Owners & Media Buyers</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Real feedback from growth leaders and DTC operators scaling Meta & TikTok ad spend across DACH, Scandinavia, and US markets.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/40 bg-[#0f0f18] flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div className="space-y-4">
                {/* Top Quote & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    {item.impactMetric}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                  "{item.content}"
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/40"
                />
                <div>
                  <div className="font-heading font-bold text-white text-sm sm:text-base flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono">{item.role}</div>
                  <div className="text-[11px] text-purple-400 font-mono">{item.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
