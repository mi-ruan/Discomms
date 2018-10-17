import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_SERVER} from '../actions/server_actions';
import {REMOVE_SUBSCRIPTION} from '../actions/subscription_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user});
    case RECEIVE_SERVER:
      return Object.assign({}, state, action.subcribers);
    case REMOVE_SUBSCRIPTION:
      const newState = Object.assign({}, state);
      debugger
      const currentUser = newState[action.userId];
      currentUser.serverIds = currentUser.serverIds.filter((id) => {
        return (id !== action.serverId);
      });
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
