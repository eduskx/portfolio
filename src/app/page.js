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
      <LandingSection
        title="FRONTEND DEVELOPER"
        image={selfie}
        name="EDUARD LISOVSKIJ"
      />
      <AboutMe text={aboutMeText} techStack={techStack} />
      <ProjectList projects={projects} />
      <Contact contactInformation={contactInformation} />
    </main>
  );
}
