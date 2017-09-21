if user
  json.extract! user, :id, :username, :email, :img_url
else
  {}
end
