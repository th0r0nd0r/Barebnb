import { combineReducers } from 'redux';

import SpotsReducer from './spots_reducer';
import UsersReducer from './users_reducer';
import BookingReducer from './booking_reducer';

export default combineReducers({
  spots: SpotsReducer,
  users: UsersReducer,
  bookings: BookingReducer
});
