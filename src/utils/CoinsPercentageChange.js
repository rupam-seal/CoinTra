import React from 'react';
import Loss from './CoinsLoss';
import Profit from './CoinsProfit';

const PercentageChange = ({ percentage }) => {
  // percantage: changed in price in 24 hour
  var percentage = percentage;
  if (percentage < 0) {
    // console.log('LOSS');
    return <Loss percentage={percentage} />;
  } else {
    // console.log('PROFIT');
    return <Profit percentage={percentage} />;
  }
};

export default PercentageChange;
