import dummyImage from "/public/images/spongi.jpg";
import GithubIcon from "/public/github-icon.svg?url";
import LinkedInIcon from "/public/linkedIn-icon.svg?url";
import MailIcon from "/public/mail-icon.svg?url";

const projects = [
  {
    id: "01",
    title: "HAMMERHART",
    imageUrl: dummyImage,
    description: `Hammerhart is a web app designed for all DIY enthusiasts and hobbyists
        who want to discover new projects and manage their own ideas. The app
        offers an intuitive user interface and enables seamless management for
        all your projects — from creating and editing to deleting projects.`,
    projectUrl: "https://hammerhart.vercel.app/",
  },
  {
    id: "02",
    title: "HAMMERHART BEISPIEL",
    imageUrl: dummyImage,
    description: `Hammerhart is a web app designed for all DIY enthusiasts and hobbyists
        who want to discover new projects and manage their own ideas. The app
        offers an intuitive user interface and enables seamless management for
        all your projects — from creating and editing to deleting projects.`,
    projectUrl: "https://hammerhart.vercel.app/",
  },
  {
    id: "03",
    title: "HAMMERHART 03",
    imageUrl: dummyImage,
    description: `Hammerhart is a web app designed for all DIY enthusiasts and hobbyists
        who want to discover new projects and manage their own ideas. The app
        offers an intuitive user interface and enables seamless management for
        all your projects — from creating and editing to deleting projects.`,
    projectUrl: "https://hammerhart.vercel.app/",
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
