import React, { useState } from 'react';
import { Layers, Globe, Eye, Sparkles } from 'lucide-react';
import { PORTFOLIO_PHOTOS } from '../data/portfolioData';
import type { PhotoItem } from '../data/portfolioData';

interface GallerySectionProps {
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Split Screens', 'Static Ads', 'UGC & Proof', 'Localization'];

  const filteredPhotos = activeCategory === 'All'
    ? PORTFOLIO_PHOTOS
    : PORTFOLIO_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#070709]">
      <div className="section-container relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>STATIC & SPLIT-SCREEN LAB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            High-Impact <span className="text-gradient-cyan">Ad Creatives Gallery</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            High-converting static ads, clinical split screens, psychological pattern interrupts, and multi-language European localized assets. Click to inspect high-resolution details.
          </p>
        </div>

        {/* Animated Marquee Reel Filmstrip (Animated Scene) */}
        <div className="mb-14 overflow-hidden relative rounded-2xl border border-white/10 bg-[#0c0c14]/80 p-3">
          <div className="flex items-center gap-2 mb-2 px-2 text-[11px] font-mono text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>LIVE REEL • HOVER TO PAUSE FILMSTRIP</span>
          </div>
          <div className="overflow-hidden flex">
            <div className="animate-marquee flex gap-4 shrink-0">
              {PORTFOLIO_PHOTOS.map((photo) => (
                <div
                  key={'marquee-1-' + photo.id}
                  onClick={() => onSelectPhoto(photo)}
                  className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105 relative group shadow-lg"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
              {/* Duplicate for infinite loop */}
              {PORTFOLIO_PHOTOS.map((photo) => (
                <div
                  key={'marquee-2-' + photo.id}
                  onClick={() => onSelectPhoto(photo)}
                  className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:scale-105 relative group shadow-lg"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-cyan-600 text-white border-cyan-400 shadow-lg shadow-cyan-600/30'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat === 'All' ? 'All Creatives (' + PORTFOLIO_PHOTOS.length + ')' : cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group cursor-pointer rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-cyan-500/50 bg-[#101018] flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Photo Display */}
              <div className="relative aspect-square sm:aspect-[4/5] w-full bg-black/40 overflow-hidden flex items-center justify-center">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101018] via-transparent to-black/30 pointer-events-none"></div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white flex items-center gap-1">
                    <Globe className="w-3 h-3 text-cyan-400" />
                    <span>{photo.market}</span>
                  </span>

                  <span className="px-2.5 py-1 rounded-md bg-cyan-600/80 backdrop-blur-md border border-cyan-400/30 text-[10px] font-mono font-bold text-white">
                    {photo.aspectRatio}
                  </span>
                </div>

                {/* Hover Quick Inspect Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <div className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>Inspect High-Res</span>
                  </div>
                </div>

                {/* Resolution Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10 pointer-events-none">
                  {photo.resolution}
                </div>
              </div>

              {/* Photo Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2.5 bg-[#0e0e16]">
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                    {photo.category}
                  </div>
                  <h3 className="font-heading font-bold text-white text-base group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {photo.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                  {photo.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
