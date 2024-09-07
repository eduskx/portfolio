import Image from "next/image";
import styles from "./LandingSection.module.css";
import ArrowDown from "/public/arrow-down-icon.svg";

export default function LandingSection({ image }) {
  return (
    <section id="home" className={styles.container}>
      <h2 className={styles.title}>
        FRONTEND <br /> DEVELOPER
      </h2>
      <Image
        src={image}
        width={200}
        height={270}
        alt="picture of myself"
        className={styles.image}
      />
      {/* <ArrowDown className={styles.arrowDown} /> */}
      <h1 className={styles.name}>
        EDUARD <br /> LISOVSKIJ
      </h1>
    </section>
  );
}
