class Api::ServersController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      subscription = Subscription.create(
        {subscriber_id: current_user.id,
          server_id: @server.id})
      if subscription.save
        render :show
      end
    else
      render json: {errors: @server.errors.full_messages}, status: 401
    end
  end

  def index
    @servers = current_user.servers
    render :index
  end

  def all
    @servers = Server.all
    render :all
  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

  def update
    @server = current_user.servers.find(params[:id])
    if @server.update(server_params)
      render :show
    else
      render json: {errors: @server.errors.full_messages}, status: 401
    end
  end

  def destroy
    server = current_user.servers.find(params[:id])
    if server
      Server.delete(server)
      render json: {}
    else
      render json: {}, status: 404
    end
  end

  private

  def server_params
    params.require(:server).permit(:name)
  end

end
