import ProjectCard from "../ProjectCard";
import styles from "./ProjectList.module.css";

export default function ProjectList({ projects }) {
  return (
    <section>
      <h2 className={styles.title}>
        MEINE <br /> PROJEKTE
      </h2>
      {projects.map((project) => (
        <ProjectCard project={project} className={styles.projectCard} />
      ))}
      <div className="section-divider"></div>
    </section>
  );
}
