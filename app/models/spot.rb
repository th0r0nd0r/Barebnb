class Spot < ApplicationRecord
  validates :title,
            :description,
            :lat,
            :lng,
            :host_id,
            :price,
            :bed,
            :img_url,
            presence: true
end
