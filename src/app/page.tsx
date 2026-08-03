import { Hero } from "@/components/Hero";
import { ProjectBlock } from "@/components/ProjectBlock";
import { Contact } from "@/components/Contact";
import { FadeUp, MaskLine } from "@/components/motion";
import { aboutStatement, projects } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Statement */}
      <section
        id="about"
        className="border-t border-line px-6 py-24 md:px-10 md:py-40"
      >
        <FadeUp>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            (Über mich)
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-8 max-w-[32ch] text-[clamp(1.4rem,3.4vw,2.6rem)] font-normal leading-[1.25] tracking-[-0.01em] text-ink/90 md:ml-[40%] md:mt-10">
            {aboutStatement}
          </p>
        </FadeUp>
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
        © 2026 Eduard Lisovskij — Prototyp
      </footer>
    </main>
  );
}
