import styles from './styles.module.scss';

function Item() {
  return (
    <li className={styles.item}>
      <h1 className={styles.title}>title</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>github</button>
        <button className={styles.button}>github pages</button>
      </div>
    </li>
  );
}

export default Item;
