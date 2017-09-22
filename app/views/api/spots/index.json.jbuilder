@spots.each do |spot|
  json.set! spot.id do
    json.extract! spot,
      :id,
      :title,
      :description,
      :lat,
      :lng,
      :host_id,
      :img_url
  end
end
