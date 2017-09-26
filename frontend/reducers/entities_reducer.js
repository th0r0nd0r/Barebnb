import { combineReducers } from 'redux';

import SpotsReducer from './spots_reducer';
import UsersReducer from './users_reducer';

export default combineReducers({
  spots: SpotsReducer,
  users: UsersReducer
});
