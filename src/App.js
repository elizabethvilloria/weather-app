import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`
        );
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching the weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      {weather ? (
        <div>
          <h2>{weather.location.name}</h2>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            className="weather-icon"
          />
          <p>{weather.current.temp_c}°C</p>
          <p>{weather.current.condition.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
