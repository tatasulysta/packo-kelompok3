import React from 'react';
import styles from './styles.module.css';

function Menu(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.data.map((menu) => {
        return (
          <>
            <p>{menu.nama}</p>
            <p>{menu.harga}</p>
            <img src={menu.gambar} />
          </>
        );
      })}
    </div>
  );
}

export default Menu;
