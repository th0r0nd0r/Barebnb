export const fetchBookings = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/bookings`
  })
);

export const fetchBooking = (userId, bookingId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/bookings/${bookingId}`
  })
);

export const createBooking = (userId, booking) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/bookings`,
    data: booking
  })
);

export const updateBooking = (userId, booking) => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/bookings/${booking.id}`,
    data: booking
  })
);

export const deleteBooking = (userId, bookingId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/bookings/${bookingId}`
  })
);
