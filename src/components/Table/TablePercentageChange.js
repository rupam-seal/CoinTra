import React, { memo } from 'react';
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';

const TablePercentageChange = memo(({ percentageClass, percentage }) => {
  // percantage: changed in price in 24 hour
  if (percentage < 0) {
    // console.log('LOSS');
    return (
      <>
        {/* <div className="blur blur__1 blur__1--loss"></div>
      <div className="blur blur__2 blur__1--loss"></div> */}

        <div className={'col__loss ' + percentageClass}>
          <div className="col__per">{percentage}%</div>
          <div className="col__arrow">{<VscTriangleDown />}</div>
        </div>
      </>
    );
  } else {
    // console.log('PROFIT');
    return (
      <>
        {/* <div className="blur blur__1 blur__1--profit"></div>
      <div className="blur blur__2 blur__2--profit"></div> */}
        <div className={'col__profit ' + percentageClass}>
          <div className="col__per">{percentage}%</div>
          <div className="col__arrow">{<VscTriangleUp />}</div>
        </div>
      </>
    );
  }
});

export default TablePercentageChange;
