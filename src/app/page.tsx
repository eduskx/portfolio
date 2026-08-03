import { Hero } from "@/components/Hero";
import { ProjectBlock } from "@/components/ProjectBlock";
import { Contact } from "@/components/Contact";
import { FadeUp, MaskLine } from "@/components/motion";
import {
  aboutStatement,
  coreStack,
  extendedStack,
  projects,
} from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Statement */}
      <section
        id="about"
        className="border-t border-line px-6 py-24 md:px-10 md:py-40"
      >
        {/* Zwei Spalten: links Über-mich (Label + Absätze), rechts der
            Tech-Stack. items-end richtet den kürzeren Tech-Block an der
            Unterkante aus, sodass er unten sitzt und von der Höhe her leicht in
            den Über-mich-Block einschneidet. */}
        <div className="md:grid md:grid-cols-[auto_1fr] md:items-end md:gap-x-16">
          {/* Spalte 1: Über mich — Label links neben den Absätzen */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-16">
            <FadeUp className="md:pt-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:whitespace-nowrap">
                (Über mich)
              </p>
            </FadeUp>
            <div className="max-w-[36rem] space-y-6">
              {aboutStatement.split("\n\n").map((paragraph, i) => (
                <FadeUp key={i} delay={0.1 + i * 0.1}>
                  <p className="text-[clamp(1rem,1.5vw,1.25rem)] font-normal leading-[1.5] tracking-[-0.005em] text-ink/90">
                    {paragraph}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Spalte 2: Tech-Stack — linksbündig, unten in der Spalte */}
          <FadeUp delay={0.2} className="mt-12 md:mt-0">
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Core Stack
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13px] uppercase tracking-[0.08em] text-ink/90">
                  {coreStack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Auch gearbeitet mit
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[13px] uppercase tracking-[0.08em] text-muted">
                  {extendedStack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Arbeit */}
      <section id="work" className="px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 py-8">
          <h2 className="font-black uppercase leading-[0.85] tracking-[-0.04em] text-[clamp(2rem,7vw,5rem)]">
            <MaskLine reversible>Ausgewählte Projekte</MaskLine>
          </h2>
          <span className="hidden shrink-0 pb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:block">
            ({projects.length})
          </span>
        </div>

        {projects.map((project, i) => (
          <ProjectBlock key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </section>

      <Contact />

      <footer className="border-t border-line px-6 py-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:px-10">
        © 2026 Eduard Lisovskij
      </footer>
    </main>
  );
}
