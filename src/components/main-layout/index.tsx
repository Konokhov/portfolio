import {ReactNode} from 'react';
import styles from './style.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({children}: MainLayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}

export default MainLayout;
