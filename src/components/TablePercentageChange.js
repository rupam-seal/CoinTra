import React, { memo } from 'react';

const TablePercentageChange = memo(({ percentage }) => {
  // percantage: changed in price in 24 hour
  if (percentage < 0) {
    // console.log('LOSS');
    return (
      <>
        {/* <div className="blur blur__1 blur__1--loss"></div>
      <div className="blur blur__2 blur__1--loss"></div> */}
        <div className="table__item table__item-loss table__item-24h">
          {percentage}%
        </div>
      </>
    );
  } else {
    // console.log('PROFIT');
    return (
      <>
        {/* <div className="blur blur__1 blur__1--profit"></div>
      <div className="blur blur__2 blur__2--profit"></div> */}
        <div className="table__item table__item-profit table__item-24h">
          {percentage}%
        </div>
      </>
    );
  }
});

export default TablePercentageChange;
