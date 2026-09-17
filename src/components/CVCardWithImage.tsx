import React, { useState } from 'react';
import { ZoomIn } from 'lucide-react';

// Your CV image
import cvPortrait from '../assets/images/khmercv.png';

export const CVCardWithImage: React.FC = () => {
  // Hover shows the preview on desktop; tap toggles it on touch devices
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="p-5 bg-white/80 border-2 border-neutral-900 rounded-xl shadow-retro rotate-1">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-300">
          <span className="font-mono text-xs font-bold text-neutral-800 uppercase tracking-wider flex items-center gap-1.5">
            <span>📄</span>
            <span>My CV Card</span>
          </span>
          <span className="font-hand text-sm text-neutral-600 font-bold">Hover to zoom</span>
        </div>

        {/* CV Thumbnail */}
        <div
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
          onClick={() => setShowPreview((v) => !v)}
          className="group relative border-2 border-neutral-900 rounded-lg overflow-hidden shadow-retro cursor-zoom-in transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-retro-lg"
        >
          <img
            src={cvPortrait}
            alt="CV"
            className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-1.5">
              <div className="p-2 bg-white/90 border-2 border-neutral-900 rounded-full shadow-retro-sm">
                <ZoomIn className="w-4 h-4 text-neutral-900" />
              </div>
              <span className="font-mono text-[10px] font-bold text-white bg-neutral-900/80 px-2 py-0.5 rounded">
                VIEW FULL SIZE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating enlarged preview — fixed & centered in the viewport so it
          always renders fully visible and never overlaps or gets clipped
          by the surrounding grid/columns */}
      {showPreview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 pointer-events-none bg-black/10 animate-in fade-in duration-150"
        >
          <div className="bg-white border-2 border-neutral-900 rounded-xl shadow-2xl p-2 animate-in zoom-in-95 duration-200">
            <img
              src={cvPortrait}
              alt="CV Preview"
              className="max-h-[85vh] max-w-[85vw] w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};