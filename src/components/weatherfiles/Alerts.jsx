// src/WeatherAlerts.js

import React from 'react';

const WeatherAlerts = ({ weatherData }) => {
    if (!weatherData || !weatherData.alerts || weatherData.alerts.length === 0) {
        return <div>No weather alerts at the moment.</div>;
    }

    return (
        <div className="weather-alerts">
            {weatherData.alerts.map((alert, index) => (
                <div key={index} className="alert">
                    <h2>{alert.title}</h2>
                    <p><strong>Severity:</strong> {alert.severity}</p>
                    <p><strong>Description:</strong> {alert.description}</p>
                    <p><strong>Effective:</strong> {new Date(alert.effective).toLocaleString()}</p>
                    <p><strong>Expires:</strong> {new Date(alert.expires).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default WeatherAlerts;
