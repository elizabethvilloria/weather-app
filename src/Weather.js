import React, { useState, useEffect } from 'react';
import { getWeatherData } from './api';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('San Francisco');

  useEffect(() => {
    getWeatherData(location).then(response => {
      setWeather(response.data);
    }).catch(error => {
      console.error("Error fetching weather data", error);
    });
  }, [location]);

  return (
    <div>
      <h1>Weather in {location}</h1>
      {weather ? (
        <div>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather condition" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Weather;
