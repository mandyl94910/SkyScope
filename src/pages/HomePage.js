// src/HomePage.js
import React, { useState } from 'react';
import Weather from '../components/Weather';

const HomePage = () => {
    const [city, setCity] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        // 在此处理城市搜索逻辑，将城市名称传递给Weather组件
        setCity(event.target.elements.city.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">SkyScope</h1>
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

export default HomePage;
