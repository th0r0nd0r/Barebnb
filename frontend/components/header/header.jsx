import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

const Header = () => (
  <header className="header">
    <h1 className="header-title">Barebnb</h1>
    <GreetingContainer />
  </header>
);

export default Header;
