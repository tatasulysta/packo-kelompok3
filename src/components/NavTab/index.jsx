import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

const NavTab = (props) => {
  const { id, name, link } = props.data;
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log(location.hash);
    if (location.hash === '' && link === '#') {
      setActive(true);
      window.scrollTo(0, 0);
    } else {
      link === location.hash ? setActive(true) : setActive(false);
    }
  }, [location, link]);

  return (
    <li className="nav--item" key={id}>
      <a
        href={link}
        className={`link text-base ${
          active ? `active text-weight-medium` : `inactive text-weight-regular`
        }`}>
        <span className="link--text">{name}</span>
        <hr />
      </a>
    </li>
  );
};

export default NavTab;
