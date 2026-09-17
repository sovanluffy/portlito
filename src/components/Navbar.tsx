import React, { useEffect, useState } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position so the floating bar can tighten up, deepen its
  // shadow, and sharpen its blur the moment the page leaves the very top.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Modernist Top Navigation Bar — always a floating rounded pill;
          on scroll it just tightens, gains depth, and blurs more. */}
      <nav
        id="main-navbar"
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        className={`bg-[#F8F5EE]/95 border-2 border-neutral-900 rounded-xl flex items-center justify-between gap-3 transition-all duration-500 will-change-transform
          ${
            isScrolled
              ? 'px-4 py-1.5 shadow-retro-lg backdrop-blur-xl scale-[0.985] -translate-y-0.5'
              : 'px-4 py-2.5 shadow-retro backdrop-blur-md scale-100 translate-y-0'
          }`}
      >
        {/* Left: Bold Monogram Logo */}
        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={() => handleItemClick('hero')}
            className="flex items-center space-x-2 text-left group focus:outline-none cursor-pointer"
            aria-label="Thoun Sovannareach Portfolio Home"
          >
            <span
              className={`font-display font-black tracking-tighter text-neutral-950 group-hover:opacity-85 transition-all duration-500 ${
                isScrolled ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
              }`}
            >
              SR
              <span
                className={`text-[#E64A38] leading-none transition-all duration-500 ${
                  isScrolled ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'
                }`}
              >
                .
              </span>
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-neutral-500 font-semibold pl-1 border-l border-neutral-300">
              SOVANNAREACH
            </span>
          </button>
        </div>

        {/* Center: Nav Links — flex row that scrolls horizontally instead of
            disappearing behind the hamburger on medium screens */}
        <div className="hidden sm:flex flex-1 min-w-0 items-center overflow-x-auto scrollbar-hide">
          <div className="flex items-center space-x-6 md:space-x-7 mx-auto px-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className="relative py-1 text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer group select-none whitespace-nowrap shrink-0"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive ? 'text-neutral-950 font-black' : 'text-neutral-600 hover:text-neutral-950'
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E64A38] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Action: Let's Talk CTA */}
        <div className="hidden sm:flex items-center space-x-3 shrink-0">
          <button
            onClick={onOpenContact}
            className={`bg-neutral-950 hover:bg-neutral-800 text-white rounded-lg font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center space-x-2 cursor-pointer shadow-retro-sm whitespace-nowrap
              ${isScrolled ? 'px-3.5 py-1.5' : 'px-4 py-2'}`}
          >
            <Mail className="w-3.5 h-3.5 text-[#EAB308]" />
            <span>LET&apos;S TALK</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle (only below sm now) */}
        <div className="flex sm:hidden items-center shrink-0">
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
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="sm:hidden mt-2 bg-[#F8F5EE] border-2 border-neutral-900 rounded-xl p-4 shadow-retro-lg"
        >
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
        </motion.div>
      )}
    </motion.header>
  );
};