import ProjectCard from "../ProjectCard";

export default function ProjectList({ projects }) {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </section>
  );
}
