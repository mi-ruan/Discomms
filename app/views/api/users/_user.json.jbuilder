json.extract! user, :id, :username, :email
json.serverIds do
  json.array! user.subscribed_servers.pluck(:id)
end
