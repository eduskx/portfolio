import styles from "./Header.module.css";

export default function Header({ links }) {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
      <div className={styles.divider}></div>
    </div>
  );
}
