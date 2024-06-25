import React from 'react';
import '../styles/currentlyhour.css';

const convertFtoC = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const getCurrentTimeIndex = (hours) => {
  const now = new Date();
  return hours.findIndex((hour) => {
    const hourDate = new Date(`1970-01-01T${hour.datetime}Z`);
    return hourDate.getUTCHours() === now.getUTCHours();
  });
};

const filterHoursTo11PM = (hours) => {
  const now = new Date();
  const elevenPM = new Date(now);
  elevenPM.setHours(23, 0, 0, 0); // Set time to 11 PM

  return hours.filter((hour) => {
    const hourDate = new Date(`1970-01-01T${hour.datetime}Z`);
    return hourDate <= elevenPM;
  });
};

const formatTime = (time) => {
  const date = new Date(`1970-01-01T${time}Z`);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12 AM/PM
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

const CurrentHourly = ({ data }) => {
  if (!data || !data.days) {
    return <p>Loading...</p>; // Handle case when data is not available
  }

  const currentTimeIndex = getCurrentTimeIndex(data.days[0].hours);
  const filteredHours = filterHoursTo11PM(data.days[0].hours.slice(currentTimeIndex));

  return (
    <div className="current-hourly-weather-list">
      {filteredHours.map((hour, index) => {
        const tempCelsius = convertFtoC(hour.temp).toFixed(1);
        const feelsLikeCelsius = convertFtoC(hour.feelslike).toFixed(1);

        return (
          <div key={index} className="current-hourly-weather-item">
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

export default CurrentHourly;
