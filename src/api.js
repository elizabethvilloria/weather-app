import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'http://api.weatherapi.com/v1';

export const getWeatherData = (location) => {
  return axios.get(`${BASE_URL}/current.json`, {
    params: {
      key: API_KEY,
      q: location,
    },
  });
};
