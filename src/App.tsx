import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { CinemaShowreel } from './components/CinemaShowreel';
import { VideoSection } from './components/VideoSection';
import { GallerySection } from './components/GallerySection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { PhotoModal } from './components/PhotoModal';
import { CustomCursor } from './components/CustomCursor';
import { PORTFOLIO_VIDEOS } from './data/portfolioData';
import type { VideoItem, PhotoItem } from './data/portfolioData';

export const App: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const handleOpenFeaturedVideo = () => {
    const featured = PORTFOLIO_VIDEOS[0];
    if (featured) {
      setSelectedVideo(featured);
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 relative selection:bg-purple-600 selection:text-white">
      {/* Subtle Awwwards custom cursor follower */}
      <CustomCursor />

      {/* Ambient background glow & subtle grid */}
      <div className="bg-ambient-glow" aria-hidden="true" />
      <div className="bg-grid-pattern" aria-hidden="true" />

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onPlayFeaturedVideo={handleOpenFeaturedVideo} />

        {/* Awwwards Featured Cinema Showcase Console */}
        <CinemaShowreel onOpenModal={(video) => setSelectedVideo(video)} />

        {/* Curated Video Ads & Variations Grid */}
        <VideoSection onSelectVideo={(video) => setSelectedVideo(video)} />

        {/* Photo Gallery & Animated Scenes */}
        <GallerySection onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* Interactive Split-Screen Lab */}
        <BeforeAfterSlider />

        {/* Direct-Response Services & 4-Step Framework */}
        <ServicesSection />

        {/* Contact & Discovery Booking */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Video Theater Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          onSelectVideo={(video) => setSelectedVideo(video)}
        />
      )}

      {/* High-Resolution Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        />
      )}
    </div>
  );
};

export default App;
