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

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: ["Review field can't be blank"], status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    render :show
  end


  private

  def review_params
    params.require(:review).permit(:id, :rating, :body, :spot_id, :author_id)
  end
end
