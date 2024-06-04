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
      <Tab eventKey="home" title="Today">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Hourly">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="15 Days">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Alerts" >
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default Headertwo;