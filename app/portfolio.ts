export const ABOUT = "Software developer building AI products, full-stack apps, and LLM systems. B.Tech in AI & Data Science at USAR GGSIPU (2023–2027), CGPA 8.07/10. Former ACTS USAR Web Team Lead; mentored 20+ peers.";

export const SITE_URL = "https://kumarnalin.me";

export const PROFILE = {
    name: "Kumar Nalin",
    headline: "Software Developer | AI & Full-Stack Engineering | LLM Systems",
    location: "New Delhi, India",
    email: "nalinkt.23@gmail.com",
    url: SITE_URL,
    resume: `${SITE_URL}/newres.pdf`,
    linkedin: "https://www.linkedin.com/in/kumarnalin/",
    github: "https://github.com/nalintiwary18",
    instagram: "https://www.instagram.com/__n_k_t___",
    summary: ABOUT,
};

export const SKILL_GROUPS = {
    Languages: ["Python", "JavaScript", "TypeScript", "SQL"],
    "AI / LLM": ["NLP", "LangChain", "LangGraph", "Google ADK", "Gemini API"],
    "Backend / Data": ["Node.js", "FastAPI", "REST APIs", "PostgreSQL", "MongoDB", "Redis", "Supabase", "Azure PostgreSQL"],
    "Frontend / DevOps": ["React", "Next.js", "Tailwind CSS", "Docker", "CI/CD", "Git"],
};

export const EDUCATION = {
    institution: "University School of Automation and Robotics (USAR), Guru Gobind Indraprastha University",
    degree: "B.Tech in Artificial Intelligence and Data Science",
    location: PROFILE.location,
    startDate: "2023-09",
    endDate: "2027-08",
    dates: "September 2023 – August 2027",
    cgpa: "8.07/10",
};

export const WORK = [
    {
        company: "NimitAI",
        url: "https://nimitai.com/",
        role: "Software Developer Intern / Backend Intern",
        location: PROFILE.location,
        startDate: "2026-06",
        endDate: null,
        dates: "June 2026 – Present",
        achievements: [
            "Built Prep War Room from scratch, owning frontend and backend workflows for card-pitch TTS analysis, mind maps, podcasts, cheat sheets, pitch decks, and pitch-deck analysis.",
            "Optimized the MVP LLM generation and research pipeline through model changes, parallel execution, pipeline improvements, and prompt optimization; reduced processing time from 317s to 117s (~63%).",
            "Migrated production PostgreSQL data from Supabase to Azure PostgreSQL and cleaned 20+ GB of critical production data, reducing the database footprint to ~16 GB.",
            "Redesigned the dashboard and multi-page landing site, built its CMS, and resolved 50+ GitHub issues plus 100+ internally tracked issues.",
        ],
    },
    {
        company: "Lexley.ai (Zangerrr.ai)",
        role: "Software Development Intern",
        location: "Remote",
        startDate: "2025-02",
        endDate: "2025-08",
        dates: "February 2025 – August 2025",
        achievements: [
            "Developed AI-integrated frontend prototypes using Next.js, React, Tailwind CSS, and Gemini API for feature experimentation and conversational workflows.",
            "Collaborated with backend engineers to resolve 30+ issues across FastAPI, MongoDB, and PostgreSQL, improving application stability and reliability.",
        ],
    },
];

export const LEADERSHIP = {
    role: "Web Team Lead",
    organization: "ACTS USAR",
    dates: "November 2024 – January 2026",
    startDate: "2024-11",
    endDate: "2026-01",
    achievements: ["Mentored 20+ peers in web development and DevOps through workshops and hands-on sessions; led technical operations for a college tech fest with 300+ participants."],
};

export const SKILLS = [
    "Python",
    "TypeScript",
    "Next.js",
    "LangGraph",
    "Google ADK",
    "Gemini API",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Supabase",
    "Azure PostgreSQL",
    "Docker",
];

// Each entry fits the existing experience card. NimitAI's work spans two entries.
export const EXPERIENCE = [
    {
        date: "Jun 2026 – Present",
        role: "Software Developer / Backend Intern",
        company: "NimitAI · New Delhi, India",
        label: "NimitAI · AI products",
        bullets: [
            "Built Prep War Room for pitch practice and AI study tools.",
            "Cut LLM time ~63%: 317s to 117s.",
        ],
    },
    {
        date: "Jun 2026 – Present",
        role: "Software Developer / Backend Intern",
        company: "NimitAI · New Delhi, India",
        label: "NimitAI · Backend & platform",
        bullets: [
            "Migrated to Azure PostgreSQL; cleaned 20+ GB.",
            "Built CMS and dashboards; fixed 150+ issues.",
        ],
    },
    {
        date: "Feb 2025 – Aug 2025",
        role: "Software Development Intern",
        company: "Lexley.ai (Zangerrr.ai) · Remote",
        label: "Lexley.ai · Internship",
        bullets: [
            "Built AI frontend prototypes with Next.js and Gemini API.",
            "Fixed 30+ FastAPI, MongoDB, and PostgreSQL issues.",
        ],
    },
];

export const PROJECTS = [
    {
        tag: "EdTech · AI",
        name: "Notovo.in",
        desc: "LangGraph multi-agent notes platform: 190+ beta notes, #1 Google ranking for Notovo, 1.1s FCP, and 48ms INP.",
        short: "190+ beta notes · #1 Google ranking for Notovo",
        href: "https://notovo.in/",
        technologies: ["Next.js", "Supabase", "LangGraph", "TypeScript", "Vercel", "Google OAuth"],
        achievements: [
            "Built and deployed an EdTech platform for automated note generation and contextual document understanding; reached #1 Google Search ranking for Notovo and generated 190+ notes during beta testing.",
            "Developed a LangGraph multi-agent workflow with streaming responses; optimized performance to 1.1s FCP and 48ms INP using Supabase.",
        ],
    },
    {
        tag: "Travel · Tech",
        name: "Voyatri.in",
        desc: "Mood-based travel discovery with a vertical feed and shared Decks. Cut image storage costs by 80%+; ~50ms recommendation APIs.",
        short: "Mood-based discovery · 80%+ lower image costs",
        href: "https://voyatri.in/",
        technologies: ["Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS", "Framer Motion", "Vercel"],
        achievements: [
            "Built a full-stack travel discovery platform with personalized mood-based recommendations, a TikTok-style vertical feed, and curated Decks for sharing itineraries.",
            "Reduced image storage costs by 80%+ through browser-side compression and optimized tag-based recommendation APIs to ~50ms latency.",
        ],
    },
    {
        tag: "Dev Tool · AI",
        name: "Code Sage",
        desc: "LangGraph AI codebase audits for vulnerabilities, bugs, and technical debt. AST indexing validates references against real code.",
        short: "AST indexing · Structurally validated code references",
        href: "https://code-sage.in/",
        technologies: ["Python", "LangGraph", "AST Parsing", "Pydantic", "Gemini API"],
        achievements: [
            "Built an AI static analysis system for vulnerability, bug, and technical-debt detection across large repositories using LangGraph multi-agent workflows and AST-driven indexing.",
            "Eliminated hallucinated code references through structural validation against real file coordinates with token-efficient deterministic chunk retrieval.",
        ],
    },
];

export const PORTFOLIO_DATA = {
    profile: PROFILE,
    experience: WORK,
    education: EDUCATION,
    projects: PROJECTS,
    skills: SKILL_GROUPS,
    leadership: LEADERSHIP,
};

export const STRUCTURED_DATA = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfilePage",
            "@id": `${SITE_URL}/#profile-page`,
            url: `${SITE_URL}/`,
            name: `${PROFILE.name} | Portfolio`,
            mainEntity: { "@id": `${SITE_URL}/#person` },
        },
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: PROFILE.name,
            url: `${SITE_URL}/`,
            image: `${SITE_URL}/img.png`,
            jobTitle: "Software Developer",
            description: PROFILE.summary,
            email: PROFILE.email,
            address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
            sameAs: [PROFILE.linkedin, PROFILE.github, PROFILE.instagram],
            knowsAbout: Object.values(SKILL_GROUPS).flat(),
            subjectOf: PROJECTS.map((project) => ({ "@id": project.href })),
        },
        ...PROJECTS.map((project) => ({
            "@type": "SoftwareSourceCode",
            "@id": project.href,
            name: project.name,
            url: project.href,
            description: project.desc,
            creator: { "@id": `${SITE_URL}/#person` },
            keywords: project.technologies.join(", "),
        })),
    ],
};

export function portfolioText() {
    return [
        `# ${PROFILE.name}`,
        PROFILE.headline,
        `Location: ${PROFILE.location}`,
        `Email: ${PROFILE.email}`,
        `Website: ${SITE_URL}/`,
        `Full profile (HTML): ${SITE_URL}/profile/`,
        `Structured data (JSON): ${SITE_URL}/portfolio.json`,
        `Resume (PDF): ${PROFILE.resume}`,
        `LinkedIn: ${PROFILE.linkedin}`,
        `GitHub: ${PROFILE.github}`,
        "", "## Summary", PROFILE.summary,
        "", "## Experience",
        ...WORK.flatMap((work) => [
            "", `### ${work.role} | ${work.company}`,
            `${work.dates} | ${work.location}`,
            ...work.achievements.map((achievement) => `- ${achievement}`),
        ]),
        "", "## Projects",
        ...PROJECTS.flatMap((project) => [
            "", `### ${project.name}`, project.href,
            ...project.achievements.map((achievement) => `- ${achievement}`),
            `Tech: ${project.technologies.join(", ")}`,
        ]),
        "", "## Education", EDUCATION.institution, EDUCATION.degree,
        `${EDUCATION.dates} | CGPA: ${EDUCATION.cgpa}`,
        "", "## Technical skills",
        ...Object.entries(SKILL_GROUPS).map(([group, items]) => `${group}: ${items.join(", ")}`),
        "", "## Leadership", `${LEADERSHIP.role} | ${LEADERSHIP.organization}`,
        LEADERSHIP.dates, ...LEADERSHIP.achievements.map((item) => `- ${item}`), "",
    ].join("\n");
}
