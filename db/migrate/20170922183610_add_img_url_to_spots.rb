class AddImgUrlToSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :img_url, :string, null: false
  end
end
