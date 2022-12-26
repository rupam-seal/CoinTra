import React, { useEffect, useState } from 'react';
import { createTheme, Pagination, ThemeProvider } from '@mui/material';
// COMPONENTS
import Table from '../components/table/Table';
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
  const { currency, symbol, mode } = CryptoState();

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

  const darkTheme = createTheme({
    palette: {
      // changed mode (dark/light)
      // when main theme changed
      mode: mode,
      secondary: {
        main: '#16C784',
      },
    },
  });

  return (
    // JSX
    // ========= app container start =========
    <ThemeProvider theme={darkTheme}>
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
        <div className="pagination">
          <Pagination
            count={Number((filterdCoins?.length / 20).toFixed(0))}
            variant="outlined"
            color="secondary"
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, '450px');
            }}
          />
        </div>
      </div>
    </ThemeProvider>
    // ========= app container end =========
  );
};

export default HomePage;
