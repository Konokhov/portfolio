import Container from '@components/container';
import Logo from '@components/logo';
import styles from './style.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
      </Container>
    </header>
  );
}

export default Header;
