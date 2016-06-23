class AddDataToUsers < ActiveRecord::Migration
  def change
    add_column :users, :data, :json
  end
end
