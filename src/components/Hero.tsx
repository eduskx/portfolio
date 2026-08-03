"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { FadeUp } from "@/components/motion";
import { heroSupport } from "@/lib/data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
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

      {/* Mittelfeld: Foto (fliegt von unten ein) + kurze Textpassage */}
      <div className="relative flex flex-1 items-center py-2">
        <motion.div
          style={photoStyle}
          className="w-[64vw] max-w-[340px] sm:w-[340px] md:ml-[28%]"
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
          </div>
        </motion.div>

        <FadeUp
          immediate
          delay={0.3}
          className="ml-auto hidden self-start md:block"
        >
          <p className="max-w-[28ch] pt-2 text-right font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted">
            Frontend Developer mit zwei Jahren Praxis — React, Next.js,
            TypeScript. Interfaces, die sich gut anfühlen.
          </p>
        </FadeUp>
      </div>

      {/* Fußzeile: Pfeil + Support-Text links, Name (fliegt von rechts ein) */}
      <div className="flex items-end justify-between gap-6">
        <FadeUp immediate delay={0.4} className="flex flex-col gap-4">
          <a
            href="#work"
            aria-label="Zu den Projekten scrollen"
            className="arrow-bounce text-4xl leading-none md:text-6xl"
          >
            ↓
          </a>
          <p className="max-w-[24ch] font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted">
            {heroSupport}
          </p>
        </FadeUp>

        <motion.h2
          style={nameStyle}
          className="text-right font-black uppercase leading-[0.8] tracking-[-0.04em] text-[clamp(2.2rem,11vw,8.5rem)] md:mb-8"
        >
          <span className="intro-right block">
            Eduard
            <br />
            Lisovskij
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
