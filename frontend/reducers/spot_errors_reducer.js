import { RECEIVE_SPOT, RECEIVE_SPOT_ERRORS } from '../actions/spot_actions';

const SpotErrorsReducer = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_SPOT_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default SpotErrorsReducer;
