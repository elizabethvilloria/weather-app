import React, { useState, useEffect } from 'react';
import CitySelector from './CitySelector'; // Import the CitySelector component
import axios from 'axios';
import './App.css';


const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London'); // Default city

  const fetchWeather = async (city) => {
    try {
      console.log(`Fetching weather for ${city}`); // Debugging line
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}`);
      console.log(response.data); // Debugging line
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  

  useEffect(() => {
    fetchWeather(city); // Fetch weather for the default city on mount
  }, [city]);

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
      <div className="container">
        <h1>Weather App</h1>
        <CitySelector onSelectCity={handleCityChange} />
        {weatherData && (
          <div>
            <h2>{weatherData.location.name}</h2>
            <img
            className="weather-icon"
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
            <p>{weatherData.current.temp_c}°C</p>
            <p>{weatherData.current.condition.text}</p>
          </div>
        )}
    </div>
  );
};

export default App;
