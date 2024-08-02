import React from 'react';
import '../css/WeatherChart.css'; 
import { icons, iconTexts } from '../assets/icons'; // 导入图标映射和文本映射

const WeatherChart = ({ dailyForecast }) => {
  return (
    <div className="weather-chart">
      <ul className="chart-list">
        {dailyForecast.map((day, index) => (
          <li key={index} className="chart-item">
            <div className="date">
              <div className="weekday">
                {new Date(day.Date).toLocaleDateString(undefined, { weekday: 'long' })}
              </div>
              <div className="month-day">
                {new Date(day.Date).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
              </div>
            </div>
            <div className="weather-icon">
              <img className="weather-icon" src={icons[day.Day.Icon]} alt={day.Day.IconPhrase} /> {/* 使用图标映射 */}
            </div>
            <div className="weather-text" >
              <span>{iconTexts[day.Day.Icon]}</span> {/* 显示对应的文本 */}
            </div>
            <div className="temperature">
              <div className="temp-row">
                <span className="high-temp">High: {day.Temperature.Maximum.Value}°C</span>
                <span className="temp-space"></span>
                <span className="low-temp">Low: {day.Temperature.Minimum.Value}°C</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherChart;
