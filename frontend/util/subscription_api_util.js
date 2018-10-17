export const createSub = serverId => {
  return $.ajax({
    url: `api/servers/${serverId}/subscriptions`,
    method: 'POST'
  })
}

export const deleteSub = (serverId,userId) => {
  return $.ajax({
    url: `api/servers/${serverId}/subscriptions/${userId}`,
    method: 'DELETE'
  })
}
