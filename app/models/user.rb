class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable, :omniauth_providers => [:spotify]
  include DeviseTokenAuth::Concerns::User
  has_many :playlists
end
