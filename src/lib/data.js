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
I am a passionate Frontend Developer with over two years of hands-on experience in developing user-friendly web applications. My dual studies in Business Informatics and intensive further training have provided me with a solid foundation in HTML, CSS, JavaScript, React.js, and Next.js. I strategically utilize these technologies to create efficient and user-centered solutions that contribute to the success of every project. 

With my experience in agile project management, I can quickly adapt to new requirements and work effectively in a team. My passion for web development drives me to constantly seek innovative approaches and implement them successfully.
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
