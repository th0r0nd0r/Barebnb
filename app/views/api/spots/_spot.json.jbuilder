if spot
  json.extract! spot, :id, :title, :description, :lat, :lng, :host_id, :img_url, :price
else
  {}
end
