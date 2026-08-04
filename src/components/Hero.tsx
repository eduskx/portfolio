"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { FadeUp } from "@/components/motion";
import {
  heroSupport,
  backendStatement,
  interfaceStatement,
  interfaceStatementShort,
} from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const kiRef = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();

  // Wenn Häppchen 2 (KI) in den Namen läuft (v.a. Tablet), wird der Name so
  // weit verkleinert, dass kein Overflow mehr entsteht. Auf Mobile ist die KI
  // ausgeblendet, auf großen Screens ist Platz — dort bleibt der Name voll.
  useEffect(() => {
    const nameEl = nameRef.current;
    if (!nameEl) return;

    const fit = () => {
      nameEl.style.setProperty("--name-scale", "1");
      const kiEl = kiRef.current;
      if (!kiEl || kiEl.offsetParent === null) return;
      const n = nameEl.getBoundingClientRect();
      const k = kiEl.getBoundingClientRect();
      const gap = 24;
      const verticalOverlap = !(k.bottom < n.top || n.bottom < k.top);
      if (!verticalOverlap) return;
      const available = n.right - (k.right + gap);
      if (available >= n.width) return;
      const scale = Math.max(0.5, available / n.width);
      nameEl.style.setProperty("--name-scale", scale.toFixed(3));
    };

    fit();
    // Erneut messen, sobald Intro-Animationen und Fonts sicher gesetzt sind.
    const raf = requestAnimationFrame(fit);
    const timer = window.setTimeout(fit, 1000);
    window.addEventListener("resize", fit);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      window.removeEventListener("resize", fit);
    };
  }, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yRole = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const oRole = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yName = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const sPhoto = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const roleStyle = reduce ? undefined : { y: yRole, opacity: oRole };
  const nameStyle = reduce ? undefined : { y: yName };
  const photoStyle = reduce ? undefined : { y: yPhoto };

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh flex-col px-6 pb-6 pt-6 md:px-10 md:pb-8"
    >
      {/* Kopfzeile: Meta + Navigation */}
      <FadeUp immediate>
        <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          <span className="text-ink">Eduard Lisovskij</span>
          <span className="hidden sm:inline">Frontend Developer</span>
          <span className="hidden md:inline">Based in Germany</span>
          <nav className="flex gap-5">
            <a href="#work" className="transition-opacity hover:opacity-60">
              Arbeit
            </a>
            <a href="#about" className="transition-opacity hover:opacity-60">
              Über mich
            </a>
            <a href="#contact" className="transition-opacity hover:opacity-60">
              Kontakt
            </a>
          </nav>
        </div>
      </FadeUp>

      {/* Rolle groß oben links — fliegt von links ein */}
      <motion.h1
        style={roleStyle}
        className="mt-6 font-black uppercase leading-[0.8] tracking-[-0.04em] text-[clamp(2.8rem,13vw,10rem)] md:mt-8"
      >
        <span className="intro-left block">
          Web
          <br />
          Developer
        </span>
      </motion.h1>

      {/* Mittelfeld: Foto (fliegt von unten ein) + kurze Textpassagen */}
      <div className="relative flex flex-1 items-center py-2">
        <motion.div
          style={photoStyle}
          className="relative w-[64vw] max-w-[340px] sm:w-[340px] md:ml-[28%]"
        >
          <div className="intro-up">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-ink/15 bg-line">
              <motion.div
                style={reduce ? undefined : { scale: sPhoto }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/selfie.jpg"
                  alt="Porträt von Eduard Lisovskij"
                  fill
                  sizes="340px"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Eduard — 2026
            </p>
            {/* Häppchen 1 auf Mobile: Kurzfassung direkt unter dem Foto */}
            <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted md:hidden">
              {interfaceStatementShort}
            </p>
          </div>

          {/* Häppchen 1 (Interfaces): direkt rechts neben dem Foto, unten —
              breites Textfeld, damit der Text in die Breite geht. Nur ab lg,
              wenn genug Platz ist; sonst greift der Fallback weiter unten. */}
          <FadeUp
            immediate
            delay={0.4}
            className="absolute bottom-6 left-full hidden w-[38ch] pl-8 lg:block"
          >
            <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted">
              {interfaceStatement}
            </p>
          </FadeUp>
        </motion.div>

        {/* Häppchen 3 (Backend): oben am rechten Bildschirmrand (ab md) */}
        <FadeUp
          immediate
          delay={0.3}
          className="ml-auto hidden max-w-[26ch] self-start pt-2 md:block"
        >
          <p className="text-right font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted">
            {backendStatement}
          </p>
        </FadeUp>

        {/* Häppchen 1 Fallback (nur Tablet, md–lg): rutscht unter das Foto und
            wird rechtsbündig am Bildschirmrand ausgerichtet. Auf Mobile steht
            stattdessen die Kurzfassung unter dem Foto. */}
        <FadeUp
          immediate
          delay={0.4}
          className="absolute bottom-0 right-0 hidden max-w-[30ch] md:block lg:hidden"
        >
          <p className="text-right font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted">
            {interfaceStatement}
          </p>
        </FadeUp>
      </div>

      {/* Fußzeile: nur der Name (fliegt von rechts ein). Pfeil + Häppchen 2
          liegen separat im Viewport-Overlay weiter unten. */}
      <div className="flex justify-end">
        <motion.h2
          ref={nameRef}
          style={nameStyle}
          className="text-right font-black uppercase leading-[0.8] tracking-[-0.04em] text-[calc(clamp(2.2rem,11vw,8.5rem)_*_var(--name-scale,1))] md:mb-8"
        >
          <span className="intro-right block">
            Eduard
            <br />
            Lisovskij
          </span>
        </motion.h2>
      </div>

      {/* Overlay in Höhe des ersten Viewports (svh): verankert den Pfeil fest
          unten links am Bildschirmrand — unabhängig vom Textfluss, egal welcher
          Viewport. Häppchen 2 (KI) steht rechts daneben und kann den Pfeil
          nicht verschieben, da beide absolut an der Unterkante hängen. */}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-svh md:inset-x-10">
        <FadeUp
          immediate
          delay={0.4}
          className="absolute bottom-8 left-0 flex items-end gap-5 md:bottom-10"
        >
          <a
            href="#work"
            aria-label="Zu den Projekten scrollen"
            className="arrow-bounce pointer-events-auto shrink-0 text-4xl leading-none md:text-6xl"
          >
            ↓
          </a>
          <p
            ref={kiRef}
            className="hidden max-w-[40ch] pb-1 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted md:block"
          >
            {heroSupport}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
