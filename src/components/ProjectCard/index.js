import Image from "next/image";
import canvasImage from "/public/images/black.jpg";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  projectNumber,
  imageUrl,
  description,
}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.projectNumber}>({projectNumber})</p>
      <Image
        src={canvasImage}
        width={250}
        height={300}
        alt="image"
        style={{ padding: "8px 0 32px 0" }}
      />
      <p>
        Hammerhart is a web app designed for all DIY enthusiasts and hobbyists
        who want to discover new projects and manage their own ideas. The app
        offers an intuitive user interface and enables seamless management for
        all your projects — from creating and editing to deleting projects.
      </p>
    </div>
  );
}
