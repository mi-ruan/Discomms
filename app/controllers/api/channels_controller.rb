class Api::ChannelsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def create
    @channel = Channel.new(channel_params)
    @channel.server_id = params[:server][:id]
    if @channel.save
      render :show
    else
      render json: {errors: @channel.errors.full_messages}, status: 401
    end
  end

  def index
    server = Server.find(params[:server][:id])
    @channels = server.channels
    render :index
  end

  def show
    @channel = Channel.find(params[:id])
    render :show
  end

  def update
    @channel = Channel.find(params[:id])
    if @channel.update(channel_params)
      render :show
    else
      render :json{errors : @server.errors.full_messages}, status: 401
    end
  end

  def destroy
    channel = Channel.find(params[:id])
    if channel
      Channel.delete(channel)
      render json: {}
    else
      render json: {}, status: 404
    end
  end
  
  private

  def channel_params
    params.require(:channel).permit(:name)
  end
end
