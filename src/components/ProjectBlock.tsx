"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { FadeUp, MaskLine } from "@/components/motion";
import type { Project } from "@/lib/data";

export function ProjectBlock({
  project,
  flip = false,
}: {
  project: Project;
  flip?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Bei gespiegelten Projekten kehrt sich die Laufrichtung um:
  // linkes Bild nach unten, rechtes nach oben.
  const yLeft = useTransform(
    scrollYProgress,
    [0, 1],
    flip ? ["-16%", "16%"] : ["16%", "-16%"],
  );
  const yRight = useTransform(
    scrollYProgress,
    [0, 1],
    flip ? ["12%", "-12%"] : ["-12%", "12%"],
  );
  const parallax = [yLeft, yRight];

  // Titel liegt zunächst vollständig über den Previews (keine Überlappung)
  // und schiebt sich beim Scrollen nur leicht darüber.
  const yTitle = useTransform(
    scrollYProgress,
    [0.15, 0.55],
    ["-100%", "-72%"],
  );
  // Statischer Versatz wird bei gespiegelten Projekten mitgespiegelt,
  // damit die Bilder gleich zueinander starten.
  const offsets = flip ? ["md:mt-16", "md:mt-0"] : ["md:mt-0", "md:mt-16"];

  return (
    <article
      ref={ref}
      className="relative overflow-hidden border-t border-line py-16 md:py-28"
    >
      <div className="grid grid-cols-12 items-center gap-x-6 gap-y-10">
        {/* Bild-Cluster mit überlagerndem Titel */}
        <div
          className={`relative col-span-12 md:col-span-8 ${
            flip ? "md:order-2 md:col-start-5" : "md:col-start-1"
          }`}
        >
          {/* Mobile: Titel über den Previews, ohne Überlappung */}
          <h3 className="mb-6 font-black uppercase leading-[0.85] tracking-[-0.03em] text-[clamp(2rem,9vw,3rem)] md:hidden">
            <MaskLine reversible>{project.title}</MaskLine>
          </h3>

          {/* Desktop: quer, mit Parallax */}
          <div className="hidden items-start gap-3 md:flex md:gap-5">
            {project.desktop.slice(0, 2).map((src, i) => (
              <FadeUp
                key={i}
                className={`flex-1 ${offsets[i]}`}
                delay={0.1 + i * 0.1}
              >
                <motion.div
                  style={reduce ? undefined : { y: parallax[i] }}
                  className="relative aspect-[16/10] w-full overflow-hidden border border-ink/15 bg-line"
                >
                  <Image
                    src={src}
                    alt={`${project.title} — Desktop-Screenshot ${i + 1}`}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </motion.div>
              </FadeUp>
            ))}
          </div>

          {/* Mobile: hochkant, komplett sichtbar */}
          <div className="flex items-start justify-center gap-3 md:hidden">
            {project.mobile.slice(0, 2).map((src, i) => (
              <FadeUp key={i} className="flex-1" delay={0.1 + i * 0.1}>
                <div className="relative aspect-[9/16] w-full overflow-hidden border border-ink/15 bg-line">
                  <Image
                    src={src}
                    alt={`${project.title} — Mobile-Screenshot ${i + 1}`}
                    fill
                    sizes="45vw"
                    className="object-contain"
                  />
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Desktop: Titel absolut, schiebt sich beim Scrollen leicht über die Previews */}
          <motion.h3
            style={reduce ? { y: "-78%" } : { y: yTitle }}
            className={`pointer-events-none absolute top-0 z-10 hidden font-black uppercase leading-[0.85] tracking-[-0.03em] text-[clamp(2rem,5.5vw,4.5rem)] md:block ${
              flip ? "right-0 text-right" : "left-0"
            }`}
          >
            <MaskLine reversible>{project.title}</MaskLine>
          </motion.h3>
        </div>

        {/* Beschreibung an der Seite */}
        <div
          className={`col-span-12 md:col-span-4 ${
            flip ? "md:order-1 md:col-start-1" : "md:col-start-10"
          }`}
        >
          <FadeUp delay={0.24}>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              ({project.id})
            </div>
            <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 font-mono text-xs uppercase tracking-[0.18em]"
            >
              Projekt ansehen
              <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </FadeUp>
        </div>
      </div>
    </article>
  );
}
