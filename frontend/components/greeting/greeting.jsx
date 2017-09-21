import React from 'react';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';

const buttons = () => (
  <nav className="session-links" >
    <LoginFormContainer />
    <br />
    <SignupFormContainer />
  </nav>
);

const welcomeMessage = (currentUser, logout) => (
  <div>
    <h2 className="welcome-message">Welcome, {currentUser.username}</h2>
    <button className="logout-button" onClick={logout}>Log Out</button>
  </div>
);

const Greeting = ({currentUser, logout}) => (
  currentUser ? welcomeMessage(currentUser, logout) : buttons()
);

export default Greeting;
