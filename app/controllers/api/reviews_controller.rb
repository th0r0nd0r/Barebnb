class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: ["Review field can't be blank"], status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:id, :rating, :body, :spot_id, :author_id)
  end
end
