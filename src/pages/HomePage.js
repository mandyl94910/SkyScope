import React, { useState } from 'react';
import Weather from '../components/Weather'; // Import the Weather component
import '../css/App.css'; // Import the CSS for styling
import weatherIcon from '../assets/icons/weather-forecast-sign-16552.png'; // Import the weather icon

const App = () => {
  const [city, setCity] = useState(''); // State to hold the city name

  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.city.value; // Get city value from form
    setCity(city); // Update state with new city name
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-left">
          <img className="App-logo" src={weatherIcon} alt="Weather Icon" /> {/* Display weather icon */}
          <h1 className="App-title">SkyScope</h1>
        </div>
        <form className="search-form" onSubmit={handleSearch}>
          <input type="text" name="city" placeholder="Enter city" />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <Weather city={city} /> {/* Render Weather component with city prop */}
      </main>
      <footer>
        <p>&copy; 2024 SkyScope. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
