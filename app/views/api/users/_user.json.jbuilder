json.extract! user, :id, :username, :email
json.serverIds do
  json.array! user.servers.pluck(:id)
end 
