import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Eye } from "lucide-react";
import { Github, Instagram, Linkedin } from "./components/SocialIcons";
import Preloader from "./components/Preloader";
import { ExperienceCard, ProjectCarousel } from "./components/PortfolioCarousels";
import { ABOUT, PROFILE, SKILLS, STRUCTURED_DATA } from "./portfolio";

export default function Page() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c") }} />
            <Preloader mainViewportId="main-viewport" />
            <a className="skip-link" href="#about">Skip to portfolio content</a>
            <main id="main-viewport" className="portfolio-shell">
                <div className="portfolio-frame">
                    <nav className="social-rail" aria-label="Contact and social profiles">
                        <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={30} /></a>
                        <a href={`mailto:${PROFILE.email}`} aria-label={`Email ${PROFILE.email}`}><Mail size={30} /></a>
                        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={30} /></a>
                        <a href={PROFILE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={30} /></a>
                    </nav>
                    <div className="portfolio-grid">
                        <section className="profile-card portfolio-card" aria-labelledby="name">
                            <p className="profile-location"><MapPin size={14} aria-hidden="true" />{PROFILE.location}</p>
                            <div className="profile-photo">
                                <Image src="/img.png" alt="Portrait of Kumar Nalin" width={608} height={608} sizes="(min-width: 1200px) 240px, (min-width: 600px) 220px, 240px" preload />
                            </div>
                            <div className="profile-introduction">
                                <p>I&apos;m</p>
                                <h1 id="name">Kumar<br />Nalin</h1>
                            </div>
                        </section>
                        <div className="portfolio-title"><h2>Portfolio</h2></div>
                        <ProjectCarousel />
                        <ExperienceCard />
                        <section id="about" className="about-card portfolio-card" aria-labelledby="about-title">
                            <div className="about-copy">
                                <h2 id="about-title" className="about-heading">ABOUT ME</h2>
                                <p>{ABOUT}</p>
                                <div className="about-links">
                                    <a className="resume-link" href="/newres.pdf" target="_blank" rel="noopener noreferrer"><Eye size={17} aria-hidden="true" />RESUME</a>
                                    <Link href="/profile/" className="profile-link">Full profile</Link>
                                </div>
                            </div>
                            <ul className="skill-tags" aria-label="Selected technical skills">
                                {SKILLS.map((skill) => <li key={skill}>{skill}</li>)}
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
            <noscript>
                <style>{`#preloader-overlay,.carousel-controls,.project-overview{display:none!important}.carousel-slide{visibility:visible!important;grid-area:auto!important}.carousel-slides{gap:2rem}.portfolio-shell{opacity:1!important;transform:none!important;filter:none!important}`}</style>
            </noscript>
        </>
    );
}
