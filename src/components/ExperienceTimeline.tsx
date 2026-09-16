import React from 'react';
import { TIMELINE } from '../data/timeline';
import { Tape } from './RetroSticker';
import { GraduationCap, Briefcase, Rocket, Calendar, Award } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Education':
        return <GraduationCap className="w-4 h-4 text-pink-700" />;
      case 'Experience':
        return <Briefcase className="w-4 h-4 text-blue-700" />;
      default:
        return <Rocket className="w-4 h-4 text-amber-700" />;
    }
  };

  return (
    <section id="journey" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-notebook-paper border-2 border-[#1c1c1c] rounded-2xl p-6 sm:p-10 md:p-14 shadow-retro-lg relative">
          {/* Tape decor */}
          <Tape color="yellow" angle={3} className="-top-3 right-16" />

          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6 mb-10 border-b border-neutral-300">
            <div>
              <div className="flex items-baseline space-x-3">
                <h2
                  id="journey-heading"
                  className="font-display text-5xl sm:text-7xl md:text-8xl text-[#1c1c1c] tracking-tight"
                >
                  EXPERIENCE & JOURNEY
                </h2>
                <span className="font-hand text-2xl text-neutral-500 font-bold hidden sm:inline">
                  timeline
                </span>
              </div>
              <p className="text-sm font-mono text-neutral-600 mt-1">
                From computer science foundations at PSE to building production-ready applications.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 bg-white border border-neutral-900 rounded font-mono text-xs font-bold text-neutral-800 shadow-retro-sm">
                4 Milestones
              </span>
            </div>
          </div>

          {/* Timeline Stack */}
          <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-1 before:bg-neutral-900/80 before:rounded-full">
            {TIMELINE.map((item, index) => (
              <div
                key={index}
                className="relative group transition-transform duration-200"
              >
                {/* Timeline node marker (colored pin stamp) */}
                <div
                  style={{ backgroundColor: item.color }}
                  className="absolute -left-6 sm:-left-10 top-3 w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-neutral-900 shadow-retro-sm flex items-center justify-center z-10 group-hover:scale-125 transition-transform"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
                </div>

                {/* Card Container */}
                <div className="bg-white/90 border-2 border-neutral-900 rounded-xl p-5 sm:p-6 shadow-retro hover:shadow-retro-lg transition-all duration-200 relative">
                  {/* Mini tape for first item */}
                  {index === 0 && (
                    <Tape color="green" angle={-1} className="-top-3 right-6" />
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-neutral-200">
                    <div className="flex items-center space-x-2">
                      <span className="p-1 rounded bg-[#f1eee4] border border-neutral-300">
                        {getTypeIcon(item.type)}
                      </span>
                      <span className="font-mono text-xs font-bold text-neutral-600 uppercase tracking-wider">
                        {item.type}
                      </span>
                    </div>

                    <span className="px-2.5 py-0.5 bg-[#fef08a] border border-neutral-900 rounded font-mono text-xs font-bold text-neutral-900 shadow-retro-sm">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-neutral-900 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="font-hand text-lg sm:text-xl text-neutral-600 font-bold mb-3">
                    {item.institution}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-3xl mb-4">
                    {item.description}
                  </p>

                  {/* Skills/tag badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-[#faf7ef] border border-neutral-300 rounded font-mono text-[10px] sm:text-xs text-neutral-800 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
