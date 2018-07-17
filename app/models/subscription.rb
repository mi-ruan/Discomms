class Subscription < ApplicationRecord
  validates :subscriber_id, :server_id, presence: true

  belongs_to :user,
    foreign_key: :subscriber_id,
    class_name: :User

  belongs_to :server

end
