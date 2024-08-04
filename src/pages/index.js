import React, { useState } from 'react';
import Weather from '../components/Weather'; // Import the Weather component
import styles from '../css/index.module.css'; // Import the CSS module

const App = () => {
  const [city, setCity] = useState(''); // State to hold the city name

  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.city.value; // Get city value from form
    setCity(city); // Update state with new city name
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.headerLeft}>
          <img className={styles.AppLogo} src="/assets/icons/weather-forecast-sign-16552.png" alt="Weather Icon" /> {/* Display weather icon */}
          <h1 className={styles.AppTitle}>SkyScope</h1>
        </div>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <input type="text" name="city" placeholder="Enter city" />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <Weather city={city} /> {/* Render Weather component with city prop */}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 SkyScope. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
