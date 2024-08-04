//SkyScope/src/components/Weatherchart.js
import React from 'react';
import { icons, iconTexts } from '../../public/assets/icons/iconIndex'; // 确保路径正确
import styles from '../css/weatherchart.module.css'; // Import CSS module

const WeatherChart = ({ dailyForecast }) => {
  return (
    <div className={styles.weatherChart}>
      <ul className={styles.chartList}>
        {dailyForecast.map((day, index) => (
          <li key={index} className={styles.chartItem}>
            <div className={styles.date}>
              <div className={styles.weekday}>
                {new Date(day.Date).toLocaleDateString(undefined, { weekday: 'long' })}
              </div>
              <div className={styles.monthDay}>
                {new Date(day.Date).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
              </div>
            </div>
            <div className={styles.weatherIcon}>
              <img className={styles.weatherIcon} src={icons[day.Day.Icon]} alt={iconTexts[day.Day.Icon]} />
            </div>
            <div className={styles.weatherText}>
              <span>{iconTexts[day.Day.Icon]}</span>
            </div>
            <div className={styles.temperature}>
              <div className={styles.tempRow}>
                <span className={styles.highTemp}>High: {day.Temperature.Maximum.Value}°C</span>
                <span className={styles.tempSpace}></span>
                <span className={styles.lowTemp}>Low: {day.Temperature.Minimum.Value}°C</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherChart;
