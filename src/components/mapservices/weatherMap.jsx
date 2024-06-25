import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header/header';

const WeatherMapComponent = () => {
  const [city, setCity] = useState('');
  const [weatherMap, setWeatherMap] = useState(null);

  const handleSearch = (city) => {
    setCity(city);
  };

  useEffect(() => {
    const fetchWeatherMap = async () => {
      if (city) {
        try {
          const response = await axios.get(`http://localhost:3000/api/weathermap?city=${city}`);
          setWeatherMap(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchWeatherMap();
  }, [city]);

  return (
    <div>
      <Header handleSearch={handleSearch} />
      {weatherMap && (
        <img src={`http://maps.openweathermap.org/maps/2.0/weather/TA2/10/10/10?appid=${process.env.OPENWEATHERMAP_API_KEY}&q=${city}`} alt="Weather Map" />
      )}
    </div>
  );
};

export default WeatherMapComponent;