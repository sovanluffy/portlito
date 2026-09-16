import React from 'react';

// Washi Tape strip helper
export const Tape: React.FC<{
  className?: string;
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'white';
  angle?: number;
}> = ({ className = '', color = 'yellow', angle = -2 }) => {
  const colorClasses = {
    yellow: 'bg-[#fef08a]/85 border-amber-300/40 text-amber-900',
    pink: 'bg-[#fbcfe8]/85 border-pink-300/40 text-pink-950',
    blue: 'bg-[#bfdbfe]/85 border-blue-300/40 text-blue-950',
    green: 'bg-[#bbf7d0]/85 border-green-300/40 text-green-950',
    white: 'bg-white/85 border-neutral-300/50 text-neutral-800'
  }[color];

  return (
    <div
      style={{ transform: `rotate(${angle}deg)` }}
      className={`h-5 w-24 border-l-2 border-r-2 border-dashed shadow-sm backdrop-blur-[1px] pointer-events-none z-20 ${colorClasses} ${className}`}
    />
  );
};

// Retro Vintage Macintosh "hello" Computer Illustration
export const VintageMacSticker: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 130
}) => {
  return (
    <div
      className={`relative inline-block select-none transition-transform hover:rotate-2 hover:scale-105 ${className}`}
      style={{ width: size, height: size * 1.15 }}
      title="Retro Macintosh Computer"
    >
      <div className="w-full h-full bg-[#e8e4d9] rounded-xl border-2 border-[#2b2b2b] p-2.5 shadow-retro flex flex-col justify-between relative overflow-hidden">
        {/* Subtle beige computer texture & top vent */}
        <div className="flex justify-center space-x-1 mb-1">
          <div className="w-8 h-1 bg-[#c9c4b7] rounded-full"></div>
        </div>

        {/* Dark monitor screen */}
        <div className="bg-[#1e232a] rounded-md p-2 flex-1 flex flex-col items-center justify-center border-2 border-[#383d44] shadow-inner relative">
          <div className="absolute top-1 left-1.5 flex space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f87171]/70"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]/70"></span>
          </div>
          <span className="font-hand text-xl text-[#38bdf8] font-bold tracking-wider animate-pulse">
            hello
          </span>
          <span className="text-[9px] font-mono text-[#a3e635] mt-0.5">
            fun@dev:~$
          </span>
        </div>

        {/* Diskette drive slot */}
        <div className="mt-2 pt-1 border-t border-[#d4cfc2] flex items-center justify-between">
          <div className="w-12 h-1 bg-[#2b2b2b] rounded-sm"></div>
          {/* Rainbow badge reminiscent of classic computer */}
          <div className="flex flex-col space-y-[1px]">
            <div className="w-2.5 h-[2px] bg-green-500 rounded-full"></div>
            <div className="w-2.5 h-[2px] bg-yellow-500 rounded-full"></div>
            <div className="w-2.5 h-[2px] bg-red-500 rounded-full"></div>
            <div className="w-2.5 h-[2px] bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Retro Smiley Sticker (matches reference image contact/hero)
export const SmileySticker: React.FC<{ size?: number; className?: string }> = ({
  size = 72,
  className = ''
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-full bg-[#FDE047] border-2 border-[#1c1c1c] shadow-retro flex items-center justify-center select-none transition-transform hover:rotate-12 hover:scale-110 cursor-pointer ${className}`}
      title="Good vibes & creativity!"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Left eye */}
        <div className="absolute top-[28%] left-[28%] w-[15%] h-[24%] bg-[#1c1c1c] rounded-full"></div>
        {/* Right eye */}
        <div className="absolute top-[28%] right-[28%] w-[15%] h-[24%] bg-[#1c1c1c] rounded-full"></div>
        {/* Smile curve */}
        <svg
          viewBox="0 0 50 30"
          className="absolute bottom-[20%] w-[56%] text-[#1c1c1c]"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
        >
          <path d="M 5 6 Q 25 32 45 6" />
        </svg>
      </div>
    </div>
  );
};

// Polaroid photo frame
export const PolaroidPhoto: React.FC<{
  src: string;
  alt: string;
  caption?: string;
  tapeColor?: 'yellow' | 'pink' | 'blue' | 'green' | 'white';
  angle?: number;
  className?: string;
  imageClassName?: string;
}> = ({
  src,
  alt,
  caption,
  tapeColor = 'yellow',
  angle = 2,
  className = '',
  imageClassName = 'h-48'
}) => {
  return (
    <div
      style={{ transform: `rotate(${angle}deg)` }}
      className={`polaroid relative rounded-sm shadow-retro transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-30 group ${className}`}
    >
      {/* Tape on top center */}
      <Tape
        color={tapeColor}
        angle={-angle * 1.5}
        className="-top-3 left-1/2 -translate-x-1/2"
      />

      <div className={`overflow-hidden bg-[#e5e5e0] border border-neutral-200 ${imageClassName}`}>
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          loading="lazy"
        />
      </div>

      {caption && (
        <p className="font-hand text-lg text-neutral-800 text-center mt-2.5 font-bold tracking-wide">
          {caption}
        </p>
      )}
    </div>
  );
};
