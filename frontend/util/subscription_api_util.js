export const createSub = serverId => {
  return $.ajax({
    url: `api/servers/${serverId}/subscriptions`,
    method: 'POST'
  })
}

export const deleteSub = (serverId,id) => {
  return $.ajax({
    url: `api/servers/${serverId}/subscriptions/${id}`,
    method: 'DELETE'
  })
}
