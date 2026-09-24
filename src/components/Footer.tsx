import React from 'react';
import { ArrowUp, Video } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600/30 border border-purple-500/50 flex items-center justify-center">
                <Video className="w-4 h-4 text-purple-400" />
              </div>
              <span className="font-heading font-extrabold text-white text-lg tracking-tight">
                KERWIN LAGMAY
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Professional Direct-Response Video Editor & Creative Strategist. Engineering high-converting video and static ad assets for scaling DTC brands and modern performance marketing agencies.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="pulse-dot"></span>
              <span>Available for Select Monthly Retainers & High-Impact Ad Batches</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#showreel" className="hover:text-white transition-colors">
                  Video Ad Showreel
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Static Ad & Photo Gallery
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-white transition-colors">
                  Split-Screen Lab
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services & Workflow
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Global Operations */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider">
              Coverage & Languages
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p>🌍 <strong className="text-slate-200">Markets:</strong> DACH, Nordics, UK, France, US</p>
              <p>⚡ <strong className="text-slate-200">Delivery:</strong> 24–48h initial batches</p>
              <p>💬 <strong className="text-slate-200">Direct:</strong> <a href="mailto:lagmayjohnkerwin5@gmail.com" className="hover:text-purple-300 transition-colors">lagmayjohnkerwin5@gmail.com</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Kerwin Lagmay. All rights reserved. Crafted for high conversions.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
