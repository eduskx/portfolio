import styles from "./Header.module.css";

export default function Header({ links }) {
  return (
    <nav className={styles.container}>
      <ul className={styles.listContainer}>
        <li className={styles.name}>Eduard Lisovskij</li>

        <li className={styles.navigationItemsContainer}>
          {links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </li>
      </ul>

      <div className={styles.divider}></div>
    </nav>
  );
}
