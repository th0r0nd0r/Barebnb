if spot
  json.extract! spot, :beds, :id, :title, :description, :lat, :lng, :host_id, :img_url, :price
  json.reviews do
    json.array! spot.reviews do |review|
      json.extract! review, :body, :rating, :author_id, :spot_id
    end
  end
else
  {}
end
