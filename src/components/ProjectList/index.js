import projects from "@/lib/projects";
import ProjectCard from "../ProjectCard";

export default function ProjectList() {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
}
