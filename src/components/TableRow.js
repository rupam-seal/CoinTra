import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import TablePercentageChange from './TablePercentageChange';

const TableRow = memo(
  ({
    id,
    rank,
    image,
    name,
    symbol,
    price,
    market,
    volume,
    price_24hr,
    price_7d,
  }) => {
    const redirectToCoin = useNavigate();
    return (
      // ========= TABLE RAW START =========
      <div
        style={{ textDecoration: 'none' }}
        onClick={() => redirectToCoin(`/coins/${id}`)}
        className="table__row table__row-body"
        key={id}
      >
        <div className="col__1">{rank}</div>
        <div className="col__2">
          <img className="col__2-img" src={image} alt="cryptocurrency coin" />
          <div className="col__2-name-container">
            <div className="col__2-symbol">{symbol.toUpperCase()}</div>
            <div className="col__2-name">{name}</div>
          </div>
        </div>
        <div className="col__3">
          <span>{price}</span>
          <TablePercentageChange
            percentageClass={'col__3-percentage'}
            percentage={price_24hr}
          />
        </div>
        <div className="col__4">
          <span className="col__4-market">{market}</span>
          <span className="col__4-volume">{volume}</span>
        </div>
        <span className="col__5">{volume}</span>
        {/* 
        condition for percentage
        passing price percentage change in 24 hour
        if percentage is negetive it will return loss
        else it will return negetive value
      */}
        <TablePercentageChange
          percentageClass={'col__6'}
          percentage={price_24hr}
        />
        <TablePercentageChange
          percentageClass={'col__7'}
          percentage={price_7d}
        />
      </div>
      // ========= TABLE RAW END =========
    );
  }
);

export default TableRow;
