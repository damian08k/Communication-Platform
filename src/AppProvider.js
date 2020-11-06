import React, { createContext, useEffect, useState } from 'react';

const FIRST_WINDOW_WIDTH = window.innerWidth;

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(FIRST_WINDOW_WIDTH);
  const [isLogged, setIsLogged] = useState(false);
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

  return (
    <AppContext.Provider value={{ windowWidth, isLogged, setIsLogged, userName, setUserName, userType, setUserType }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
