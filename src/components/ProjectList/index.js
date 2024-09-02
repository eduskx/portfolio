import ProjectCard from "../ProjectCard";
import styles from "./ProjectList.module.css";

export default function ProjectList({ projects }) {
  return (
    <section>
      <h2 className={styles.title}>
        MY <br /> PROJECTS
      </h2>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
      <div className="section-divider"></div>
    </section>
  );
}
