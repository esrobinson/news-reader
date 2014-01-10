class User < ActiveRecord::Base
  attr_accessible :password, :username
  attr_reader :password

  before_validation :reset_session_token

  validates :username, :session_token, :presence => true
  validates :password, :presence => true, :on => :create
  validates :password, :length => {:minimum => 6, :allow_nil => true}

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def set_session_token!
    self.reset_session_token
    self.save!
  end

  def self.find_by_credentials(params)
    p params
    user = User.find_by_username(params[:username])
    return nil unless user
    user if user.is_password?(params[:password])
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
