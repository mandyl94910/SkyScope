// src/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [dailyForecast, setDailyForecast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cityName, setCityName] = useState('');

    const apiKey = 'BTYZ5eALVp2bqivFbaRd1iNECLAnv1qZ';

    useEffect(() => {
        const fetchLocationKey = async (city) => {
            try {
                const locationResponse = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/search`, {
                    params: {
                        apikey: apiKey,
                        q: city
                    }
                });
                const location = locationResponse.data[0];
                setCityName(location.LocalizedName);
                return location.Key;
            } catch (error) {
                console.error('Error fetching location key:', error);
                setError(error);
                setLoading(false);
            }
        };

        const fetchWeatherData = async (locationKey) => {
            try {
                const weatherResponse = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
                    params: {
                        apikey: apiKey,
                        details: true
                    }
                });
                setCurrentWeather(weatherResponse.data[0]);
                
                const hourlyResponse = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}`, {
                    params: {
                        apikey: apiKey,
                        metric: true
                    }
                });
                setHourlyForecast(hourlyResponse.data);
                
                const dailyResponse = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`, {
                    params: {
                        apikey: apiKey,
                        metric: true
                    }
                });
                setDailyForecast(dailyResponse.data.DailyForecasts);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setError(error);
                setLoading(false);
            }
        };

        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        const { latitude, longitude } = position.coords;
                        fetchLocationKeyByCoords(latitude, longitude).then(locationKey => {
                            if (locationKey) {
                                fetchWeatherData(locationKey);
                            }
                        });
                    },
                    error => {
                        console.error('Error fetching geolocation:', error);
                        setError(error);
                        setLoading(false);
                    }
                );
            } else {
                setError(new Error('Geolocation is not supported by this browser.'));
                setLoading(false);
            }
        };

        const fetchLocationKeyByCoords = async (latitude, longitude) => {
            try {
                const locationResponse = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search`, {
                    params: {
                        apikey: apiKey,
                        q: `${latitude},${longitude}`
                    }
                });
                const location = locationResponse.data;
                setCityName(location.ParentCity ? location.ParentCity.LocalizedName : location.LocalizedName);
                return location.Key;
            } catch (error) {
                console.error('Error fetching location key:', error);
                setError(error);
                setLoading(false);
            }
        };

        if (city) {
            fetchLocationKey(city).then(locationKey => {
                if (locationKey) {
                    fetchWeatherData(locationKey);
                }
            });
        } else {
            getUserLocation();
        }
    }, [city, apiKey]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Weather in {cityName}</h1>
            {currentWeather && (
                <>
                    <p>Temperature: {currentWeather.Temperature.Metric.Value} °C</p>
                    <p>Weather: {currentWeather.WeatherText}</p>
                    <p>Wind Speed: {currentWeather.Wind.Speed.Metric.Value} km/h</p>
                    <p>Visibility: {currentWeather.Visibility.Metric.Value} km</p>
                    <p>UV Index: {currentWeather.UVIndex}</p>
                    <p>Humidity: {currentWeather.RelativeHumidity} %</p>
                </>
            )}
            <h2>12-Hour Forecast</h2>
            <ul>
                {hourlyForecast.map((hour, index) => (
                    <li key={index}>
                        {hour.DateTime}: {hour.Temperature.Value} °C, {hour.IconPhrase}
                    </li>
                ))}
            </ul>
            <h2>5-Day Forecast</h2>
            <ul>
                {dailyForecast.map((day, index) => (
                    <li key={index}>
                        {day.Date}: {day.Temperature.Minimum.Value} °C - {day.Temperature.Maximum.Value} °C, {day.Day.IconPhrase}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Weather;
