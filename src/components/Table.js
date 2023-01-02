import React, { memo } from 'react';
import { CryptoState } from '../utils/CryptoContext';
import TableRow from './TableRow';

const Table = memo(({ filterdCoins, symbol, page, setPage }) => {
  const { convertToInternationalCurrencySystem, numberWithCommas } =
    CryptoState();
  const content = filterdCoins
    // Slicing for pagination
    .slice((page - 1) * 20, (page - 1) * 20 + 20)
    .map((coin, index) => {
      return (
        <div key={coin.id}>
          {/* ========= TABLE RAW START ========= */}
          <TableRow
            id={coin.id}
            rank={coin.market_cap_rank}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={
              symbol +
              numberWithCommas(parseFloat(coin.current_price).toFixed(2))
            }
            market={
              symbol + convertToInternationalCurrencySystem(coin.market_cap)
            }
            volume={
              symbol + convertToInternationalCurrencySystem(coin.total_volume)
            }
            price_24hr={parseFloat(coin.price_change_percentage_24h).toFixed(2)}
            price_7d={parseFloat(coin.price_change_percentage_24h).toFixed(2)}
          />
          {/* ========= TABLE RAW END ========= */}
        </div>
      );
    });
  // ========= JSX =========
  return (
    <>
      {/* ========= TABLE HEADER START ========= */}
      <div className="table__row table__row-header">
        <span className="col col__1">#</span>
        <span className="col col__2">Name</span>
        <span className="col col__3">Price</span>
        <span className="col col__4">Market Cap</span>
        <span className="col col__5">Market Cap</span>
        <span className="col col__6">24hr</span>
        <span className="col col__7">7d</span>
      </div>
      {/* ========= TABLE HEADER END ========= */}
      <div>{content}</div>
    </>
  );
});

export default Table;
