class Spot < ApplicationRecord
  validates :title,
            :description,
            :lat,
            :lng,
            :host_id,
            :price,
            :beds,
            :img_url,
            presence: true

  has_many :reviews
  belongs_to :host, foreign_key: "host_id", class_name: "User"

  has_many :bookings
  has_many :booked_guests,
  through: :bookings,
  source: :guest

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  def average_rating
    self.reviews.average(:rating)
  end
end
