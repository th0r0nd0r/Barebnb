class AddBedsToSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :beds, :integer
  end
end
