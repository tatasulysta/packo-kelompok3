import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from 'react-icons/md';
import styles from './styles.module.css';

const Breadcrumbs = () => {
  const datas = [
    {
      id: 1,
      name: 'Home',
      link: '/'
    },
    {
      id: 2,
      name: 'Restaurant',
      link: '/restaurant'
    },
    {
      id: 3,
      name: 'Bubur Yoyong',
      link: '/buburyoyong'
    }
  ];
  const isLastIndex = (index) => {
    return index === datas.length - 1;
  };
  return (
    <nav>
      <ul className={styles.wrapper}>
        {datas.map((data, index) => {
          return (
            <li key={data.id} className={styles.navItem}>
              {isLastIndex(index) ? (
                <Link
                  to={data.link}
                  className={`text-xs text-weight-normal ${styles.link} ${styles.lastItem}`}>
                  {data.name}
                </Link>
              ) : (
                <div className={styles.linkWrapper}>
                  <Link
                    to={data.link}
                    className={`text-xs text-weight-medium ${styles.link} ${styles.item}`}>
                    {data.name}
                  </Link>
                  <MdOutlineNavigateNext className={styles.icon} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
