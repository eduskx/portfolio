"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Sichtbarkeits-Steuerung per IntersectionObserver.
 * - once:      einmal enthüllen und sichtbar bleiben (Standard)
 * - !once:     beim Rein-/Rausscrollen ein- und ausblenden
 * - immediate: sofort beim Laden animieren, unabhängig vom Viewport
 * Ein Fallback-Timeout stellt sicher, dass Inhalt nie dauerhaft verborgen bleibt.
 */
function useReveal<T extends HTMLElement>(opts?: {
  once?: boolean;
  immediate?: boolean;
}) {
  const once = opts?.once ?? true;
  const immediate = opts?.immediate ?? false;
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (immediate) {
      const r = requestAnimationFrame(() =>
        requestAnimationFrame(() => setShown(true)),
      );
      return () => cancelAnimationFrame(r);
    }

    let fired = false;
    let io: IntersectionObserver | null = null;

    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            fired = true;
            if (once) {
              if (entry.isIntersecting) {
                setShown(true);
                if (io) io.disconnect();
                clearTimeout(fallback);
              }
            } else {
              setShown(entry.isIntersecting);
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
      );
      io.observe(el);
    }

    const fallback = setTimeout(() => {
      if (!fired) setShown(true);
    }, 3000);

    return () => {
      clearTimeout(fallback);
      if (io) io.disconnect();
    };
  }, [once, immediate]);

  return { ref, shown };
}

/** Große Zeile, die hinter einer Maske hochfährt. */
export function MaskLine({
  children,
  delay = 0,
  className,
  immediate = false,
  reversible = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
  reversible?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLSpanElement>({
    immediate,
    once: !reversible,
  });
  return (
    <span ref={ref} className={`reveal-mask ${className ?? ""}`}>
      <span
        className="reveal"
        data-shown={shown}
        style={{ transitionDelay: `${delay}s` }}
      >
        {children}
      </span>
    </span>
  );
}

/** Kleiner Block, der beim Rein-/Rausscrollen ein- und ausblendet. */
export function FadeUp({
  children,
  delay = 0,
  className,
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>({ once: false, immediate });
  return (
    <div
      ref={ref}
      className={`fade ${className ?? ""}`}
      data-shown={shown}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
