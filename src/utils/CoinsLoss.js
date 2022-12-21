import React, { memo } from 'react';

const Loss = memo(({ percentage }) => {
  return (
    // ========= blur item start =========
    <>
      {/* <div className="blur blur__1 blur__1--loss"></div>
      <div className="blur blur__2 blur__1--loss"></div> */}
      <div className="coin__item coin__item-end coin__item-down">
        {percentage}%
      </div>
    </>
    // ========= blur item end =========
  );
});

export default Loss;
