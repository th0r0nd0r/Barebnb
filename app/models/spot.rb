class Spot < ApplicationRecord
  validates :title,
            :description,
            :lat,
            :lng,
            :host_id,
            :img_url,
            presence: true
end
