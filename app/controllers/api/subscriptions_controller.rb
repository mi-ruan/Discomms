class Api::SubscriptionsController < ApplicationController

  def create
    @server = Server.find({id: params[:server_id]})
    @subscription = @server.subscribers.new(subscriber_id: current_user.id)
    if @subscription.save
      render :show
    end
  end

  def destroy
    @subscription = Subscription.find_by({id: id})
    if @subscription
      Subscription.delete(@subscription)
      render "api/users/#{current_user}"
    end
  end
end
