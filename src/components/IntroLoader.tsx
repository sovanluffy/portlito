import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 750);
          }, 250);
          return 100;
        }
        const step = prev < 65 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Subtle 3D mouse parallax tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientWidth, clientHeight } = e.currentTarget;
    const x = (e.clientX / clientWidth - 0.5) * 22; // -11 to +11 deg
    const y = (e.clientY / clientHeight - 0.5) * -22;
    setMousePos({ x, y });
  };

  const handleSkip = () => {
    setIsDone(true);
    setTimeout(onComplete, 200);
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="full-title-3d-intro"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] }
          }}
          onMouseMove={handleMouseMove}
          onClick={handleSkip}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#080808] text-[#FAF7EE] p-6 sm:p-12 select-none overflow-hidden"
          style={{ perspective: '1200px' }}
        >
          {/* Ambient 3D lighting glows */}
          <div
            className="absolute -top-32 -left-32 w-96 h-96 bg-[#E64A38]/20 rounded-full blur-[130px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#EAB308]/15 rounded-full blur-[130px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Minimal Top Status Bar (NO MENU) */}
          <div className="relative z-20 flex items-center justify-between w-full">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center space-x-2.5 font-mono text-[11px] sm:text-xs text-neutral-400 tracking-[0.25em] uppercase font-bold"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#E64A38] animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E64A38] -ml-5" />
              <span>EXPERIENCE // 3D BOOT</span>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleSkip();
              }}
              className="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-400 hover:text-white transition-colors uppercase cursor-pointer px-3 py-1 border border-neutral-800 hover:border-neutral-600 rounded bg-neutral-900/60 backdrop-blur-xs"
            >
              SKIP [ESC]
            </button>
          </div>

          {/* =========================================================================
              CENTER: 3D EXTRUDED FULL TITLE TYPOGRAPHY (PURE 3D TEXT, NO CARTOON)
             ========================================================================= */}
          <motion.div
            animate={{
              rotateX: mousePos.y,
              rotateY: mousePos.x
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 80 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative z-20 my-auto w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center py-6"
          >
            {/* Creator Name with 3D Depth Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              style={{ transform: 'translateZ(30px)' }}
              className="inline-flex items-center space-x-2 font-mono text-xs sm:text-sm md:text-base tracking-[0.35em] text-[#EAB308] uppercase font-black mb-4 sm:mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#EAB308]" />
              <span>THOUN SOVANNAREACH</span>
            </motion.div>

            {/* 3D Headline Stack with Multi-Layered Extruded Shadows */}
            <div
              style={{ transform: 'translateZ(60px)' }}
              className="flex flex-col items-center space-y-1 sm:space-y-2"
            >
              {/* 3D Line 1: I DESIGN. */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%', rotateX: -60, opacity: 0 }}
                  animate={{ y: 0, rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[130px] tracking-tight text-white uppercase leading-[0.92]"
                  style={{
                    textShadow:
                      '2px 2px 0px #404040, 4px 4px 0px #262626, 6px 6px 0px #171717, 8px 8px 30px rgba(0,0,0,0.9)'
                  }}
                >
                  I DESIGN.
                </motion.h1>
              </div>

              {/* 3D Line 2: I CODE. */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%', rotateX: -60, opacity: 0 }}
                  animate={{ y: 0, rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[130px] tracking-tight text-white uppercase leading-[0.92]"
                  style={{
                    textShadow:
                      '2px 2px 0px #404040, 4px 4px 0px #262626, 6px 6px 0px #171717, 8px 8px 30px rgba(0,0,0,0.9)'
                  }}
                >
                  I CODE.
                </motion.h1>
              </div>

              {/* 3D Line 3: I SOLVE. in vibrant 3D Coral Red */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '100%', rotateX: -60, opacity: 0 }}
                  animate={{ y: 0, rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[130px] tracking-tight text-[#E64A38] uppercase leading-[0.92]"
                  style={{
                    textShadow:
                      '2px 2px 0px #B83424, 4px 4px 0px #8C2215, 6px 6px 0px #5C130A, 8px 8px 30px rgba(230,74,56,0.6)'
                  }}
                >
                  I SOLVE.
                </motion.h1>
              </div>
            </div>

            {/* Subtitle with 3D Depth */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ transform: 'translateZ(30px)' }}
              className="mt-6 sm:mt-8 font-mono text-xs sm:text-sm md:text-base text-neutral-400 tracking-widest uppercase font-semibold max-w-xl"
            >
              MULTIDISCIPLINARY CREATIVE DEVELOPER & UI/UX ARCHITECT
            </motion.p>
          </motion.div>

          {/* =========================================================================
              BOTTOM BAR: PERCENTAGE COUNTER & GLOWING PROGRESS LINE
             ========================================================================= */}
          <div className="relative z-20 w-full max-w-xl mx-auto flex flex-col items-center">
            {/* Numeric Counter with 3D Depth */}
            <div className="flex items-baseline space-x-1.5 font-mono mb-2">
              <span className="text-3xl sm:text-4xl font-black text-[#E64A38] tabular-nums tracking-tight drop-shadow-[0_4px_10px_rgba(230,74,56,0.6)]">
                {String(progress).padStart(3, '0')}
              </span>
              <span className="text-sm font-bold text-neutral-500">%</span>
            </div>

            {/* 3D Glowing Progress Bar */}
            <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden border border-neutral-800 shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#E64A38] via-[#EAB308] to-white shadow-[0_0_12px_rgba(230,74,56,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
