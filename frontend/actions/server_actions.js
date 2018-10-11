import * as ServerApiUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = "RECEIVE_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";

export const receiveServers = payload => {
  return {
    type: RECEIVE_SERVERS,
    servers: payload.servers || {}
  }
}

export const receiveServer = server => {
  return {
    type: RECEIVE_SERVER,
    server
  }
}

export const removeServer = serverId => {
  return {
    type: REMOVE_SERVER,
    serverId
  }
}

export const fetchServers = () => dispatch => {
  return (ServerApiUtil.fetchServers()
  .then(servers => dispatch(receiveServers(servers)))
)}

export const fetchAllServers = () => dispatch => {
  return (ServerApiUtil.fetchAllServers()
  .then(servers => dispatch(receiveServers(servers)))
)}

export const fetchServer = id => dispatch => {
  return (ServerApiUtil.fetchServer(id)
  .then(server => dispatch(receiveServer(server)))
)}

export const createServer = server => dispatch => {
  return (ServerApiUtil.createServer(server)
  .then(server => dispatch(receiveServer(server)))
)}

export const updateServer = server => dispatch => {
  return (ServerApiUtil.updateServer(server)
  .then(server => dispatch(receiveServer(server)))
)}

export const deleteServer = id => dispatch => {
  return (ServerApiUtil.deleteServer(id)
  .then(() => dispatch(removeServer(id)))
)}
