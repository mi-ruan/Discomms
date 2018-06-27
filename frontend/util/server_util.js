export const fetchServers = () => {
  return $.ajax({
    url: `api/servers`
  })
}

export const fetchServer = id => {
  return $.ajax({
    url: `api/servers/${id}`
  })
}

export const createServer = (server, user_id) => {
  return $.ajax({
    url: `api/users/${user_id}/servers`,
    method: 'POST',
    data: {server}
  })
}

export const updateServer = (server) => {
  return $.ajax({
    url: `api/servers/${server.id}`,
    method: 'PATCH',
    data: {server}
  })
}

export const deleteServer = id => {
  return $.ajax({
    url: `api/servers/${id}`,
    method: 'DELETE'
  })
}
