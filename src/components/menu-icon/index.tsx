import {useState} from 'react';
import styles from './style.module.scss';

function MenuIcon() {
  const [isToggle, setToggle] = useState<boolean>(false);

  const isChange = () => {
    setToggle(!isToggle);
  };

  return (
    <button
      className={`${styles.menu} ${isToggle ? styles.open : ''}`}
      onClick={isChange}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  );
}

export default MenuIcon;
