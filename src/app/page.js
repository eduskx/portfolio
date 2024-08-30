import AboutMe from "@/components/AboutMe";
import selfie from "/public/images/selfie.jpg";
import InfoBox from "@/components/InfoBox";
import ProjectList from "@/components/ProjectList";
import { projects, aboutMeText, techStack } from "@/lib/data";

export default function HomePage() {
  return (
    <main>
      <InfoBox
        title="FRONTEND DEVELOPER"
        image={selfie}
        name="EDUARD LISOVSKIJ"
      />
      <AboutMe text={aboutMeText} techStack={techStack} />
      <ProjectList projects={projects} />
    </main>
  );
}
