import selfie from "/public/images/selfie.jpg";
import InfoBox from "@/components/InfoBox";
import ProjectList from "@/components/ProjectList";

export default function HomePage() {
  return (
    <main>
      <InfoBox
        title="FRONTEND DEVELOPER"
        image={selfie}
        name="EDUARD LISOVSKIJ"
      />
      <ProjectList />
    </main>
  );
}
