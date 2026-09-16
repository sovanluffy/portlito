import React from 'react';
import { Tape } from './RetroSticker';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-8 md:py-14">
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

          {/* Top-Right Stamp Monogram (as in reference image) */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 select-none">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#E14D2A] text-[#E14D2A] flex items-center justify-center font-display text-lg sm:text-xl font-bold rotate-12 shadow-sm bg-[#faf7ef]/80">
              SR
            </div>
          </div>

          <div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-14">
            {/* Top Row: Left Cutout Portrait + Right Editorial Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* ========================================================= */}
              {/* LEFT: Cutout Portrait with Bold Red/Orange Contour Offset */}
              {/* ========================================================= */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative pt-2">
                <div className="relative w-full max-w-[310px] sm:max-w-[340px]">
                  
                  {/* Background Paper-cut Silhouette Contour (Red-Orange, exactly like reference) */}
                  <div className="absolute -inset-2.5 bg-[#EA580C] rounded-[2.5rem] transform -rotate-2 shadow-lg transition-transform hover:-rotate-1" />
                  <div className="absolute -inset-1 bg-[#C2410C] rounded-[2.2rem] transform rotate-1 opacity-75" />

                  {/* Main Portrait Frame */}
                  <div className="relative rounded-[2rem] overflow-hidden border-2 border-neutral-900 bg-neutral-900 shadow-retro">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                      alt="THOUN SOVANNAREACH"
                      className="w-full h-[360px] sm:h-[400px] object-cover object-top filter contrast-[1.05] brightness-[0.98]"
                    />

                    {/* Gradient Overlay at Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent pointer-events-none" />

                    {/* Bottom-Left Brand Stamp (as seen in reference "kev luna / design studio") */}
                    <div className="absolute bottom-4 left-4 z-20 text-left select-none">
                      <div className="font-display text-2xl sm:text-3xl tracking-tighter text-white leading-none drop-shadow">
                        thoun
                      </div>
                      <div className="font-display text-2xl sm:text-3xl tracking-tighter text-white leading-none drop-shadow">
                        sovannareach
                      </div>
                      <div className="flex items-center space-x-1.5 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                        <span className="text-[11px] font-mono text-neutral-300 font-bold uppercase tracking-wider">
                          dev.solutions
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pinned Vintage Tag Stamp (overlapping the right edge, as in reference "HECHO POR KEV") */}
                  <div className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 bg-[#faf7ef] border-2 border-neutral-900 px-3 py-1 shadow-retro-sm rotate-6 transform hover:rotate-0 transition-transform">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-neutral-900 uppercase block">
                      HECHO POR SOVANNAREACH
                    </span>
                    <span className="text-[9px] font-mono text-neutral-600 block text-center">
                      ធួន សុវណ្ណារាជ
                    </span>
                  </div>
                </div>

                {/* Sub-label under portrait for quick context */}
                <div className="mt-4 text-center">
                  <span className="text-xs font-mono font-semibold text-neutral-600">
                    Phnom Penh, Cambodia • Software & Mobile Developer
                  </span>
                </div>
              </div>

              {/* ========================================================= */}
              {/* RIGHT: Editorial Bio, Experience, Education & Stack Columns */}
              {/* ========================================================= */}
              <div className="lg:col-span-8 flex flex-col space-y-6">
                
                {/* Header Greeting & Postal Cancellation Stamp */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Greeting in thin pencil/drafting box (as in "Hola! Soy Kevin Luna") */}
                  <div className="relative inline-block border border-neutral-400/80 px-4 py-2 bg-[#faf7ef]/80 shadow-xs">
                    {/* Small drafting corner tick marks */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-neutral-700" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-neutral-700" />
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
                      Hello! I'm{' '}
                      <span className="text-[#EA580C] font-extrabold">
                        Sovannareach
                      </span>
                    </h2>
                  </div>

                  {/* Postal Cancellation Stamp ("NEW YORK / COLOMBIA" in reference -> "PHNOM PENH / CAMBODIA") */}
                  <div className="self-start sm:self-auto border-2 border-neutral-800 border-dashed px-3 py-1 rotate-3 select-none bg-[#faf7ef] shadow-retro-sm">
                    <div className="text-[10px] font-mono font-black text-neutral-800 tracking-widest uppercase text-center border-b border-neutral-400 pb-0.5">
                      PHNOM PENH
                    </div>
                    <div className="text-[10px] font-mono font-black text-neutral-800 tracking-widest uppercase text-center pt-0.5">
                      CAMBODIA
                    </div>
                  </div>
                </div>

                {/* Biographical Paragraphs (styled as in reference) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-sm sm:text-base text-neutral-800 leading-relaxed">
                  <div className="md:col-span-6 space-y-3 font-normal">
                    <p>
                      No matter if it is in my work, out and about, or sitting at my desk, I am always designing, coding, or building something useful. I love <strong className="font-semibold text-neutral-950">software engineering</strong>, <strong className="font-semibold text-neutral-950">solving problems</strong>, <strong className="font-semibold text-neutral-950">UI/UX prototyping</strong>, and <strong className="font-semibold text-neutral-950">tinkering with devices</strong>.
                    </p>
                    <p>
                      I am a Junior Software Developer with hands-on experience in Full-Stack Web Development, Mobile Application Development, and System Development.
                    </p>
                  </div>

                  <div className="md:col-span-6 space-y-3 font-normal">
                    <p>
                      I design and develop modern applications and deliver practical, solution-focused software using both <strong className="font-semibold text-neutral-950 bg-[#FDE047]/60 px-1 rounded">front-end and back-end</strong> technologies.
                    </p>
                    <p>
                      I also build independent digital projects, web applications, and mobile solutions for educational centers and local businesses in Cambodia. I enjoy turning ideas into real products and working closely with teams to deliver impactful results.
                    </p>
                  </div>
                </div>

                {/* Structured Columns: Experiencia | Estudios & Enfoque */}
                <div className="pt-4 border-t border-neutral-300/80 grid grid-cols-1 md:grid-cols-12 gap-6">
                  
                  {/* Column 1: Experiencia / Experience (7 cols) */}
                  <div className="md:col-span-7 space-y-3.5">
                    <h3 className="text-base font-bold text-neutral-900 tracking-wide flex items-center space-x-1.5">
                      <span>Experiencia</span>
                      <span className="text-xs font-mono text-neutral-500 font-normal">/ Work</span>
                    </h3>

                    {/* Timeline items matching reference red dates & compact bold text */}
                    <div className="space-y-3 text-xs">
                      {/* 1. IApparel Mobile */}
                      <div className="flex items-start space-x-2.5">
                        <div className="shrink-0 text-right w-16">
                          <span className="font-bold text-[#EA580C] font-mono block">2026</span>
                          <span className="text-[10px] font-bold text-neutral-600 block">PRESENT</span>
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">
                            IApparel International Group
                          </div>
                          <div className="text-neutral-700 font-medium">
                            Mobile Application Developer
                          </div>
                          <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
                            Mobile features for worker operations, scanning, user search & daily workflow efficiency.
                          </p>
                        </div>
                      </div>

                      {/* 2. IApparel Internship */}
                      <div className="flex items-start space-x-2.5">
                        <div className="shrink-0 text-right w-16">
                          <span className="font-bold text-[#EA580C] font-mono block">2026</span>
                          <span className="text-[10px] font-mono text-neutral-500 block">3 MOS</span>
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">
                            IApparel International Group
                          </div>
                          <div className="text-neutral-700 font-medium">
                            Software Developer Internship
                          </div>
                          <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
                            Full-stack web applications, front-end and back-end team collaboration.
                          </p>
                        </div>
                      </div>

                      {/* 3. Mother Care School */}
                      <div className="flex items-start space-x-2.5">
                        <div className="shrink-0 text-right w-16">
                          <span className="font-bold text-[#EA580C] font-mono block">2025</span>
                          <span className="text-[10px] font-mono text-neutral-500 block">FREELANCE</span>
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">
                            Mother Care School
                          </div>
                          <div className="text-neutral-700 font-medium">
                            Software Developer & Scrum Master
                          </div>
                          <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
                            Strapi backend, React frontend, PostgreSQL database, and RESTful API integrations.
                          </p>
                        </div>
                      </div>

                      {/* 4. Freelance & Digital Solutions */}
                      <div className="flex items-start space-x-2.5">
                        <div className="shrink-0 text-right w-16">
                          <span className="font-bold text-[#16A34A] font-mono block">2024-25</span>
                          <span className="text-[10px] font-mono text-neutral-500 block">PROJECTS</span>
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">
                            Digital Solutions & Client Projects
                          </div>
                          <div className="text-neutral-700 font-medium">
                            Full-Stack Web & Mobile Developer
                          </div>
                          <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
                            Custom web apps, responsive websites, and digital systems for schools and local businesses in Cambodia.
                          </p>
                        </div>
                      </div>

                      {/* 5. Phone-Shop */}
                      <div className="flex items-start space-x-2.5">
                        <div className="shrink-0 text-right w-16">
                          <span className="font-bold text-neutral-500 font-mono block">2021-23</span>
                          <span className="text-[10px] font-mono text-neutral-400 block">2 YRS</span>
                        </div>
                        <div>
                          <div className="font-bold text-neutral-900">
                            Phone-Shop
                          </div>
                          <div className="text-neutral-700 font-medium">
                            Repair Specialist
                          </div>
                          <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
                            Hardware diagnostics, screen repairs, and software configuration.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Estudios & Enfoque (5 cols) */}
                  <div className="md:col-span-5 space-y-4">
                    {/* Estudios / Education */}
                    <div>
                      <div className="flex items-center space-x-1.5 mb-1.5">
                        <h3 className="text-base font-bold text-neutral-900 tracking-wide">
                          Estudios
                        </h3>
                        <span className="text-[10px] font-mono text-[#EA580C] font-bold">
                          ENG / KHM
                        </span>
                      </div>
                      <div className="flex items-baseline space-x-2 text-xs">
                        <span className="font-bold text-[#16A34A] font-mono">2024-26</span>
                        <div>
                          <div className="font-bold text-neutral-900 leading-tight">
                            PSE - Pour un Sourire d'Enfant
                          </div>
                          <div className="text-[11px] text-neutral-600 mt-0.5">
                            Web & Mobile App Development (C3 & Diploma)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enfoque / Focus */}
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 tracking-wide mb-1.5">
                        Enfoque
                      </h3>
                      <ul className="space-y-1.5 text-xs text-neutral-800 font-medium">
                        <li className="flex items-center space-x-1.5">
                          <span className="text-[#16A34A] text-[10px]">▸</span>
                          <span>Full-Stack Development</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <span className="text-[#16A34A] text-[10px]">▸</span>
                          <span>Mobile Application Dev</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <span className="text-[#16A34A] text-[10px]">▸</span>
                          <span>System Design & Arch</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <span className="text-[#16A34A] text-[10px]">▸</span>
                          <span>UI/UX Design (Figma)</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <span className="text-[#16A34A] text-[10px]">▸</span>
                          <span>Relational Databases</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


