import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CurrentWeather from '../weatherfiles/CurrentWeather';
import HourlyWeather from '../weatherfiles/HourlyWeather';
import Forecast from '../weatherfiles/Forecast';

const Headertwo = ({ weatherData }) => {
  const [activeTab, setActiveTab] = useState('today');

  const renderContent = () => {
    switch (activeTab) {
      case 'today':
        return <CurrentWeather data={weatherData} />;
      case 'hourly':
        return <HourlyWeather data={weatherData} />;
      case 'fifteenDays':
        return <Forecast data={weatherData}/>;
      case 'alerts':
        return <p>Tab content for Alerts</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'today' ? 'active' : ''}`} onClick={() => setActiveTab('today')}>
            Today
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'hourly' ? 'active' : ''}`} onClick={() => setActiveTab('hourly')}>
            Hourly
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'fifteenDays' ? 'active' : ''}`} onClick={() => setActiveTab('fifteenDays')}>
            15 Days
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === 'alerts' ? 'active' : ''}`} onClick={() => setActiveTab('alerts')}>
            Alerts
          </button>
        </li>
      </ul>
      {renderContent()}
    </div>
  );
};

export default Headertwo;
