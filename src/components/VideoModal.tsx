import React, { useRef, useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle, Globe, Share2, Volume2, VolumeX } from 'lucide-react';
import { PORTFOLIO_VIDEOS } from '../data/portfolioData';
import type { VideoItem } from '../data/portfolioData';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onSelectVideo: (video: VideoItem) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, onSelectVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [video, onClose]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        setIsMuted(true);
      });
    }
  }, [video]);

  if (!video) return null;

  const currentIndex = PORTFOLIO_VIDEOS.findIndex((v) => v.id === video.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + PORTFOLIO_VIDEOS.length) % PORTFOLIO_VIDEOS.length;
    onSelectVideo(PORTFOLIO_VIDEOS[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % PORTFOLIO_VIDEOS.length;
    onSelectVideo(PORTFOLIO_VIDEOS[nextIndex]);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + '#' + video.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in">
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Main Modal Window */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0d0d14] border border-white/15 rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white/80 hover:text-white transition-colors border border-white/10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Video Player */}
        <div className="relative lg:w-1/2 bg-black flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
          <video
            ref={videoRef}
            src={video.src}
            controls
            autoPlay
            playsInline
            muted={isMuted}
            className="w-full max-h-[75vh] object-contain"
          />

          {/* Audio Mute Quick Toggle Pill */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 border border-white/15 text-xs text-white flex items-center gap-1.5 transition-colors"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isMuted ? 'Unmute Audio' : 'Mute Audio'}</span>
          </button>

          {/* Prev / Next Quick Nav Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-purple-600 text-white transition-colors border border-white/10"
            title="Previous Video"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-purple-600 text-white transition-colors border border-white/10"
            title="Next Video"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side: Creative Strategy & Performance Details */}
        <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
          <div className="space-y-4">
            {/* Header info */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-1 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono text-xs">
                {video.category}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-xs flex items-center gap-1">
                <Globe className="w-3 h-3" />
                {video.market}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-semibold">
                {video.hookMetric}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
              {video.title}
            </h2>

            <p className="text-sm font-mono text-purple-400">
              Client / Brand: <span className="text-slate-200 font-bold">{video.client}</span>
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              {video.description}
            </p>

            {/* Strategic Editing Highlights */}
            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Key Creative Engineering
              </h4>
              <div className="space-y-2">
                {video.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {video.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <span className="text-xs text-slate-600">|</span>
              <button
                onClick={handleNext}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1.5"
                title="Share link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>

              <a
                href="#contact"
                onClick={onClose}
                className="btn-primary text-xs py-2.5 px-4"
              >
                Hire For Similar Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
