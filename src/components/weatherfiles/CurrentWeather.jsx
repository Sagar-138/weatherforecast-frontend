import React from 'react';
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

    const convertFtoC= (fahrenheit)=>{
      return ((fahrenheit-32)*5)/9;
    };
    const tempCelsius=convertFtoC(temp).toFixed(1);
    const feelsLikeCelsius = convertFtoC(feelslike).toFixed(1);
    const dewCelsius= convertFtoC(dew).toFixed(1);
  
    return (
      <div className="weather-card">
        <div className="weather-main">
          <div className="weather-icon">
            <img
              src={`/icons/${icon}.svg`}
              alt={icon}
              className={`icon-${icon}`}
            />
          </div>
          <div className="weather-info">
            <h2 className="weather-temp">{temp}°F / {tempCelsius}°C</h2>
            <p className="weather-conditions">{conditions}</p>
            <p className="weather-feels-like">Feels like: {feelslike}°F / {feelsLikeCelsius}°C</p>
          </div>
        </div>
        <div className="weather-details">
          <div className="weather-detail">
            <span className="label">Wind:</span>
            <span className="value">{windspeed} km/h</span>
          </div>
          <div className="weather-detail">
            <span className="label">Humidity:</span>
            <span className="value">{humidity}%</span>
          </div>
          <div className="weather-detail">
            <span className="label">Visibility:</span>
            <span className="value">{visibility} km</span>
          </div>
          <div className="weather-detail">
            <span className="label">Pressure:</span>
            <span className="value">{pressure} mb</span>
          </div>
          <div className="weather-detail">
            <span className="label">Dew point:</span>
            <span className="value">{dew}°F / {dewCelsius}°C</span>
          </div>
          <p className="description">"{data.description}"</p>
        </div>
      </div>
    );
  };
  
  export default CurrentWeather;