if spot
  json.extract! spot, :beds, :id, :title, :description, :lat, :lng, :host_id, :img_url, :price
else
  {}
end
