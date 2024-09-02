import Image from "next/image";
import styles from "./LandingSection.module.css";

export default function LandingSection({ title, image, name }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          width={200}
          height={270}
          alt="picture of myself"
          className={styles.image}
        />
        <p className={styles.arrow}>⬇</p>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <div className="section-divider"></div>
    </section>
  );
}
