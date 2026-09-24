import React from 'react';
import { Play, Sparkles, ArrowRight, Flame, TrendingUp, CheckCircle2 } from 'lucide-react';
import { STATS } from '../data/portfolioData';
import { playHoverSound, playClickSound } from '../utils/audio';

interface HeroProps {
  onPlayFeaturedVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onPlayFeaturedVideo }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono tracking-wider text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>DIRECT-RESPONSE VIDEO EDITOR • DTC & UGC SPECIALIST</span>
            </div>

            {/* Huge Awwwards Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              CRAFTING ADS THAT{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 italic">
                STOP THE SCROLL
              </span>{' '}
              & SCALE REVENUE.
            </h1>

            {/* Supporting Pitch */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              I transform raw creator footage into high-retention, profit-generating <strong className="text-white font-semibold">Meta, TikTok & YouTube video ads</strong> for 7-8 figure DTC brands, agencies, and high-ticket offers. Battle-tested 3s hooks, pattern interrupts, and full European multilingual localization.
            </p>

            {/* Value Proposition Pills */}
            <div className="flex flex-wrap gap-3 pt-1 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24–48h Fast Batch Turnaround</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>5+ Hook Variations Per Creative</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>DACH, Nordic & US Market Compliant</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => {
                  playClickSound();
                  onPlayFeaturedVideo();
                }}
                onMouseEnter={playHoverSound}
                className="btn-primary group text-sm sm:text-base py-3.5 px-8"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                </div>
                <span>Play High-Ticket Showreel</span>
              </button>

              <a
                href="#gallery"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="btn-secondary text-sm sm:text-base py-3.5 px-6"
              >
                <span>Browse Static Ads & Gallery</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Proof */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070709] object-cover"
                  src="/photos/Reviews — Klaus B. photo.png"
                  alt="Klaus B."
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070709] object-cover"
                  src="/photos/Reviews — Martin S. avatar (2).png"
                  alt="Martin S."
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070709] object-cover"
                  src="/photos/Review avatar — Sabine K..png"
                  alt="Sabine K."
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-[#070709] object-cover"
                  src="/photos/Reviews — Niels P. avatar (2).png"
                  alt="Niels P."
                />
              </div>
              <div className="text-xs text-slate-300">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold font-mono">
                  <span>★★★★★</span>
                  <span className="text-white text-xs font-bold font-mono">5.0 CLIENT SCORE</span>
                </div>
                <p className="text-slate-400 font-normal">Trusted by international DTC founders & media buyers</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Studio Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[430px]">
              {/* Ambient Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-40 animate-pulse" />

              {/* Main Card */}
              <div className="relative glass-panel rounded-3xl overflow-hidden border border-white/20 bg-[#0e0e18]/95 shadow-2xl p-3.5">
                {/* Visual Header / Camera Rig Preview */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/4.6] group">
                  <img
                    src="/photos/kerwin_hero.jpg"
                    alt="Kerwin Lagmay — Creative Video Editor"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e18] via-transparent to-black/30" />

                  {/* Top Live Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <div className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white flex items-center gap-2">
                      <span className="pulse-dot"></span>
                      <span>EDITING STATION • LIVE</span>
                    </div>
                    <div className="px-3 py-1 rounded-md bg-purple-900/70 backdrop-blur-md border border-purple-500/30 text-[11px] font-mono text-purple-200">
                      4K 60FPS TIMELINE
                    </div>
                  </div>

                  {/* Play Reel Trigger on Image */}
                  <button
                    onClick={() => {
                      playClickSound();
                      onPlayFeaturedVideo();
                    }}
                    onMouseEnter={playHoverSound}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white flex items-center justify-center backdrop-blur-md shadow-2xl hover:scale-110 transition-all duration-300 group/btn border border-white/30"
                    aria-label="Play showreel"
                  >
                    <Play className="w-7 h-7 fill-white ml-1 group-hover/btn:scale-110 transition-transform" />
                  </button>

                  {/* Bottom Info overlay on portrait */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-heading font-extrabold text-white text-base">Kerwin Lagmay</div>
                        <p className="text-xs text-purple-300 font-mono">Lead Direct-Response Video Editor</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-mono text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/30 font-bold">
                          VERIFIED PRO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Micro Metric 1 */}
                <div className="absolute -left-6 top-1/4 bg-[#141420]/95 border border-purple-500/30 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">3s Hook Retention</div>
                    <div className="text-sm font-bold text-white font-mono">+48.2% Lift</div>
                  </div>
                </div>

                {/* Floating Micro Metric 2 */}
                <div className="absolute -right-6 bottom-14 bg-[#141420]/95 border border-cyan-500/30 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">ROAS Multiplier</div>
                    <div className="text-sm font-bold text-white font-mono">3.4x — 4.2x Avg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metric Ribbon Bar */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all hover:bg-white/[0.04]"
              >
                <div className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
