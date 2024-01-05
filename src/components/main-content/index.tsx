import Avatar from '@components/avatar';
import Container from '@components/container';
import styles from './style.module.scss';

function MainContent() {
  return (
    <main className={styles.content}>
      <div className={styles.layout}>
        <Container>
          <Avatar />
        </Container>
      </div>
    </main>
  );
}

export default MainContent;
