import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

export const receiveBookings = bookings => ({
  tyipe: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = booking => ({
  tyipe: RECEIVE_BOOKING,
  booking
});
