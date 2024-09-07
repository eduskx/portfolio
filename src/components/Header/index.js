import styles from "./Header.module.css";
import Link from "next/link";

export default function Header({ links }) {
  return (
    <nav className={styles.container}>
      <ul className={styles.listContainer}>
        <Link href="#home" className={`${styles.name} ${styles.link}`}>
          Eduard Lisovskij
        </Link>

        <div className={styles.navigationItemsContainer}>
          {links.map((link) => (
            <Link href={`#${link.id}`} key={link.id} className={styles.link}>
              {link.name}
            </Link>
          ))}
        </div>
      </ul>

      <div className={styles.divider}></div>
    </nav>
  );
}
