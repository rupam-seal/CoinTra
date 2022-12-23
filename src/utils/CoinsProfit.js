import React, { memo } from 'react';

const Profit = memo(({ percentage }) => {
  return (
    // ========= blur item start =========
    <>
      {/* <div className="blur blur__1 blur__1--profit"></div>
      <div className="blur blur__2 blur__2--profit"></div> */}
      <div className="table__item table__item-end table__item-profit table__item-24h">
        {percentage}%
      </div>
    </>
    // ========= blur item loss =========
  );
});

export default Profit;
