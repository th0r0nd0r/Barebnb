@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking,
      :id,
      :guest_id,
      :checkin,
      :checkout,
      :spot_id
  end
end
