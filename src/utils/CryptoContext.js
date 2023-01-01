import React, { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');

  // ========== access theme value globally ==========
  // 1: change the style of pagination(material)
  let theme;
  // getting localstorage theme
  if (localStorage) {
    theme = localStorage.getItem('theme');
  }
  const [mode, setMode] = useState(theme);

  useEffect(() => {
    if (theme === 'dark') {
      setMode('dark');
    } else if (theme === 'light') {
      setMode('light');
    }
  }, [theme]);

  // ========== access currency value globally ==========
  useEffect(() => {
    if (currency === 'INR') setSymbol('₹');
    else if (currency === 'USD') setSymbol('$');
  }, [currency]);

  // Converting number to million(FOR USD)/thousands(FOR UNR)
  // (million(M)/thousands(k))
  function convertToInternationalCurrencySystem(labelValue) {
    // console.log(labelValue);
    var val = Math.abs(Number(labelValue));
    if (symbol === '$') {
      // Six Zeroes for Millions
      return val >= 1.0e6
        ? (val / 1.0e6).toFixed(2) + 'M'
        : // Three Zeroes for Thousands
        val >= 1.0e3
        ? (val / 1.0e3).toFixed(2) + 'K'
        : val;
    } else if (symbol === '₹') {
      // Seven Zeroes for Lakhs
      return val >= 10000000
        ? (val / 10000000).toFixed(2) + 'C'
        : // Five Zeroes for Lakhs
        val >= 100000
        ? (val / 100000).toFixed(2) + 'L'
        : val;
    } else {
      return val + '';
    }
  }
  // adding comma to the bigger numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <Crypto.Provider
      value={{
        currency,
        setCurrency,
        symbol,
        setSymbol,
        mode,
        setMode,
        convertToInternationalCurrencySystem,
        numberWithCommas,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
