json.extract! server, :id, :name, :owner_id
json.subscriberIds do
  json.array! server.subscribers.pluck(:id)
end
