json.extract! server, :name, :owner_id
json.subscriberIds do
  json.array! servers.subscribers.pluck(:id)
end
