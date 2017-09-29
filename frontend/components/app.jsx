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
import SpotFormContainer from './spot_form/spot_form_container';
import SpotShowContainer from './spot_show/spot_show_container';
import SpotUpdateFormContainer from './spot_form/spot_update_form_container';

import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Header from './header/header';
import Main from './main/main';



const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/spots" component={SearchContainer} />
      <ProtectedRoute exact path="/spots/new" component={SpotFormContainer} />
      <ProtectedRoute exact path="/spots/:spotId/update" component={SpotUpdateFormContainer} />
      <Route path="/spots/:spotId" component={SpotShowContainer} />
      <Route path="/" component={Main} />
    </Switch>
    <div className="footer">

    </div>


  </div>
);


export default App;
