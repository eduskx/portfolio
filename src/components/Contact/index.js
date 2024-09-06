import styles from "./Contact.module.css";
import Link from "next/link";
import Image from "next/image";
import externalLinkUrl from "/public/external-link-icon.svg?url";

export default function Contact({ contactInformation }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>KONTAKT</h2>
      <ul>
        {contactInformation.map((element) => (
          <li key={element.url} className={styles.listItem}>
            <Image
              src={element.icon}
              width={40}
              height={40}
              alt={`${element.social} icon`}
              className={styles.socialIcons}
            />
            <Link href={element.url} className={styles.link} target="_blank">
              {element.displayName}
              <Image
                src={externalLinkUrl}
                width={32}
                height={32}
                alt="External link icon"
                className={styles.externalLinkIcon}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
