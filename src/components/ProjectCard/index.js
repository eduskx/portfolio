import Image from "next/image";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const { id, title, imageUrl, description } = project;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.projectNumber}>({id})</p>
      <Image
        src={imageUrl}
        width={250}
        height={300}
        alt="image"
        style={{ padding: "8px 0 32px 0" }}
      />
      <p>{description}</p>
    </div>
  );
}
