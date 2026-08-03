export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  desktop: string[];
  mobile: string[];
  url: string;
};

export const heroIntro =
  "Ich baue benutzerfreundliche Web-Interfaces mit React, Next.js und TypeScript — zwei Jahre Praxis, ein duales Studium in Wirtschaftsinformatik und ein wacher Blick fürs Detail.";

export const heroTagline =
  "Frontend Developer · React / Next.js / TypeScript";

// Rechts neben dem Pfeil (unten links)
export const heroSupport =
  "KI ist ein festes Werkzeug in meinem Workflow. Sie bringt mich schneller zu guten Lösungen, ersetzt aber nicht das Verstehen.";

// Rechts unten neben dem Foto
export const interfaceStatement =
  "Ich baue Interfaces, die sich gut anfühlen und wartbar sind. Klare Struktur, nachvollziehbare Logik und Code, den auch der nächste Mensch noch versteht.";

// Kurzfassung für Mobile (unter dem Foto)
export const interfaceStatementShort = "Interfaces, die sich gut anfühlen.";

// Rechts an der Seite, oben neben dem Foto
export const backendStatement =
  "Für mich hört Frontend nicht beim Design auf. Aus meiner Zeit im Backend weiß ich, was hinter einer Schnittstelle passiert.";

export const aboutStatement = `Web-Entwickler mit Fokus auf React, Next.js und TypeScript. Meine Basis habe ich bei der Schwarz Gruppe im Team hinter kaufland.de gelegt: Komponenten nach festen Designrichtlinien gebaut, in einem großen System, das wartbar bleiben muss. Später habe ich noch im Bereich Backend und UX/UI gearbeitet. Ich weiß, was auf der anderen Seite einer Schnittstelle passiert, und arbeite mit Designern auf Augenhöhe.

Nach einer zusätzlichen Weiterbildung im Web Development habe ich drei Projekte gebaut, die reale Probleme lösen: eine Finanz-App mit serverseitiger Budget-Logik, einen Doku-Assistenten mit RAG-Pipeline und hybrider Suche, und eine DIY-Plattform für Hobbywerker. Mich interessiert Frontend da, wo es auf Nutzer trifft — Interfaces, die im Gebrauch funktionieren, nicht nur im Design.`;

export const coreStack = ["HTML", "CSS", "JavaScript", "React", "Next.js"];

export const extendedStack = [
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
];

export const projects: Project[] = [
  {
    id: "01",
    title: "docsy",
    description:
      "Ein Wissensassistent für Entwickler-Dokumentationen: Frage in natürlicher Sprache stellen, Antwort mit aufklappbarer Quellenangabe zurückbekommen. Dahinter steckt eine RAG-Pipeline mit hybrider Suche: Vektorsuche über pgvector und Postgres-Volltext, zusammengeführt per Reciprocal Rank Fusion. Auf 2.833 MDN-Seiten getestet: 92 % Trefferquote auf Dokumentebene.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "RAG", "Voyage AI", "Groq"],
    desktop: [
      "/images/docsy/preview-desktop-1.png",
      "/images/docsy/preview-desktop-2.png",
    ],
    mobile: [
      "/images/docsy/preview-mobile-1.jpeg",
      "/images/docsy/preview-mobile-2.jpeg",
    ],
    url: "https://docsy-edu.vercel.app/",
  },
  {
    id: "02",
    title: "Monatsblick",
    description:
      "Eine Finanz-App, mit der sich Einnahmen und Ausgaben pro Monat tracken lassen, inklusive Vormonats-Übertrag, wiederverwendbaren Vorlagen und separaten Sparkonten. In jedem Betragsfeld kann man wie in Excel Formeln berechnen. Budget-Logik und Besitzprüfung liegen bewusst in Server-Actions, nicht im Browser.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Tailwind CSS"],
    desktop: [
      "/images/monatsblick/preview-desktop-1.png",
      "/images/monatsblick/preview-desktop-2.png",
    ],
    mobile: [
      "/images/monatsblick/preview-mobile-1.jpeg",
      "/images/monatsblick/preview-mobile-2.jpeg",
    ],
    url: "https://monatsblick.vercel.app/",
  },
  {
    id: "03",
    title: "Hammerhart",
    description:
      "Eine Plattform für DIY-Projekte: Projekte anlegen und dokumentieren, Fortschritt per Checkbox verfolgen, Favoriten markieren und eigene Notizen festhalten. Entstanden im Team von vier Personen während der Web-Development-Weiterbildung bei neue fische. Ich habe das Interface gestaltet und als Projektleiter die Aufgaben im Team koordiniert und bei technischen Fragen unterstützt.",
    tech: ["React", "Next.js", "styled-components"],
    desktop: [
      "/images/hammerhart/preview-desktop-1.png",
      "/images/hammerhart/preview-desktop-2.png",
    ],
    mobile: [
      "/images/hammerhart/preview-mobile-1.jpeg",
      "/images/hammerhart/preview-mobile-2.jpeg",
    ],
    url: "https://hammerhart.vercel.app/",
  },
];

export const contact = [
  {
    label: "GitHub",
    displayName: "eduskx",
    url: "https://github.com/eduskx",
  },
  {
    label: "LinkedIn",
    displayName: "Eduard Lisovskij",
    url: "https://www.linkedin.com/in/eduard-lisovskij/",
  },
  {
    label: "E-Mail",
    displayName: "eduard.lisovskij@gmail.com",
    url: "mailto:eduard.lisovskij@gmail.com",
  },
];
