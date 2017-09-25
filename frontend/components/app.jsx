import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_forms/login_form_container';
import SignupFormContainer from './session_forms/signup_form_container';
import SpotIndexContainer from './spots_index/spot_index_container';
import SearchContainer from './search/search_container';

import {AuthRoute} from '../util/route_util';
import Header from './header/header';
import Main from './main/main';



const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/spots" component={SearchContainer} />
      <Route path="/" component={Main} />
    </Switch>
    <div className="footer">

    </div>


  </div>
);


export default App;
