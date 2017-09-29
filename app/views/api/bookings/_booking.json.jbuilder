json.extract! booking, :id, :checkin, :checkout
json.set! booking.guest.id do
  json.extract! booking.guest, :id, :img_url, :username
end
json.set! booking.spot.id do
  json.extract! booking.spot, :id, :beds, :title, :description, :img_url, :host_id, :price
end
