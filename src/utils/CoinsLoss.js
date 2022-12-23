import React, { memo } from 'react';

const Loss = memo(({ percentage }) => {
  return (
    // ========= blur item start =========
    <>
      {/* <div className="blur blur__1 blur__1--loss"></div>
      <div className="blur blur__2 blur__1--loss"></div> */}
      <div className="table__item table__item-end table__item-loss table__item-24h">
        {percentage}%
      </div>
    </>
    // ========= blur item end =========
  );
});

export default Loss;
