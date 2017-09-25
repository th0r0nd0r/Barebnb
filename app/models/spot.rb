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

  def self.in_bounds(bounds)
  # google map bounds will be in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }
  #... query logic goes here
    ne = [bounds["northEast"]["lat"].to_f, bounds["northEast"]["lng"].to_f]
    sw = [bounds["southWest"]["lat"].to_f, bounds["southWest"]["lng"].to_f]

    self
    .find_each do |spot|
      ((spot.lat.between?(sw[0], ne[0])) && (spot.lng.between?(sw[1], ne[1])))
    end
  end
end
