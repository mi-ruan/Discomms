class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.integer :server_id, null:false
      t.string :name, null:false

      t.timestamps
    end
    add_index :channels, :server_id
  end
end
