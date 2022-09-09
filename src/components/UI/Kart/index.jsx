import React from 'react';
import styles from './styles.module.css';
import { useCart } from '../../../contexts/Context';

function Kart(props) {
  const { setIsCartOpen: setShow } = useCart();
  return (
    <a className={styles.kart} onClick={() => setShow(true)}>
      <img src="kart.svg" alt="Kart Icon" className={styles.icon} />
    </a>
  );
}

export default Kart;
