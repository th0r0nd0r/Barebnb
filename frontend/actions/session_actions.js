import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const login = (user) => (dispatch) => (
  APIUtil.login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
     err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => dispatch(receiveCurrentUser(null)),
    err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const signup = (user) => dispatch => (
  APIUtil.signup(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)),
  err => (dispatch(receiveErrors(err.responseJSON))
))
);

export const clearErrors = () => dispatch => (
  dispatch(receiveErrors([]))
);
