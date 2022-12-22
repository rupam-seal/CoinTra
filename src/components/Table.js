import React, { memo } from 'react';
import './css/Coins.css';
import TablePercentageChange from './TablePercentageChange';

const Table = memo(({ filterdCoins }) => {
  const content = filterdCoins.map((coin, index) => {
    const symbol = coin.symbol;
    return (
      // ========= coin item start =========
      <div className="coin" key={coin.id}>
        <div className="table__container">
          <div className="table__item table__item-number">{index + 1}</div>
          <div className="table__image-container">
            <img
              className="table__image"
              src={coin.image}
              alt="cryptocurrency coin"
            />
          </div>

          <div className="table__item table__item-name">{coin.name}</div>
          <div className="table__item table__item-symbol">
            {symbol.toUpperCase()}
          </div>
          <div className="table__item table__item-price">
            ${parseFloat(coin.current_price).toFixed(2)}
          </div>
          <div className="table__item table__item-market">
            ${coin.market_cap}
          </div>
          <div className="table__item table__item-volume">
            ${coin.total_volume}
          </div>
          {/* 
            condition for percentage
            passing price percentage change in 24 hour
            if percentage is negetive it will return loss
            else it will return negetive value
          */}
          <TablePercentageChange
            percentage={parseFloat(coin.price_change_percentage_24h).toFixed(2)}
          />
        </div>
      </div>
      // ========= coin item end =========
    );
  });
  // ========= JSX =========
  return (
    <>
      <div className="coin">
        <div className="table__container">
          <div className="table__item table__item-number">No.</div>
          <div className="table__image-container"></div>
          <div className="table__item table__item-name">Name</div>
          <div className="table__item table__item-symbol">Symbol</div>
          <div className="table__item table__item-price">Price</div>
          <div className="table__item table__item-market">Market Cap</div>
          <div className="table__item table__item-volume">Volume(24h)</div>
          <div className="table__item table__item-24h">24h %</div>
        </div>
      </div>
      <div>{content}</div>
    </>
  );
});

export default Table;
