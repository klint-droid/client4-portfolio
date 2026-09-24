import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Share2, Globe, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PHOTOS } from '../data/portfolioData';
import type { PhotoItem } from '../data/portfolioData';

interface PhotoModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose, onSelectPhoto }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [photo, onClose]);

  useEffect(() => {
    setIsZoomed(false);
  }, [photo]);

  if (!photo) return null;

  const currentIndex = PORTFOLIO_PHOTOS.findIndex((p) => p.id === photo.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + PORTFOLIO_PHOTOS.length) % PORTFOLIO_PHOTOS.length;
    onSelectPhoto(PORTFOLIO_PHOTOS[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % PORTFOLIO_PHOTOS.length;
    onSelectPhoto(PORTFOLIO_PHOTOS[nextIndex]);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + '#' + photo.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in">
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0d0d14] border border-white/15 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-white/20 text-white/80 hover:text-white transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Photo Display with Zoom */}
        <div className="relative md:w-3/5 bg-black/90 flex items-center justify-center min-h-[380px] p-4 sm:p-6 overflow-hidden">
          <div
            onClick={() => setIsZoomed(!isZoomed)}
            className={`cursor-${isZoomed ? 'zoom-out' : 'zoom-in'} transition-transform duration-300 max-h-[75vh] flex items-center justify-center`}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className={`max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300 ${
                isZoomed ? 'scale-125' : 'scale-100'
              }`}
            />
          </div>

          {/* Zoom Toggle Pill */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-1.5 transition-colors"
          >
            {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
            <span>{isZoomed ? 'Reset Zoom' : 'Click to Zoom'}</span>
          </button>

          {/* Prev/Next buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-purple-600 text-white transition-colors border border-white/10"
            title="Previous Photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-purple-600 text-white transition-colors border border-white/10"
            title="Next Photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side: Ad Rationale & Specs */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#0f0f18] overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono text-xs">
                {photo.category}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-xs flex items-center gap-1">
                <Globe className="w-3 h-3" />
                {photo.market}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 text-slate-200 border border-white/15 font-mono text-xs">
                {photo.resolution}
              </span>
            </div>

            <h2 className="text-2xl font-heading font-extrabold text-white">
              {photo.title}
            </h2>

            {photo.stats && (
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{photo.stats}</span>
              </div>
            )}

            <p className="text-sm text-slate-300 leading-relaxed">
              {photo.description}
            </p>

            {/* Strategic Details */}
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="font-mono">Aspect Ratio:</span>
                <span className="text-white font-mono font-bold">{photo.aspectRatio}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="font-mono">Ad Format:</span>
                <span className="text-white font-mono font-bold">Meta Feed / Stories / TikTok</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="font-mono">Retouching & Text:</span>
                <span className="text-white font-mono font-bold">Photoshop Master 2K</span>
              </div>
            </div>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {photo.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <button
              onClick={handleShare}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>

            <a
              href="#contact"
              onClick={onClose}
              className="btn-primary text-xs py-2.5 px-4"
            >
              Order Similar Creatives
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
