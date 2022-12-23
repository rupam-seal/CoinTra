import React, { memo } from 'react';

const TablePercentageChange = memo(({ percentageClass, percentage }) => {
  // percantage: changed in price in 24 hour
  if (percentage < 0) {
    // console.log('LOSS');
    return (
      <>
        {/* <div className="blur blur__1 blur__1--loss"></div>
      <div className="blur blur__2 blur__1--loss"></div> */}
        <span className={'col__loss ' + percentageClass}>{percentage}%</span>
      </>
    );
  } else {
    // console.log('PROFIT');
    return (
      <>
        {/* <div className="blur blur__1 blur__1--profit"></div>
      <div className="blur blur__2 blur__2--profit"></div> */}
        <span className={'col__profit ' + percentageClass}>{percentage}%</span>
      </>
    );
  }
});

export default TablePercentageChange;
