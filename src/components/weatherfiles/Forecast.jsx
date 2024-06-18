import React from 'react';
import { TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Forecast = ({ days }) => (
  <TabPanel>
    <h2>15 Day Weather Forecast</h2>
    {days.map((day, index) => (
      <div key={index}>
        <p>Date: {day.datetime}</p>
        <p>Max Temp: {day.tempmax}°C</p>
        <p>Min Temp: {day.tempmin}°C</p>
        <img src={`icons/${day.icon}.png`} alt="Weather Icon" />
      </div>
    ))}
  </TabPanel>
);

export default Forecast;
