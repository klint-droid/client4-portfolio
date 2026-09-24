import React, { useState, useRef } from 'react';
import { Play, Globe, Flame } from 'lucide-react';
import { PORTFOLIO_VIDEOS } from '../data/portfolioData';
import type { VideoItem } from '../data/portfolioData';

interface VideoSectionProps {
  onSelectVideo: (video: VideoItem) => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onSelectVideo }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);

  const categories = ['All', 'Direct Response / VSL', 'E-Commerce', 'Localization', 'UGC Ads'];

  const filteredVideos = activeCategory === 'All'
    ? PORTFOLIO_VIDEOS
    : PORTFOLIO_VIDEOS.filter(v => v.category === activeCategory);

  return (
    <section id="showreel" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono text-purple-300">
            <Flame className="w-3.5 h-3.5 text-purple-400" />
            <span>SELECTED CLIENT CREATIVES ({PORTFOLIO_VIDEOS.length} CAMPAIGNS)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            High-Converting <span className="text-gradient-purple">Video Ad Showreel</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Curated selection of high-performing direct-response ads and international localizations. Hover to preview pacing and motion, or click for the full theatre player.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-600/30'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat === 'All' ? `All Videos (${PORTFOLIO_VIDEOS.length})` : cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isHovered={hoveredVideoId === video.id}
              onMouseEnter={() => setHoveredVideoId(video.id)}
              onMouseLeave={() => setHoveredVideoId(null)}
              onClick={() => onSelectVideo(video)}
            />
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-16 p-8 rounded-2xl glass-panel border border-white/10 bg-gradient-to-r from-purple-950/40 via-[#10101a] to-cyan-950/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Need custom hook angles tailored to your DTC brand?</h3>
            <p className="text-sm text-slate-400">
              I develop 5+ hook variations per creative to test angles systematically on Meta & TikTok ad accounts.
            </p>
          </div>
          <a href="#contact" className="btn-primary text-sm py-3 px-6 whitespace-nowrap">
            Request Ad Creative Audit
          </a>
        </div>
      </div>
    </section>
  );
};

interface VideoCardProps {
  video: VideoItem;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    onMouseEnter();
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    onMouseLeave();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="group relative cursor-pointer rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-purple-500/50 bg-[#12121a] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      {/* Video Container (Vertical 9:16) */}
      <div className="relative aspect-[9/16] w-full bg-black overflow-hidden">
        <video
          ref={videoRef}
          src={video.src}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e16] via-transparent to-black/40 pointer-events-none"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white flex items-center gap-1">
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>{video.market.split(' ')[0]}</span>
          </span>

          <span className="px-2 py-0.5 rounded-md bg-purple-600/80 backdrop-blur-md border border-purple-400/30 text-[10px] font-mono font-bold text-white shadow-lg">
            {video.hookMetric}
          </span>
        </div>

        {/* Play Button Trigger Overlay */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
          <div
            className={`w-12 h-12 rounded-full bg-purple-600/90 text-white flex items-center justify-center shadow-xl backdrop-blur-md border border-white/30 transition-all duration-300 ${
              isHovered ? 'scale-110 bg-purple-500 shadow-purple-500/50' : 'scale-100 opacity-90'
            }`}
          >
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>

        {/* Live Hover Badge */}
        {isHovered && (
          <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono flex items-center gap-1.5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>PREVIEW</span>
          </div>
        )}

        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/10">
          {video.duration}
        </div>
      </div>

      {/* Video Information Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-2 bg-[#111119]">
        <div>
          <div className="text-[10px] font-mono text-purple-400 uppercase tracking-wider mb-0.5">
            {video.client}
          </div>
          <h3 className="font-heading font-bold text-white text-sm group-hover:text-purple-300 transition-colors line-clamp-1">
            {video.title}
          </h3>
          <p className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-relaxed">
            {video.description}
          </p>
        </div>

        {/* Tags */}
        <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1">
          {video.tags.slice(0, 2).map((tag, idx) => (
            <span
              key={idx}
              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
