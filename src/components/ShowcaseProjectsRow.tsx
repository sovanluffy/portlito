import React from 'react';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface ShowcaseProjectsRowProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onViewAllProjects?: () => void;
}

export const ShowcaseProjectsRow: React.FC<ShowcaseProjectsRowProps> = ({
  projects,
  onSelectProject,
  onViewAllProjects
}) => {
  // Grab the 3 featured showcase projects
  const fintrack = projects.find((p) => p.id === 'fintrack') || projects[0];
  const nesthabit = projects.find((p) => p.id === 'nesthabit') || projects[1] || projects[0];
  const flowtask = projects.find((p) => p.id === 'flowtask') || projects[2] || projects[0];

  return (
    <div className="relative bg-[#141414] text-neutral-100 border-2 border-neutral-900 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-retro-lg overflow-hidden select-none">
      {/* 1. SECTION HEADER BAR (Cream Badge on Left, View All on Right) */}
      <div className="flex items-center justify-between gap-4 pb-6 mb-4 md:mb-8 border-b border-neutral-800/80">
        {/* Left: FEATURED PROJECTS Badge */}
        <div className="inline-flex items-center">
          <span className="px-3.5 sm:px-4 py-1.5 bg-[#FAF7EE] text-neutral-950 border-2 border-neutral-950 font-mono text-xs sm:text-sm font-black tracking-widest uppercase rounded shadow-retro-sm">
            FEATURED PROJECTS
          </span>
        </div>

        {/* Right: VIEW ALL PROJECTS → Action */}
        <button
          onClick={onViewAllProjects}
          className="group inline-flex items-center space-x-2 font-mono text-xs sm:text-sm font-bold tracking-widest text-neutral-300 hover:text-white uppercase transition-colors cursor-pointer"
        >
          <span>VIEW ALL PROJECTS</span>
          <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </button>
      </div>

      {/* 2. BACKGROUND DECORATIVE DOODLES */}
      {/* Left: Coral-Red 8-Point Asterisk / Starburst Doodle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-4 z-0 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <svg
          className="w-16 h-16 lg:w-20 lg:h-20 text-[#E64A38] opacity-95"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          {/* 8-point hand-drawn modernist burst */}
          <path d="M50 0 C48 25 25 48 0 50 C25 52 48 75 50 100 C52 75 75 52 100 50 C75 48 52 25 50 0 Z" />
          <path
            d="M15 15 C33 33 40 40 50 50 C40 60 33 67 15 85 C33 67 40 60 50 50 C60 40 67 33 85 15 C67 33 60 40 50 50 C40 40 33 33 15 15 Z"
            opacity="0.85"
          />
        </svg>
      </div>

      {/* Right: Golden-Yellow Angled Wireframe Hatch Grid Doodle */}
      <div
        className="absolute bottom-4 -right-4 sm:-right-2 z-0 pointer-events-none hidden md:block"
        aria-hidden="true"
      >
        <svg
          className="w-24 h-36 lg:w-32 lg:h-44 text-[#EAB308] opacity-90"
          viewBox="0 0 120 160"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          {/* Angled isometric cross-hatch lines */}
          <line x1="20" y1="10" x2="110" y2="40" />
          <line x1="10" y1="40" x2="100" y2="70" />
          <line x1="0" y1="70" x2="90" y2="100" />
          <line x1="0" y1="100" x2="90" y2="130" />
          <line x1="10" y1="130" x2="100" y2="160" />

          <line x1="30" y1="10" x2="10" y2="140" />
          <line x1="55" y1="20" x2="35" y2="150" />
          <line x1="80" y1="30" x2="60" y2="160" />
          <line x1="105" y1="40" x2="85" y2="170" />
        </svg>
      </div>

      {/* 3. THREE FEATURED CARDS GRID */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 xl:gap-6 items-stretch">
        {/* ========================================================
            CARD 01: FINTRACK (Mobile Finance App on Coral Red)
           ======================================================== */}
        <div className="relative group flex flex-col">
          {/* Layered Paper Backing Underlay Effect */}
          <div
            className="absolute -inset-1 bg-[#FAF7EE] border-2 border-neutral-900 rounded-xl pointer-events-none transform translate-x-1 translate-y-1 shadow-sm"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row h-full rounded-lg border-2 border-neutral-900 overflow-hidden bg-[#FAF7EE]">
            {/* LEFT HALF: Coral Red Canvas with Smartphone Mockup */}
            <div className="relative sm:w-1/2 lg:w-full xl:w-1/2 bg-[#E64A38] p-4 sm:p-5 flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[220px] xl:min-h-[260px] overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 lg:border-b-2 lg:border-r-0 xl:border-b-0 xl:border-r-2 border-neutral-900">
              {/* White sketch contour frame */}
              <div className="absolute inset-1.5 border border-white/40 rounded pointer-events-none" />

              {/* Black Circle Sticker Badge */}
              <div className="absolute top-4 right-3 sm:right-4 w-7 h-7 rounded-full bg-neutral-950 z-20 shadow-sm flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              </div>

              {/* 3x3 Dot Matrix Indicator */}
              <div className="absolute top-14 right-3.5 sm:right-4 flex flex-col space-y-1 z-10" aria-hidden="true">
                {[0, 1, 2].map((r) => (
                  <div key={r} className="flex space-x-1">
                    <span className="w-1 h-1 rounded-full bg-neutral-900/70" />
                    <span className="w-1 h-1 rounded-full bg-neutral-900/70" />
                    <span className="w-1 h-1 rounded-full bg-neutral-900/70" />
                  </div>
                ))}
              </div>

              {/* Tilted Smartphone Mockup */}
              <div className="relative z-10 w-32 sm:w-36 lg:w-32 xl:w-36 -rotate-6 group-hover:-rotate-2 group-hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="bg-white p-1.5 rounded-[24px] border-2 border-neutral-900 shadow-lg">
                  {/* Phone Screen */}
                  <div className="bg-[#FAF9F5] rounded-[18px] p-2 flex flex-col space-y-2 border border-neutral-200">
                    {/* Dynamic Island / Notch Pill */}
                    <div className="w-8 h-1.5 bg-neutral-900 rounded-full mx-auto" />

                    {/* App Balance Header */}
                    <div className="bg-white p-1.5 rounded-lg border border-neutral-200/80 shadow-2xs">
                      <div className="text-[7px] font-mono text-neutral-500 uppercase">Total Balance</div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold font-mono text-neutral-900">$12,840</span>
                        <span className="text-[6px] font-bold text-emerald-700 bg-emerald-100 px-1 py-0.2 rounded">+14%</span>
                      </div>
                    </div>

                    {/* 3 Action Circles */}
                    <div className="flex justify-between px-1">
                      {['Send', 'Save', 'Cards'].map((btn, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className="w-4 h-4 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[7px] font-bold">
                            {btn[0]}
                          </div>
                          <span className="text-[6px] font-mono text-neutral-600 mt-0.5">{btn}</span>
                        </div>
                      ))}
                    </div>

                    {/* Recent Transactions List */}
                    <div className="space-y-1 pt-0.5">
                      <div className="flex items-center justify-between text-[7px] bg-white p-1 rounded border border-neutral-100">
                        <span className="font-semibold text-neutral-800">UI Design</span>
                        <span className="font-bold text-emerald-600">+$850</span>
                      </div>
                      <div className="flex items-center justify-between text-[7px] bg-white p-1 rounded border border-neutral-100">
                        <span className="font-semibold text-neutral-800">Software</span>
                        <span className="font-bold text-neutral-700">-$24</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT HALF: Cream Paper Editorial Card */}
            <div className="sm:w-1/2 lg:w-full xl:w-1/2 p-5 sm:p-6 flex flex-col justify-between bg-[#FAF7EE]">
              <div>
                {/* 01 Number */}
                <span className="font-mono text-xs font-bold text-neutral-900 block mb-1">
                  01
                </span>

                {/* Title */}
                <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-950 tracking-tight leading-tight uppercase mb-2 group-hover:text-[#E64A38] transition-colors">
                  FINTRACK
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                  Finance tracking app for freelancers and small teams.
                </p>
              </div>

              {/* VIEW CASE STUDY Button */}
              <div className="pt-5">
                <button
                  onClick={() => onSelectProject(fintrack)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-3.5 py-2 bg-white hover:bg-neutral-50 border-2 border-neutral-900 text-neutral-950 font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs hover:shadow-retro-sm transition-all duration-200 active:translate-y-0.5 cursor-pointer"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CARD 02: NESTHABIT (Modern Interior Website on Cream)
           ======================================================== */}
        <div className="relative group flex flex-col">
          {/* Layered Paper Backing Underlay Effect */}
          <div
            className="absolute -inset-1 bg-[#FAF7EE] border-2 border-neutral-900 rounded-xl pointer-events-none transform translate-x-1 translate-y-1 shadow-sm"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row h-full rounded-lg border-2 border-neutral-900 overflow-hidden bg-[#FAF7EE]">
            {/* LEFT HALF: Desktop Browser Mockup */}
            <div className="relative sm:w-1/2 lg:w-full xl:w-1/2 bg-[#F3EFE6] p-3 sm:p-4 flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[220px] xl:min-h-[260px] overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 lg:border-b-2 lg:border-r-0 xl:border-b-0 xl:border-r-2 border-neutral-900">
              {/* White sketch frame */}
              <div className="absolute inset-1.5 border border-white/60 rounded pointer-events-none" />

              {/* Desktop Browser Window Mockup */}
              <div className="w-full max-w-[210px] sm:max-w-[230px] bg-white rounded-lg border-2 border-neutral-900 shadow-xl overflow-hidden group-hover:scale-102 transition-transform duration-300">
                {/* Browser Chrome Header */}
                <div className="bg-[#EAE5D9] px-2 py-1.5 border-b border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E64A38]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="w-20 sm:w-24 h-2.5 bg-white/90 rounded-full border border-neutral-300 flex items-center px-1">
                    <span className="text-[6px] font-mono text-neutral-400">nesthabit.design</span>
                  </div>
                  <div className="w-2" />
                </div>

                {/* Interior Brand Website Canvas */}
                <div className="p-2 bg-white flex flex-col space-y-1.5">
                  {/* Website Brand Header */}
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-1">
                    <span className="font-display font-black text-[8px] text-neutral-900 tracking-wider">
                      NESTHABIT
                    </span>
                    <div className="flex space-x-1.5 text-[5px] font-mono text-neutral-500">
                      <span>Spaces</span>
                      <span>Shop</span>
                    </div>
                  </div>

                  {/* Hero Photo Section (Sofa / Living Room Interior) */}
                  <div className="relative rounded overflow-hidden aspect-[16/10] bg-neutral-900">
                    <img
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80"
                      alt="NestHabit Interior Mockup"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-1.5">
                      <span className="text-[7px] font-display font-bold text-white tracking-wide">
                        Modern Living Atelier
                      </span>
                    </div>
                  </div>

                  {/* Two Mini Product Cards */}
                  <div className="grid grid-cols-2 gap-1 pt-0.5">
                    <div className="bg-[#FAF7EE] p-1 rounded border border-neutral-200">
                      <div className="text-[6px] font-bold text-neutral-800">Lounge Chair</div>
                      <div className="text-[5px] font-mono text-neutral-500">$340</div>
                    </div>
                    <div className="bg-[#FAF7EE] p-1 rounded border border-neutral-200">
                      <div className="text-[6px] font-bold text-neutral-800">Oak Dining</div>
                      <div className="text-[5px] font-mono text-neutral-500">$520</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT HALF: Cream Paper Editorial Card */}
            <div className="sm:w-1/2 lg:w-full xl:w-1/2 p-5 sm:p-6 flex flex-col justify-between bg-[#FAF7EE]">
              <div>
                {/* 02 Number */}
                <span className="font-mono text-xs font-bold text-neutral-900 block mb-1">
                  02
                </span>

                {/* Title */}
                <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-950 tracking-tight leading-tight uppercase mb-2 group-hover:text-amber-800 transition-colors">
                  NESTHABIT
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-700 font-normal leading-relaxed">
                  Modern interior brand website with e-commerce.
                </p>
              </div>

              {/* VIEW CASE STUDY Button */}
              <div className="pt-5">
                <button
                  onClick={() => onSelectProject(nesthabit)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-3.5 py-2 bg-white hover:bg-neutral-50 border-2 border-neutral-900 text-neutral-950 font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs hover:shadow-retro-sm transition-all duration-200 active:translate-y-0.5 cursor-pointer"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            CARD 03: FLOWTASK (Dashboard on Golden Yellow)
           ======================================================== */}
        <div className="relative group flex flex-col">
          {/* Layered Paper Backing Underlay Effect */}
          <div
            className="absolute -inset-1 bg-[#FAF7EE] border-2 border-neutral-900 rounded-xl pointer-events-none transform translate-x-1 translate-y-1 shadow-sm"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col xl:flex-row h-full rounded-lg border-2 border-neutral-900 overflow-hidden bg-[#FAF7EE]">
            {/* LEFT HALF: Web Dashboard UI Mockup */}
            <div className="relative sm:w-1/2 lg:w-full xl:w-1/2 bg-[#F8F5EE] p-3 sm:p-4 flex items-center justify-center min-h-[220px] sm:min-h-[260px] lg:min-h-[220px] xl:min-h-[260px] overflow-hidden border-b-2 sm:border-b-0 sm:border-r-2 lg:border-b-2 lg:border-r-0 xl:border-b-0 xl:border-r-2 border-neutral-900">
              {/* White sketch frame */}
              <div className="absolute inset-1.5 border border-white/60 rounded pointer-events-none" />

              {/* SaaS Dashboard Window */}
              <div className="w-full max-w-[210px] sm:max-w-[230px] bg-white rounded-lg border-2 border-neutral-900 shadow-xl overflow-hidden group-hover:scale-102 transition-transform duration-300">
                {/* Dashboard Top Header */}
                <div className="bg-neutral-950 px-2 py-1.5 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308]" />
                    <span className="font-mono text-[7px] font-bold text-white tracking-wider">FLOWTASK</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-neutral-700 text-[6px] flex items-center justify-center font-bold">
                    SR
                  </div>
                </div>

                {/* Dashboard Layout: Mini Sidebar + Charts Canvas */}
                <div className="flex">
                  {/* Mini Sidebar */}
                  <div className="w-6 bg-[#FAF7EE] border-r border-neutral-200 py-1.5 flex flex-col items-center space-y-2">
                    <div className="w-3 h-3 rounded bg-neutral-900 text-white flex items-center justify-center text-[6px]">■</div>
                    <div className="w-3 h-3 rounded bg-neutral-200 flex items-center justify-center text-[6px] text-neutral-600">●</div>
                    <div className="w-3 h-3 rounded bg-neutral-200 flex items-center justify-center text-[6px] text-neutral-600">▲</div>
                  </div>

                  {/* Main Analytics Canvas */}
                  <div className="flex-1 p-2 space-y-1.5">
                    {/* Top Row: Line Chart + Doughnut Chart */}
                    <div className="grid grid-cols-12 gap-1.5 items-center">
                      {/* Line chart */}
                      <div className="col-span-7 bg-[#FAF9F5] p-1 rounded border border-neutral-200">
                        <div className="text-[6px] font-mono text-neutral-500">Sprint Velocity</div>
                        {/* SVG Line Graph */}
                        <svg className="w-full h-8 text-[#E64A38]" viewBox="0 0 70 30" fill="none">
                          <path
                            d="M2 24 C 15 22, 25 10, 40 14 C 52 18, 58 4, 68 2"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <path
                            d="M2 24 C 15 22, 25 10, 40 14 C 52 18, 58 4, 68 2 L 68 28 L 2 28 Z"
                            fill="currentColor"
                            opacity="0.1"
                          />
                        </svg>
                      </div>

                      {/* Doughnut Ring Chart */}
                      <div className="col-span-5 bg-[#FAF9F5] p-1 rounded border border-neutral-200 flex flex-col items-center">
                        <div className="text-[5px] font-mono text-neutral-500 mb-0.5">Allocation</div>
                        <svg className="w-7 h-7" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="12" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                          <circle
                            cx="18"
                            cy="18"
                            r="12"
                            fill="none"
                            stroke="#38BDF8"
                            strokeWidth="4"
                            strokeDasharray="25 75"
                            strokeDashoffset="25"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="12"
                            fill="none"
                            stroke="#EAB308"
                            strokeWidth="4"
                            strokeDasharray="20 80"
                            strokeDashoffset="0"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="12"
                            fill="none"
                            stroke="#E64A38"
                            strokeWidth="4"
                            strokeDasharray="30 70"
                            strokeDashoffset="80"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Progress indicators */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[6px] font-mono text-neutral-700">
                        <span>Sprint 04 Tasks</span>
                        <span className="font-bold">84%</span>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden border border-neutral-200">
                        <div className="bg-[#38BDF8] h-full rounded-full" style={{ width: '84%' }} />
                      </div>

                      <div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden border border-neutral-200">
                        <div className="bg-[#EAB308] h-full rounded-full" style={{ width: '62%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT HALF: Golden Yellow Canvas Card (Matching Reference Screenshot!) */}
            <div className="sm:w-1/2 lg:w-full xl:w-1/2 p-5 sm:p-6 flex flex-col justify-between bg-[#EAB308] text-neutral-950">
              <div>
                {/* 03 Number */}
                <span className="font-mono text-xs font-bold text-neutral-950 block mb-1">
                  03
                </span>

                {/* Title */}
                <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-950 tracking-tight leading-tight uppercase mb-2">
                  FLOWTASK
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-900 font-medium leading-relaxed">
                  Project management platform for agile teams.
                </p>
              </div>

              {/* VIEW CASE STUDY Button */}
              <div className="pt-5">
                <button
                  onClick={() => onSelectProject(flowtask)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-3.5 py-2 bg-[#FAF7EE] hover:bg-white border-2 border-neutral-950 text-neutral-950 font-mono text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs hover:shadow-retro-sm transition-all duration-200 active:translate-y-0.5 cursor-pointer"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
