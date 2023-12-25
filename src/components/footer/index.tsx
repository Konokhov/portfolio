import {ChangeEvent} from 'react';
import Container from '@components/container';
import ThemeToggle from '@components/theme-toggle';
import styles from './style.module.scss';

interface FooterProps {
  toggleTheme: (e: ChangeEvent<HTMLInputElement>) => void;
  theme: string;
}

function Footer({toggleTheme, theme}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Container>
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </Container>
    </footer>
  );
}

export default Footer;
