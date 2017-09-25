import * as APIUtil from '../util/spot_api_util';

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

export const receiveSpots = (spots) => ({
  type: RECEIVE_SPOTS,
  spots
});

export const receiveSpot = (spot) => ({
  type: RECEIVE_SPOT,
  spot
});


export const getSpots = () => dispatch => (
  APIUtil.fetchSpots().then(spots => dispatch(receiveSpots(spots)))
);

export const getSpot = (id) => dispatch => (
  APIUtil.fetchSpot(id).then(spot => dispatch(receiveSpot(spot)))
);

export const createSpot = spot => dispatch => (
  APIUtil.createSpot(spot).then(newSpot => dispatch(receiveSpot(newSpot)))
);
