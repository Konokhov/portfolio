import Avatar from '@components/avatar';
import List from '@components/list';
import Contacts from '@components/contacts';
import MainLayout from '@components/main-layout';
import {Portfolio} from 'types/mokapi';
import styles from './style.module.scss';

interface MainContentProps {
  data: Portfolio[];
}

function MainContent({data}: MainContentProps) {
  return (
    <main className={styles.content}>
      <MainLayout>
        <Avatar data={data} />
        <List />
        <Contacts />
      </MainLayout>
    </main>
  );
}

export default MainContent;
