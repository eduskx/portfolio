import TechStack from "../TechStack";
import styles from "./AboutMe.module.css";
import Link from "next/link";

export default function AboutMe({ text, techStack }) {
  return (
    <section>
      <h2 className={styles.title}>ÜBER MICH</h2>
      <p className={styles.text}>{text}</p>
      <Link target="_blank" href="/public/Lebenslauf_Eduard_Lisovskij.pdf">
        Lebenslauf herunterladen
      </Link>
      <TechStack techStack={techStack} />
      <div className="section-divider"></div>
    </section>
  );
}
