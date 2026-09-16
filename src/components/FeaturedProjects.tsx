import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { ShowcaseProjectsRow } from './ShowcaseProjectsRow';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* PRIMARY FEATURED SHOWCASE ROW (Matching the exact uploaded design) */}
        <ShowcaseProjectsRow
          projects={PROJECTS}
          onSelectProject={onSelectProject}
          onViewAllProjects={() => {
            // Open FinTrack or scroll within section
            const firstProject = PROJECTS.find((p) => p.id === 'fintrack') || PROJECTS[0];
            onSelectProject(firstProject);
          }}
        />
      </div>
    </section>
  );
};


