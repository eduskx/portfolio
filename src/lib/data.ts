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

export const heroSupport =
  "Ich entwickle nutzerzentrierte Web-Apps mit einem Auge fürs Interface.";

export const aboutStatement =
  "Ich verwandle Ideen in schnelle, zugängliche Web-Interfaces — mit Fokus auf Detail, Performance und Gefühl.";

export const aboutMeText = `Ich bin ein leidenschaftlicher Frontend Developer mit zwei Jahren praktischer Erfahrung in der Entwicklung benutzerfreundlicher Webanwendungen. Mein duales Studium in Wirtschaftsinformatik und intensive Weiterbildungen haben mir eine solide Grundlage in HTML, CSS, JavaScript, React.js und Next.js vermittelt.

Dank meiner Erfahrung im agilen Projektmanagement passe ich mich schnell an neue Anforderungen an und arbeite effektiv im Team.`;

export const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "Git",
  "Responsive Design",
];

export const projects: Project[] = [
  {
    id: "01",
    title: "Monatsblick",
    description:
      "PLATZHALTER — kurze Beschreibung von Monatsblick (worum geht's, was macht es besonders?).",
    tech: ["Next.js", "React", "TypeScript"],
    desktop: [
      "/images/monatsblick/preview-desktop-1.png",
      "/images/monatsblick/preview-desktop-2.png",
    ],
    mobile: [
      "/images/monatsblick/preview-mobile-1.jpeg",
      "/images/monatsblick/preview-mobile-2.jpeg",
    ],
    url: "#",
  },
  {
    id: "02",
    title: "docsy",
    description:
      "PLATZHALTER — kurze Beschreibung von docsy (worum geht's, was macht es besonders?).",
    tech: ["Next.js", "React", "TypeScript"],
    desktop: [
      "/images/docsy/preview-desktop-1.png",
      "/images/docsy/preview-desktop-2.png",
    ],
    mobile: [
      "/images/docsy/preview-mobile-1.jpeg",
      "/images/docsy/preview-mobile-2.jpeg",
    ],
    url: "#",
  },
  {
    id: "03",
    title: "Hammerhart",
    description:
      "Eine Web-App für DIY-Enthusiasten: Projekte entdecken, eigene Ideen anlegen, bearbeiten und verwalten — mit einer aufgeräumten, intuitiven Oberfläche.",
    tech: ["Next.js", "React", "Vercel"],
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
