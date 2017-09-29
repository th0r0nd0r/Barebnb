class Booking < ApplicationRecord
  validates :checkin, :checkout, :guest_id, :spot_id, presence: true

  belongs_to :guest, foreign_key: "guest_id", class_name: "User"
  belongs_to :spot

  def available?(start_date, end_date)
  end_date < self.checkin || start_date > self.checkout
  end
end
