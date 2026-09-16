import React, { useEffect } from 'react';
import { Project } from '../types';
import { Tape, PolaroidPhoto } from './RetroSticker';
import { 
  X, 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  CheckCircle, 
  AlertCircle, 
  Target, 
  UserCheck, 
  Clock, 
  Users, 
  Calendar,
  Sparkles,
  Layers
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Case Study Notebook Sheet Container */}
      <div className="relative w-full max-w-5xl my-auto bg-notebook-paper border-2 border-neutral-900 rounded-2xl shadow-2xl z-10 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Retro Window Title Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[#faf7ef] border-b-2 border-neutral-900 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              className="inline-flex items-center space-x-1.5 px-3 py-1 bg-white border border-neutral-800 rounded text-xs font-mono font-bold text-neutral-800 hover:bg-neutral-100 shadow-retro-sm"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO PORTFOLIO</span>
            </button>
            <span className="hidden sm:inline font-mono text-xs text-neutral-500">
              case-studies/{project.id}.md
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center space-x-1 px-3 py-1 bg-[#fef08a] border border-neutral-900 rounded text-xs font-mono font-bold text-neutral-900 shadow-retro-sm hover:bg-amber-300"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-md border border-neutral-800 bg-neutral-200 hover:bg-red-200 text-neutral-900 hover:text-red-900 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          {/* Header Section (inspired by reference image WAYLINE header) */}
          <div className="border-b-2 border-neutral-900 pb-8 relative">
            <Tape color="yellow" angle={-1} className="-top-4 right-10" />

            <div className="flex items-center space-x-2 mb-2">
              <span className="font-mono text-xs font-bold text-neutral-700 bg-white px-2 py-0.5 rounded border border-neutral-400">
                CASE STUDY • {project.year}
              </span>
              <span className="font-mono text-xs text-neutral-500">
                {project.category} Engineering
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl text-neutral-950 tracking-tight leading-none mb-3">
              {project.title}
            </h1>
            <p className="font-hand text-2xl text-neutral-600 font-bold max-w-3xl">
              {project.subtitle || project.description}
            </p>

            {/* Metadata Tags Bar (Role, Timeline, Team, Year) - Just like reference image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
              <div className="p-3 bg-[#bfdbfe]/60 border border-neutral-900 rounded-lg shadow-retro-sm">
                <span className="text-[10px] font-mono uppercase tracking-wider text-blue-900 font-bold block">
                  ROLE
                </span>
                <span className="text-xs font-mono font-semibold text-neutral-900 mt-0.5 block">
                  {caseStudy.role}
                </span>
              </div>

              <div className="p-3 bg-[#fef08a]/60 border border-neutral-900 rounded-lg shadow-retro-sm">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-bold block">
                  TIMELINE
                </span>
                <span className="text-xs font-mono font-semibold text-neutral-900 mt-0.5 block">
                  {caseStudy.timeline}
                </span>
              </div>

              <div className="p-3 bg-[#bbf7d0]/60 border border-neutral-900 rounded-lg shadow-retro-sm">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-900 font-bold block">
                  TEAM
                </span>
                <span className="text-xs font-mono font-semibold text-neutral-900 mt-0.5 block">
                  {caseStudy.team}
                </span>
              </div>

              <div className="p-3 bg-[#fbcfe8]/60 border border-neutral-900 rounded-lg shadow-retro-sm">
                <span className="text-[10px] font-mono uppercase tracking-wider text-pink-900 font-bold block">
                  YEAR
                </span>
                <span className="text-xs font-mono font-semibold text-neutral-900 mt-0.5 block">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-4 flex flex-wrap gap-1.5 items-center">
              <span className="font-hand text-base font-bold text-neutral-500 mr-2">
                Tech Stack:
              </span>
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 bg-white border border-neutral-800 rounded font-mono text-xs font-semibold text-neutral-800 shadow-retro-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Metrics (like 47% / -55% in reference image) */}
          {caseStudy.impactMetrics && caseStudy.impactMetrics.length > 0 && (
            <div className="p-6 bg-white/90 border-2 border-neutral-900 rounded-xl shadow-retro">
              <span className="font-hand text-xl font-bold text-neutral-700 block mb-3">
                The results & key metrics:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {caseStudy.impactMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[#f8f6f0] border border-neutral-300 rounded-lg"
                  >
                    <span className="font-display text-4xl sm:text-5xl text-neutral-950 block">
                      {metric.value}
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-900 block mt-1">
                      {metric.label}
                    </span>
                    <span className="text-xs text-neutral-600 mt-1 block">
                      {metric.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Overview, Problem & Goal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem */}
            <div className="p-6 bg-[#fee2e2]/70 border-2 border-neutral-900 rounded-xl shadow-retro relative">
              <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-red-600 text-white rounded font-mono text-xs font-bold mb-3 shadow-retro-sm">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>THE PROBLEM</span>
              </div>
              <p className="text-neutral-800 text-sm sm:text-base leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* Goal */}
            <div className="p-6 bg-[#dcfce7]/70 border-2 border-neutral-900 rounded-xl shadow-retro relative">
              <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-emerald-700 text-white rounded font-mono text-xs font-bold mb-3 shadow-retro-sm">
                <Target className="w-3.5 h-3.5" />
                <span>THE GOAL</span>
              </div>
              <p className="text-neutral-800 text-sm sm:text-base leading-relaxed">
                {caseStudy.goal}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="p-6 sm:p-8 bg-white/90 border-2 border-neutral-900 rounded-xl shadow-retro">
            <h3 className="font-display text-3xl text-neutral-900 tracking-wide mb-4 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>KEY FEATURES & FUNCTIONALITY</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 rounded-lg bg-[#faf8f2] border border-neutral-300 text-xs sm:text-sm text-neutral-800"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Process & Engineering Steps */}
          <div className="p-6 sm:p-8 bg-[#faf7ef] border-2 border-neutral-900 rounded-xl shadow-retro">
            <h3 className="font-display text-3xl text-neutral-900 tracking-wide mb-4 flex items-center space-x-2">
              <Layers className="w-5 h-5 text-blue-600" />
              <span>DEVELOPMENT & ARCHITECTURE PROCESS</span>
            </h3>
            <div className="space-y-3">
              {caseStudy.developmentProcess.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3.5 rounded-lg bg-white border border-neutral-300"
                >
                  <span className="px-2 py-0.5 bg-neutral-900 text-[#FDE047] font-mono text-xs font-bold rounded">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Learning Note */}
          <div className="p-6 sm:p-8 bg-[#fef08a] border-2 border-neutral-900 rounded-xl shadow-retro relative rotate-[0.5deg]">
            <Tape color="pink" angle={-2} className="-top-3 left-10" />
            <div className="flex items-center justify-between border-b border-amber-400 pb-2 mb-4">
              <span className="font-mono text-xs font-bold text-amber-950">
                LESSONS_LEARNED.LOG
              </span>
              <span className="font-hand text-lg text-amber-900 font-bold">
                what this taught me
              </span>
            </div>
            <div className="space-y-3 text-neutral-900 text-xs sm:text-sm leading-relaxed">
              {caseStudy.challengesAndLearning.map((challenge, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <span className="font-bold text-amber-800">✦</span>
                  <p>{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots Gallery */}
          {caseStudy.screenshots && caseStudy.screenshots.length > 0 && (
            <div className="pt-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-3xl text-neutral-900 tracking-wide">
                    SCREENSHOTS & INTERFACES
                  </h3>
                  <span className="font-hand text-xl text-neutral-500 font-bold">
                    visual walkthrough
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {caseStudy.screenshots.map((shot, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <PolaroidPhoto
                      src={shot.src}
                      alt={shot.title}
                      caption={shot.title}
                      tapeColor={idx % 2 === 0 ? 'yellow' : 'blue'}
                      angle={idx % 2 === 0 ? -1.5 : 1.5}
                      imageClassName="h-60 sm:h-72 w-full"
                    />
                    <p className="mt-3 text-xs font-mono text-neutral-600 text-center max-w-sm">
                      {shot.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Drawer */}
          <div className="pt-6 border-t-2 border-neutral-900 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-neutral-900 text-white hover:bg-neutral-800 rounded font-mono text-xs font-bold shadow-retro-sm"
            >
              ← CLOSE CASE STUDY
            </button>

            <div className="flex items-center space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-white border border-neutral-900 text-neutral-900 hover:bg-neutral-100 rounded font-mono text-xs font-bold shadow-retro-sm flex items-center space-x-1.5"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW SOURCE REPO</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
