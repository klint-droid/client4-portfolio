import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles, CheckCircle, Flame, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_VIDEOS } from '../data/portfolioData';
import type { VideoItem } from '../data/portfolioData';
import { playHoverSound, playClickSound } from '../utils/audio';

interface CinemaShowreelProps {
  onOpenModal: (video: VideoItem) => void;
}

export const CinemaShowreel: React.FC<CinemaShowreelProps> = ({ onOpenModal }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem>(PORTFOLIO_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('00:00');
  const [duration, setDuration] = useState<string>('00:00');
  const videoRef = useRef<HTMLVideoElement>(null);

  const featuredList = PORTFOLIO_VIDEOS.slice(0, 4);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [selectedVideo]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((cur / dur) * 100);

    const curM = Math.floor(cur / 60).toString().padStart(2, '0');
    const curS = Math.floor(cur % 60).toString().padStart(2, '0');
    setCurrentTime(`${curM}:${curS}`);

    const durM = Math.floor(dur / 60).toString().padStart(2, '0');
    const durS = Math.floor(dur % 60).toString().padStart(2, '0');
    setDuration(`${durM}:${durS}`);
  };

  const togglePlay = () => {
    playClickSound();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    playClickSound();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#09090e] border-y border-white/10">
      {/* Ambient Radial Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-cyan-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="section-container relative z-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs">
              <Flame className="w-3.5 h-3.5 text-purple-400" />
              <span>AWARD-LEVEL CINEMA SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Interactive <span className="text-gradient-purple">Cinema Player</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              Switch between flagship commercial edits. Experience raw timeline pacing, micro sound design, and direct-response pattern cuts in real time.
            </p>
          </div>

          {/* Video Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {featuredList.map((v) => (
              <button
                key={v.id}
                onMouseEnter={playHoverSound}
                onClick={() => {
                  playClickSound();
                  setSelectedVideo(v);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-300 border ${
                  selectedVideo.id === v.id
                    ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-600/30 scale-105'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                {v.client.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* The Cinema Theatre Console */}
        <div className="relative rounded-3xl glass-panel border border-white/15 bg-[#0d0d15]/95 shadow-2xl overflow-hidden p-4 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: 9:16 Frame Inside Cinema Rig */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/20 group">
                <video
                  ref={videoRef}
                  src={selectedVideo.src}
                  loop
                  playsInline
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-cover"
                />

                {/* Ambient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Overlay Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-cyan-300">
                    {selectedVideo.market}
                  </div>
                  <div className="px-2.5 py-1 rounded bg-purple-600/80 backdrop-blur-md border border-purple-400/30 text-[10px] font-mono font-bold text-white">
                    {selectedVideo.hookMetric}
                  </div>
                </div>

                {/* Center Big Play/Pause Toggle on Click */}
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-purple-600/90 hover:bg-purple-500 text-white flex items-center justify-center backdrop-blur-md shadow-2xl hover:scale-110 transition-all duration-300 border border-white/30"
                  aria-label="Toggle playback"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-white" />
                  ) : (
                    <Play className="w-6 h-6 fill-white ml-1" />
                  )}
                </button>

                {/* Custom Video Control Ribbon at bottom */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 space-y-2">
                  {/* Scrubber Bar */}
                  <div
                    onClick={handleSeek}
                    className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer overflow-hidden transition-all duration-150"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-400"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={togglePlay}
                        className="hover:text-white transition-colors"
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>
                      <button
                        onClick={toggleMute}
                        className="hover:text-white transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                      </button>
                      <span>{currentTime} / {duration}</span>
                    </div>

                    <button
                      onClick={() => onOpenModal(selectedVideo)}
                      className="hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      <Maximize className="w-3.5 h-3.5" />
                      <span>THEATER</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Creative Strategy Breakdown Console */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono">
                    {selectedVideo.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold">
                    {selectedVideo.hookMetric}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 border border-white/15 text-xs font-mono">
                    4K / 60FPS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading leading-tight">
                  {selectedVideo.title}
                </h3>

                <p className="text-xs font-mono text-cyan-400">
                  Client / Brand: <span className="text-slate-200 font-bold">{selectedVideo.client}</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedVideo.description}
              </p>

              {/* Strategic Engineering Bullets */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="text-xs font-mono text-purple-300 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Creative Mechanics & Architecture</span>
                </div>
                <div className="space-y-2">
                  {selectedVideo.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedVideo.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-black/40 text-slate-300 border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenModal(selectedVideo)}
                  onMouseEnter={playHoverSound}
                  className="btn-primary text-xs py-3 px-6"
                >
                  <span>Open Fullscreen Theatre</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact"
                  onMouseEnter={playHoverSound}
                  className="btn-secondary text-xs py-3 px-5"
                >
                  Request Similar Angle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
