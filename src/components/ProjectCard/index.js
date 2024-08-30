import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const { id, title, imageUrl, description, projectUrl } = project;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.projectNumber}>({id})</p>
      <Image
        src={imageUrl}
        width={250}
        height={300}
        alt={`preview image for project ${id}`}
        className={styles.image}
      />
      <p className={styles.description}>{description}</p>
      <Link href={projectUrl} target="_blank" className={styles.link}>
        see more here
      </Link>
    </div>
  );
}
