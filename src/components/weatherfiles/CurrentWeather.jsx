import React, { useEffect } from 'react';
import '../styles/currentweather.css'; // Make sure to create this CSS file

const CurrentWeather = ({ data }) => {

  // useEffect(() => {
  //   console.log(data.currentConditions.conditions); // Check the data structure in the console
  // }, [data]);

  if (!data || !data.currentConditions) {
    return <p>Loading...</p>; // Handle case when data is not available
  }

  const {
    temp,
    feelslike,
    conditions,
    icon,
    pressure,
    windspeed,
    humidity,
    visibility,
    dew
  } = data.currentConditions;

  return (
    <div className="weather-card">
      <div className="weather-main">
      <p>
            Icon: <img
              src={`/icons/${icon}.svg`}
              alt={icon}
              className={`icon-${icon}`}
            />
          </p>
        <div className="weather-info">
          <h2 className="weather-temp">{temp}°F</h2>
          <p className="weather-conditions">{conditions}</p>
          <p className="weather-feels-like">Feels like: {feelslike}°F</p>
        </div>
      </div>
      <div className="weather-details">
        <p>Air quality: Not Available</p>
        <p>Wind: {windspeed} km/h</p>
        <p>Humidity: {humidity}%</p>
        <p>Visibility: {visibility} km</p>
        <p>Pressure: {pressure} mb</p>
        <p>Dew point: {dew}°F</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
