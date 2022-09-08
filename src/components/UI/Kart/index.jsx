import React from 'react';
import styles from './styles.module.css';

function Kart(props) {
  return (
    <div className={styles.kart} onClick={props.onClick}>
      <img src="kart.svg" alt="Kart Icon" className={styles.icon} />
    </div>
  );
}

export default Kart;
