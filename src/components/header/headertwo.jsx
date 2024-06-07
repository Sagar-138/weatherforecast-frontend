import 'bootstrap/dist/css/bootstrap.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Headertwo=()=> {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
     >
      <Tab eventKey="today" title="Today">
        Tab content for Home
      </Tab>
      <Tab eventKey="hourly" title="Hourly">
        Tab content for Profile
      </Tab>
      <Tab eventKey="fifteenDays" title="15 Days">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="alerts" title="Alerts" >
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Headertwo;