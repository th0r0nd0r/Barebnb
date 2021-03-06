import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  type: RECEIVE_BOOKING,
  booking
});

export const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const getBookings = userId => dispatch => (
  APIUtil.fetchBookings(userId)
  .then(bookings => dispatch(receiveBookings(bookings)),
  err => (dispatch(receiveErrors(err.responseJSON))
))
);

export const getBooking = (userId, bookingId) => dispatch => (
  APIUtil.fetchBooking(userId, bookingId)
  .then(booking => dispatch(receiveBooking(booking)),
  err => dispatch(receiveErrors(err.responseJSON))
)
);

export const createBooking = (userId, booking) => dispatch => (
  APIUtil.createBooking(userId, booking)
  .then(newBooking => dispatch(receiveBooking(newBooking)),
  err => dispatch(receiveErrors(err.responseJSON))
)
);

export const updateBooking = (userId, booking) => dispatch => (
  APIUtil.updateBooking(userId, booking)
);

export const deleteBooking = (userId, bookingId) => dispatch => (
  APIUtil.deleteBooking(userId, bookingId)
);
