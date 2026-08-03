import { FadeUp, MaskLine } from "@/components/motion";
import { contact } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line px-6 py-24 md:px-10 md:py-40"
    >
      <FadeUp>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          (Kontakt)
        </p>
      </FadeUp>

      <h2 className="mt-4 font-black uppercase leading-[0.82] tracking-[-0.04em] text-[clamp(2.8rem,13vw,10rem)]">
        <MaskLine reversible>Lass uns</MaskLine>
        <MaskLine reversible delay={0.09}>
          reden.
        </MaskLine>
      </h2>

      <FadeUp delay={0.15}>
        <a
          href="mailto:eduard.lisovskij@gmail.com"
          className="group mt-8 inline-flex items-center gap-3 border-b-2 border-ink pb-1 text-[clamp(1.1rem,3vw,2rem)] font-medium"
        >
          eduard.lisovskij@gmail.com
          <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </FadeUp>

      <FadeUp delay={0.2}>
        <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.18em]">
          {contact.map((c) => (
            <li key={c.label} className="flex flex-col gap-1">
              <span className="text-muted">{c.label}</span>
              <a
                href={c.url}
                target={c.url.startsWith("http") ? "_blank" : undefined}
                rel={c.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="transition-opacity hover:opacity-60"
              >
                {c.displayName}
              </a>
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  );
}
