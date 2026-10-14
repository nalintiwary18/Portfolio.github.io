export const ABOUT = "Software developer building AI products, full-stack apps, and LLM systems. B.Tech in AI & Data Science at USAR GGSIPU (2023–2027), CGPA 8.07/10. Former ACTS USAR Web Team Lead; mentored 20+ peers.";

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
        bullets: [
            "Built Prep War Room for pitch practice and AI study tools.",
            "Cut LLM time ~63%: 317s to 117s.",
        ],
    },
    {
        date: "Jun 2026 – Present",
        role: "Software Developer / Backend Intern",
        company: "NimitAI · New Delhi, India",
        bullets: [
            "Migrated to Azure PostgreSQL; cleaned 20+ GB.",
            "Built CMS and dashboards; fixed 150+ issues.",
        ],
    },
    {
        date: "Feb 2025 – Aug 2025",
        role: "Software Development Intern",
        company: "Lexley.ai (Zangerrr.ai) · Remote",
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
    },
    {
        tag: "Travel · Tech",
        name: "Voyatri.in",
        desc: "Mood-based travel discovery with a vertical feed and shared Decks. Cut image storage costs by 80%+; ~50ms recommendation APIs.",
        short: "Mood-based discovery · 80%+ lower image costs",
        href: "https://voyatri.in/",
    },
    {
        tag: "Dev Tool · AI",
        name: "Code Sage",
        desc: "LangGraph AI codebase audits for vulnerabilities, bugs, and technical debt. AST indexing validates references against real code.",
        short: "AST indexing · Structurally validated code references",
        href: "https://code-sage.in/",
    },
];
