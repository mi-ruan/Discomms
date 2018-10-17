import * as ChannelApiUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

export const receiveChannels = channels => {
  return {
    type: RECEIVE_CHANNELS,
    channels
  }
}

export const receiveChannel = channel => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  }
}

export const removeChannel = channelId => {
  return {
    type: REMOVE_CHANNEL,
    channelId
  }
}
export const fetchChannels = serverId => dispatch => {
  return (ChannelApiUtil.fetchChannels(serverId)
  .then(channels => dispatch(receiveChannels(channels)))
)}

export const fetchChannel = (serverId, channelId) => dispatch => {
  return (ChannelApiUtil.fetchChannel(serverId, channelId)
  .then(channel => dispatch(receiveChannel(channel)))
)}

export const createChannel = (serverId, channel) => dispatch => {
  return (ChannelApiUtil.createChannel(serverId, channel)
  .then(channel => dispatch(receiveChannel(channel)))
)}

export const updateChannel = (serverId, channel) => dispatch => {
  return (ChannelApiUtil.updateChannel(serverId, channel)
  .then(channel => dispatch(receiveChannel(channel)))
)}

export const deleteChannel = (serverId, channelId) => dispatch => {
  return (ChannelApiUtil.deleteChannel(serverId, channelId)
  .then(() => dispatch(removeChannel(channelId)))
)}
