import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_SPOT_ERRORS = 'RECEIVE_SPOT_ERRORS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveSpots = (spots) => ({
  type: RECEIVE_SPOTS,
  spots
});

export const receiveSpot = (spot) => ({
  type: RECEIVE_SPOT,
  spot
});

export const receiveErrors = errors => ({
  type: RECEIVE_SPOT_ERRORS,
  errors
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});


export const getSpots = () => dispatch => (
  APIUtil.fetchSpots().then(spots => dispatch(receiveSpots(spots)),
    err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getSpot = (id) => dispatch => (
  APIUtil.fetchSpot(id).then(spot => dispatch(receiveSpot(spot)),
    err => (dispatch(receiveErrors(err.responseJSON))))
);

export const createSpot = spot => dispatch => (
 APIUtil.createSpot(spot).then(newSpot => {
 	dispatch(receiveSpot(newSpot)),
    err => (dispatch(receiveErrors(err.responseJSON)));
    if (newSpot) {
      return newSpot;
    }
 })
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(newReview => (dispatch(createReview(newReview)),
    err => (dispatch(receiveErrors(err.responseJSON)))
  ))
);
