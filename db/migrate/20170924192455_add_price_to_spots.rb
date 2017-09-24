class AddPriceToSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :price, :integer
  end
end
