export const fetchChannels = (serverId) => {
  return $.ajax({
    url: `api/servers/${serverId}/channels`
  })
}

export const fetchChannel = (serverId, channelId) => {
  return $.ajax({
    url: `api/servers/${serverId}/channels/${channelId}`
  })
}

export const createChannel = (serverId, channel) => {
  return $.ajax({
    url: `api/servers/${serverId}/channels`,
    method: 'POST',
    data: {channel}
  })
}

export const updateChannel = (serverId, channel) => {
  return $.ajax({
    url: `api/servers/${serverId}/channels/${channel.id}`,
    method: 'PATCH',
    data: {channel}
  })
}

export const deleteChannel = (serverId, channelId) => {
  return $.ajax({
    url: `api/servers/${serverId}/channels/${channelId}`,
    method: 'DELETE'
  })
}
