import React, { useState } from 'react';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { CryptoState } from '../utils/CryptoContext';

const Theme = () => {
  let clickedClass = 'clicked';
  const body = document.body;
  const lightTheme = 'light';
  const darkTheme = 'dark';
  let theme;
  let day = <MdDarkMode />;
  let night = <MdOutlineLightMode />;

  const { setMode } = CryptoState();

  // getting localstorage theme
  if (localStorage) {
    theme = localStorage.getItem('theme');
  }

  // get local storage theme and set it by default
  const [icon, setIcon] = useState(() => {
    if (theme === lightTheme) {
      // if dark
      return day;
    } else {
      // if light
      return night;
    }
  });

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  // if button click replace theme
  // add theme to local storage
  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      setIcon(day);
      setMode('light');
      // e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'light');
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      setIcon(night);
      setMode('dark');
      // e.target.classList.remove(clickedClass);
      localStorage.setItem('theme', 'dark');
      theme = darkTheme;
    }
  };

  return (
    <button
      className={theme === 'dark' ? clickedClass : undefined}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    >
      {icon}
    </button>
  );
};

export default Theme;
