import React from 'react';
import { Tape } from './RetroSticker';
import heroPortrait from '../assets/images/loo.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Main Scrapbook Paper Canvas */}
        <div className="relative bg-[#f7f4ea] border-2 border-neutral-900 rounded-2xl shadow-retro-lg overflow-hidden">
          {/* Subtle Graph Grid Paper Texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.07) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.07) 1px, transparent 1px)
              `,
              backgroundSize: '22px 22px'
            }}
          />

          {/* Top Washi Tape */}
          <Tape color="green" angle={-1} className="-top-3 left-16 z-20" />

          {/* "about me" ribbon banner */}
          <div className="absolute top-3 right-3 sm:top-5 sm:right-6 z-30 rotate-2">
            <div className="relative">
              <div className="absolute inset-0 translate-x-1 translate-y-1 bg-[#EA580C] rounded-sm" />
              <div className="relative bg-neutral-900 border-2 border-neutral-900 px-4 sm:px-6 py-1.5 sm:py-2 rounded-sm shadow-retro">
                <span className="font-display text-base sm:text-xl md:text-2xl font-black tracking-tight text-[#faf7ef] lowercase">
                  about me
                </span>
              </div>
            </div>
          </div>

          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-9 pt-16 sm:pt-20 md:pt-12">
            {/* Top Row: Left ID Badge + Right Notebook Bio */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
              {/* LEFT: Lanyard ID Badge */}
              <div className="lg:col-span-4 flex flex-col items-center">
                {/* Lanyard strap + clip */}
                <div className="flex flex-col items-center -mb-1">
                  <div className="w-6 h-10 sm:w-8 sm:h-12 rounded-b-full shadow-md" />
                  <div className="w-5 h-5 rounded-full border-4 border-neutral-800 bg-neutral-200 -mt-1 shadow-sm" />
                </div>

                {/* Badge card */}
                <div className="relative w-full h-[600px] max-w-[340px] bg-[#faf7ef] rounded-xl border-2 border-neutral-900 shadow-retro p-2.5 pt-5 -rotate-1 transition-transform hover:rotate-0">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-7 h-2.5 rounded-full bg-neutral-300/80 border border-neutral-500" />

                  <div className="text-center mb-2">
                    <span className="font-display text-sm font-black tracking-[0.2em] text-[#EA580C] uppercase">
                      SR · DEV
                    </span>
                  </div>

                  {/* Photo */}
                  <div className="relative h-[480px] rounded-lg overflow-hidden border-2 border-neutral-900 bg-neutral-900">
                    <img
                      src={heroPortrait}
                      alt="THOUN SOVANNAREACH"
                      className="w-full h-[480px]  object-cover object-top filter contrast-[1.05] brightness-[0.98]"
                    />
                  </div>

                  {/* Name plate */}
                  <div className="text-center mt-2 pb-0.5">
                    <div className="font-display text-base sm:text-lg font-bold text-neutral-900 leading-tight tracking-tight">
                      Thoun Sovannareach
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5">
                      Software & Mobile Developer
                    </div>
                  </div>

                  {/* Pinned corner tag */}
                  <div className="absolute -right-2.5 top-4 z-20 bg-[#faf7ef] border-2 border-neutral-900 px-2 py-0.5 shadow-retro-sm rotate-6 transform hover:rotate-0 transition-transform">
                    <span className="text-[8px] font-mono text-neutral-600 block text-center leading-tight">
                      អាច-អាន-បាន
                    </span>
                  </div>
                </div>
 
                {/* Contact / details sticky note */}
                <div className="mt-3 w-full max-w-[240px] bg-[#FDE68A]/60 border-2 border-neutral-900 rounded-lg shadow-retro-sm p-3 rotate-1 transition-transform hover:rotate-0">
                  <h4 className="font-display font-bold text-[11px] text-neutral-900 mb-1.5 uppercase tracking-wider border-b border-neutral-900/20 pb-1">
                    Details
                  </h4>
                  <ul className="space-y-1 text-[11px] font-mono text-neutral-800">
                    <li className="flex items-center justify-between">
                      <span className="text-neutral-500">Based</span>
                      <span className="font-semibold text-right">Phnom Penh, KH</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-neutral-500">Role</span>
                      <span className="font-semibold text-right">Jr. Software Dev</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-neutral-500">Focus</span>
                      <span className="font-semibold text-right">Web & Mobile</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-neutral-500">Status</span>
                      <span className="font-semibold text-right text-[#16A34A]">Available</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT: Notebook-paper bio + timeline */}
              <div className="lg:col-span-8 flex flex-col space-y-4">
                <div className="relative bg-white/70 border-2 border-neutral-900 rounded-xl shadow-retro-sm px-4 sm:px-6 pt-5 pb-4 sm:pb-5">
                  {/* Dotted spiral-notebook edge */}
                  <div
                    className="absolute top-0 left-0 right-0 h-3 -translate-y-1/2 flex items-center justify-evenly px-6"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 16 }).map((_, i) => (
                      <span key={i} className="w-2 h-2 rounded-full bg-[#f7f4ea] border-2 border-neutral-900" />
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="inline-block bg-neutral-900 text-[#faf7ef] text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 -rotate-1 mb-1.5">
                        Hello
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-neutral-900">
                        I'm <span className="text-[#EA580C]">Sovannareach</span>
                      </h2>
                    </div>

                    {/* Postal cancellation stamp */}
                    <div className="self-start sm:self-auto border-2 border-neutral-800 border-dashed px-2.5 py-0.5 rotate-3 select-none bg-[#faf7ef] shadow-retro-sm">
                      <div className="text-[9px] font-mono font-black text-neutral-800 tracking-widest uppercase text-center border-b border-neutral-400 pb-0.5">
                        PHNOM PENH
                      </div>
                      <div className="text-[9px] font-mono font-black text-neutral-800 tracking-widest uppercase text-center pt-0.5">
                        CAMBODIA
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px] sm:text-sm text-neutral-800 leading-snug">
                    <div className="space-y-2 font-normal">
                      <p>
                        No matter if it is in my work, out and about, or sitting at my desk, I am always designing, coding, or building something useful. I love{' '}
                        <strong className="font-semibold text-neutral-950">software engineering</strong>,{' '}
                        <strong className="font-semibold text-neutral-950">solving problems</strong>,{' '}
                        <strong className="font-semibold text-neutral-950">UI/UX prototyping</strong>, and{' '}
                        <strong className="font-semibold text-neutral-950">tinkering with devices</strong>.
                      </p>
                      <p>
                        I am a Junior Software Developer with hands-on experience in Full-Stack Web Development, Mobile Application Development, and System Development.
                      </p>
                    </div>
                    <div className="space-y-2 font-normal">
                      <p>
                        I design and develop modern applications and deliver practical, solution-focused software using both{' '}
                        <strong className="font-semibold text-neutral-950 bg-[#FDE047]/60 px-1 rounded">
                          front-end and back-end
                        </strong>{' '}
                        technologies.
                      </p>
                      <p>
                        I also build independent digital projects, web applications, and mobile solutions for educational centers and local businesses in Cambodia. I enjoy turning ideas into real products and working closely with teams to deliver impactful results.
                      </p>
                    </div>
                  </div>

                  {/* Sticker tag row */}
                  <div className="flex flex-wrap gap-2 mt-3.5">
                    <span className="bg-[#DBEAFE] border-2 border-neutral-900 text-neutral-900 text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-retro-sm -rotate-2">
                      Problem-Solver
                    </span>
                    <span className="bg-[#FFEDD5] border-2 border-neutral-900 text-neutral-900 text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-retro-sm rotate-1">
                      Curious
                    </span>
                    <span className="bg-[#DCFCE7] border-2 border-neutral-900 text-neutral-900 text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-retro-sm -rotate-1">
                      Detail-Oriented
                    </span>
                  </div>
                </div>

                {/* Structured Columns: Experiencia | Estudios & Enfoque */}
                <div className="bg-white/70 border-2 border-neutral-900 rounded-xl shadow-retro-sm p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5">
                  {/* Column 1: Experiencia / Experience */}
                  <div className="md:col-span-7 space-y-2.5">
                    <h3 className="text-sm font-bold text-neutral-900 tracking-wide flex items-center space-x-1.5">
                      <span>Experiencia</span>
                      <span className="text-[11px] font-mono text-neutral-500 font-normal">/ Work</span>
                    </h3>

                    <div className="space-y-2 text-[11px]">
                      {/* 1. IApparel Mobile */}
                      <div className="flex items-start space-x-2">
                        <div className="shrink-0 text-right w-14">
                          <span className="font-bold text-[#EA580C] font-mono block">2026</span>
                          <span className="text-[9px] font-bold text-neutral-600 block">PRESENT</span>
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">IApparel International Group</div>
                          <div className="text-neutral-700 font-medium">Mobile Application Developer</div>
                          <p className="text-[10px] text-neutral-600 mt-0.5 leading-snug">
                            Mobile features for worker operations, scanning, user search & daily workflow efficiency.
                          </p>
                        </div>
                      </div>

                      {/* 2. IApparel Internship */}
                      <div className="flex items-start space-x-2">
                        <div className="shrink-0 text-right w-14">
                          <span className="font-bold text-[#EA580C] font-mono block">2026</span>
                          <span className="text-[9px] font-mono text-neutral-500 block">3 MOS</span>
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">IApparel International Group</div>
                          <div className="text-neutral-700 font-medium">Software Developer Internship</div>
                          <p className="text-[10px] text-neutral-600 mt-0.5 leading-snug">
                            Full-stack web applications, front-end and back-end team collaboration.
                          </p>
                        </div>
                      </div>

                      {/* 3. Mother Care School */}
                      <div className="flex items-start space-x-2">
                        <div className="shrink-0 text-right w-14">
                          <span className="font-bold text-[#EA580C] font-mono block">2025</span>
                          <span className="text-[9px] font-mono text-neutral-500 block">FREELANCE</span>
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">Mother Care School</div>
                          <div className="text-neutral-700 font-medium">Software Developer & Scrum Master</div>
                          <p className="text-[10px] text-neutral-600 mt-0.5 leading-snug">
                            Strapi backend, React frontend, PostgreSQL database, and RESTful API integrations.
                          </p>
                        </div>
                      </div>

                      {/* 4. Freelance & Digital Solutions */}
                      <div className="flex items-start space-x-2">
                        <div className="shrink-0 text-right w-14">
                          <span className="font-bold text-[#16A34A] font-mono block">2024-25</span>
                          <span className="text-[9px] font-mono text-neutral-500 block">PROJECTS</span>
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">Digital Solutions & Client Projects</div>
                          <div className="text-neutral-700 font-medium">Full-Stack Web & Mobile Developer</div>
                          <p className="text-[10px] text-neutral-600 mt-0.5 leading-snug">
                            Custom web apps, responsive websites, and digital systems for schools and local businesses in Cambodia.
                          </p>
                        </div>
                      </div>

                      {/* 5. Phone-Shop */}
                      <div className="flex items-start space-x-2">
                        <div className="shrink-0 text-right w-14">
                          <span className="font-bold text-neutral-500 font-mono block">2021-23</span>
                          <span className="text-[9px] font-mono text-neutral-400 block">2 YRS</span>
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">Phone-Shop</div>
                          <div className="text-neutral-700 font-medium">Repair Specialist</div>
                          <p className="text-[10px] text-neutral-600 mt-0.5 leading-snug">
                            Hardware diagnostics, screen repairs, and software configuration.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Estudios & Enfoque */}
                  <div className="md:col-span-5 space-y-3 md:border-l md:border-neutral-300/80 md:pl-5">
                    <div>
                      <div className="flex items-center space-x-1.5 mb-1">
                        <h3 className="text-sm font-bold text-neutral-900 tracking-wide">Estudios</h3>
                        <span className="text-[9px] font-mono text-[#EA580C] font-bold">ENG / KHM</span>
                      </div>
                      <div className="flex items-baseline space-x-2 text-[11px]">
                        <span className="font-bold text-[#16A34A] font-mono">2024-26</span>
                        <div>
                          <div className="font-bold text-neutral-900 leading-tight">
                            PSE - Pour un Sourire d'Enfant
                          </div>
                          <div className="text-[10px] text-neutral-600 mt-0.5">
                            Web & Mobile App Development (C3 & Diploma)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-neutral-900 tracking-wide mb-1">Enfoque</h3>
                      <ul className="space-y-1 text-[11px] text-neutral-800 font-medium">
                        <li className="flex items-center space-x-1.5">
                          <span className="text-[#16A34A] text-[9px]">▸</span>
                          <span>Full-Stack Development</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <span className="text-[#16A34A] text-[9px]">▸</span>
                          <span>Mobile Application Dev</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <span className="text-[#16A34A] text-[9px]">▸</span>
                          <span>System Design & Arch</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <span className="text-[#16A34A] text-[9px]">▸</span>
                          <span>UI/UX Design (Figma)</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <span className="text-[#16A34A] text-[9px]">▸</span>
                          <span>Relational Databases</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom marquee ticker banner */}
          <div className="relative z-10 bg-neutral-900 border-t-2 border-neutral-900 py-1.5 overflow-hidden">
            <div className="marquee-track flex whitespace-nowrap">
              {Array.from({ length: 2 }).map((_, dupe) => (
                <div key={dupe} className="flex items-center shrink-0">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      key={i}
                      className="mx-3 sm:mx-5 font-display text-xs sm:text-sm font-bold uppercase tracking-widest text-[#faf7ef] flex items-center gap-3 sm:gap-4"
                    >
                      Full Stack Developer • Mobile Application Developer • Software Engineer
                      <span className="text-[#EA580C]">☆</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          width: max-content;
          animation: marquee-scroll 22s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};