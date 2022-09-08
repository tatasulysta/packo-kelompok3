'use strict';
import React from 'react';
import styles from './styles.module.css';
import Button from '../UI/Button';
import Kart from '../UI/Kart';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles['header-top']}>
        <div className={styles['left-side']}>
          <img src="packo-log.svg" alt="Packo Logo" className={styles.packo} />
          <form className={styles.form}>
            <img src="location.svg" alt="Location Icon" className={styles.icon} />
            <input
              placeholder="Deliver to..."
              size="30"
              type="text"
              className={styles.search}></input>
          </form>
        </div>
        <div className={styles['right-side']}>
          <Kart />
          <Button>Login or Signin</Button>
        </div>
      </div>
      {props.children}
    </header>
  );
}

export default Header;
