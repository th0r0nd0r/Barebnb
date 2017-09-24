class MakePriceNotNull < ActiveRecord::Migration[5.1]
  def change
    change_column :spots, :price, :integer, null: false
  end
end
