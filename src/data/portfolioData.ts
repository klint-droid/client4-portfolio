export interface VideoItem {
  id: string;
  title: string;
  client: string;
  category: 'UGC Ads' | 'Direct Response / VSL' | 'E-Commerce' | 'Localization';
  src: string;
  thumbnailPlaceholder?: string;
  aspectRatio: '9:16' | '16:9' | '1:1';
  hookMetric: string;
  duration: string;
  market: string;
  tags: string[];
  description: string;
  highlights: string[];
}

export interface PhotoItem {
  id: string;
  title: string;
  category: 'Split Screens' | 'Static Ads' | 'UGC & Proof' | 'Localization';
  src: string;
  aspectRatio: '1:1' | '4:5' | '9:16';
  market: string;
  resolution: string;
  tags: string[];
  description: string;
  stats?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  country: string;
  content: string;
  impactMetric: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  icon: string;
}

export const PORTFOLIO_VIDEOS: VideoItem[] = [
  {
    id: 'traumkraut',
    title: 'Das Traumkraut — Sensory DTC Ad',
    client: 'Traumkraut Herbal',
    category: 'E-Commerce',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/CREATIVE.4.Das.Traumkraut.mp4',
    aspectRatio: '9:16',
    hookMetric: '48% 3s Hook Rate',
    duration: '0:35',
    market: 'DACH (Germany/Austria)',
    tags: ['Sensory Hook', 'E-Commerce', 'Color Grade', 'ASMR'],
    description: 'Scroll-stopping sensory ad built for Meta & TikTok feeds. Leveraged fast-paced visual hooks, macro texture closeups, and targeted German direct response copywriting.',
    highlights: ['Instant 1.5s visual hook', 'Custom German kinetic captions', 'Color-graded for vibrant feed pop']
  },
  {
    id: 'video-1-de',
    title: 'Hyper-Hook Variation A/B Test',
    client: 'European D2C Brand',
    category: 'Direct Response / VSL',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/Video.1.German.mp4',
    aspectRatio: '9:16',
    hookMetric: 'Top Performing Angle',
    duration: '0:38',
    market: 'Germany (DE)',
    tags: ['Hook Testing', 'Fast Cut', 'Direct Response'],
    description: 'Specially structured 3-second hook variation to combat creative fatigue and unlock cheaper CPMs in tier-1 European ad auctions.',
    highlights: ['Split-second pattern interrupt', 'Bold headline overlay', 'Direct benefit-driven hook']
  },
  {
    id: 'loc-de',
    title: 'Pan-European Localization — German Master',
    client: 'PRACTS International',
    category: 'Localization',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/Video.2.DE.mp4',
    aspectRatio: '9:16',
    hookMetric: 'Multi-Market Scale',
    duration: '0:36',
    market: 'Germany (DE)',
    tags: ['Localization', 'DACH', 'Synced Audio', 'On-Screen Copy'],
    description: 'Master creative version tailored for German consumers with cultural copywriting cues, synced audio tracks, and native font formatting.',
    highlights: ['Native German typography', 'Region-specific price callouts', 'Flawless lip/audio pacing']
  },
  {
    id: 'loc-fr',
    title: 'Pan-European Localization — French Market',
    client: 'PRACTS International',
    category: 'Localization',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/Video.2.FR.mp4',
    aspectRatio: '9:16',
    hookMetric: 'France Scale Ready',
    duration: '0:36',
    market: 'France (FR)',
    tags: ['French Ad', 'Localization', 'EU Scale'],
    description: 'Complete French direct-response adaptation with customized rhythm, refined cosmetic terminology, and targeted European appeal.',
    highlights: ['Culturally accurate terminology', 'Localized pricing & packaging', 'Engaging French captions']
  },
  {
    id: 'loc-fi',
    title: 'Pan-European Localization — Nordic Market',
    client: 'PRACTS International',
    category: 'Localization',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/Video.2.FI.1.mp4',
    aspectRatio: '9:16',
    hookMetric: 'Nordic Expansion',
    duration: '0:36',
    market: 'Finland (FI) / Nordics',
    tags: ['Nordic Scale', 'Finnish Copy', 'High Retention'],
    description: 'Tailored for Scandinavian and Nordic audiences where directness, minimalist design, and straightforward guarantee structures win.',
    highlights: ['Nordic guarantee callouts', 'Clean Scandinavian typography', 'High completion rate']
  },
  {
    id: 'creative-14-de',
    title: 'Direct Response Creative #14 (German Master)',
    client: 'European D2C Brand',
    category: 'Direct Response / VSL',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/Creative.14.DE.mp4',
    aspectRatio: '9:16',
    hookMetric: '3.4x ROAS on Meta',
    duration: '0:38',
    market: 'Germany (DE)',
    tags: ['Hook Testing', 'Fast Cut', 'Direct Response'],
    description: 'Aggressive direct-response angle engineered for low cost-per-acquisition with fast text transitions and visual pattern interrupts.',
    highlights: ['High-contrast text overlays', 'Rapid problem-solution arc', 'Strong emotional payoff']
  },
  {
    id: 'creative-14-german',
    title: 'High-Retention Creative #14 (Angle B)',
    client: 'European D2C Brand',
    category: 'Direct Response / VSL',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/Creative.14.German.mp4',
    aspectRatio: '9:16',
    hookMetric: '62% Hold Rate',
    duration: '0:36',
    market: 'Germany (DE)',
    tags: ['German Ad', 'Localization', 'EU Scale'],
    description: 'Alternate hook edit highlighting customer objection handling and visual proof triggers for cold traffic audiences.',
    highlights: ['Objection-crusher pacing', 'Localized pricing callouts', 'Engaging German captions']
  },
  {
    id: 'german-video-2',
    title: 'Direct Response Master v2.2',
    client: 'DACH Growth Labs',
    category: 'Direct Response / VSL',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/German.Video.2.2.mp4',
    aspectRatio: '9:16',
    hookMetric: 'High CTR Scaler',
    duration: '0:42',
    market: 'DACH Region',
    tags: ['DACH Scale', 'Direct Response', 'High Retention'],
    description: 'High-production direct-response ad with precision kinetic captions, sound design hits, and multi-angle product demonstrations.',
    highlights: ['Micro sound-design hits', 'Dynamic motion graphics', 'High average watch time']
  },
  {
    id: 'video-5-de',
    title: 'Conversion Angle #5 — German Direct Response',
    client: 'German Wellness D2C',
    category: 'Direct Response / VSL',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/Video.5.German.mp4',
    aspectRatio: '9:16',
    hookMetric: 'Low CPA Winner',
    duration: '0:40',
    market: 'Germany (DE)',
    tags: ['Conversion Hook', 'Direct Response', 'Meta Ads'],
    description: 'Optimized conversion angle addressing primary purchase hesitations with scientific demonstration footage and user testimonials.',
    highlights: ['Clinical proof elements', 'Fast B-roll cutting', 'Clear value-stack summary']
  },
  {
    id: 'video-8-de',
    title: 'Long-Form Story Ad #8 (German)',
    client: 'German Wellness D2C',
    category: 'Direct Response / VSL',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/Video.8.German.mp4',
    aspectRatio: '9:16',
    hookMetric: '4.1x Blended ROAS',
    duration: '0:55',
    market: 'Germany (DE)',
    tags: ['Storytelling', 'Deep Retention', 'VSL Style'],
    description: 'Full-funnel storytelling narrative ad structured to build deep trust, educate cold prospects, and drive qualified purchases.',
    highlights: ['Compelling narrative arc', 'Educational visual breakdowns', 'High purchase conversion']
  },
  {
    id: 'ugc-0619',
    title: 'Rapid-Fire UGC Concept #0619',
    client: 'Direct Response UGC',
    category: 'UGC Ads',
    src: 'https://github.com/klint-droid/client4-portfolio/releases/download/v1.0/0619.4.mp4',
    aspectRatio: '9:16',
    hookMetric: 'Top Viral CTR',
    duration: '0:34',
    market: 'Direct Response (US/EU)',
    tags: ['UGC Concept', 'High Retention', 'Direct Response'],
    description: 'Authentic creator-style hook with high retention velocity, seamless B-roll transitions, and high-converting CTA structure.',
    highlights: ['Authentic organic framing', 'Fast punchy jump cuts', 'Clear call to action']
  }
];

export const PORTFOLIO_PHOTOS: PhotoItem[] = [
  {
    id: 'split-scandinavian',
    title: 'Clinical Split-Screen Guarantee Hook',
    category: 'Split Screens',
    src: '/photos/A_realistic,_close-up_split-screen_photograph_202606110300.jpeg',
    aspectRatio: '4:5',
    market: 'Norway / Nordics',
    resolution: '1080 x 1350',
    tags: ['Split Screen', 'Before & After', '60-Day Guarantee', 'Direct Response'],
    description: 'High-contrast split-screen comparison creative engineered to stop mindless scrolling. Tested in Norway with "3 UKER. 60 DAGERS GARANTI. PR\u00D8V RISIKOFRITT" callout.',
    stats: 'Top Performing Scandinavian Static Ad'
  },
  {
    id: 'static-formula-1080',
    title: 'PRACTS Fade & Brightening Active Ingredients',
    category: 'Static Ads',
    src: '/photos/CREATIVE #3 \u2014 Image 2 1080 x 1080.png',
    aspectRatio: '1:1',
    market: 'Norway / Denmark / DE',
    resolution: '1080 x 1080',
    tags: ['Active Ingredients', 'Feed Ad', 'Minimalist Clean', 'High CTR'],
    description: 'Editorial clean product creative spotlighting "Alfa-Arbutin 7% + Traneksamsyre 4% \u2014 alt i \u00E9n tube. Ingen svie." on a polished marble backdrop.',
    stats: '2.8x Average Feed ROAS'
  },
  {
    id: 'static-formula-1350',
    title: 'PRACTS Fade & Brightening 4:5 Feed Hero',
    category: 'Static Ads',
    src: '/photos/CREATIVE #3 \u2014 Image 2 1080 x 1350.png',
    aspectRatio: '4:5',
    market: 'Global EU',
    resolution: '1080 x 1350',
    tags: ['4:5 Ratio', 'Story Ad', 'Product Retouch', 'High Resolution'],
    description: 'Optimized 4:5 aspect ratio version for Meta feeds and Instagram explore tab, giving 20% more screen estate than standard squares.',
    stats: '34% Cheaper CPC vs standard 1:1'
  },
  {
    id: 'bathroom-shelf-hook',
    title: '"3000 kr a month. The spots got darker."',
    category: 'Static Ads',
    src: '/photos/download (1).png',
    aspectRatio: '4:5',
    market: 'Nordics / Scandinavia',
    resolution: '1080 x 1350',
    tags: ['Relatable Pain Hook', 'Bathroom Counter', 'Wasted Money Hook'],
    description: 'Psychological pattern-interrupt hook tapping into the frustration of spending thousands on expensive serums that fail to work.',
    stats: '4.8% Hook-to-Click Rate'
  },
  {
    id: 'ugc-creator-practs',
    title: 'Authentic German UGC Creator Hold',
    category: 'UGC & Proof',
    src: '/photos/934fbb3a-6b95-4e9e-8365-4ea2ebdfca7a.png',
    aspectRatio: '1:1',
    market: 'Germany (DE)',
    resolution: '1080 x 1080',
    tags: ['UGC Native', 'Warm Lighting', 'Relatable Creator', 'Organic Feel'],
    description: 'Natural, high-trust creator snapshot holding PRACTS drops in an organic classroom/home setting that blends naturally into user feeds.',
    stats: 'Blends into Organic Feeds'
  },
  {
    id: 'retouch-2k-test',
    title: 'Dual Split-Screen 2K Retouch Master',
    category: 'Split Screens',
    src: '/photos/gawin_mong_1080x1080_2K_202606110301.jpeg',
    aspectRatio: '1:1',
    market: 'Multi-Market',
    resolution: '1080 x 1080 2K',
    tags: ['2K Crisp', 'Texture Retouch', 'Photoshop Mastery'],
    description: 'Precision skin texture editing preserving real pores and realistic transitions while highlighting transformative treatment results.',
    stats: 'Zero Ad Rejections for Misleading Content'
  },
  {
    id: 'results-anders',
    title: 'Social Proof \u2014 Anders Verified Result',
    category: 'UGC & Proof',
    src: '/photos/Results \u2013 Anders.png',
    aspectRatio: '1:1',
    market: 'Nordics',
    resolution: '1080 x 1080',
    tags: ['Customer Case Study', 'Male Skincare', 'High Credibility'],
    description: 'Real customer verification graphic showcasing authentic progression over time, building immense credibility for skeptical buyers.',
    stats: '+54% Conversion Lift on Retargeting'
  },
  {
    id: 'review-markus',
    title: 'Verified Customer Review \u2014 Markus',
    category: 'UGC & Proof',
    src: '/photos/Review - Markus photo.png',
    aspectRatio: '1:1',
    market: 'Germany',
    resolution: '1080 x 1080',
    tags: ['Verified Purchase', '5-Star Review', 'Social Proof'],
    description: 'German customer review spotlight card highlighting dramatic skin relief and speed of results.',
    stats: '5 Stars Verified Buyer'
  },
  {
    id: 'review-ugc-2',
    title: 'UGC Real Skin Progress Photo',
    category: 'UGC & Proof',
    src: '/photos/Reviews \u2013 UGC photo 2.png',
    aspectRatio: '1:1',
    market: 'DACH',
    resolution: '1080 x 1080',
    tags: ['Unfiltered Proof', 'Real Customer', 'High Trust'],
    description: 'Unfiltered, candid customer submission demonstrating real-world day-to-day results with natural indoor lighting.',
    stats: 'High Social Proof Resonance'
  },
  {
    id: 'emilia-review-1',
    title: 'Transformation Spotlight \u2014 Emilia Photo 1',
    category: 'UGC & Proof',
    src: '/photos/13. Review photo \u2014 Emilia 1.png',
    aspectRatio: '1:1',
    market: 'European Union',
    resolution: '1080 x 1080',
    tags: ['Transformation', 'Female Demographic', 'Acne Scarring'],
    description: 'Visual evidence card documenting reduction of stubborn dark spots and redness over a 4-week testing window.',
    stats: '3.9x ROAS on Women 25-45'
  },
  {
    id: 'loc-image-german',
    title: 'Localized Static Creative \u2014 German Market',
    category: 'Localization',
    src: '/photos/Image 3 - German.png',
    aspectRatio: '1:1',
    market: 'Germany / Austria',
    resolution: '1080 x 1080',
    tags: ['German Translation', 'Direct Response Copy', 'DACH Scale'],
    description: 'Precision copy localization crafted with native German phrasing and regulatory compliance.',
    stats: 'Local German Language Winner'
  },
  {
    id: 'loc-image-french',
    title: 'Localized Static Creative \u2014 French Market',
    category: 'Localization',
    src: '/photos/Image 3 - French.png',
    aspectRatio: '1:1',
    market: 'France / Belgium',
    resolution: '1080 x 1080',
    tags: ['French Translation', 'Cosmetic Tone', 'EU Expansion'],
    description: 'Tailored for French aesthetics, with elegant phrasing emphasizing dermatological refinement.',
    stats: 'High Engagement in FR Meta Feeds'
  },
  {
    id: 'loc-image-norwegian',
    title: 'Localized Static Creative \u2014 Norwegian Market',
    category: 'Localization',
    src: '/photos/Image 3 - Nor.png',
    aspectRatio: '1:1',
    market: 'Norway',
    resolution: '1080 x 1080',
    tags: ['Norwegian', 'Scandinavian Scale', 'Nordic DTC'],
    description: 'Adapted with Norwegian currency, idioms, and high-trust Scandinavian delivery guarantees.',
    stats: 'Scaled in Nordic Campaigns'
  },
  {
    id: 'loc-image-finnish',
    title: 'Localized Static Creative \u2014 Finnish Market',
    category: 'Localization',
    src: '/photos/Image 3 FI.png',
    aspectRatio: '1:1',
    market: 'Finland',
    resolution: '1080 x 1080',
    tags: ['Finnish Market', 'Localization', 'High CTR'],
    description: 'Native Finnish creative iteration maintaining brand authority across the Baltic & Nordic belt.',
    stats: 'Flawless Multi-Market Expansion'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'klaus-b',
    name: 'Klaus B.',
    role: 'Growth Marketing Director, DTC Brand',
    avatar: '/photos/Reviews \u2014 Klaus B. photo.png',
    rating: 5,
    country: 'Munich, Germany',
    content: 'Kerwin is hands down the sharpest direct-response editor we have worked with. He understands the science of the 3-second hook and why people buy. Our CPA dropped by 38% on our German Meta campaigns within the first two weeks.',
    impactMetric: '38% Drop in CPA'
  },
  {
    id: 'martin-s',
    name: 'Martin S.',
    role: 'Creative Strategist, Scaling Agency',
    avatar: '/photos/Reviews \u2014 Martin S. avatar (2).png',
    rating: 5,
    country: 'Berlin, Germany',
    content: 'The turnaround speed is unmatched. We send raw UGC batches and Kerwin delivers 5 hook variations, punchy sound design, and localized copy in English and German without needing hand-holding.',
    impactMetric: '<24h Turnaround'
  },
  {
    id: 'niels-p',
    name: 'Niels P.',
    role: 'Head of Media Buying, Ecom Brands',
    avatar: '/photos/Reviews \u2014 Niels P. avatar (2).png',
    rating: 5,
    country: 'Copenhagen, Denmark',
    content: 'His split-screen static ads and TikTok video pacing generated over \u20AC140,000 in revenue for our Nordic skincare launch. If you need creatives that actually drive revenue, Kerwin is your guy.',
    impactMetric: '\u20AC140K+ Revenue Generated'
  },
  {
    id: 'sabine-k',
    name: 'Sabine K.',
    role: 'E-Commerce Founder',
    avatar: '/photos/Review avatar \u2014 Sabine K..png',
    rating: 5,
    country: 'Vienna, Austria',
    content: 'Super communicative, understands consumer psychology, and the edits look like $10,000 agency productions. Kerwin is our secret weapon for scaling Meta and TikTok ads.',
    impactMetric: '4.2x Blended ROAS'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ugc-direct-response',
    title: 'Direct-Response UGC & TikTok Ads',
    badge: 'Highest ROAS',
    description: 'Transforming rough creator footage into fast-paced, high-converting video ads engineered to stop scrolling, agitate consumer pain points, and drive immediate purchase intent.',
    features: [
      'Multi-Angle 3-Second Hook Testing (5+ variations per angle)',
      'Pattern Interrupts & Kinetic Subtitle Animation',
      'Strategic Audio Syncing & Micro Sound Design',
      'Platform-Specific Formats (9:16 Vertical & 4:5 Feed)'
    ],
    icon: 'Video'
  },
  {
    id: 'vsl-motion-graphics',
    title: 'High-Ticket VSLs & Narrative Edits',
    badge: 'High Conversion',
    description: 'Crafting long & mid-form video sales letters for online academies, coaches, and luxury DTC brands requiring pristine visual storytelling and relentless retention.',
    features: [
      'Seamless B-Roll Assembly & Speed-Ramping',
      'Dynamic Motion Graphics & Infographic Popups',
      'Audio Clean-Up, Voice De-noising & Mastering',
      'Cinematic Color Grading & Atmosphere'
    ],
    icon: 'Film'
  },
  {
    id: 'static-ad-design',
    title: 'High-Converting Static & Split-Screen Ads',
    badge: 'Proven Angles',
    description: 'Designing high-CTR static visuals, before-and-after split screens, and bathroom-shelf hooks that outperform video in retargeting and top-of-funnel auctions.',
    features: [
      'Dermatological & Product Retouching (2K resolution)',
      'High-Contrast Headline Typography & Guarantee Badges',
      'Multi-Ratio Exports (1:1 Square, 4:5 Feed, 9:16 Story)',
      'Ad Compliance Guaranteed (Zero Misleading Claims Rejections)'
    ],
    icon: 'Layers'
  },
  {
    id: 'creative-localization',
    title: 'Global Creative Localization & Scale',
    badge: 'Multi-Market Scale',
    description: 'Adapting winning English creatives into high-performing German, French, Norwegian, Danish, and Finnish assets with native cultural nuances.',
    features: [
      'Native German, French, & Nordic Typography',
      'Lip-Sync & Audio Rhythm Matching',
      'Currency & Regional Trust Badge Adaptation',
      'Bulk Creative Variations for Aggressive Scaling'
    ],
    icon: 'Globe'
  }
];

export const EDITING_TOOLKIT = [
  { name: 'Adobe Premiere Pro', category: 'Core Editing & Pacing', proficiency: 'Master' },
  { name: 'After Effects', category: 'Motion Graphics & VFX', proficiency: 'Advanced' },
  { name: 'DaVinci Resolve', category: 'Cinematic Color Grading', proficiency: 'Advanced' },
  { name: 'Photoshop', category: 'Static Ads & Retouching', proficiency: 'Master' },
  { name: 'CapCut Pro', category: 'Mobile & TikTok Formats', proficiency: 'Master' },
  { name: 'AI Audio & Upscaling', category: 'Modern Workflows', proficiency: 'Advanced' }
];

export const STATS = [
  { label: 'Direct Response Ads Edited', value: '250+' },
  { label: 'Client Ad Spend Scaled', value: '\u20AC2.5M+' },
  { label: 'Average Hook Rate Lift', value: '+42%' },
  { label: 'Markets Localized', value: '6+ EU & US' }
];
