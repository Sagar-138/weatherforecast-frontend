import React, { useState } from 'react';
import "../styles/header.css";

function Header({ handleSearch }) {
  const [city, setCity] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch(city);
  };

  return (
    <div className="custom-navbar">
      <a  className="brand">Weather</a>
      <ul className="nav">
        <li><a href="#action1">Home</a></li>
        <li><a href="#action2">Link</a></li>
        <li className="dropdown">
          <a href="#dropdown">Dropdown</a>
          <div className="dropdown-content">
            <a href="#action3">Action</a>
            <a href="#action4">Another action</a>
            <a href="#action5">Something else here</a>
          </div>
        </li>
      </ul>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          type="search"
          placeholder="Search City"
          aria-label="Search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Header;
