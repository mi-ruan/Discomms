class CreateSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :subscriptions do |t|
      t.integer :subscriber_id, null:false
      t.integer :server_id, null:false

      t.timestamps
    end
    add_index :subscriptions, :subscriber_id, unique: true
    add_index :subscriptions, :server_id, unique: true
    add_index :subscriptions, [:subscriber_id, :server_id], unique: true
  end
end
