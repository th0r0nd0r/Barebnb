import React from 'react';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';
import { Link } from 'react-router-dom';

const buttons = () => (
  <nav className="session-buttons" >
    <LoginFormContainer classname="login-button"/>
    <SignupFormContainer />
  </nav>
);

const welcomeMessage = (currentUser, logout) => (
  <div className="logged-in">
    <h2 className="welcome-message header-text">Welcome, {currentUser.username}</h2>
    <img src={currentUser.img_url} className="avatar"></img>
    <button className="session-button header-text" onClick={logout}>Log Out</button>
  </div>
);


const Greeting = ({currentUser, logout}) => (
  <div className="nav-buttons">
    {currentUser ? welcomeMessage(currentUser, logout) : buttons()}
    <Link to="/spots">
      <button className="session-button">
        Find a Spot
      </button>
    </Link>
    <Link to="/spots/new">
      <button className="session-button">
        Create a Spot
      </button>
    </Link>
  </div>
);

export default Greeting;
