import React from 'react';
import styles from './styles.module.css';
import { AiFillStar } from 'react-icons/ai';

const Rating = (props) => {
  const data = {
    score: 4.8,
    people: '3k+'
  };
  return (
    <div className={`${props.className} ${styles.container}`}>
      <div className={styles.wrapper}>
        <div className={styles.upperWrapper}>
          <AiFillStar className={styles.icon} />
          <p className="text-xl text-weight-bold">{data.score}</p>
        </div>
        <p className="text-sm text-weight-regular">{data.people} ratings</p>
      </div>
    </div>
  );
};

export default Rating;
