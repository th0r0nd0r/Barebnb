export const fetchSpots = (data) => (
  $.ajax({
    method: 'GET',
    url: 'api/spots',
    data,
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

export const createSpot = (spot) => (
  $.ajax({
    method: 'POST',
    url: 'api/spots',
    data: spot
  })
);

export const createReview = (review) => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: review
  })
);
