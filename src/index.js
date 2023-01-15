import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
// common css
import './assets/common/Colors.css';
import './assets/common/Table.css';
import './assets/common/Main.css';
import './assets/common/Topbar.css';
// home page css
import './assets/homepage/Home.css';
import './assets/homepage/Search.css';
// single coins page css
import './assets/coinpage/CoinPage.css';

import CryptoContext from './utils/CryptoContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CryptoContext>
    <App />
  </CryptoContext>
);
