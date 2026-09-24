import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles, CheckCircle2, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section id="before-after" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Explanation / Psychology */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono text-purple-300">
              <Sliders className="w-3.5 h-3.5 text-purple-400" />
              <span>INTERACTIVE SPLIT-SCREEN LAB</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              The Anatomy of a <span className="text-gradient-purple">Scroll-Stopping</span> Comparison
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Standard product ads get ignored. When a potential customer scrolls through Instagram or TikTok, their brain is scanning for high-contrast pattern interrupts. Split-screen creatives provide undeniable visual proof within 0.4 seconds.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl glass-panel border border-white/10 bg-[#12121c] flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">Meta Ad Policy Safe (Zero Ban Risk)</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Carefully retouched pores and authentic skin textures that avoid triggering Facebook's automated "Unrealistic Cosmetic Claims" rejection filters.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-white/10 bg-[#12121c] flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">High-Trust Scandinavian Risk Reversal</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Featuring high-converting local typography ("3 UKER. 60 DAGERS GARANTI") driving +64% higher click-to-cart conversions in Norway & Denmark.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ArrowLeftRight className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Drag slider handle to compare transformation</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Slider Box */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[440px] relative">
              <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/20 shadow-2xl bg-black select-none">
                <div
                  ref={containerRef}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  className="relative aspect-[3/4] w-full cursor-ew-resize overflow-hidden"
                >
                  {/* Clean After / Retouched Layer (Underneath) */}
                  <img
                    src="/photos/A_realistic,_close-up_split-screen_photograph_202606110300.jpeg"
                    alt="Split Screen Creative Retouch"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />

                  {/* High contrast problem side / before slice */}
                  <div
                    className="absolute inset-0 overflow-hidden pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <img
                      src="/photos/A_realistic,_close-up_split-screen_photograph_202606110300.jpeg"
                      alt="Raw Problem Side"
                      className="absolute inset-0 w-full h-full object-cover filter contrast-125 saturate-150"
                    />
                    {/* Before Label */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-red-500/40 text-[11px] font-mono font-bold text-red-400">
                      BEFORE • ACNE & PIGMENTATION
                    </div>
                  </div>

                  {/* After Label */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono font-bold text-emerald-400 pointer-events-none">
                    AFTER • 3 WEEKS RESULT
                  </div>

                  {/* Draggable Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl border-2 border-purple-600">
                      <ArrowLeftRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bottom Guarantee Banner Text on Ad */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-center pointer-events-none">
                    <div className="text-xs font-mono font-bold text-white tracking-wider">
                      3 UKER. 60 DAGERS GARANTI. 👉 PRØV RISIKOFRITT.
                    </div>
                    <div className="text-[10px] text-cyan-300 font-mono mt-0.5">
                      Localized High-Converting Scandinavian Ad Angle
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
