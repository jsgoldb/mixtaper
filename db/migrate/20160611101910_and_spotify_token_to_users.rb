class AndSpotifyTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :spotify_token, :json
  end
end
