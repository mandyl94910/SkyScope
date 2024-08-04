import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js components
import styles from '../css/hourlyforecastchart.module.css'; // Import CSS module

const HourlyForecastChart = ({ hourlyForecast }) => {
  const data = {
    labels: hourlyForecast.map(forecast => 
      new Date(forecast.DateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    ),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: hourlyForecast.map(forecast => forecast.Temperature.Value),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: false,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointLabelFontSize: 16
      }
    ]
  };

  const options = {
    responsive: true,
    animation: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.raw} °C`;
          }
        }
      },
      datalabels: {
        display: true,
        align: 'top',
        formatter: function(value, context) {
          return `${value} °C`;
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)'
        },
        ticks: {
          callback: function(value) {
            return value + '°C';
          }
        }
      }
    }
  };

  return (
    <div className={styles.chartContainer}>
      <Line data={data} options={options} />
    </div>
  );
};

export default HourlyForecastChart;
