import React from 'react';
import styles from './styles.module.css';

function Button(props) {
  return (
    <button className={styles.btn} onClick={props.onClick} type="submit">
      {props.children}
    </button>
  );
}
export default Button;
