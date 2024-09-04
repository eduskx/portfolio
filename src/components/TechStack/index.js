import styles from "./TechStack.module.css";

export default function TechStack({ techStack }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>MEIN TECH STACK</h3>
      <p className={styles.text}>
        {techStack.map((skill) => `${skill}   /   `)}
      </p>
    </div>
  );
}
