json.server do
  json.partial! 'api/servers/server', server: @server
end
json.subscribers do
  @server.subscribers.each do |subs|
    json.set! subs.id do
      json.partial! 'api/users/user', user:subs
    end
  end
  json.set! @server.owner.id do
    json.partial! 'api/users/user', user: @server.owner
  end
end
