class AddDefaultToImgUrl < ActiveRecord::Migration[5.1]
  def change
    change_column_default :users, :img_url, "http://images.nickjr.com/nickjr/properties/teletubbies/teletubbies-1x1.jpg"
  end
end
