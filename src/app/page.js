import AboutMe from "@/components/AboutMe";
import selfie from "/public/images/selfie.jpg";
import ProjectList from "@/components/ProjectList";
import {
  projects,
  aboutMeText,
  techStack,
  contactInformation,
} from "@/lib/data";
import LandingSection from "@/components/LandingSection";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <LandingSection image={selfie} />
      <AboutMe
        text={aboutMeText}
        techStack={techStack}
        cvName="Lebenslauf_Eduard_Lisovskij.pdf"
        certificateName="Zertifikat_Eduard_Lisovskij.pdf"
      />
      <ProjectList projects={projects} />
      <Contact contactInformation={contactInformation} />
    </main>
  );
}
