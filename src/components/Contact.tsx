import React, { useState } from 'react';
import { Tape, SmileySticker } from './RetroSticker';
import { CVCardWithImage } from './CVCardWithImage';
import { 
  Send, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

// TODO: replace with your real inbox address
const CONTACT_EMAIL = 'sovannareach.thoun@gmail.com';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Build a pre-filled mailto: link so the visitor's own email app opens
    // with everything ready to send — no backend or API key required.
    const subjectLine = formData.subject
      ? formData.subject
      : `Portfolio inquiry from ${formData.name}`;

    const bodyLines = [
      formData.message,
      '',
      '---',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`
    ].join('\n');

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyLines)}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-notebook-paper border-2 border-[#1c1c1c] rounded-2xl p-4 sm:p-6 md:p-8 shadow-retro-lg relative">
          {/* Decorative Washi Tapes */}
          <Tape color="pink" angle={-5} className="-top-2 left-8" />
          <Tape color="yellow" angle={4} className="-top-2 right-10" />

          {/* Section Heading matching prompt */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-[#bfdbfe] border border-neutral-900 rounded font-mono text-[11px] font-bold shadow-retro-sm mb-2">
              <Sparkles className="w-3 h-3" />
              <span>GET IN TOUCH</span>
            </div>

            <h2
              id="contact-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1c1c1c] tracking-tight leading-none"
            >
              LET'S BUILD SOMETHING
            </h2>

            <p className="mt-2 text-sm sm:text-base text-neutral-700 font-normal">
              Have an idea, a project, or an opportunity? Let's talk.
            </p>

            {/* Smiley Sticker */}
            <div className="mt-3 flex justify-center">
              <SmileySticker size={48} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: CV Card with Image (5 cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {/* CV Card with Image */}
              <CVCardWithImage />
            </div>

            {/* Right Column: Interactive Paper Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white/95 border-2 border-neutral-900 rounded-xl p-4 sm:p-5 shadow-retro relative">
                {/* Form header */}
                <div className="flex items-center justify-between pb-2 mb-4 border-b border-neutral-300">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-neutral-900"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-neutral-900"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 border border-neutral-900"></span>
                    <span className="font-mono text-[10px] font-bold text-neutral-800 ml-1.5">
                      MESSAGE_DISPATCH.FORM
                    </span>
                  </div>
                  <span className="font-hand text-sm text-neutral-500 font-bold">
                    all messages read!
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3 animate-in fade-in duration-300">
                    <div className="w-12 h-12 bg-[#bbf7d0] border-2 border-neutral-900 rounded-full flex items-center justify-center mx-auto shadow-retro">
                      <CheckCircle2 className="w-6 h-6 text-emerald-800" />
                    </div>
                    <h3 className="font-display text-2xl text-neutral-900">
                      OPENING YOUR EMAIL APP...
                    </h3>
                    <p className="text-xs font-mono text-neutral-700 max-w-md mx-auto">
                      Thank you, <span className="font-bold">{formData.name}</span>. Your default mail app should now be open with your message ready to send. If it didn't open, please email me directly at{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold underline">
                        {CONTACT_EMAIL}
                      </a>.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="mt-3 px-3.5 py-1.5 bg-[#FDE047] text-neutral-900 border border-neutral-900 font-mono text-[11px] font-bold rounded shadow-retro-sm hover:bg-amber-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-mono text-[11px] font-bold text-neutral-800 mb-1 uppercase">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sokha Chhay"
                          className="w-full px-3 py-2 bg-[#faf7ef] border-2 border-neutral-900 rounded-lg text-xs font-mono text-neutral-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#FDE047]"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[11px] font-bold text-neutral-800 mb-1 uppercase">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3 py-2 bg-[#faf7ef] border-2 border-neutral-900 rounded-lg text-xs font-mono text-neutral-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#FDE047]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] font-bold text-neutral-800 mb-1 uppercase">
                        Subject / Project Topic
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Web project collaboration or Junior developer role"
                        className="w-full px-3 py-2 bg-[#faf7ef] border-2 border-neutral-900 rounded-lg text-xs font-mono text-neutral-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#FDE047]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] font-bold text-neutral-800 mb-1 uppercase">
                        Message / Project Scope *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your idea, timeline, or open role..."
                        className="w-full px-3 py-2 bg-[#faf7ef] border-2 border-neutral-900 rounded-lg text-xs font-mono text-neutral-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#FDE047]"
                      />
                    </div>

                    <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2">
                      <span className="font-hand text-sm text-neutral-500 font-bold order-2 sm:order-1">
                        I respond within 24-48 hours ✉️
                      </span>

                      <button
                        type="submit"
                        className="w-full sm:w-auto order-1 sm:order-2 px-5 py-2.5 bg-[#1c1c1c] text-[#FDE047] hover:bg-neutral-800 font-mono font-bold text-[11px] tracking-wider rounded-lg shadow-retro transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>DISPATCH MESSAGE</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};