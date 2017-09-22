export const fetchSpots = () => (
  $.ajax({
    method: 'GET',
    url: 'api/spots',
    err: () => console.log('Error fetching spots')
  })
);
