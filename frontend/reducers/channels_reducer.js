import { RECEIVE_CHANNELS,
         RECEIVE_CHANNEL,
         REMOVE_CHANNEL } from '../actions/channel_actions';

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels;
    case RECEIVE_CHANNEL:
      return Object.assign({}, state, {[action.channel.id]: action.channel});
    case REMOVE_CHANNEL:
      const newState = Object.assign({}, state);
      delete newState[action.channelId];
      return newState;
    default:
      return state;
  }
}

export default channelsReducer;
