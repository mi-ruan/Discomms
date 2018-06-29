import { RECEIVE_SERVERS,
         RECEIVE_SERVER,
         REMOVE_SERVER } from server_actions;

const serversReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (actions.type) {
    case RECEIVE_SERVERS:
      return Object.assign({}, state, action.servers);
    case RECEIVE_SERVER:
      return Object.assign({}, state, {[action.server.id]: action.server});
    case REMOVE_SERVER:
      const servers = state.servers.filter(server => server.id !== action.serverId);
      return { servers }
    default:
      return state;
  }
};

export default serversReducer;