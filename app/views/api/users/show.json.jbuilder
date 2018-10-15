json.partial! 'api/users/user', user: @user

json.servers do
  @user.subscribed_servers.each do |server|
    json.set! server.id do
      json.partial! 'api/servers/server', server: server
    end
  end
end
