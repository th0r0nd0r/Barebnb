import React from 'react';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';

const buttons = () => (
  <nav className="session-links" >
    <LoginFormContainer />
    <SignupFormContainer />
  </nav>
);

const welcomeMessage = (currentUser, logout) => (
  <div className="logged-in">
    <h2 className="welcome-message">Welcome, {currentUser.username}</h2>
    <img src={currentUser.img_url} className="avatar"></img>
    <button className="logout-button" onClick={logout}>Log Out</button>
  </div>
);


const Greeting = ({currentUser, logout}) => (
  currentUser ? welcomeMessage(currentUser, logout) : buttons()
);

export default Greeting;
