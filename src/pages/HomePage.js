import React, { useState } from 'react';
import Weather from '../components/Weather';
import '../css/App.css';
import weatherIcon from '../assets/icons/weather-forecast-sign-16552.png'; // 引入图片

const App = () => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    setCity(city);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
            <img className="App-logo" src={weatherIcon} alt="Description of image" /> {/* 使用引入的图片 */}
            <h1 className="App-title">SkyScope</h1>
        </div>
        <form className="search-form" onSubmit={handleSearch}>
          <input type="text" name="city" placeholder="Enter city" />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <Weather city={city} />
      </main>
      <footer>
        <p>&copy; 2024 SkyScope. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
