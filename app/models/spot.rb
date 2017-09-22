class Spot < ApplicationRecord
  validates :title,
            :description,
            :lat,
            :lng,
            :host_id,
            presence: true
end
