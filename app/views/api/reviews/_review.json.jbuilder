json.extract! review, :id, :rating, :body, :spot_id, :author_id
json.user do
  json.extract! review.author, :img_url, :username
end
