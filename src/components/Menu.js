import React from 'react';
import { NavLink } from 'react-router-dom';

import { List } from './styled/MenuElements';

const Menu = ({ isClicked }) => {
  return (
    <List clicked={isClicked}>
      <li className="list-element-container">
        <NavLink to="/" className="list-element">
          Strona Główna
        </NavLink>
      </li>
      <li className="list-element-container">
        <NavLink to="/zaloguj" className="list-element">
          Logowanie
        </NavLink>
      </li>
      <li className="list-element-container">
        <NavLink to="/wydzial" className="list-element">
          Wydział
        </NavLink>
      </li>
      <li className="list-element-container">
        <NavLink to="/pomoc" className="list-element">
          Pomoc
        </NavLink>
      </li>
    </List>
  );
};

export default Menu;
