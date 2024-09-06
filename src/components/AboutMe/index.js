import TechStack from "../TechStack";
import styles from "./AboutMe.module.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkUrl from "/public/external-link-icon.svg?url";

export default function AboutMe({ text, techStack, cvName, certificateName }) {
  return (
    <section id="about-me" className={styles.container}>
      <h2 className={styles.title}>ÜBER MICH</h2>
      <p className={styles.text}>{text}</p>
      <Link
        target="_blank"
        href={`/documents/${cvName}`}
        className={styles.link}
      >
        Lebenslauf ansehen
        <Image
          src={externalLinkUrl}
          width={32}
          height={32}
          alt="External link icon"
          className={styles.externalLinkIcon}
        />
      </Link>

      <Link
        target="_blank"
        href={`/documents/${certificateName}`}
        className={styles.link}
      >
        Zertifikat ansehen
        <Image
          src={externalLinkUrl}
          width={32}
          height={32}
          alt="External link icon"
          className={styles.externalLinkIcon}
        />
      </Link>
      <TechStack techStack={techStack} />
    </section>
  );
}
