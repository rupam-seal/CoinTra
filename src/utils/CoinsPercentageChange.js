import React, { memo } from 'react';
import Loss from './CoinsLoss';
import Profit from './CoinsProfit';

const PercentageChange = memo(({ percentage }) => {
  // percantage: changed in price in 24 hour
  if (percentage < 0) {
    // console.log('LOSS');
    return <Loss percentage={percentage} />;
  } else {
    // console.log('PROFIT');
    return <Profit percentage={percentage} />;
  }
});

export default PercentageChange;
