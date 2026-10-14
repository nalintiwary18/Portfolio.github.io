"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";
import { EXPERIENCE, PROJECTS } from "../portfolio";

function useCarousel(count: number, duration: number) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [interacting, setInteracting] = useState(false);
    const [timerKey, setTimerKey] = useState(0);
    const touchStart = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let timer: number | undefined;
        const sync = () => {
            window.clearInterval(timer);
            if (paused || interacting || motion.matches || document.hidden) return;
            timer = window.setInterval(() => setCurrent((value) => (value + 1) % count), duration);
        };
        sync();
        motion.addEventListener("change", sync);
        document.addEventListener("visibilitychange", sync);
        return () => {
            window.clearInterval(timer);
            motion.removeEventListener("change", sync);
            document.removeEventListener("visibilitychange", sync);
        };
    }, [count, duration, interacting, paused, timerKey]);

    const goTo = (index: number) => {
        setCurrent((index + count) % count);
        setTimerKey((value) => value + 1);
    };

    return {
        current, paused, setPaused, goTo,
        events: {
            onPointerEnter: (event: React.PointerEvent) => { if (event.pointerType === "mouse") setInteracting(true); },
            onPointerLeave: (event: React.PointerEvent<HTMLElement>) => {
                if (!event.currentTarget.contains(document.activeElement)) setInteracting(false);
            },
            onFocus: () => setInteracting(true),
            onBlur: (event: React.FocusEvent<HTMLElement>) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false);
            },
            onKeyDown: (event: React.KeyboardEvent) => {
                if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
                event.preventDefault();
                goTo(current + (event.key === "ArrowRight" ? 1 : -1));
            },
            onTouchStart: (event: React.TouchEvent) => {
                const touch = event.touches[0];
                touchStart.current = { x: touch.clientX, y: touch.clientY };
                setInteracting(true);
            },
            onTouchEnd: (event: React.TouchEvent<HTMLElement>) => {
                const start = touchStart.current;
                const touch = event.changedTouches[0];
                if (start && touch) {
                    const distance = touch.clientX - start.x;
                    if (Math.abs(distance) > 45 && Math.abs(distance) > Math.abs(touch.clientY - start.y) * 1.5) {
                        goTo(current + (distance < 0 ? 1 : -1));
                    }
                }
                touchStart.current = null;
                if (!event.currentTarget.contains(document.activeElement)) setInteracting(false);
            },
            onTouchCancel: () => { touchStart.current = null; setInteracting(false); },
        },
    };
}

type Carousel = ReturnType<typeof useCarousel>;

function Controls({ carousel, labels, kind }: { carousel: Carousel; labels: string[]; kind: string }) {
    return (
        <div className="carousel-controls" aria-label={`${kind} carousel controls`}>
            <div className="carousel-dots">
                {labels.map((label, index) => (
                    <button key={label} type="button" className="carousel-dot" onClick={() => carousel.goTo(index)}
                        aria-label={`Go to ${kind.toLowerCase()} ${index + 1}: ${label}`} aria-pressed={carousel.current === index}
                        aria-controls={`${kind.toLowerCase()}-slide-${index}`}>
                        <span aria-hidden="true" />
                    </button>
                ))}
            </div>
            <button className="carousel-pause" type="button" onClick={() => carousel.setPaused(!carousel.paused)}
                aria-label={`${carousel.paused ? "Play" : "Pause"} ${kind.toLowerCase()} carousel`}>
                {carousel.paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
            </button>
        </div>
    );
}

export function ExperienceCard() {
    const carousel = useCarousel(EXPERIENCE.length, 7000);
    return (
        <section className="experience-card portfolio-card carousel-card" aria-labelledby="experience-title" aria-roledescription="carousel" {...carousel.events}>
            <h2 id="experience-title" className="card-heading">EXPERIENCE</h2>
            <div className="carousel-slides experience-slides">
                {EXPERIENCE.map((experience, index) => (
                    <article key={experience.label} id={`experience-slide-${index}`} className="carousel-slide experience-slide" data-active={carousel.current === index}>
                        <p className="card-tag">{experience.date}</p>
                        <h3>{experience.role}</h3>
                        <p className="experience-company">{experience.company}</p>
                        <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                    </article>
                ))}
            </div>
            <Controls carousel={carousel} labels={EXPERIENCE.map((entry) => entry.label)} kind="Experience" />
        </section>
    );
}

export function ProjectCarousel() {
    const carousel = useCarousel(PROJECTS.length, 5000);
    return (
        <section className="projects-card portfolio-card carousel-card" aria-labelledby="projects-title" aria-roledescription="carousel" {...carousel.events}>
            <h2 id="projects-title" className="card-heading">PROJECTS</h2>
            <div className="carousel-slides project-slides">
                {PROJECTS.map((project, index) => (
                    <article key={project.name} id={`project-slide-${index}`} className="carousel-slide project-slide" data-active={carousel.current === index}>
                        <p className="card-tag">{project.tag}</p>
                        <h3 className={`project-name project-name-${index}`}>
                            <a href={project.href} target="_blank" rel="noopener noreferrer">{project.name}<ArrowUpRight size={18} aria-hidden="true" /></a>
                        </h3>
                        <p className="project-description">{project.desc}</p>
                    </article>
                ))}
            </div>
            <Controls carousel={carousel} labels={PROJECTS.map((project) => project.name)} kind="Project" />
            <div className="project-overview">
                {PROJECTS.map((project, index) => (
                    <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className={`project-tile ${index === 0 ? "project-tile-featured" : ""}`}>
                        <ArrowUpRight className="tile-arrow" size={18} aria-hidden="true" />
                        <span className="tile-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                        <span className="tile-tag">{project.tag}</span>
                        <span className={`project-name project-name-${index}`}>{project.name}</span>
                        {index === 0 && <span className="tile-description">{project.short}</span>}
                    </a>
                ))}
            </div>
        </section>
    );
}
