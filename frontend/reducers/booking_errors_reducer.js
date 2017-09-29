import { RECEIVE_BOOKING, RECEIVE_BOOKING_ERRORS } from '../actions/booking_actions';

const BookingErrorsReducer = (state =[], action) => {
  switch(action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case RECEIVE_BOOKING:
      return [];
    default:
      return state;
  }
};

export default BookingErrorsReducer;
