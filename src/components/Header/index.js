import styles from "./Header.module.css";
import Link from "next/link";

export default function Header({ links }) {
  return (
    <nav className={styles.container}>
      <ul className={styles.listContainer}>
        <Link href="#landing" className={styles.name}>
          Eduard Lisovskij
        </Link>

        <div className={styles.navigationItemsContainer}>
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </div>
      </ul>

      <div className={styles.divider}></div>
    </nav>
  );
}
