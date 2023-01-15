import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { HistoricalChart } from '../config/api';
import { Filler } from 'chart.js';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
import { CryptoState } from '../utils/CryptoContext';
import { chartDays } from '../config/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const CoinChart = ({ id }) => {
  const [coin, setCoin] = useState();
  const [days, setDays] = useState(30);
  const [active, setActive] = useState(1);

  const { currency } = CryptoState();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // console.log(id);
  useEffect(() => {
    axios
      .get(HistoricalChart(id, days, currency))
      .then((request) => {
        setCoin(request.data);
        console.log(coin);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currency, days]);

  const coinChartData = coin?.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    elements: {
      point: {
        radius: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
  };

  const data = {
    labels: coinChartData?.map((val) => moment(val.x).format('DD')),
    datasets: [
      {
        label: `Price ( Past ${days} Days ) in ${currency}`,
        fill: true,
        borderColor: 'rgb(176, 135, 255)',
        backgroundColor: 'rgba(176, 135, 255, 0.2)',
        data: coinChartData?.map((val) => val.y),
      },
    ],
  };

  return (
    <div className="chart">
      <span className="chart__header">
        {capitalizeFirstLetter(id)} to {currency.toUpperCase()} Chart
      </span>
      <div className="chart__toggle-container">
        <div className="chart__toggle">
          {chartDays.map((day) => (
            <div
              className={active == day.value ? 'active' : 'toggle'}
              key={day.value}
              onClick={() => {
                setDays(day.value);
                setActive(day.value);
              }}
            >
              {day.label}
            </div>
          ))}
        </div>
      </div>
      <div className="chart__canvas">
        <Line options={options} data={data} width="100%" />
      </div>
    </div>
  );
};

export default CoinChart;
