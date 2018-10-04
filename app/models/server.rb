class Server < ApplicationRecord
  validates :name, :owner_id, presence: :true

  belongs_to :owner,
    foreign_key: :owner_id,
    primary_key: :id,
    class_name: :User

  has_many :subscriptions

  has_many :subscribers,
    through: :subscriptions,
    source: :user

  has_many :channels,
    dependent: :destroy

end
