import { RECEIVE_SPOTS, RECEIVE_SPOT, RECEIVE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      const spotId = action.spot.id;
      const newSpot = {[action.spot.id]: action.spot};
      if (newState[spotId]) {
        newState[spotId] = action.spot;
        return newState;
      } else {
        return merge({}, newState, newSpot);
      }
    case RECEIVE_REVIEW:
      const review = action.review;
      // const user = review.user;
      // delete review.user;
      // review[review.author_id] = user;
      newState[review.spot_id].reviews.push(review);
      return newState;
    case UPDATE_REVIEW:
      const updatedReview = action.review;
      newState[updatedReview.spot_id].reviews.forEach(
        (rev) => {
          if (rev.id === updatedReview.id) {
          Object.keys(rev).forEach(key => {
            rev[key] = updatedReview[key];
          });
        }}
      );
      return newState;
    case DELETE_REVIEW:
      const deleted = action.review;
      delete newState[deleted.spot_id].reviews.find(
        (rev) => (rev.id === deleted.id)
      );
      return newState;
    default:
      return state;
  }
};

export default SpotsReducer;
