import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/header/header';
import Headertwo from './components/header/headertwo';
// import CurrentWeather from './components/weatherfiles/CurrentWeather';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (city) => {
    try {
      const response = await axios.get(`https://weather-forecast-ftb2.onrender.com/api/weather/city/${city}`);
      setWeatherData(response.data);
      console.log(response);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <Headertwo weatherData={weatherData} />
    </div>
  );
}


export default App;
