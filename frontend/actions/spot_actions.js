import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';
export const RECEIVE_SPOT_ERRORS = 'RECEIVE_SPOT_ERRORS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const UPDATE_REVIEW  = 'UPDATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';


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

export const patchReview = review => ({
  type: UPDATE_REVIEW,
  review
});

export const destroyReview = review => ({
  type: DELETE_REVIEW,
  review
});


export const getSpots = filters => dispatch => (
  APIUtil.fetchSpots(filters).then(spots => dispatch(receiveSpots(spots)),
    err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const getSpot = (id) => dispatch => (
  APIUtil.fetchSpot(id).then(spot => dispatch(receiveSpot(spot)),
    err => (dispatch(receiveErrors(err.responseJSON))))
);

export const createSpot = spot => dispatch => (
 APIUtil.createSpot(spot).then(newSpot => {
 	dispatch(receiveSpot(newSpot));
    if (newSpot) {
      return newSpot;
    }
 }, err => (dispatch(receiveErrors(err.responseJSON))))
);

const updateSpot = spot => dispatch => (
  APIUtil.updateSpot(spot).then(() => getSpots()),
  err => (dispatch(receiveErrors(err.responseJSON)))
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(
    newReview => {
      console.log("newReview:", newReview);
    return(() => dispatch(receiveReview(newReview)));
})
  .fail(err => (dispatch(receiveErrors(err.responseJSON))))
);

export const updateReview = review => dispatch => (
  APIUtil.updateReview(review).then(updatedReview => {
    // console.log("updatedReview:", updatedReview);
    return(dispatch(patchReview(updatedReview)));
  })
    .fail(err => (dispatch(receiveErrors(err.responseJSON))))
);

export const deleteReview = id => dispatch => (
  APIUtil.deleteReview(id).then((deleted) => {
    return(dispatch(getSpot(deleted.spot_id)));
  })
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);
