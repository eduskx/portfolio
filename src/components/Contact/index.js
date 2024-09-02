import styles from "./Contact.module.css";
import Link from "next/link";

export default function Contact({ contactInformation }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        CONTACT <br /> ME!
      </h2>
      <ul>
        {contactInformation.map((element) => (
          <Link href={element.url} className={styles.link}>
            <li key={element.url} className={styles.listItem}>
              {element.displayName}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
