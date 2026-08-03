const links = [
  { label: "Arbeit", href: "#work" },
  { label: "Über mich", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <nav className="flex items-center justify-between px-6 py-5 text-paper md:px-10">
        <a
          href="#top"
          className="font-mono text-xs font-medium uppercase tracking-[0.2em]"
        >
          Eduard&nbsp;Lisovskij
        </a>
        <ul className="flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
