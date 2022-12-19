import React, { memo } from 'react';
import '../static/css/Coins.css';
import PercentageChange from '../utils/CoinsPercentageChange';

const Coins = memo(({ filterdCoins }) => {
  const content = filterdCoins.map((coin) => {
    const symbol = coin.symbol;
    return (
      // ========= coin item start =========
      <div className="coin" key={coin.id}>
        <div className="coin__container">
          <div className="coin__image-container">
            <img className="coin__image" src={coin.image} alt="coin"></img>
          </div>

          <div className="coin__item coin__item-start">{coin.name}</div>
          <div
            className="coin__item coin__item-start"
            style={{ width: '6rem' }}
          >
            {symbol.toUpperCase()}
          </div>
          <div className="coin__item coin__item-end">${coin.current_price}</div>
          <div className="coin__item coin__item-end">${coin.market_cap}</div>
          <div className="coin__item coin__item-end">${coin.total_volume}</div>
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
        <div className="coin__container">
          <div className="coin__image-container">
            <img className=""></img>
          </div>

          <div className="coin__item coin__item-start">Name</div>
          <div
            className="coin__item coin__item-start"
            style={{ width: '6rem' }}
          >
            Symbol
          </div>
          <div className="coin__item coin__item-end">Price</div>
          <div className="coin__item coin__item-end">Market Cap</div>
          <div className="coin__item coin__item-end">Volume(24h)</div>
          <div className="coin__item coin__item-end">24h %</div>
        </div>
      </div>
      <div>{content}</div>
    </>
  );
});

export default Coins;
