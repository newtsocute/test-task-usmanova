"use client";

import { useEffect, useState } from "react";

const LETTERS = "USMANOVA".split("");
const LETTER_DELAY_MS = 90;
const HOLD_MS = 700; // TEMP: enlarged for manual QA, will revert
const FADE_MS = 500;
const LAST_LETTER_DONE_MS = (LETTERS.length - 1) * LETTER_DELAY_MS + 500;
const TOTAL_MS = LAST_LETTER_DONE_MS + HOLD_MS + FADE_MS;
const FADE_START_PERCENT = ((LAST_LETTER_DONE_MS + HOLD_MS) / TOTAL_MS) * 100;

export function SplashScreen() {
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    (window as unknown as { __splashEvents: unknown[] }).__splashEvents = [
      { t: 0, msg: "mount", totalMs: TOTAL_MS },
    ];
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (removed) return null;

  return (
    <div
      aria-hidden="true"
      onAnimationEnd={(event) => {
        const w = window as unknown as { __splashEvents: unknown[] };
        w.__splashEvents = w.__splashEvents || [];
        w.__splashEvents.push({
          t: Math.round(performance.now()),
          msg: "animationend",
          targetIsSelf: event.target === event.currentTarget,
          targetTag: (event.target as HTMLElement).tagName,
          animationName: event.animationName,
        });
        if (event.target !== event.currentTarget) return;
        document.body.style.overflow = "";
        setRemoved(true);
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      style={{ animation: `splash-overlay-out ${TOTAL_MS}ms ease-out forwards` }}
    >
      <div className="flex">
        {LETTERS.map((letter, index) => (
          <span
            key={`${letter}-${index}`}
            className="inline-block animate-[splash-letter-in_0.5s_ease-out_both] text-[13vw] leading-none font-semibold tracking-wide text-[#f66297] uppercase sm:text-[64px]"
            style={{ animationDelay: `${index * LETTER_DELAY_MS}ms` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes splash-letter-in {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes splash-overlay-out {
          0% {
            opacity: 1;
            pointer-events: auto;
          }
          ${FADE_START_PERCENT}% {
            opacity: 1;
            pointer-events: auto;
          }
          100% {
            opacity: 0;
            pointer-events: none;
          }
        }
      `}</style>
    </div>
  );
}
