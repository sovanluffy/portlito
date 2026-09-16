import React from 'react';
import { ArrowUp, Heart, Terminal, Sparkles } from 'lucide-react';
import { SmileySticker } from './RetroSticker';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12 pt-4">
      <div className="bg-[#faf7ef] border-2 border-neutral-900 rounded-2xl p-6 sm:p-8 shadow-retro flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="flex items-center space-x-4">
          <SmileySticker size={46} />
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-display text-2xl sm:text-3xl text-neutral-900 tracking-wider">
                SOVANNAREACH
              </span>
              <span className="font-mono text-[11px] px-2 py-0.5 bg-[#FDE047] border border-neutral-900 rounded font-bold text-neutral-900">
                ធួន សុវណ្ណារាជ
              </span>
            </div>
            <p className="text-xs font-mono text-neutral-600 mt-0.5">
              Software Developer • Full Stack & Mobile Application Developer
            </p>
          </div>
        </div>

        {/* Center: Navigation quick links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono font-bold text-neutral-700">
          <button
            onClick={() => onNavigate('hero')}
            className="hover:text-amber-700 hover:underline decoration-2 decoration-[#FDE047]"
          >
            HOME
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('about')}
            className="hover:text-amber-700 hover:underline decoration-2 decoration-[#FDE047]"
          >
            ABOUT
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('projects')}
            className="hover:text-amber-700 hover:underline decoration-2 decoration-[#FDE047]"
          >
            PROJECTS
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('skills')}
            className="hover:text-amber-700 hover:underline decoration-2 decoration-[#FDE047]"
          >
            SKILLS
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('journey')}
            className="hover:text-amber-700 hover:underline decoration-2 decoration-[#FDE047]"
          >
            JOURNEY
          </button>
          <span>•</span>
          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-amber-700 hover:underline decoration-2 decoration-[#FDE047]"
          >
            CONTACT
          </button>
        </div>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <span className="text-[11px] font-mono text-neutral-500 block">
              © {new Date().getFullYear()} THOUN SOVANNAREACH. All rights reserved.
            </span>
            <span className="font-hand text-sm text-neutral-700 font-bold block">
              built with modern React & care 🚀
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-transform hover:-translate-y-1 shadow-retro-sm"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4 text-[#FDE047]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
