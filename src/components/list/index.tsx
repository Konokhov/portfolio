import Item from '@components/item';
import Head from '@components/head';
import styles from './style.module.scss';

function List() {
  return (
    <div>
      <Head title="Проекты" />
      <ul className={styles.list}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ul>
    </div>
  );
}

export default List;
