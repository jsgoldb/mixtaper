class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :url, null: false

      t.timestamps null: false
    end
  end
end
