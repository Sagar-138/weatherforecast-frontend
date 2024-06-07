import React from 'react';
import '../styles/home.css';
import Header from '../header/header';
// import Footer from '../footer/footer';
import Headertwo from '../header/headertwo';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      
      <div className="container">
      <Headertwo/>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
