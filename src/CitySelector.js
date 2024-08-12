import React from 'react';

const cities = [
  "New York City, USA",
  "Los Angeles, USA",
  "London, United Kingdom",
  "Paris, France",
  "Tokyo, Japan",
  "Dubai, United Arab Emirates",
  "Singapore, Singapore",
  "Sydney, Australia",
  "Berlin, Germany",
  "Toronto, Canada",
  "Hong Kong, China",
  "Moscow, Russia",
  "São Paulo, Brazil",
  "Mexico City, Mexico",
  "Mumbai, India"
];

const CitySelector = ({ onSelectCity }) => {
  return (
    <select onChange={(e) => onSelectCity(e.target.value)}>
      {cities.map((city, index) => (
        <option key={index} value={city.split(',')[0]}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CitySelector;
