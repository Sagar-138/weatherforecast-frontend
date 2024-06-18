import React from 'react';
import { TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Alerts = ({ alerts }) => (
  <TabPanel>
    <h2>Weather Alerts</h2>
    {alerts.map((alert, index) => (
      <div key={index}>
        <p>{alert.title}</p>
        <p>{alert.description}</p>
      </div>
    ))}
  </TabPanel>
);

export default Alerts;
