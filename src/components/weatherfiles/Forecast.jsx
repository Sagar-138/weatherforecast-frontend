import React, { useState } from 'react';
import '../styles/forecast.css'; // Make sure to create this CSS file

const WeatherForecast = ({ data }) => {
  const [expandedDayIndex, setExpandedDayIndex] = useState(null);

  if (!data || !data.days) {
    return <p>Loading...</p>; // Handle case when data is not available
  }

  const handleExpandClick = (index) => {
    setExpandedDayIndex(expandedDayIndex === index ? null : index);
  };


  
  return (
    <div className="weather-forecast">
      <h2>15-Day Weather Forecast for {data.address}</h2>
      <ul className="weather-list">
        {data.days.map((day, index) => (
          <li key={index} className="weather-list-item">
            <div className="weather-summary" onClick={() => handleExpandClick(index)}>
              <div className="weather-date">{day.datetime}</div>
              <div className="weather-temp-range">
                {day.tempmin}°F - {day.tempmax}°F
              </div>
              <div className="weather-conditions">
                <img
                  src={`/icons/${day.icon}.svg`}
                  alt={day.icon}
                  className={`icon-${day.icon}`}
                />
                {day.conditions}
              </div>
            </div>
            {expandedDayIndex === index && (
              <div className="weather-details">
                <p>Description: {day.description}</p>
                <p>Feels like: {day.feelslike}°F</p>
                <p>Humidity: {day.humidity}%</p>
                <p>Pressure: {day.pressure} mb</p>
                <p>Wind speed: {day.windspeed} km/h</p>
                <p>Dew point: {day.dew}°F</p>
                <p>Visibility: {day.visibility} km</p>
                <p>UV index: {day.uvindex}</p>
                <p>Sunrise: {day.sunrise}</p>
                <p>Sunset: {day.sunset}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherForecast;