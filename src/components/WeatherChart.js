import React from 'react';
import '../css/WeatherChart.css'; 
import { icons, iconTexts } from '../assets/icons'; // Import icon mappings and text descriptions

// WeatherChart component to display daily forecast data
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
              {/* Display weather icon based on the day's data */}
              <img className="weather-icon" src={icons[day.Day.Icon]} alt={day.Day.IconPhrase} />
            </div>
            <div className="weather-text">
              {/* Show corresponding text for the weather icon */}
              <span>{iconTexts[day.Day.Icon]}</span>
            </div>
            <div className="temperature">
              <div className="temp-row">
                {/* Display high and low temperatures */}
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
