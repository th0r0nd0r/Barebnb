import React from 'react';
import ReactDOM from 'react-dom';
import { signup, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import {fetchSpots} from './util/spot_api_util';
import {getSpots} from './actions/spot_actions';
import {login} from './util/session_api_util';

document.addEventListener('DOMContentLoaded',() => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.fetchSpots = fetchSpots;
  window.getSpots = getSpots;

  window.getState = store.getState;
  window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={ store } />, root);

});
