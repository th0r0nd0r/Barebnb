import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import {AuthRoute} from '../util/route_util';



const App = () => (
  <div>
    <header>
    <h1>watup my dudes its Altbnb!</h1>
    <GreetingContainer />
    </header>
  </div>
);

// <SignupFormContainer />
export default App;
