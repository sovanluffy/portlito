import React, { useState } from 'react';
import { Menu, X, Mail, Sparkles, FolderKanban, User, Wrench, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenContact
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'HOME', icon: Sparkles },
    { id: 'about', label: 'ABOUT', icon: User },
    { id: 'projects', label: 'WORK', icon: FolderKanban },
    { id: 'skills', label: 'SERVICES', icon: Wrench },
    { id: 'journey', label: 'JOURNEY', icon: Clock },
    { id: 'contact', label: 'CONTACT', icon: Mail }
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-2 z-50 w-full px-3 md:px-6 max-w-7xl mx-auto"
    >
      {/* Modernist Top Navigation Bar inspired by reference design */}
      <nav
        id="main-navbar"
        className="bg-[#F8F5EE]/95 border-2 border-neutral-900 rounded-xl px-4 py-2.5 flex items-center justify-between transition-all backdrop-blur-md shadow-retro"
      >
        {/* Left: Bold Monogram Logo */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => handleItemClick('hero')}
            className="flex items-center space-x-2 text-left group focus:outline-none cursor-pointer"
            aria-label="Thoun Sovannareach Portfolio Home"
          >
            <span className="font-display font-black text-2xl sm:text-3xl tracking-tighter text-neutral-950 group-hover:opacity-85 transition-opacity">
              SR<span className="text-[#E64A38] text-3xl sm:text-4xl leading-none">.</span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-neutral-500 font-semibold pl-1 border-l border-neutral-300">
              SOVANNAREACH
            </span>
          </button>
        </div>

        {/* Center: Clean Nav Links with Underline Active State */}
        <div className="hidden lg:flex items-center space-x-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="relative py-1 text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer group select-none"
              >
                <span
                  className={`${
                    isActive ? 'text-neutral-950 font-black' : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {item.label}
                </span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E64A38] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Action: Let's Talk CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenContact}
            className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded-lg font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 cursor-pointer shadow-retro-sm"
          >
            <Mail className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>LET&apos;S TALK</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 hover:text-black focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-[#F8F5EE] border-2 border-neutral-900 rounded-xl p-4 shadow-retro-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-mono font-bold transition-all ${
                    isActive
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-700 hover:bg-neutral-200/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#E64A38]' : 'text-neutral-500'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="mt-2 w-full py-2.5 bg-[#E64A38] text-white rounded-lg font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>LET&apos;S TALK</span>
            </button>
          </div>
        </div>
      )}
    </motion.header>
  );
};
