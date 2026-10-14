import type { Metadata } from "next";
import Link from "next/link";
import { EDUCATION, LEADERSHIP, PROFILE, PROJECTS, SKILL_GROUPS, STRUCTURED_DATA, WORK } from "../portfolio";

export const metadata: Metadata = {
    title: "Kumar Nalin | Full Profile, Experience & Projects",
    description: "Kumar Nalin's complete professional profile: experience at NimitAI and Lexley.ai, projects, technical skills, education, and leadership.",
    alternates: { canonical: "/profile/", types: { "text/plain": "/llms.txt", "application/json": "/portfolio.json" } },
    openGraph: { url: "/profile/", title: "Kumar Nalin | Full Profile", description: PROFILE.summary },
};

export default function FullProfile() {
    const structuredData = {
        ...STRUCTURED_DATA,
        "@graph": STRUCTURED_DATA["@graph"].map((entity) => entity["@type"] === "ProfilePage"
            ? { ...entity, "@id": `${PROFILE.url}/profile/#profile-page`, url: `${PROFILE.url}/profile/` }
            : entity),
    };
    return (
        <main className="full-profile">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
            <header>
                <Link href="/">Back to portfolio</Link>
                <h1>{PROFILE.name}</h1>
                <p>{PROFILE.headline}</p>
                <p>{PROFILE.location} · <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p>
                <nav aria-label="Profile resources">
                    <a href={PROFILE.linkedin}>LinkedIn</a>
                    <a href={PROFILE.github}>GitHub</a>
                    <a href="/newres.pdf">Resume PDF</a>
                    <a href="/llms.txt">Plain text</a>
                    <a href="/portfolio.json">JSON</a>
                </nav>
                <p>{PROFILE.summary}</p>
            </header>
            <section aria-labelledby="work-heading">
                <h2 id="work-heading">Experience</h2>
                {WORK.map((work) => (
                    <article key={work.company}>
                        <h3>{work.role} | {work.company}</h3>
                        <p><time dateTime={work.startDate}>{work.dates.split(" – ")[0]}</time> – {work.endDate ? <time dateTime={work.endDate}>{work.dates.split(" – ")[1]}</time> : "Present"} · {work.location}</p>
                        {work.url && <p><a href={work.url}>{work.company} website</a></p>}
                        <ul>{work.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
                    </article>
                ))}
            </section>
            <section aria-labelledby="projects-heading">
                <h2 id="projects-heading">Projects</h2>
                {PROJECTS.map((project) => (
                    <article key={project.name}>
                        <h3><a href={project.href}>{project.name}</a></h3>
                        <ul>{project.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
                        <p>Technologies: {project.technologies.join(", ")}</p>
                    </article>
                ))}
            </section>
            <section aria-labelledby="education-heading">
                <h2 id="education-heading">Education</h2>
                <h3>{EDUCATION.institution}</h3>
                <p>{EDUCATION.degree}</p>
                <p>{EDUCATION.dates} · {EDUCATION.location} · CGPA: {EDUCATION.cgpa}</p>
            </section>
            <section aria-labelledby="skills-heading">
                <h2 id="skills-heading">Technical skills</h2>
                {Object.entries(SKILL_GROUPS).map(([group, skills]) => <p key={group}><strong>{group}:</strong> {skills.join(", ")}</p>)}
            </section>
            <section aria-labelledby="leadership-heading">
                <h2 id="leadership-heading">Leadership</h2>
                <h3>{LEADERSHIP.role} | {LEADERSHIP.organization}</h3>
                <p>{LEADERSHIP.dates}</p>
                <ul>{LEADERSHIP.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
            </section>
        </main>
    );
}
