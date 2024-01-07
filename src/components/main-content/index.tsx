import Avatar from '@components/avatar';
import List from '@components/list';
import Contacts from '@components/contacts';
import MainLayout from '@components/main-layout';
import styles from './style.module.scss';

function MainContent() {
  return (
    <main className={styles.content}>
      <MainLayout>
        <Avatar />
        <List />
        <Contacts />
      </MainLayout>
    </main>
  );
}

export default MainContent;
