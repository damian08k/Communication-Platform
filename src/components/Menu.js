import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { List } from './styled/MenuElements';
import { admWorkerType, lecturerType, studentType } from '../js/constants';

const Menu = ({ isClicked, isLogged, userType }) => {
  const showUsersMenuOption = () => {
    if (isLogged) {
      if (userType === admWorkerType) {
        return (
          <li className="list-element-container">
            <NavLink to="/moje-wpisy" className="list-element">
              Moje wpisy
            </NavLink>
          </li>
        );
      } else if (userType === lecturerType) {
        return (
          <Fragment>
            <li className="list-element-container">
              <NavLink to="/dodaj-materialy" className="list-element">
                Dodaj materiały
              </NavLink>
            </li>
            <li className="list-element-container">
              <NavLink to="/moje-przedmioty" className="list-element">
                Moje przedmioty
              </NavLink>
            </li>
          </Fragment>
        );
      } else if (userType === studentType) {
        return (
          <Fragment>
            <li className="list-element-container">
              <NavLink to="/moje-przedmioty" className="list-element">
                Moje przedmioty
              </NavLink>
            </li>
            <li className="list-element-container">
              <NavLink to="/kalendarz" className="list-element">
                Kalendarz
              </NavLink>
            </li>
          </Fragment>
        );
      }
    } else {
      return (
        <li className="list-element-container">
          <NavLink to="/zaloguj" className="list-element">
            Logowanie
          </NavLink>
        </li>
      );
    }
  };

  const showUsersCommonOption = () => {
    if (isLogged) {
      return (
        <li className="list-element-container">
          <NavLink to="/forum" className="list-element">
            Forum
          </NavLink>
        </li>
      );
    }
  };

  return (
    <List clicked={isClicked} logged={isLogged}>
      <li className="list-element-container">
        <NavLink to="/" className="list-element">
          Strona Główna
        </NavLink>
      </li>
      {showUsersMenuOption()}
      {showUsersCommonOption()}
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
