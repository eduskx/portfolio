import projects from "@/lib/projects";
import ProjectCard from "../ProjectCard";

export default function ProjectsCarousel() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
