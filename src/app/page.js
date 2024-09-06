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
      <div className="section-divider" />
      <AboutMe
        text={aboutMeText}
        techStack={techStack}
        cvName="Lebenslauf_Eduard_Lisovskij.pdf"
        certificateName="Zertifikat_Eduard_Lisovskij.pdf"
      />
      <div className="section-divider" />
      <ProjectList projects={projects} />
      <div className="section-divider" />
      <Contact contactInformation={contactInformation} />
    </main>
  );
}
