import Container from '@components/container';
import Logo from '@components/logo';
import MenuIcon from '@components/menu-icon';
import styles from './style.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
        <MenuIcon />
      </Container>
    </header>
  );
}

export default Header;
