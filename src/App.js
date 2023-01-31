import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// PAGES
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
// COMPONENTS
import Topbar from './components/Topbar';
import Cookies from './components/Cookies';

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
      <Cookies />
    </BrowserRouter>
  );
};

export default App;
