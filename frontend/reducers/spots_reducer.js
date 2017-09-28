import { RECEIVE_SPOTS, RECEIVE_SPOT, RECEIVE_REVIEW } from '../actions/spot_actions';
import merge from 'lodash/merge';

const SpotsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT:
      const newSpot = {[action.spot.id]: action.spot};
      return merge({}, state, newSpot);
    case RECEIVE_REVIEW:
      const review = action.review;
      const user = review.user;
      delete review.user;
      review[review.author_id] = user;
      newState[review.spot_id].reviews.push(review);
      return newState;
    default:
      return state;
  }
};

export default SpotsReducer;
