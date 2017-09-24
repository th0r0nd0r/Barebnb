if spot
  json.extract! spot, :title, :description, :lat, :lng, :host_id, :img_url, :price
else
  {}
end
