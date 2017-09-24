class RequireBeds < ActiveRecord::Migration[5.1]
  def change
    change_column :spots, :beds, :integer, null: false
  end
end
