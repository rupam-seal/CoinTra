import React, { memo } from 'react';
// REACT ROUTER DOM
import { useNavigate } from 'react-router-dom';
// GLOBAL STATE CONTEXT
import { CryptoState } from '../utils/CryptoContext';
// THEME
import Theme from './Theme';

const Topbar = memo(() => {
  // redirect to homepage
  const redirectToHomePage = useNavigate();

  // global state context
  const { currency, setCurrency } = CryptoState();

  // console.log(currency);
  return (
    // ========== topbar start ==========
    <div className="topbar">
      <div className="topbar__container">
        {/* LOGO */}
        <div onClick={() => redirectToHomePage('/')} className="topbar__logo">
          <div className="topbar__logo-round"></div>
          <span>
            <span className="topbar__logo-highlight">Coin</span>Tra
          </span>
        </div>
        <div className="topbar__right">
          {/* SELECT CURRENCY */}
          <select
            className="currency__selector"
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
            }}
          >
            <option className="currency__option" value={'USD'}>
              USD
            </option>
            <option className="currency__option" value={'INR'}>
              INR
            </option>
          </select>
          {/* CHANGE THEME */}
          <Theme />
        </div>
      </div>
    </div>
    // ========== topbar start ==========
  );
});

export default Topbar;
