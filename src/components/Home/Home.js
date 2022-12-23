import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../Table/Table';
import Search from './Search';
import '../css/Home.css';
import '../css/Colors.css';
import Theme from '../../utils/Theme';

const Home = () => {
  // coin item state
  const [coins, setCoins] = useState([]);
  // search state
  const [search, setSearch] = useState('');

  useEffect(() => {
    // console.log('STATE: UP');
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((request) => {
        setCoins(request.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // filtered coin from state arrray
  const filterdCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    // ========= app container start =========
    <div className="home">
      <div className="topbar">
        <div className="topbar__container">
          <span className="topbar__title">CoinTra</span>
          <Theme />
        </div>
      </div>
      <span className="table__header">
        Today's Cryptocurrency Prices by Market Cap
      </span>
      {/* lifting the state up */}
      <Search search={search} handleSearch={handleSearch} />
      {/* passing filtered coins array to Coins component */}
      <Table filterdCoins={filterdCoins} />
    </div>
    // ========= app container end =========
  );
};

export default Home;
