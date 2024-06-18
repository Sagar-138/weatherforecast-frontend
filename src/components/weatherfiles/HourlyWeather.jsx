import React from 'react';
import '../styles/hourly.css';


const convertFtoC = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const HourlyWeather = ({ data }) => {
  if (!data || !data.days) {
    return <p>Loading...</p>; // Handle case when data is not available
  }

  const formatTime = (time) => {
    const date = new Date(`1970-01-01T${time}Z`);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  return (
    <div className="hourly-weather-container">
      {data.days[0].hours.map((hour, index) => {
        const tempCelsius = convertFtoC(hour.temp).toFixed(1);
        const feelsLikeCelsius = convertFtoC(hour.feelslike).toFixed(1);

        return (
          <div key={index} className="hourly-weather-card">
            <h2>{formatTime(hour.datetime)}</h2>
            <p>Temperature: {hour.temp}°F / {tempCelsius}°C</p>
            <p>Feels like: {hour.feelslike}°F / {feelsLikeCelsius}°C</p>
            <p>Humidity: {hour.humidity}%</p>
            <p>Conditions: {hour.conditions}</p>
            <p>
              <img
                src={`/icons/${hour.icon}.svg`}
                alt={hour.icon}
                className={`icon-${hour.icon}`}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HourlyWeather;