class User < ApplicationRecord
  validates :username, :password_digest, :email, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 8, allow_nil: true}
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :servers, dependent: :destory
  has_many :subscriptions, dependent: :destroy

  has_many :subscribed_servers,
    through: :subscriptions,
    source: :servers

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
