class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.date :checkin, null: false
      t.date :checkout, null: false
      t.integer :guest_id, null: false
      t.integer :spot_id, null: false
      t.timestamps
    end
    add_index :bookings, :guest_id
    add_index :bookings, :spot_id
  end
end
