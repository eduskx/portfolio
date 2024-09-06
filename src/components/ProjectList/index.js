import ProjectCard from "../ProjectCard";
import styles from "./ProjectList.module.css";

export default function ProjectList({ projects }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        MEINE <br /> PROJEKTE
      </h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
}
