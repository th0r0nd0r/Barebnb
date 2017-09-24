import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <Link to="/" className="header-link">
      <h1 className="header-title">Barebnb</h1>
    </Link>
    <GreetingContainer />
  </header>
);

export default Header;
