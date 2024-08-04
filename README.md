# SkyScope

SkyScope is a weather forecasting website it allows users to search for and view current weather conditions and forecasts for any city.

## Authors

- Mengdie Liu
- Cankun Na

## Features

- **Current Weather:** Displays the current temperature, weather conditions, wind speed, visibility, UV index, and humidity.
- **Hourly Forecast:** Provides a 12-hour weather forecast showing temperature, conditions, and other relevant details.
- **5-Day Forecast:** Shows a daily weather forecast for the next 5 days including high and low temperatures, weather conditions, and precipitation.

## Technologies Used

- **Next.js:** A JavaScript framework for building user interfaces and server-side rendering.
- **CSS:** For styling the application.
- **Axios:** For making HTTP requests to the weather API.
- **Weather API:** Provides weather data (AccuWeather API).
- **Vercel:** Platform for deploying and hosting websites.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mandyl94910/SkyScope

2. Navigate to the project directory:

   ```bash
   cd SkyScope

3. Install dependencies:
   
   ```bash   
   npm install

4. Start the development server:

   ```bash
   npm start

- Open http://localhost:3000 in your browser to view the application.

## Usage

- Enter the name of a city in the search bar and click "Search."
- View the current weather, hourly forecast, and 5-day forecast for the specified city.

**Note**: The AccuWeather API has a limit of 50 requests per day. Exceeding this limit may result in errors or access issues. Use the application wisely to avoid hitting the limit.

## Notes

- Ensure that you have Node.js and npm installed on your machine.
- The application uses the AccuWeather API, and an API key is required for fetching weather data.

## Acknowledgments

- React Documentation
- AccuWeather API
- Create React App#
