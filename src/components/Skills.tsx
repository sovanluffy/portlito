import React, { useState } from 'react';
import { SKILLS } from '../data/skills';
import { Tape } from './RetroSticker';
import { Sparkles, Layers, Cpu, Database, Smartphone, Layout } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkillInfo, setActiveSkillInfo] = useState<string | null>(null);

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'Database'];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Layout className="w-3.5 h-3.5" />;
      case 'Backend':
        return <Cpu className="w-3.5 h-3.5" />;
      case 'Mobile':
        return <Smartphone className="w-3.5 h-3.5" />;
      case 'Database':
        return <Database className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-notebook-paper border-2 border-[#1c1c1c] rounded-2xl p-6 sm:p-10 md:p-14 shadow-retro-lg relative">
          {/* Tape decor */}
          <Tape color="blue" angle={-4} className="-top-3 right-1/4" />

          {/* Heading */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 mb-8 border-b border-neutral-300">
            <div>
              <div className="flex items-baseline space-x-3">
                <h2
                  id="skills-heading"
                  className="font-display text-5xl sm:text-7xl md:text-8xl text-[#1c1c1c] tracking-tight"
                >
                  SKILLS & TOOLBOX
                </h2>
                <span className="font-hand text-2xl text-neutral-500 font-bold hidden sm:inline">
                  sticker sheet
                </span>
              </div>
              <p className="text-sm font-mono text-neutral-600 mt-1">
                A collection of languages, frameworks, and datastores I use to bring ideas to life.
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-[#bbf7d0] text-neutral-900 border border-neutral-900 rounded text-xs font-mono font-bold shadow-retro-sm">
                ✦ 14 Core Techs
              </span>
            </div>
          </div>

          {/* Category Filter Tabs (Styled as retro folder tabs) */}
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            <span className="font-hand text-lg text-neutral-500 font-bold mr-1">
              Filter by:
            </span>
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#FDE047] text-neutral-950 border-2 border-neutral-900 shadow-retro-sm -translate-y-0.5'
                      : 'bg-white/80 border border-neutral-300 text-neutral-700 hover:border-neutral-800 hover:bg-neutral-100'
                  }`}
                >
                  {getCategoryIcon(category)}
                  <span>{category.toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          {/* Creative Sticker / Label Layout Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {filteredSkills.map((skill, index) => {
              // Alternate slight angles for organic scrapbook feel
              const angles = [-2, 1.5, -1, 2, -1.8, 1.2, -0.8];
              const angle = angles[index % angles.length];

              return (
                <div
                  key={skill.name}
                  onMouseEnter={() => setActiveSkillInfo(`${skill.name}: ${skill.level} (${skill.category})`)}
                  onMouseLeave={() => setActiveSkillInfo(null)}
                  className="group relative p-3 sm:p-4 rounded-xl border-2 border-neutral-900 shadow-retro transition-all duration-200 hover:rotate-0 hover:scale-105 hover:z-20 cursor-pointer flex flex-col justify-between"
                  style={{
                    backgroundColor: skill.color || '#ffffff',
                    transform: `rotate(${angle}deg)`
                  }}
                >
                  {/* Mini washi strip for highlighted skills */}
                  {skill.highlight && (
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-white/70 border-l border-r border-dashed border-neutral-400 rounded-[1px]" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-800/80">
                      {skill.category}
                    </span>
                    {skill.highlight && (
                      <Sparkles className="w-3 h-3 text-neutral-900" />
                    )}
                  </div>

                  <div>
                    <h4 className="font-display text-2xl sm:text-3xl text-neutral-950 tracking-wide group-hover:text-amber-900 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono font-medium text-neutral-750 block mt-0.5">
                      {skill.level}
                    </span>
                  </div>

                  {/* Bottom bar indicator */}
                  <div className="mt-3 pt-2 border-t border-neutral-900/20 flex justify-between items-center text-[10px] font-mono text-neutral-800">
                    <span>Verified</span>
                    <span className="font-bold">✦</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Info Footer Bar */}
          <div className="mt-8 p-3.5 bg-white/80 border border-neutral-300 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-neutral-700">
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 bg-[#fef08a] border border-neutral-800 rounded font-bold text-[10px]">
                HOVER TIP
              </span>
              <span>
                {activeSkillInfo || 'Hover over any sticker badge to view focus area and engineering domain.'}
              </span>
            </div>
            <span className="text-[11px] text-neutral-500 font-hand text-base">
              always eager to expand my toolbox!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
