import React, { useState } from 'react';
import { Tape, SmileySticker, PolaroidPhoto } from './RetroSticker';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Sparkles,
  MessageSquareQuote,
  CheckCircle2
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const emailAddress = 'sovaluffy0077@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-notebook-paper border-2 border-[#1c1c1c] rounded-2xl p-6 sm:p-10 md:p-14 shadow-retro-lg relative">
          {/* Decorative Washi Tapes */}
          <Tape color="pink" angle={-5} className="-top-3 left-10" />
          <Tape color="yellow" angle={4} className="-top-3 right-12" />

          {/* Section Heading matching prompt */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#bfdbfe] border border-neutral-900 rounded font-mono text-xs font-bold shadow-retro-sm mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2
              id="contact-heading"
              className="font-display text-6xl sm:text-8xl md:text-9xl text-[#1c1c1c] tracking-tight leading-none"
            >
              LET'S BUILD SOMETHING
            </h2>

            <p className="mt-3 text-base sm:text-xl text-neutral-700 font-normal">
              Have an idea, a project, or an opportunity? Let's talk.
            </p>

            {/* Smiley Sticker (matches reference image's signature smiley in bottom left) */}
            <div className="mt-4 flex justify-center">
              <SmileySticker size={72} />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Links, Email Copy, & Polaroid (5 cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              {/* Email Card (Yellow Memo Pad) */}
              <div className="p-6 bg-[#fef08a] border-2 border-neutral-900 rounded-xl shadow-retro relative rotate-[-1deg]">
                <div className="flex items-center justify-between pb-2 border-b border-amber-400 mb-3">
                  <span className="font-mono text-xs font-bold text-amber-950 flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>DIRECT INBOX</span>
                  </span>
                  <span className="font-hand text-base text-amber-900 font-bold">
                    quick response ⚡
                  </span>
                </div>

                <p className="text-xs font-mono text-neutral-800 mb-2">
                  Drop me an email directly or copy it to your clipboard:
                </p>

                <div className="flex items-center space-x-2 p-2.5 bg-white/90 border border-neutral-800 rounded-lg">
                  <span className="font-mono text-xs sm:text-sm text-neutral-900 font-bold flex-1 truncate select-all">
                    {emailAddress}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 bg-[#FDE047] hover:bg-amber-300 border border-neutral-900 rounded text-neutral-900 transition-colors shrink-0 shadow-retro-sm cursor-pointer"
                    title="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-700" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {copied && (
                  <p className="font-hand text-sm text-emerald-800 font-bold mt-2">
                    ✓ Copied to clipboard! Ready to paste.
                  </p>
                )}
              </div>

              {/* Social & Professional Profiles */}
              <div className="p-5 bg-white/80 border-2 border-neutral-900 rounded-xl shadow-retro">
                <span className="font-mono text-xs font-bold text-neutral-800 block mb-3 uppercase tracking-wider">
                  Developer Profiles & Networks
                </span>
                <div className="space-y-2.5">
                  <a
                    href="https://github.com/sovannareach"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#faf7ef] border border-neutral-300 hover:border-neutral-900 hover:bg-[#fef08a] transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <Github className="w-5 h-5 text-neutral-900" />
                      <div>
                        <span className="font-mono text-xs font-bold block text-neutral-900">
                          GitHub
                        </span>
                        <span className="text-[11px] text-neutral-500">
                          Code repositories & open-source
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900" />
                  </a>

                  <a
                    href="https://linkedin.com/in/thoun-sovannareach"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#faf7ef] border border-neutral-300 hover:border-neutral-900 hover:bg-[#bfdbfe] transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <Linkedin className="w-5 h-5 text-neutral-900" />
                      <div>
                        <span className="font-mono text-xs font-bold block text-neutral-900">
                          LinkedIn
                        </span>
                        <span className="text-[11px] text-neutral-500">
                          Professional background & updates
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900" />
                  </a>
                </div>
              </div>

              {/* Collage Polaroid photo */}
              <div className="flex justify-center pt-2">
                <PolaroidPhoto
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="Work Desk Setup"
                  caption="ideas to working software 🚀"
                  tapeColor="green"
                  angle={2}
                  imageClassName="h-36 w-60"
                />
              </div>
            </div>

            {/* Right Column: Interactive Paper Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white/95 border-2 border-neutral-900 rounded-2xl p-6 sm:p-8 shadow-retro relative">
                {/* Form header */}
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-neutral-300">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 border border-neutral-900"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-400 border border-neutral-900"></span>
                    <span className="w-3 h-3 rounded-full bg-green-400 border border-neutral-900"></span>
                    <span className="font-mono text-xs font-bold text-neutral-800 ml-2">
                      MESSAGE_DISPATCH.FORM
                    </span>
                  </div>
                  <span className="font-hand text-base text-neutral-500 font-bold">
                    all messages read!
                  </span>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-[#bbf7d0] border-2 border-neutral-900 rounded-full flex items-center justify-center mx-auto shadow-retro">
                      <CheckCircle2 className="w-8 h-8 text-emerald-800" />
                    </div>
                    <h3 className="font-display text-4xl text-neutral-900">
                      MESSAGE TRANSMITTED!
                    </h3>
                    <p className="text-sm font-mono text-neutral-700 max-w-md mx-auto">
                      Thank you, <span className="font-bold">{formData.name}</span>. Your message has been logged. I will get back to you at <span className="font-bold">{formData.email}</span> shortly!
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="mt-4 px-4 py-2 bg-[#FDE047] text-neutral-900 border border-neutral-900 font-mono text-xs font-bold rounded shadow-retro-sm hover:bg-amber-300"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs font-bold text-neutral-800 mb-1.5 uppercase">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sokha Chhay"
                          className="w-full px-3.5 py-2.5 bg-[#faf7ef] border-2 border-neutral-900 rounded-lg text-sm font-mono text-neutral-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#FDE047]"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-xs font-bold text-neutral-800 mb-1.5 uppercase">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 bg-[#faf7ef] border-2 border-neutral-900 rounded-lg text-sm font-mono text-neutral-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#FDE047]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold text-neutral-800 mb-1.5 uppercase">
                        Subject / Project Topic
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Web project collaboration or Junior developer role"
                        className="w-full px-3.5 py-2.5 bg-[#faf7ef] border-2 border-neutral-900 rounded-lg text-sm font-mono text-neutral-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#FDE047]"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold text-neutral-800 mb-1.5 uppercase">
                        Message / Project Scope *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your idea, timeline, or open role..."
                        className="w-full px-3.5 py-2.5 bg-[#faf7ef] border-2 border-neutral-900 rounded-lg text-sm font-mono text-neutral-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#FDE047]"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <span className="font-hand text-base text-neutral-500 font-bold order-2 sm:order-1">
                        I respond within 24-48 hours ✉️
                      </span>

                      <button
                        type="submit"
                        className="w-full sm:w-auto order-1 sm:order-2 px-6 py-3 bg-[#1c1c1c] text-[#FDE047] hover:bg-neutral-800 font-mono font-bold text-xs tracking-wider rounded-lg shadow-retro transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
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
