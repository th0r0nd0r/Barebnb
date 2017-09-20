import React from 'react';
import { Link } from 'react-router-dom';

const links = () => (
  <nav className="session-links" >
    <Link to="/login">Login</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const welcomeMessage = (currentUser, logout) => (
  <div>
    <h2 className="welcome-message">Welcome, {currentUser.username}</h2>
    <button className="logout-button" onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({currentUser, logout}) => (
  currentUser ? welcomeMessage(currentUser, logout) : links()
);

export default Greeting;
