import Container from '@components/container';
import Logo from '@components/logo';
import Navbar from '@components/navbar';
import MenuIcon from '@components/menu-icon';
import HeaderLayout from '@components/heder-layout';
import styles from './style.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Logo />
        <HeaderLayout>
          <Navbar />
        </HeaderLayout>
        <MenuIcon />
      </Container>
    </header>
  );
}

export default Header;
