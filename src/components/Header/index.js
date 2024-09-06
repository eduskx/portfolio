import styles from "./Header.module.css";

export default function Header({ links }) {
  return (
    <nav className={styles.container}>
      <ul className={styles.listContainer}>
        <li className={styles.name}>Eduard Lisovskij</li>

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
