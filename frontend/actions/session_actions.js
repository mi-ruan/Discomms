import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = user => dispatch => {
  return (APIUtil.signup(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
  errors => dispatch(receiveErrors(errors.responseJSON.errors)))
)};

export const login = user => dispatch => {
  return (APIUtil.login(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
  errors => dispatch(receiveErrors(errors.responseJSON.errors)))
)};

export const logout = () => dispatch => {
  return (APIUtil.logout()
  .then(() => dispatch(logoutCurrentUser()),
  errors => dispatch(receiveErrors(errors.responseJSON.errors)))
)};
