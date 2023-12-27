import {ReactNode} from 'react';
import styles from './style.module.scss';

interface HeaderLayoutProps {
  children: ReactNode;
}

function HeaderLayout({children}: HeaderLayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}

export default HeaderLayout;
