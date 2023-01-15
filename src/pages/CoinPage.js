import axios from 'axios';
import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SingleCoin } from '../config/api';
// GLOBAL STATE
import { CryptoState } from '../utils/CryptoContext';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';
import CoinChart from '../components/CoinChart';
//     "build": "react-scripts build",
const CoinPage = memo(() => {
  // data state
  const [coin, setCoin] = useState();
  // get coin id
  const { id } = useParams();
  // global state
  const { symbol, currency } = CryptoState();

  // ======== FETCH COIN ==========
  useEffect(() => {
    axios
      .get(SingleCoin(id))
      .then((request) => {
        setCoin(request.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  // ======== FETCH COIN ==========

  const { convertToInternationalCurrencySystem } = CryptoState();

  console.log(coin);

  // ======== FETCH COINLIST ==========

  if (coin !== undefined) {
    return (
      <>
        <div className="item">
          <div className="item__info">
            <img
              src={coin?.image.large}
              className="item__info-img"
              alt=""
            ></img>
            {/* <span className="item__info-rank">{coin?.market_cap_rank}</span> */}
            <div className="item__container">
              <div className="item__name-container1">
                <span className="item__info-name">{coin?.name}</span>
                <div className="item__info-symbol-container">
                  <div className="item__info-symbol">
                    {coin?.symbol.toUpperCase()}
                  </div>
                </div>
              </div>
              <div className="item__name-container2">
                <div className="item__info-symbol-container">
                  <div className="item__info-symbol">
                    Rank #{coin?.market_cap_rank}
                  </div>
                </div>
                <div className="item__info-score-container">
                  <div className="item__info-score">
                    Score {parseFloat(coin?.coingecko_score).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <span className="item__info-price">
              {coin?.market_data.current_price[currency.toLowerCase()]}
            </span>
            <span className="item__info-market"></span>
            <span className="item__info-volume"></span>
            <span className="item__info-24hr"></span> */}
            <div className="item__price">
              <span className="item__price-title">
                Price ({coin?.symbol.toUpperCase()})
              </span>
              <div className="item__price-container">
                <span className="item__price-container-price">
                  {symbol}
                  {coin?.market_data.current_price[currency.toLowerCase()]}
                </span>
                <div
                  className="item__price-container-24hr"
                  style={{
                    backgroundColor:
                      coin?.market_data.price_change_percentage_24h < 0
                        ? 'var(--colorLoss)'
                        : 'var(--colorProfit)',
                  }}
                >
                  <div className="col__arrow">
                    {coin?.market_data.price_change_percentage_24h < 0 ? (
                      <VscTriangleDown style={{ marginRight: '0.5rem' }} />
                    ) : (
                      <VscTriangleUp style={{ marginRight: '0.5rem' }} />
                    )}
                  </div>
                  <div className="col__per">
                    {' '}
                    {parseFloat(
                      coin?.market_data.price_change_percentage_24h
                    ).toFixed(2)}
                    %
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="card card1">
              <div className="card__container">
                <div className="card__container-item">
                  <span className="card__left">High 24h</span>
                  <span
                    className="card__right"
                    style={{ color: 'var(--colorProfit)' }}
                  >
                    <div className="col__arrow">
                      <VscTriangleUp />
                    </div>
                    {symbol}
                    {coin?.market_data.high_24h[currency.toLowerCase()]}
                  </span>
                </div>
                <div className="card__container-item">
                  <span className="card__left">Low 24h</span>
                  <span
                    className="card__right"
                    style={{ color: 'var(--colorLoss)' }}
                  >
                    <div className="col__arrow">
                      <VscTriangleDown />
                    </div>
                    {symbol}
                    {coin?.market_data.low_24h[currency.toLowerCase()]}
                  </span>
                </div>
              </div>
            </div>

            <div className="card card2">
              <div className="card__container">
                <div className="card__container-item">
                  <span className="card__left">Market Cap</span>
                  <div className="card__right">
                    {convertToInternationalCurrencySystem(
                      coin?.market_data.market_cap[currency.toLowerCase()]
                    )}

                    <div
                      style={{
                        color:
                          coin?.market_data.price_change_percentage_24h < 0
                            ? 'var(--colorLoss)'
                            : 'var(--colorProfit)',
                        fontSize: '1.2rem',
                        display: 'flex',
                      }}
                    >
                      <div className="col__arrow">
                        {coin?.market_data.price_change_percentage_24h < 0 ? (
                          <VscTriangleDown style={{ marginRight: '0.5rem' }} />
                        ) : (
                          <VscTriangleUp style={{ marginRight: '0.5rem' }} />
                        )}
                      </div>
                      (
                      {parseFloat(
                        coin?.market_data.market_cap_change_percentage_24h
                      ).toFixed(2)}
                      %)
                    </div>
                  </div>
                </div>
                <div className="card__container-item">
                  <span className="card__left">Volume</span>
                  <span className="card__right">
                    {convertToInternationalCurrencySystem(
                      coin?.market_data.total_volume[currency.toLowerCase()]
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="card card3">
              <div className="card__container">
                <div className="card__container-item">
                  <span className="card__left">Total Supply</span>
                  <span className="card__right">
                    {convertToInternationalCurrencySystem(
                      coin?.market_data.total_supply
                    )}
                  </span>
                </div>
                <div className="card__container-item">
                  <span className="card__left">Circulating Supply</span>
                  <span className="card__right">
                    {convertToInternationalCurrencySystem(
                      coin?.market_data.circulating_supply
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <CoinChart id={id} />
        </div>
      </>
    );
  }
});

export default CoinPage;
