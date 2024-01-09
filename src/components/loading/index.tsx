import Container from '@components/container';
import styles from './styles.module.scss';

function Loading() {
  return (
    <Container>
      <h1 className={styles.loading}>Загрузка...</h1>
    </Container>
  );
}

export default Loading;
