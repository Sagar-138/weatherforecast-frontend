import React from 'react';
import "../styles/header.css";

function Header() {
  return (
    <div className="custom-navbar">
      <a href="#" className="brand">Weather</a>
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
      <form className="search-form">
        <input type="search" placeholder="Search City" aria-label="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Header;
