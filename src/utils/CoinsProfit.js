import React from 'react';

const Profit = ({ percentage }) => {
  return (
    // ========= blur item start =========
    <>
      <div className="blur blur__1 blur__1--profit"></div>
      <div className="blur blur__2 blur__2--profit"></div>
      <div className="coin__item coin__item-end coin__item-up">
        {percentage}%
      </div>
    </>
    // ========= blur item loss =========
  );
};

export default Profit;
