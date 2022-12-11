import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Coins from './Coins';
import Search from './Search';
import '../static/css/App.css';
import '../static/css/Colors.css';

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('Done');
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

  const filterdCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="app__container">
      <div className="app__title">
        Today's Cryptocurrency Prices by Market Cap
      </div>
      <Search search={search} handleSearch={handleSearch} />
      <Coins filterdCoins={filterdCoins} />
    </div>
  );
};

export default App;
