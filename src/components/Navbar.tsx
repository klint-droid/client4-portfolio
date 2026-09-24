import React, { useState, useEffect } from 'react';
import { Video, Menu, X, ArrowUpRight, Volume2, VolumeX, Play } from 'lucide-react';
import { toggleSound, isSoundEnabled, playHoverSound, playClickSound } from '../utils/audio';

interface NavbarProps {
  onOpenFeaturedReel: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFeaturedReel }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(isSoundEnabled());
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070709]/90 backdrop-blur-xl border-b border-white/10 py-2.5 shadow-2xl'
          : 'bg-[#070709]/70 backdrop-blur-md border-b border-white/5 py-3'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo / Editorial Monogram */}
          <a
            href="#"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="flex items-center gap-3 group text-decoration-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#0a0a10] rounded-[11px] flex items-center justify-center">
                <Video className="w-5 h-5 text-purple-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
            <div>
              <div className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-white flex items-center gap-2">
                <span>KERWIN LAGMAY</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  EDIT
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-wider">DIRECT RESPONSE & MOTION</p>
            </div>
          </a>

          {/* Center Navigation Links (Awwwards Style) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101018]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
            <a
              href="#showreel"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="text-xs font-mono font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all"
            >
              Showreel
            </a>
            <a
              href="#gallery"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="text-xs font-mono font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all"
            >
              Gallery
            </a>
            <a
              href="#before-after"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="text-xs font-mono font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all"
            >
              Split-Screen Lab
            </a>
            <a
              href="#services"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="text-xs font-mono font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all"
            >
              Framework
            </a>
            <a
              href="#testimonials"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="text-xs font-mono font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/5 transition-all"
            >
              Results
            </a>
          </nav>

          {/* Right Action Bar: Timezone, Quick Reel, Sound Toggle, CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Reel Launch Button */}
            <button
              onClick={() => {
                playClickSound();
                onOpenFeaturedReel();
              }}
              onMouseEnter={playHoverSound}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-[11px] font-mono text-purple-300 transition-colors"
            >
              <Play className="w-3 h-3 fill-purple-400 text-purple-400" />
              <span>REEL</span>
            </button>

            {/* Live Clock Pill */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>MANILA {currentTime || '08:00 PM'} (GMT+8)</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all text-xs"
              title={soundOn ? 'Sound Feedback: ON' : 'Sound Feedback: MUTED'}
              aria-label="Toggle UI Sound"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-purple-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="btn-primary text-xs py-2.5 px-5 font-mono tracking-wider"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
              aria-label="Toggle sound"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-purple-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>
            <a href="#contact" className="btn-primary text-xs py-2 px-3">
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#09090f]/95 border-b border-white/10 px-6 py-6 mt-3 space-y-4 backdrop-blur-2xl animate-in fade-in">
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
            <div className="flex items-center gap-2">
              <span className="pulse-dot"></span>
              <span>2 SLOTS OPEN FOR CLIENTS</span>
            </div>
            <span>MANILA {currentTime}</span>
          </div>

          <div className="flex flex-col space-y-3 pt-2 text-sm font-mono">
            <a
              href="#showreel"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-slate-200 hover:text-purple-400"
            >
              01 // Video Showreel
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-slate-200 hover:text-cyan-400"
            >
              02 // Static Ad & Photo Lab
            </a>
            <a
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-slate-200 hover:text-purple-400"
            >
              03 // Split-Screen Slider
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-slate-200 hover:text-cyan-400"
            >
              04 // Production Framework
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-slate-200 hover:text-purple-400"
            >
              05 // Client Proof
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center mt-3"
            >
              Start A Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
