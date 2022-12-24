import React, { memo } from 'react';
import '../css/Table.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = memo(({ filterdCoins }) => {
  // Converting number to million/thousands (million(M)/thousands(k))
  function convertToInternationalCurrencySystem(labelValue) {
    // Six Zeroes for Millions
    return Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'M'
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'K'
      : Math.abs(Number(labelValue));
  }
  // adding comma to the bigger numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  const content = filterdCoins.map((coin, index) => {
    return (
      <div key={coin.id}>
        <TableRow
          id={coin.id}
          index={index}
          image={coin.image}
          name={coin.name}
          symbol={coin.symbol}
          price={numberWithCommas(parseFloat(coin.current_price).toFixed(2))}
          market={convertToInternationalCurrencySystem(coin.market_cap)}
          volume={convertToInternationalCurrencySystem(coin.total_volume)}
          price_24hr={parseFloat(coin.price_change_percentage_24h).toFixed(2)}
          price_7d={parseFloat(coin.price_change_percentage_24h).toFixed(2)}
        />
      </div>
    );
  });
  // ========= JSX =========
  return (
    <>
      <TableHeader />
      <div>{content}</div>
    </>
  );
});

export default Table;
