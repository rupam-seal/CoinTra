import React from 'react';
import ReactDOM from 'react-dom/client';

// PAGES
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
// COMPONENTS
import Topbar from './components/Topbar';

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
import './assets/coinpage/Coin.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CryptoContext from './utils/CryptoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CryptoContext>
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
    </BrowserRouter>
  </CryptoContext>
);
