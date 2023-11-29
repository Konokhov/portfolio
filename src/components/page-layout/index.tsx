import {ReactNode} from 'react';
import styles from './style.module.scss';

interface PageLayoutProps {
  children: ReactNode;
}

function PageLayout({children}: PageLayoutProps) {
  return <div className={styles.page}>{children}</div>;
}

export default PageLayout;
