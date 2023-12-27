import styles from './style.module.scss';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Проекты
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Обо мне
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#">
            Контакты
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
