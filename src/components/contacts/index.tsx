import Head from '@components/head';
import styles from './style.module.scss';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <Head title="Контакты" />
      <span>konokhovsergey@gmail.com</span>
      <span>@konokhov_s</span>
    </div>
  );
}

export default Contacts;
