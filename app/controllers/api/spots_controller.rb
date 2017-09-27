class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
    render :show
  end

  def create
    @spot = Spot.new(spot_params)
    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def spot_params
    params.require(:spot).permit(
      :title,
      :description,
      :lat,
      :lng,
      :host_id,
      :img_url,
      :price,
      :beds
      )
  end
end
