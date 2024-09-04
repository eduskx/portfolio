import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";
import externalLinkUrl from "/public/external-link-icon.svg?url";

export default function ProjectCard({ project }) {
  const { id, title, imageUrl, description, projectUrl } = project;

  return (
    <article className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.projectNumber}>({id})</p>
      <Image
        src={imageUrl}
        width={250}
        height={200}
        alt={`preview image for project ${id}`}
        className={styles.image}
      />
      <p className={styles.description}>{description}</p>
      <Link href={projectUrl} target="_blank" className={styles.link}>
        Website aufrufen
        <Image
          src={externalLinkUrl}
          width={32}
          height={32}
          alt="external link icon"
          className={styles.externalLinkIcon}
        />
      </Link>
    </article>
  );
}
