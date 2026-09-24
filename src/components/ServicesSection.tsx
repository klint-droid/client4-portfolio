import React from 'react';
import { Video, Film, Layers, Globe, Check, ArrowRight, Zap, Cpu } from 'lucide-react';
import { SERVICES, EDITING_TOOLKIT } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-purple-400" />;
      case 'Film':
        return <Film className="w-6 h-6 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-pink-400" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-emerald-400" />;
      default:
        return <Zap className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070709]">
      <div className="section-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono text-purple-300">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>SOLUTIONS FOR SCALING DTC BRANDS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Built Specifically For <span className="text-gradient-purple">E-Commerce & Media Buyers</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Stop wasting thousands on generic video editors who don't understand hook rates, CPA, or ad fatigue. Everything I deliver is engineered to perform in live ad accounts.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/40 bg-[#0e0e16] flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {getIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/25 font-mono text-xs font-semibold">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-purple-300" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <a
                  href="#contact"
                  className="text-xs font-mono text-purple-400 hover:text-purple-300 flex items-center gap-1.5 group font-bold tracking-wide"
                >
                  <span>INQUIRE ABOUT THIS SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Editing Framework */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/15 bg-gradient-to-b from-[#11111a] to-[#0c0c12] relative overflow-hidden mb-20">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-mono uppercase text-purple-400 tracking-wider">
              BATTLE-TESTED WORKFLOW
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 4-Step Direct-Response Production Framework
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              How we turn a raw Google Drive folder of disorganized footage into 10+ high-performing Meta/TikTok ads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 relative group hover:border-purple-500/30 transition-colors">
              <div className="text-3xl font-extrabold font-mono text-purple-500/50 group-hover:text-purple-400 transition-colors">
                01
              </div>
              <h4 className="text-base font-bold text-white font-heading">Hook Ideation & Script Pacing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Analyzing customer reviews and competitor tear-downs to craft 5 distinct 3-second hook hypotheses.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 relative group hover:border-cyan-500/30 transition-colors">
              <div className="text-3xl font-extrabold font-mono text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                02
              </div>
              <h4 className="text-base font-bold text-white font-heading">Rapid Assembly & Pattern Cuts</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Aggressive pacing cuts every 0.8–1.5 seconds, removing filler words, awkward pauses, and static b-roll.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 relative group hover:border-pink-500/30 transition-colors">
              <div className="text-3xl font-extrabold font-mono text-pink-500/50 group-hover:text-pink-400 transition-colors">
                03
              </div>
              <h4 className="text-base font-bold text-white font-heading">Sound Design & Kinetic Typography</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Adding tactile sound effects (pops, swooshes, ASMR) and engaging dynamic subtitles for sound-off viewers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 relative group hover:border-emerald-500/30 transition-colors">
              <div className="text-3xl font-extrabold font-mono text-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                04
              </div>
              <h4 className="text-base font-bold text-white font-heading">Iterative Variations & Localization</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Exporting batch variants with localized German, French, and Nordic copy for seamless multinational scaling.
              </p>
            </div>
          </div>
        </div>

        {/* Software & Toolkit */}
        <div className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white">Production Suite & Tool Mastery</h3>
              <p className="text-xs text-slate-400 font-mono">Industry-standard tools for professional finishing</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="pulse-dot"></span>
              <span>Hardware: High-End Dual Monitor Workstation</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {EDITING_TOOLKIT.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl glass-panel border border-white/5 bg-[#0d0d14] text-center space-y-1 hover:border-purple-500/30 transition-colors"
              >
                <div className="text-sm font-bold text-white">{tool.name}</div>
                <div className="text-[11px] text-purple-300 font-mono">{tool.category}</div>
                <div className="text-[10px] text-slate-500 font-mono uppercase">{tool.proficiency}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
