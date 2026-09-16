import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import heroPortrait from '../assets/images/developer_hero_portrait_1789520620763.jpg';

interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork }) => {
  return (
    <section id="hero" className="relative pt-3 pb-10 md:pt-6 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Main Canvas Container - Bauhaus Modernist Editorial Aesthetic */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-[#F8F5EE] border-2 border-neutral-900 rounded-2xl overflow-hidden shadow-retro-lg"
        >
          {/* 1. Top-Left Golden Yellow Quarter-Circle Geometry */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="absolute -top-16 -left-16 sm:-top-20 sm:-left-20 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#EAB308] z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 min-h-[580px] sm:min-h-[640px] p-6 sm:p-10 lg:p-14 items-center">
            {/* LEFT COLUMN: Typography, Accent Bars & Action Buttons (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:pr-4">
              <div className="flex items-start space-x-4 sm:space-x-6">
                {/* Decorative Dot Column & Vertical Black Bar on Left Edge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="hidden sm:flex flex-col items-center space-y-6 pt-2 shrink-0 select-none"
                  aria-hidden="true"
                >
                  {/* 2 columns x 4 rows black dot grid */}
                  <div className="flex flex-col space-y-2">
                    {[0, 1, 2, 3].map((row) => (
                      <div key={row} className="flex space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                      </div>
                    ))}
                  </div>
                  {/* Solid vertical black bar */}
                  <div className="w-3 h-16 sm:h-20 bg-neutral-900 rounded-[2px]" />
                </motion.div>

                {/* Main Headline Stack: I DESIGN. / I CODE. / I SOLVE. */}
                <div className="flex flex-col">
                  {/* Top line: I DESIGN. with 3 ink burst strokes */}
                  <div className="flex items-center flex-wrap overflow-hidden">
                    <motion.h1
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display font-black text-5xl sm:text-7xl lg:text-[88px] text-neutral-950 tracking-tight leading-[0.92] select-none"
                    >
                      I DESIGN.
                    </motion.h1>

                    {/* Radiating 3-stroke doodle burst next to I DESIGN */}
                    <motion.svg
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
                      className="w-8 h-8 sm:w-11 sm:h-11 text-neutral-900 ml-2.5 shrink-0"
                      viewBox="0 0 36 36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      aria-hidden="true"
                    >
                      <path d="M6 14C12 12 18 8 22 4" />
                      <path d="M4 22C12 21 22 18 28 14" />
                      <path d="M8 29C16 28 24 26 31 22" />
                    </motion.svg>
                  </div>

                  {/* Second line: I CODE. */}
                  <div className="overflow-hidden">
                    <motion.h2
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display font-black text-5xl sm:text-7xl lg:text-[88px] text-neutral-950 tracking-tight leading-[0.92] select-none mt-1 sm:mt-2"
                    >
                      I CODE.
                    </motion.h2>
                  </div>

                  {/* Third line: I SOLVE. in vibrant coral red */}
                  <div className="overflow-hidden">
                    <motion.h2
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display font-black text-5xl sm:text-7xl lg:text-[88px] text-[#E64A38] tracking-tight leading-[0.92] select-none mt-1 sm:mt-2"
                    >
                      I SOLVE.
                    </motion.h2>
                  </div>

                  {/* Multidisciplinary subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.65 }}
                    className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed max-w-xl mt-6 sm:mt-8"
                  >
                    A multidisciplinary developer and designer crafting digital experiences that are functional, meaningful, and unforgettable.
                  </motion.p>

                  {/* Action buttons & Availability Status Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.75 }}
                    className="pt-6 sm:pt-8 flex flex-wrap items-center gap-5 sm:gap-8"
                  >
                    {/* Primary Button: Solid Coral-Red VIEW MY WORK */}
                    <button
                      id="hero-cta-view-work"
                      onClick={onViewWork}
                      className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#E64A38] hover:bg-[#d23f2e] text-white font-mono font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-retro flex items-center space-x-2.5 cursor-pointer group"
                    >
                      <span>VIEW MY WORK</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Secondary Status Tag: AVAILABLE FOR FREELANCE / OPEN TO EXCITING PROJECTS */}
                    <div className="flex flex-col justify-center select-none">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span className="font-mono text-xs font-bold tracking-wider text-neutral-900 uppercase">
                          AVAILABLE FOR FREELANCE
                        </span>
                      </div>
                      <div className="relative inline-block mt-0.5 self-start">
                        <span className="font-mono text-[11px] tracking-wider text-neutral-600 font-semibold uppercase">
                          OPEN TO EXCITING PROJECTS
                        </span>
                        {/* Hand-drawn sketch squiggle underline */}
                        <svg
                          className="w-full h-2 text-neutral-700 mt-[-1px]"
                          viewBox="0 0 160 8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M2 5C45 1.5 115 6.5 158 3" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Modernist Graphic Backdrop, Portrait, Geometric Icons & Badges (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[560px]">
              {/* Graphic Backdrop Elements */}
              
              {/* 1. Tall Vibrant Red Rectangular Block */}
              <motion.div
                initial={{ scaleY: 0, originY: 1 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                className="absolute top-0 right-16 sm:right-24 md:right-28 w-44 sm:w-56 h-[400px] sm:h-[480px] bg-[#E64A38] z-0 rounded-none shadow-sm"
                aria-hidden="true"
              />

              {/* 2. Soft Warm Cream Circular Disc */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-2 left-6 sm:left-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#EFE9DC] z-0 pointer-events-none"
                aria-hidden="true"
              />

              {/* 3. Golden Yellow Vertical Accent Block on Far Right */}
              <motion.div
                initial={{ scaleY: 0, originY: 1 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="absolute bottom-10 right-2 sm:right-6 w-16 sm:w-20 h-44 sm:h-56 bg-[#EAB308] z-0 rounded-none"
                aria-hidden="true"
              />

              {/* 4. Framed Wireframe Globe Box in Top Right */}
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6, type: 'spring' }}
                className="absolute top-4 sm:top-6 right-2 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 border border-neutral-900 bg-[#F8F5EE]/80 flex items-center justify-center z-20 shadow-sm"
                title="Global & Digital Reach"
              >
                <Globe className="w-8 h-8 sm:w-9 sm:h-9 text-neutral-900 stroke-[1.2]" />
              </motion.div>

              {/* 5. Delicate Triangular Dot Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute top-24 sm:top-28 right-4 sm:right-8 flex flex-col items-end space-y-1.5 z-10 select-none"
                aria-hidden="true"
              >
                <span className="w-1 h-1 rounded-full bg-neutral-600" />
                <div className="flex space-x-1.5">
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                </div>
                <div className="flex space-x-1.5">
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                </div>
                <div className="flex space-x-1.5">
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                  <span className="w-1 h-1 rounded-full bg-neutral-600" />
                </div>
              </motion.div>

              {/* 6. Vertical 3-Color Palette Chip */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.75 }}
                className="absolute bottom-28 sm:bottom-32 right-3 sm:right-6 flex flex-col space-y-1.5 z-20"
                aria-hidden="true"
              >
                <span className="w-2.5 h-4 bg-[#E64A38] rounded-xs shadow-xs" />
                <span className="w-2.5 h-4 bg-[#EAB308] rounded-xs shadow-xs" />
                <span className="w-2.5 h-4 bg-neutral-950 rounded-xs shadow-xs" />
              </motion.div>

              {/* 7. Looping Hand-Drawn Arrow pointing to Black Minimalist Staircase */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-1 right-1 sm:right-3 flex items-end space-x-1 z-20 select-none"
                aria-hidden="true"
              >
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-neutral-900 shrink-0"
                  viewBox="0 0 50 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M6 22C16 8 30 10 34 26C35 30 36 36 32 40" />
                  <path d="M26 36L32 41L37 35" strokeLinejoin="round" />
                </svg>

                {/* Minimalist 3-tier black staircase */}
                <div className="flex items-end shrink-0">
                  <div className="w-3.5 h-3.5 bg-neutral-950" />
                  <div className="w-3.5 h-7 bg-neutral-950" />
                  <div className="w-3.5 h-11 bg-neutral-950" />
                </div>
              </motion.div>

              {/* 8. Developer Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-[340px] sm:max-w-[390px] flex justify-center items-end self-end pt-8"
              >
                <div className="relative w-full aspect-[3/4] max-h-[460px] sm:max-h-[520px] overflow-hidden rounded-lg">
                  <img
                    src={heroPortrait}
                    alt="Thoun Sovannareach - Developer & Designer"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F8F5EE]/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* 9. Floating Tilted Dark Badge across chest / lower torso */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: -4,
                    y: [0, -4, 0]
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.65 },
                    scale: { duration: 0.5, delay: 0.65, type: 'spring' },
                    rotate: { duration: 0.5, delay: 0.65 },
                    y: {
                      repeat: Infinity,
                      repeatType: 'reverse',
                      duration: 3.5,
                      ease: 'easeInOut'
                    }
                  }}
                  className="absolute bottom-6 sm:bottom-10 left-2 sm:left-4 z-30 bg-[#171717] text-white border border-white/90 px-4 py-3 sm:px-5 sm:py-3.5 shadow-2xl hover:rotate-0 transition-transform duration-200 select-none cursor-default"
                  style={{ transformOrigin: 'left center' }}
                >
                  <div className="flex items-start justify-between space-x-4">
                    <div className="font-mono text-xs sm:text-[13px] font-bold tracking-widest leading-relaxed text-neutral-100">
                      <div>DEVELOPER</div>
                      <div>DESIGNER</div>
                      <div>PROBLEM SOLVER</div>
                    </div>
                    {/* Golden 8-point geometric star */}
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#EAB308] shrink-0 fill-current mt-0.5 animate-spin-slow"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 0L13.5 8.5L22 7L15.5 13L21 20L13 16.5L12 24L11 16.5L3 20L8.5 13L2 7L10.5 8.5L12 0Z" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
