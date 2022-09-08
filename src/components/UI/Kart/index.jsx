import React from 'react';
import styles from './styles.module.css';

function Kart(props) {
  return (
    <a className={styles.kart} onClick={props.onClick}>
      <img src="kart.svg" alt="Kart Icon" className={styles.icon} />
    </a>
  );
}

export default Kart;
