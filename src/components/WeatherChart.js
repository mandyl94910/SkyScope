import React from 'react';
import '../css/WeatherChart.css'; 

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
              <img src={`path_to_your_icons/${day.Day.Icon}.png`} alt={day.Day.IconPhrase} /> {/* 替换为实际的图标路径 */}
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
