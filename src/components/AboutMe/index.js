import TechStack from "../TechStack";
import styles from "./AboutMe.module.css";

export default function AboutMe({ text, techStack }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>ÜBER MICH</h2>
      <p className={styles.text}>{text}</p>
      <TechStack techStack={techStack} />
      <div className="section-divider"></div>
    </section>
  );
}
