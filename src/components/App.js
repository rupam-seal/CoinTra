import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coins from './Coins';
import Search from './Search';
import '../static/css/App.css';
import '../static/css/Colors.css';

const App = () => {
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
    <div className="app__container">
      <div className="app__title">
        Today's Cryptocurrency Prices by Market Cap
      </div>
      {/* lifting the state up */}
      <Search search={search} handleSearch={handleSearch} />
      {/* passing filtered coins array to Coins component */}
      <Coins filterdCoins={filterdCoins} />
    </div>
    // ========= app container end =========
  );
};

export default App;
