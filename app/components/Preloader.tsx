"use client";

import React, { useEffect, useRef, useCallback } from "react";

// Color tokens matching the portfolio app
const NAVY = "#001D51";
const CREAM = "#FFE3A5";

// Exact Cubic-Bezier(0.76, 0, 0.24, 1) solver using Newton-Raphson + Binary Subdivision
function createCubicBezier(x1: number, y1: number, x2: number, y2: number) {
  const NEWTON_ITERATIONS = 8;
  const NEWTON_MIN_SLOPE = 0.001;
  const SUBDIVISION_PRECISION = 0.0000001;
  const SUBDIVISION_MAX_ITERATIONS = 10;

  const kSplineTableSize = 11;
  const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
  const sampleValues = new Float32Array(kSplineTableSize);

  function A(aA1: number, aA2: number) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
  function B(aA1: number, aA2: number) { return 3.0 * aA2 - 6.0 * aA1; }
  function C(aA1: number) { return 3.0 * aA1; }

  function calcBezier(aT: number, aA1: number, aA2: number) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }
  function getSlope(aT: number, aA1: number, aA2: number) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, x1, x2);
  }

  function binarySubdivide(aX: number, aA: number, aB: number) {
    let currentX: number, currentT: number, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, x1, x2) - aX;
      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }

  function newtonRaphsonIterate(aX: number, aGuessT: number) {
    for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
      const currentSlope = getSlope(aGuessT, x1, x2);
      if (currentSlope === 0.0) return aGuessT;
      const currentX = calcBezier(aGuessT, x1, x2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function getTForX(aX: number) {
    let intervalStart = 0.0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;

    const initialSlope = getSlope(guessForT, x1, x2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
    }
  }

  return function (x: number) {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    if (x1 === y1 && x2 === y2) return x;
    return calcBezier(getTForX(x), y1, y2);
  };
}

const easeSnellenberg = createCubicBezier(0.76, 0, 0.24, 1);

const WORDS = [
  "Hello",
  "नमस्ते",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

interface PreloaderProps {
  onComplete?: () => void;
  mainViewportId?: string;
}

export default function Preloader({ onComplete, mainViewportId = "main-viewport" }: PreloaderProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const wordWrapRef = useRef<HTMLDivElement>(null);
  const wordTextRef = useRef<HTMLParagraphElement>(null);

  const isRunningRef = useRef(false);
  const timersRef = useRef<number[]>([]);
  const rafRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playTick = useCallback((freq = 520, duration = 0.025) => {
    try {
      if (typeof window === "undefined") return;
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context may require explicit interaction in some browsers; ignore gracefully
    }
  }, []);

  const buildCurvePath = (w: number, h: number, archOffset: number) => {
    const controlX = (w / 2).toFixed(1);
    const controlY = (h + archOffset).toFixed(1);
    return `M0 0 L${w} 0 L${w} ${h} Q${controlX} ${controlY} 0 ${h} L0 0`;
  };

  const updateSVG = useCallback((archOffset: number) => {
    if (!pathRef.current || typeof window === "undefined") return;
    const w = window.innerWidth;
    const h = window.innerHeight;
    pathRef.current.setAttribute("d", buildCurvePath(w, h, archOffset));
  }, []);

  const clearAnimations = useCallback(() => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const startCurtainExit = useCallback(() => {
    if (typeof window === "undefined") return;
    const exitStart = performance.now();
    const slideDuration = 800; // ms
    const curveDelay = 250; // ms
    const curveDuration = 700; // ms
    const curveDepth = 300; // px
    const totalDuration = Math.max(slideDuration, curveDelay + curveDuration);

    const mainEl = document.getElementById(mainViewportId);

    // Fade out greeting word
    if (wordWrapRef.current) {
      wordWrapRef.current.style.transition = "opacity 240ms ease, transform 240ms ease";
      wordWrapRef.current.style.opacity = "0";
      wordWrapRef.current.style.transform = "translateY(-18px)";
    }

    playTick(320, 0.05);

    const animate = (now: number) => {
      const elapsed = now - exitStart;
      const h = window.innerHeight;

      // 1. Container Slide (0 -> 1 over 800ms)
      const rawSlide = Math.min(1, Math.max(0, elapsed / slideDuration));
      const easedSlide = easeSnellenberg(rawSlide);
      const translateY = -easedSlide * h;
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      }

      // 2. SVG Quadratic Bezier Flattening (delayed by 250ms, over 700ms)
      const curveElapsed = Math.max(0, elapsed - curveDelay);
      const rawCurve = Math.min(1, Math.max(0, curveElapsed / curveDuration));
      const easedCurve = easeSnellenberg(rawCurve);
      const currentArch = curveDepth * (1 - easedCurve);
      updateSVG(currentArch);

      // 3. Parallax reveal on underlying page with immersive depth
      if (mainEl) {
        const offset = 100 * (1 - easedSlide);
        const zDepth = -60 * (1 - easedSlide);
        const scale = 0.92 + 0.08 * easedSlide;
        const opacity = 0.25 + 0.75 * easedSlide;
        const blur = (8 * (1 - easedSlide)).toFixed(2);
        const brightness = (0.85 + 0.15 * easedSlide).toFixed(3);

        mainEl.style.transform = `perspective(1200px) translate3d(0, ${offset.toFixed(2)}px, ${zDepth.toFixed(2)}px) scale(${scale.toFixed(4)})`;
        mainEl.style.opacity = opacity.toFixed(3);
        mainEl.style.filter = `blur(${blur}px) brightness(${brightness})`;
      }

      if (elapsed < totalDuration) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Completed
        if (overlayRef.current) {
          overlayRef.current.style.transform = `translate3d(0, -${h}px, 0)`;
          overlayRef.current.style.display = "none";
          overlayRef.current.style.visibility = "hidden";
        }
        updateSVG(0);
        if (mainEl) {
          mainEl.style.transform = "";
          mainEl.style.opacity = "1";
          mainEl.style.filter = "";
          mainEl.style.transformOrigin = "";
        }
        isRunningRef.current = false;
        if (onComplete) onComplete();
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [mainViewportId, onComplete, playTick, updateSVG]);

  const runPreloader = useCallback(() => {
    if (typeof window === "undefined") return;
    clearAnimations();
    isRunningRef.current = true;

    const curveDepth = 300;

    // Reset overlay
    if (overlayRef.current) {
      overlayRef.current.style.display = "flex";
      overlayRef.current.style.visibility = "visible";
      overlayRef.current.style.transform = "translate3d(0, 0px, 0)";
    }
    updateSVG(curveDepth);

    // Initial state for main element with depth
    const mainEl = document.getElementById(mainViewportId);
    if (mainEl) {
      mainEl.style.transition = "none";
      mainEl.style.transformOrigin = "center 25%";
      mainEl.style.transform = "perspective(1200px) translate3d(0, 100px, -60px) scale(0.92)";
      mainEl.style.opacity = "0.25";
      mainEl.style.filter = "blur(8px) brightness(0.85)";
    }

    // Set first word ("Hello")
    if (wordTextRef.current) wordTextRef.current.textContent = WORDS[0];

    if (wordWrapRef.current) {
      wordWrapRef.current.style.transition = "none";
      wordWrapRef.current.style.opacity = "0";
      wordWrapRef.current.style.transform = "translateY(10px)";
      // Reflow
      void wordWrapRef.current.offsetWidth;
      wordWrapRef.current.style.transition = "opacity 420ms cubic-bezier(0.33, 1, 0.68, 1), transform 420ms cubic-bezier(0.33, 1, 0.68, 1)";
      wordWrapRef.current.style.opacity = "1";
      wordWrapRef.current.style.transform = "translateY(0px)";
    }

    playTick(440, 0.035);

    // Words cycling
    const initialHoldMs = 1000;
    const cycleIntervalMs = 150;

    for (let i = 1; i < WORDS.length; i++) {
      const delay = initialHoldMs + (i - 1) * cycleIntervalMs;
      const tid = window.setTimeout(() => {
        if (wordTextRef.current) wordTextRef.current.textContent = WORDS[i];
        playTick(480 + i * 36, 0.02);
      }, delay);
      timersRef.current.push(tid);
    }

    // Curtain exit trigger
    const exitDelay = initialHoldMs + (WORDS.length - 1) * cycleIntervalMs + 220;
    const exitTid = window.setTimeout(() => {
      startCurtainExit();
    }, exitDelay);
    timersRef.current.push(exitTid);
  }, [clearAnimations, mainViewportId, playTick, startCurtainExit, updateSVG]);

  useEffect(() => {
    runPreloader();

    const handleResize = () => {
      if (!isRunningRef.current) {
        updateSVG(0);
      } else {
        updateSVG(300);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "r" || e.key === "R") {
        e.preventDefault();
        runPreloader();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearAnimations();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [clearAnimations, runPreloader, updateSVG]);

  return (
    <div
      ref={overlayRef}
      id="preloader-overlay"
      aria-live="polite"
      aria-label="Loading screen"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        willChange: "transform",
      }}
    >
      {/* Dynamic SVG Curved Curtain (Cream #FFE3A5) */}
      <svg
        id="preloader-svg"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "calc(100% + 650px)",
          pointerEvents: "none",
          zIndex: 1,
          filter: "drop-shadow(0 30px 40px rgba(0, 29, 81, 0.22))",
        }}
      >
        <path
          ref={pathRef}
          id="preloader-path"
          d=""
          fill={CREAM}
          style={{ transition: "fill 0.3s ease" }}
        />
      </svg>

      {/* Centered Greeting Word (Navy #001D51, dot removed) */}
      <div
        ref={wordWrapRef}
        id="preloader-word-wrap"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: NAVY,
          willChange: "opacity, transform",
        }}
      >
        <p
          ref={wordTextRef}
          style={{
            fontSize: "clamp(42px, 6.5vw, 68px)",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            userSelect: "none",
            fontFamily: "'Montserrat', Inter, -apple-system, sans-serif",
            margin: 0,
          }}
        >
          Hello
        </p>
      </div>
    </div>
  );
}
