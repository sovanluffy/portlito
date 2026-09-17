import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { IntroLoader } from './components/IntroLoader';
import { Project } from './types';
import { PROJECTS } from './data/projects';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showIntro, setShowIntro] = useState<boolean>(true);

  // Monitor scroll position to update active navbar tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle URL hash on load or change (for direct links to projects or sections)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project-')) {
        const projId = hash.replace('project-', '');
        const found = PROJECTS.find((p) => p.id === projId);
        if (found) setSelectedProject(found);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Keyboard shortcut: ESC to close project detail modal or skip intro
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showIntro) {
          setShowIntro(false);
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, showIntro]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70; // offset for sticky navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.history.replaceState(null, '', `#project-${project.id}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    window.history.replaceState(null, '', ' ');
  };

  return (
    <div className="min-h-screen bg-[#ebe8de] bg-dot-pattern flex flex-col font-body selection:bg-[#FDE047] selection:text-black">
      {/* 0. INTRO BOOT ANIMATION (Runs automatically when opening or refreshing the page) */}
      {showIntro && (
        <IntroLoader onComplete={() => setShowIntro(false)} />
      )}

      {/* Top Retro Browser Navigation (Only displayed after intro animation completes) */}
      {/* Sticky at the App level too, with its own backdrop, so it stays pinned
          to the top of the viewport as the page scrolls and content doesn't
          show through underneath it */}
      {!showIntro && (
        <div className="sticky top-0 z-50 pt-3 pb-1 ">
          <Navbar
            activeSection={activeSection}
            onNavigate={scrollToSection}
            onOpenContact={() => scrollToSection('contact')}
          />
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-grow space-y-4 md:space-y-8 mt-2">
        {/* 1. HERO SECTION (With staggered motion animations on reveal) */}
        <Hero
          onViewWork={() => scrollToSection('projects')}
          onContact={() => scrollToSection('contact')}
        />

        {/* 2. ABOUT SECTION */}
        <About />

        {/* 3. FEATURED WORKS / PROJECTS */}
        <FeaturedProjects onSelectProject={handleSelectProject} />

        {/* 4. SKILLS / TOOLBOX */}
        <Skills />

        {/* 5. EXPERIENCE / JOURNEY TIMELINE */}
        <ExperienceTimeline />

        {/* 6. CONTACT SECTION */}
        <Contact />
      </main>

      {/* 7. FOOTER */}
      <Footer onNavigate={scrollToSection} />

      {/* 8. PROJECT DETAIL MODAL (CASE STUDY PAGE) */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProject}
      />
    </div>
  );
}