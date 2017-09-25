export const fetchSpots = () => (
  $.ajax({
    method: 'GET',
    url: 'api/spots',
    err: () => console.log('Error fetching spots')
  })
);

export const fetchSpot = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/spots/${id}`,
    err: () => console.log('Error fetching spot')
  })
);
