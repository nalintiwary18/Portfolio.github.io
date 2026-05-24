"use client"
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Download, ArrowUpRight, Eye } from "lucide-react";
import React from "react";
import Image from "next/image";

// ─── Color tokens (from Figma) ─────────────────────────────────────────────
const NAVY = "#001D51";
const CREAM = "#FFE3A5";
const ON_BG = "#001d51";

const skills = [
    "LangGraph",
    "RAG Systems",
    "Next.js",
    "AI Agents",
    "LLMs",
    "Supabase",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Prompt engineering",
    "prompt templating",
];

// ─── Social icons (inline SVG) ─────────────────────────────────────────────
function Instagram({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={ON_BG} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill={ON_BG} />
    </svg>
  );
}

function Linkedin({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={ON_BG} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}


function Github({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={ON_BG} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}


// ─── Skill tags for the Experience / Skills panel ──────────────────────────
const SKILLS = [
  "Python", "TypeScript", "Next.js", "React",
  "LangGraph", "Supabase", "FastAPI", "PostgreSQL",
  "MongoDB", "Docker", "Git", "Tailwind",
];

// ─── Project data ──────────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: "Notovo.in",
    desc: "AI-Powered EdTech platform for automated notes with LangGraph multi-agent pipeline.",
    tags: ["Next.js", "Supabase", "LangGraph"],
    num: "01",
  },
  {
    title: "Code Sage",
    desc: "AI codebase auditor with AST-driven repository indexing and structural output validation.",
    tags: ["Python", "LangGraph", "AST"],
    num: "02",
  },
  {
    title: "Voyatri.in",
    desc: "Mood-based travel discovery platform with TikTok-style vertical feed and recommendations.",
    tags: ["Next.js", "Framer Motion"],
    num: "03",
  },
];

// ─── Page component ────────────────────────────────────────────────────────
export default function Page() {
  return (
      <main className="min-h-dvh md:h-dvh w-full overflow-y-auto md:overflow-hidden" style={{ backgroundColor: CREAM ,margin: "0px"}}>
          <div className="flex flex-col md:flex-row h-auto md:h-full w-full mx-auto gap-6 px-6 py-6 md:py-[clamp(20px,3.5vh,40px)]">
              {/* Social rail */}
              <aside className="flex flex-row md:flex-col items-center justify-center md:justify-start gap-8 md:gap-6 pt-0 md:pt-4 pb-2 md:pb-0 w-full md:w-auto" style={{ color: NAVY }}>
                  <a href="https://www.linkedin.com/in/kumarnalin/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform"><Linkedin size={30}  /></a>
                  <a href="mailto:nalinkt.23@gmail.com" aria-label="Email" className="hover:scale-110 transition-transform"><Mail size={30} /></a>
                  <a href="https://github.com/nalintiwary18" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform"><Github size={30}/></a>
                  <a href="https://www.instagram.com/__n_k_t___" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform"><Instagram size={30}  /></a>
              </aside>

              {/* Grid */}
              <div className="grid flex-1 h-auto md:h-full min-h-0 grid-cols-1 gap-6 md:grid-cols-6 md:[grid-template-rows:0.22fr_0.42fr_0.36fr]">
                  {/* Left tall card */}
                  <section
                      className="relative flex flex-col justify-between overflow-hidden rounded-[28px] p-6 md:p-7 md:col-span-2 md:row-span-3"
                      style={{ backgroundColor: NAVY }}
                  >
                      <div className="flex items-center justify-end gap-2 text-xs font-semibold" style={{ color: CREAM }}>
                          <MapPin className="h-3.5 w-3.5" />
                          <span>New Delhi, India</span>
                      </div>

                      <div className="flex flex-1 items-center justify-end py-6 ">
                          <Image src="/img.png" alt="my photo" height={240} width={240} className="rounded-full"/>
                      </div>

                      <div>
                          <p className="text-orange-200 text-5xl font-normal font-['Montserrat'] tracking-[4.80px]" style={{ color: CREAM }}>
                              I&apos;m
                          </p>
                          <h1
                              className="mt-2 text-orange-200 text-[clamp(40px,7vw,88px)] font-medium font-['Playfair_Display'] italic leading-[0.95]"
                              style={{ color: CREAM }}
                          >
                              Kumar<br />Nalin
                          </h1>
                      </div>
                  </section>

                  {/* Portfolio title */}
                  <div className="md:col-span-4 min-h-0 overflow-hidden">
                      <h2
                          className="text-sky-950 text-[clamp(52px,18vw,158px)] font-semibold font-['Playfair_Display'] italic leading-[0.9] text-left"
                          style={{ color: NAVY }}
                      >
                          Portfolio
                      </h2>
                  </div>

                  {/* Projects + Experience row */}
                  <section className="md:col-span-2 h-[320px] md:h-full md:min-h-0 md:row-span-1 overflow-hidden">
                      <ProjectCarousel />
                  </section>


                  <section
                      className="rounded-[28px] p-6 md:p-7 md:col-span-2 h-[320px] md:h-full md:min-h-0 md:row-span-1 overflow-hidden flex flex-col justify-between"
                      style={{ backgroundColor: NAVY }}
                  >
                      <h3 className="text-[#ffe3a5] text-[24px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
                          EXPERIENCE
                      </h3>
                      <div className="flex flex-col gap-[6px] my-auto">
                          <span className="inline-block text-[9px] font-bold tracking-[0.2em] uppercase text-[#001D51] bg-[#FFE3A5] px-[10px] py-1 rounded-[20px] w-fit">
                              Feb 2025 – Aug 2025
                          </span>
                          <div className="text-[20px] leading-tight text-[#FFE3A5] font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                              Software Development Intern
                          </div>
                          <div className="text-[12.5px] font-medium text-[#FFE3A5]/80">
                              Lexly.ai (Zangerrr.ai) · Remote
                          </div>
                          <ul className="text-[11.5px] font-light text-[#FFE3A5]/65 leading-[1.5] mt-1 list-disc pl-4 space-y-1">
                              <li>Developed and iterated AI-integrated frontend prototypes using Next.js, React, Tailwind, and Gemini API.</li>
                              <li>Collaborated with backend engineers to resolve 30+ issues across FastAPI, MongoDB, and PostgreSQL.</li>
                          </ul>
                      </div>
                  </section>

                  {/* About me */}
                  <section
                      className="rounded-[28px] p-6 md:p-7 md:col-span-4 h-auto md:h-full md:min-h-0 overflow-hidden flex flex-col md:flex-row items-stretch md:items-center gap-6"
                      style={{ backgroundColor: NAVY }}
                  >
                      <div className="flex-1">
                          <h3 className="text-orange-200 text-4xl font-normal font-['Montserrat']" style={{ color: CREAM }}>
                              ABOUT ME
                          </h3>
                          <p
                              className="mt-3 text-orange-200 text-xs font-normal font-['Montserrat'] max-w-[450px]"
                              style={{ color: CREAM }}
                          >
                              B.Tech student in Artificial Intelligence and Data Science at USAR GGSIPU. Building products at the intersection of web engineering and multi-agent AI pipelines.
                          </p>
                          <a
                              href="/newres.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-5 inline-flex items-center gap-2 rounded-4xl px-3 py-2 text-sky-950 text-base font-semibold font-['Montserrat'] hover:scale-105 transition-transform w-fit"
                              style={{ backgroundColor: CREAM, color: NAVY }}
                          >
                              <Eye className="h-4 w-4" strokeWidth={2.5} />
                              RESUME
                          </a>
                      </div>

                      {/* decorative bars */}
                      <div className="flex flex-wrap justify-start md:justify-center gap-2 md:gap-3 max-w-full md:max-w-[420px] md:pr-2 overflow-hidden">
                          {skills.map((skill, i) => (
                              <span
                                  key={i}
                                  className="flex items-center justify-center h-8 px-4 rounded-full text-xs md:text-sm font-medium whitespace-nowrap"
                                  style={{
                                      backgroundColor: CREAM,
                                      color: "#220300",
                                  }}
                              >
                                  {skill}
                              </span>
                          ))}
                      </div>
                  </section>
              </div>
          </div>
      </main>
  );
}

type Project = { tag: string; name: string; desc: string; short?: string };

const projects: Project[] = [
    { tag: "EdTech · AI", name: "Notovo.in", desc: "AI-Powered EdTech platform for automated notes with LangGraph multi-agent pipeline.", short: "LangGraph multi-agent notes pipeline" },
    { tag: "Travel · Tech", name: "Voyatri.in", desc: "Smart travel companion that builds personalised itineraries in seconds.", short: "Personalised AI itineraries" },
    { tag: "Dev Tool", name: "Code Sage", desc: "Intelligent code review assistant that understands context, not just syntax.", short: "Context-aware code review" },
];

const DURATION = 2800;

function ProjectCarousel() {
    const [cur, setCur] = useState(0);
    const [hover, setHover] = useState(false);
    const [barKey, setBarKey] = useState(0);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        if (hover) {
            if (timerRef.current) window.clearInterval(timerRef.current);
            return;
        }
        setBarKey((k) => k + 1);
        timerRef.current = window.setInterval(() => {
            setCur((c) => (c + 1) % projects.length);
            setBarKey((k) => k + 1);
        }, DURATION);
        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
        };
    }, [hover]);

    const goTo = (n: number) => {
        setCur(n);
        setBarKey((k) => k + 1);
    };

    const p = projects[cur];

    return (
        <div
            className="relative w-full h-full bg-[#001D51] rounded-[30px] overflow-hidden cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFE3A5]/40 overflow-hidden z-10">
                <div
                    key={barKey}
                    className="h-full bg-[#FFE3A5]"
                    style={{
                        width: hover ? "0%" : "100%",
                        transitionProperty: "width",
                        transitionDuration: hover ? "0ms" : `${DURATION}ms`,
                        transitionTimingFunction: "linear",
                    }}
                />
            </div>

            <div
                className="absolute inset-0 px-7 pt-6 pb-7 flex flex-col justify-between z-[2] transition-opacity duration-[350ms]"
                style={{ opacity: hover ? 0 : 1, pointerEvents: hover ? "none" : "auto" }}
            >
                <div className="text-[#ffe3a5] text-[24px]" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}>
                    PROJECTS
                </div>
                <div className="flex flex-col gap-[10px]">
          <span className="inline-block text-[9px] font-bold tracking-[0.2em] uppercase text-[#001D51] bg-[#FFE3A5] px-[10px] py-1 rounded-[20px] w-fit">
            {p.tag}
          </span>
                    <div className="text-[34px] leading-none text-[#FFE3A5]" style={{ fontFamily:
                         p.name === "Notovo.in"
                    ? "'Nothing You Could Do', cursive"
                    : p.name === "Voyatri.in"
                    ? "'Pacifico', cursive"
                    : "'Montserrat', sans-serif",
                    fontWeight: p.name === "Code Sage" ? 700 : 600,}}>
                        {p.name}
                    </div>
                    <div className="text-[12px] font-light text-[#FFE3A5]/65 leading-[1.6]">{p.desc}</div>
                </div>
                <div className="flex justify-center gap-2">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); goTo(i); }}
                            aria-label={`Go to project ${i + 1}`}
                            className="h-[7px] rounded-full bg-[#FFE3A5] transition-all duration-300"
                            style={{
                                width: i === cur ? 22 : 7,
                                borderRadius: i === cur ? 4 : 999,
                                opacity: i === cur ? 1 : 0.22,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div
                className="absolute inset-[10px] grid grid-cols-2 grid-rows-2 gap-2 z-[5] transition-opacity duration-[380ms]"
                style={{ opacity: hover ? 1 : 0, pointerEvents: hover ? "auto" : "none" }}
            >
                <Tile big index="01" tag={projects[0].tag} name={projects[0].name} desc={projects[0].short} />
                <Tile index="02" tag={projects[1].tag} name={projects[1].name} />
                <Tile index="03" tag={projects[2].tag} name={projects[2].name} />
            </div>
        </div>
    );
}

const PROJECT_LINKS: Record<string, string> = {
    "Notovo.in": "https://notovo.in",
    "Code Sage": "https://code-sage.dev",
    "Voyatri.in": "https://voyatri.in",
};

function Tile({ big, index, tag, name, desc }: { big?: boolean; index: string; tag: string; name: string; desc?: string }) {
    const url = PROJECT_LINKS[name] || "#";
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.stopPropagation(); }}
            className={`relative group overflow-hidden rounded-[18px] bg-[#FFE3A5] hover:bg-[#f5d98a] transition-colors flex flex-col justify-end px-4 py-[14px] cursor-pointer ${big ? "col-span-2" : ""}`}
        >
            <div className="absolute top-3 right-3 text-[#001D51]/30 group-hover:text-[#001D51]/70 transition-colors pointer-events-none z-10">
                <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
            <div
                className="absolute -top-1 right-2 font-bold text-[#001D51]/10 leading-none select-none pointer-events-none"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: big ? 78 : 64, letterSpacing: "-2px" }}
            >
                {index}
            </div>
            <div className="text-[8px] font-bold tracking-[0.18em] uppercase text-[#001D51]/40 mb-1">{tag}</div>
            <div className="text-[#001D51] leading-none"  style={{ fontFamily:
                    name === "Notovo.in"
                        ? "'Nothing You Could Do', cursive"
                        : name === "Voyatri.in"
                            ? "'Pacifico', cursive"
                            : "'Montserrat', sans-serif",
                fontWeight: name === "Code Sage" ? 700 : 600, fontSize: big ? 34 : 26 }}>
                {name}
            </div>
            {desc && <div className="text-[10px] font-light text-[#001D51]/55 leading-[1.5] mt-[5px]">{desc}</div>}
        </a>
    );
}