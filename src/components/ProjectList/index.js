import projects from "@/lib/projects";
import ProjectCard from "../ProjectCard";

export default function ProjectList() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}
