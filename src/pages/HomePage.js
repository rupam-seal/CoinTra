import React, { useEffect, useState } from 'react';
// COMPONENTS
import Table from '../components/Table';
import Search from '../components/Search';
// API
import axios from 'axios';
import { CoinList } from '../config/api';
// GLOBAL STATE
import { CryptoState } from '../utils/CryptoContext';

const HomePage = () => {
  // coin item state
  const [coins, setCoins] = useState([]);
  // search state
  const [search, setSearch] = useState('');
  // pagination state
  const [page, setPage] = useState(1);

  // global state
  const { currency, symbol } = CryptoState();

  // ======== FETCH COINLIST ==========
  useEffect(() => {
    // console.log('STATE: UP');
    axios
      .get(CoinList(currency))
      .then((request) => {
        setCoins(request.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency]);

  // ======== FETCH COINLIST ==========

  // ======== SEARCH ========
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  // ======== SEARCH ========

  // ========== filtered coin from state arrray ==========
  const filterdCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });
  // ========== filtered coin from state arrray ==========

  // console.log(mode);

  return (
    // JSX
    // ========= app container start =========
    <div className="home">
      <span className="table__header">
        Today's Cryptocurrency Prices by Market Cap
      </span>
      {/* lifting the state up */}
      <Search search={search} handleSearch={handleSearch} />
      {/* passing filtered coins array to Coins component */}
      <Table
        filterdCoins={filterdCoins}
        symbol={symbol}
        page={page}
        setPage={setPage}
      />
      {/* pagination */}
    </div>
    // ========= app container end =========
  );
};

export default HomePage;
