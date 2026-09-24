import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    serviceType: 'UGC Video Ads',
    monthlySpend: '$10k - $50k',
    message: ''
  });

  const emailAddress = 'lagmayjohnkerwin5@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is your standard turnaround time?',
      a: 'Initial batches of 3–5 hook variations are typically delivered within 24 to 48 hours from receiving your raw assets and creative briefs.'
    },
    {
      q: 'What raw footage do I need to provide?',
      a: 'A Google Drive or Dropbox link with raw UGC creator clips, b-roll, product unboxings, or logos. If you don\'t have a script, I can assist with hook ideation and storyboard structure.'
    },
    {
      q: 'How many revisions are included?',
      a: 'Every ad package includes unlimited minor pacing and copy revisions until you and your media buying team are 100% satisfied.'
    },
    {
      q: 'Do you offer static ads and multi-language localization as well?',
      a: 'Yes! As shown in the gallery, I produce 2K split-screen comparison ads and translate/localize winning assets into German (DE), French (FR), Norwegian (NO), Danish (DK), and Finnish (FI).'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#070709]">
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono text-purple-300">
            <Mail className="w-3.5 h-3.5 text-purple-400" />
            <span>LET'S BUILD WINNING CREATIVES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Ready To Lower Your CPA & <span className="text-gradient-purple">Scale Next Month?</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Whether you need a one-off 5-hook test batch or an ongoing monthly creative partner for your DTC brand or agency, let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & Fast Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl glass-panel border border-white/10 bg-[#0e0e16] space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Direct Channels & Availability
              </h3>

              <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-purple-300">CURRENT STATUS</div>
                  <div className="text-sm font-bold text-white flex items-center gap-2 mt-0.5">
                    <span className="pulse-dot"></span>
                    <span>Accepting 2 New DTC Brands</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">Q3 / Q4</span>
              </div>

              {/* Email One-Click Copy */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase">Direct Email</label>
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/50 border border-white/10 text-sm">
                  <span className="text-slate-200 font-mono text-xs sm:text-sm truncate mr-2">
                    {emailAddress}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-purple-600/80 hover:bg-purple-600 text-white text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Direct Email Action */}
              <div className="pt-2">
                <a
                  href="mailto:lagmayjohnkerwin5@gmail.com"
                  className="w-full p-3.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 text-center text-xs font-mono text-purple-200 transition-all flex items-center justify-center gap-2 hover:border-purple-400"
                >
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>Send Direct Email</span>
                </a>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-400 space-y-1">
                <div className="font-semibold text-white">Preferred timezone:</div>
                <div>Flexible overlap with European (CET) & US (EST/PST) business hours.</div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 bg-[#0e0e16] space-y-4">
              <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border border-white/5 rounded-xl overflow-hidden bg-white/[0.01]">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full p-3.5 text-left text-xs font-bold text-slate-200 flex items-center justify-between hover:text-white"
                    >
                      <span>{faq.q}</span>
                      {openFaq === idx ? <ChevronUp className="w-4 h-4 text-purple-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                    </button>
                    {openFaq === idx && (
                      <div className="px-3.5 pb-3.5 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/15 bg-[#0f0f18] shadow-2xl relative">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thanks for reaching out, {formData.name || 'there'}! I'll review your project details and get back to you with custom creative angles within 12 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="btn-secondary text-xs py-2 px-4 mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      Book a Project or Request Creative Audit
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill out the form below or email me directly. No obligation consultation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Klaus Berg"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@brand.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300">Brand / Agency Name</label>
                      <input
                        type="text"
                        value={formData.brand}
                        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                        placeholder="e.g. PRACTS DTC"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300">Monthly Ad Spend</label>
                      <select
                        value={formData.monthlySpend}
                        onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:border-purple-500 focus:outline-none transition-colors"
                      >
                        <option value="Under $10k">Under $10k / month</option>
                        <option value="$10k - $50k">$10k - $50k / month</option>
                        <option value="$50k - $200k">$50k - $200k / month</option>
                        <option value="$200k+">$200k+ / month (High Scale)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300">Primary Service Needed</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[
                        'UGC Video Ads',
                        'VSL & Narrative',
                        'Static Split-Screens',
                        'EU Localization',
                        'Monthly Retainer'
                      ].map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceType: service })}
                          className={`p-2.5 rounded-xl border text-xs font-medium text-left transition-all ${
                            formData.serviceType === service
                              ? 'bg-purple-600/30 border-purple-500 text-white shadow-md'
                              : 'bg-black/30 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300">
                      Project Details / Target Market (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product, what offers/angles you want to test, or link your raw footage drive..."
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-base font-bold shadow-xl shadow-purple-600/30"
                  >
                    <Send className="w-4 h-4 mr-1" />
                    <span>Send Project Request</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% Confidential • Fast Response Within 12 Hours</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
