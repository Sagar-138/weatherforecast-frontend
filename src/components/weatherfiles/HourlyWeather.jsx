import React from 'react';
import '../styles/hourly.css';

const HourlyWeather = ({ data }) => {
  if (!data || !data.days) {
    return <p>Loading...</p>; // Handle case when data is not available
  }

  return (
    <div className="hourly-weather-container">
      {data.days[0].hours.map((hour, index) => (
        <div key={index} className="hourly-weather-card">
          <h2>{hour.datetime}</h2>
          <p>Temperature: {hour.temp}°F</p>
          <p>Feels like: {hour.feelslike}°C</p>
          <p>Humidity: {hour.humidity}%</p>
          <p>Conditions: {hour.conditions}</p>
          <p>
            Icon: <img
              src={`/icons/${hour.icon}.svg`}
              alt={hour.icon}
              className={`icon-${hour.icon}`}
            />
          </p>
        </div>
      ))}
    </div>
  );
};

export default HourlyWeather;