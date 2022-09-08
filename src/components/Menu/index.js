import React from 'react';
import styles from './styles.module.css';

function Menu(props) {
  return (
    <div className={styles.category}>
      <h3>{props.title}</h3>
      <div className={styles.menu}>
        {props.data.map((menu) => {
          return (
            <div>
              <p>{menu.nama}</p>
              <p>{menu.harga}</p>
              <img src={menu.gambar} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
