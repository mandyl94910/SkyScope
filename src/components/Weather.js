import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherChart from './WeatherChart';
import HourlyForecastChart from './HourlyForecastChart';
import { icons, iconTexts } from '../../public/assets/icons/iconIndex'; // 确保路径正确
import styles from '../css/currentweather.module.css'; // 引入CSS模块
// import { generateFakeWeatherData, generateFakeHourlyForecast, generateFakeDailyForecast } from '../mockData'; // 使用假数据部分

const Weather = ({ city }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cityName, setCityName] = useState('');

  const apiKey = 'BTYZ5eALVp2bqivFbaRd1iNECLAnv1qZ';
  // const useMockData = process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true';

  // useEffect(() => {
  //   if (useMockData) {
  //     console.log('Using mock data:', useMockData);
  //     setCurrentWeather(generateFakeWeatherData());
  //     setHourlyForecast(generateFakeHourlyForecast());
  //     setDailyForecast(generateFakeDailyForecast());
  //     setCityName(city || 'Mock City');
  //     setLoading(false);
  //   } else {
  //     const fetchLocationKey = async (city) => {
  //       try {
  //         const locationResponse = await axios.get('https://dataservice.accuweather.com/locations/v1/cities/search', {
  //           params: {
  //             apikey: apiKey,
  //             q: city,
  //           },
  //         });
  //         const location = locationResponse.data[0];
  //         setCityName(location.LocalizedName);
  //         return location.Key;
  //       } catch (error) {
  //         console.error('Error fetching location key:', error);
  //         setError(error);
  //         setLoading(false);
  //       }
  //     };

  //     const fetchWeatherData = async (locationKey) => {
  //       try {
  //         const weatherResponse = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}`, {
  //           params: {
  //             apikey: apiKey,
  //             details: true,
  //           },
  //         });
  //         setCurrentWeather(weatherResponse.data[0]);

  //         const hourlyResponse = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}`, {
  //           params: {
  //             apikey: apiKey,
  //             metric: true,
  //           },
  //         });
  //         setHourlyForecast(hourlyResponse.data);

  //         const dailyResponse = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`, {
  //           params: {
  //             apikey: apiKey,
  //             metric: true,
  //           },
  //         });
  //         setDailyForecast(dailyResponse.data.DailyForecasts);

  //         setLoading(false);
  //       } catch (error) {
  //         console.error('Error fetching weather data:', error);
  //         setError(error);
  //         setLoading(false);
  //       }
  //     };

  //     const getUserLocation = () => {
  //       if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(
  //           (position) => {
  //             const { latitude, longitude } = position.coords;
  //             fetchLocationKeyByCoords(latitude, longitude).then((locationKey) => {
  //               if (locationKey) {
  //                 fetchWeatherData(locationKey);
  //               }
  //             });
  //           },
  //           (error) => {
  //             console.error('Error fetching geolocation:', error);
  //             setError(error);
  //             setLoading(false);
  //           }
  //         );
  //       } else {
  //         setError(new Error('Geolocation is not supported by this browser.'));
  //         setLoading(false);
  //       }
  //     };

  //     const fetchLocationKeyByCoords = async (latitude, longitude) => {
  //       try {
  //         const locationResponse = await axios.get('https://dataservice.accuweather.com/locations/v1/cities/geoposition/search', {
  //           params: {
  //             apikey: apiKey,
  //             q: `${latitude},${longitude}`,
  //           },
  //         });
  //         const location = locationResponse.data;
  //         setCityName(location.ParentCity ? location.ParentCity.LocalizedName : location.LocalizedName);
  //         return location.Key;
  //       } catch (error) {
  //         console.error('Error fetching location key:', error);
  //         setError(error);
  //         setLoading(false);
  //       }
  //     };

  //     if (city) {
  //       fetchLocationKey(city).then((locationKey) => {
  //         if (locationKey) {
  //           fetchWeatherData(locationKey);
  //         }
  //       });
  //     } else {
  //       getUserLocation();
  //     }
  //   }
  // }, [city, apiKey, useMockData]);

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

  if (currentWeather) {
    console.log('Icon Path:', icons[currentWeather.WeatherIcon]);
    console.log('Icon Alt Text:', iconTexts[currentWeather.WeatherIcon]);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-4">Weather in {cityName}</h1>
      {currentWeather && (
        <div className={styles.chartItem}>
          <div className={styles.currentWeatherTemp}>
            <h1 className={styles.customFontSize}>{currentWeather.Temperature.Metric.Value} °C</h1>
          </div>
          <div className={styles.currentWeatherIcon}>
            <img className={styles.weatherIcon} src={icons[currentWeather.WeatherIcon]} alt={iconTexts[currentWeather.WeatherIcon]} />
          </div>
          <div className={styles.currentWeatherDetails}>
            <ul className={styles.noBullets}>
              <li>Weather: {currentWeather.WeatherText}</li>
              <li>Wind Speed: {currentWeather.Wind.Speed.Metric.Value} km/h</li>
              <li>Visibility: {currentWeather.Visibility.Metric.Value} km</li>
              <li>UV Index: {currentWeather.UVIndex}</li>
              <li>Humidity: {currentWeather.RelativeHumidity} %</li>
            </ul>
          </div>
        </div>
      )}
      <h2 className="text-2xl font-semibold mt-6 mb-4">12-Hour Forecast</h2>
      <HourlyForecastChart hourlyForecast={hourlyForecast} />
      <h2 className="text-2xl font-semibold mt-6 mb-4">5-Day Forecast</h2>
      <WeatherChart dailyForecast={dailyForecast} />
    </div>
  );
};

export default Weather;
