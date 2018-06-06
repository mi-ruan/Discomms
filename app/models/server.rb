class Server < ApplicationRecord
  validates :name, :owner_id, presence: :true

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :user

  has_many :subscribers,
    through: :subscriptions,
    source: :user

end
