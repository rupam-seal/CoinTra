import React, { memo } from 'react';
import '../static/css/Coins.css';
import PercentageChange from '../utils/CoinsPercentageChange';

const Coins = memo(({ filterdCoins }) => {
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

          <div className="table__item table__item-start">{coin.name}</div>
          <div className="table__item table__item-symbol table__item-start">
            {symbol.toUpperCase()}
          </div>
          <div className="table__item table__item-end table__item-price">
            ${coin.current_price}
          </div>
          <div className="table__item table__item-end">${coin.market_cap}</div>
          <div className="table__item table__item-end">
            ${coin.total_volume}
          </div>
          {/* 
            condition for percentage
            passing price percentage change in 24 hour
            if percentage is negetive it will return loss
            else it will return negetive value
          */}
          <PercentageChange
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

          <div className="table__item table__item-start">Name</div>
          <div className="table__item table__item-symbol table__item-start">
            Symbol
          </div>
          <div className="table__item table__item-end table__item-price">
            Price
          </div>
          <div className="table__item table__item-end">Market Cap</div>
          <div className="table__item table__item-end">Volume(24h)</div>
          <div className="table__item table__item-end table__item-24h">
            24h %
          </div>
        </div>
      </div>
      <div>{content}</div>
    </>
  );
});

export default Coins;
