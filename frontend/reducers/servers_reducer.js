import { RECEIVE_SERVERS,
         RECEIVE_SERVER,
         REMOVE_SERVER } from '../actions/server_actions';
import { RECEIVE_SUBSCRIPTION,
         REMOVE_SUBSCRIPTION} from '../actions/subscription_actions';

const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SERVERS:
      return action.servers;
    case RECEIVE_SERVER:
      return Object.assign({}, state, {[action.server.id]: action.server});
    case REMOVE_SERVER:
      const newState = Object.assign({}, state);
      delete newState[action.serverId];
      return newState;
    case RECEIVE_SUBSCRIPTION:
      const newArrState = Object.assign({}, state);
      const arrSub = newArrState[serverId].subscriberIds;
      arrSub.push(subscriberId);
      return newArrState;
    default:
      return state;
  }
};

export default serversReducer;
