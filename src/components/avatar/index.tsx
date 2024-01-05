import styles from './style.module.scss';

function Avatar() {
  return (
    <div className={styles.avatar}>
      <div className={styles.image}>
        <img className={styles.pic} src="#" alt="" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Сергей</h1>
        <span>Фронтенд разработчик</span>
        <div>Ниже в разделах вы найдете информацию обо мне и моих проектах</div>
      </div>
    </div>
  );
}

export default Avatar;
