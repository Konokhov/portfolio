import styles from './style.module.scss';

interface HeadProps {
  title: string;
}

function Head({title}: HeadProps) {
  return <h1 className={styles.head}>{title}</h1>;
}

export default Head;
