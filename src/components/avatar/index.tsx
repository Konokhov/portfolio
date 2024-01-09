import {Portfolio} from 'types/mokapi';
import styles from './style.module.scss';

interface AvatarProps {
  data: Portfolio[];
}

function Avatar({data}: AvatarProps) {
  console.log(data);

  return (
    <div className={styles.avatar}>
      <div className={styles.image}>
        <img className={styles.pic} src={data[0].avatar} alt="" />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{data[0].firstName}</h1>
        <span>{data[0].profession}</span>
        <div>{data[0].description}</div>
      </div>
    </div>
  );
}

export default Avatar;
