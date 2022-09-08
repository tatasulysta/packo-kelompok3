import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './styles.css';

const NavTab = (props) => {
  const { id, name, link } = props.data;
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    link === location.pathname ? setActive(true) : setActive(false);
  }, [location.pathname, link]);

  return (
    <li className="nav--item" key={id}>
      <NavLink
        to={link}
        className={`link text-base ${
          active ? `active text-weight-medium` : `inactive text-weight-regular`
        }`}>
        <span className="link--text">{name}</span>
        <hr />
      </NavLink>
    </li>
  );
};

export default NavTab;
