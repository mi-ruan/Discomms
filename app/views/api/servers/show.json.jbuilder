json.partial! 'api/servers/server', server: @server

json.users do
  @server.subscribers.each do |subs|
    json.set! subs.id do
      json.partial! 'api/users/user', user:subs
    end
  end
  json.set! @server.user.id do
    json.partial! 'api/users/user', user: @server.user
  end
end
