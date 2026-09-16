import React from 'react';
import { Project } from '../types';
import { Tape } from './RetroSticker';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const tapeColors: ('yellow' | 'pink' | 'blue' | 'green')[] = ['yellow', 'pink', 'blue', 'green'];
  const tapeColor = tapeColors[index % tapeColors.length];

  return (
    <article
      id={`project-card-${project.id}`}
      className="group bg-white border-2 border-neutral-900 rounded-xl shadow-retro hover:shadow-retro-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Tape on top */}
      <Tape
        color={tapeColor}
        angle={index % 2 === 0 ? -2 : 2}
        className="-top-2.5 left-8"
      />

      {/* Top Folder-Tab Bar */}
      <div className="px-4 py-2.5 bg-[#f5f2e9] border-b-2 border-neutral-900 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-neutral-800"></span>
          <span className="font-mono text-[11px] font-bold text-neutral-800 tracking-wider">
            {project.category.toUpperCase()} • {project.year}
          </span>
        </div>
        <span className="font-hand text-base font-bold text-neutral-500">
          case #{index + 1}
        </span>
      </div>

      {/* Image Preview Window (with retro framed border like reference image) */}
      <div
        onClick={() => onSelect(project)}
        className="relative mx-3.5 mt-3.5 overflow-hidden rounded-lg border-2 border-neutral-900 bg-neutral-900 aspect-video cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="px-3.5 py-1.5 bg-[#FDE047] text-neutral-950 font-mono font-bold text-xs rounded border border-neutral-900 shadow-retro-sm transform -translate-y-1 group-hover:translate-y-0 transition-transform">
            READ CASE STUDY ↗
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3
              onClick={() => onSelect(project)}
              className="font-display text-3xl sm:text-4xl text-neutral-900 tracking-wide hover:text-amber-700 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            {project.featured && (
              <span className="px-2 py-0.5 bg-[#FDE047] text-neutral-900 border border-neutral-900 text-[10px] font-mono font-bold rounded shadow-retro-sm">
                FEATURED
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-[#f1eee4] border border-neutral-300 text-neutral-800 text-[10px] font-mono font-semibold rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-1.5 py-0.5 text-neutral-500 text-[10px] font-mono font-semibold">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
            <button
              onClick={() => onSelect(project)}
              className="inline-flex items-center space-x-1 font-mono font-bold text-xs text-neutral-900 hover:text-amber-700 underline decoration-2 decoration-[#FDE047] underline-offset-4 cursor-pointer"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100"
                title="View Code on GitHub"
                aria-label={`View code for ${project.title}`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
