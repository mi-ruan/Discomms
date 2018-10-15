class FixSubscriptionIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :subscriptions, :subscriber_id
    remove_index :subscriptions, :server_id
    add_index :subscriptions, :subscriber_id
    add_index :subscriptions, :server_id
  end
end
