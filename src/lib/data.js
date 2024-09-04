import hammerhartPreview from "/public/images/hammerhart-preview.png";
import simonGamePreview from "/public/images/simon-game-preview.png";
import GithubIcon from "/public/github-icon.svg?url";
import LinkedInIcon from "/public/linkedIn-icon.svg?url";
import MailIcon from "/public/mail-icon.svg?url";

const projects = [
  {
    id: "01",
    title: "HAMMERHART",
    imageUrl: hammerhartPreview,
    description: `Hammerhart ist eine Web-App, die sich an alle DIY-Enthusiasten und Heimwerker richtet, die neue Projekte entdecken und ihre eigenen Ideen verwalten möchten.
Die App bietet eine intuitive Benutzeroberfläche und ermöglicht eine nahtlose Verwaltung von Projekten – vom Erstellen über das Bearbeiten bis hin zum Löschen.`,
    projectUrl: "https://hammerhart.vercel.app/",
  },
  {
    id: "02",
    title: "SIMON SAYS GAME",
    imageUrl: simonGamePreview,
    description: `Das Simon Says Spiel ist ein interaktives und unterhaltsames Gedächtnisspiel, bei dem du eine wachsende Sequenz von Farben und Tönen wiederholen musst. Das Spiel beginnt einfach, wird aber mit jeder Runde schwieriger, da die Sequenz immer länger wird.`,
    projectUrl: "https://simon-game-steel-chi.vercel.app/",
  },
];

const aboutMeText = `
Ich bin ein leidenschaftlicher Frontend Developer mit zwei Jahren praktischer Erfahrung in der Entwicklung von benutzerfreundlichen Webanwendungen. Mein duales Studium in Wirtschaftsinformatik und intensive Weiterbildungen haben mir eine solide Grundlage in HTML, CSS, JavaScript, React.js und Next.js vermittelt. Diese Technologien setze ich gezielt ein, um effiziente und nutzerzentrierte Lösungen zu schaffen, die zum Erfolg jedes Projekts beitragen.

Dank meiner Erfahrung im agilen Projektmanagement kann ich mich schnell an neue Anforderungen anpassen und effektiv im Team arbeiten. Meine Leidenschaft für Webentwicklung treibt mich dazu, ständig nach neuen Ansätzen zu suchen und diese erfolgreich umzusetzen.
`;

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Git",
  "Responsive Design",
];

const contactInformation = [
  {
    social: "github",
    displayName: "eduskx",
    url: "https://github.com/eduskx",
    icon: GithubIcon,
  },
  {
    social: "linkedIn",
    displayName: "Eduard Lisovskij",
    url: "https://www.linkedin.com/in/eduard-lisovskij/",
    icon: LinkedInIcon,
  },
  {
    social: "mail",
    displayName: "eduard.lisovskij@gmail.com",
    url: "mailto:eduard.lisovskij@gmail.com",
    icon: MailIcon,
  },
];

export { projects, aboutMeText, techStack, contactInformation };
