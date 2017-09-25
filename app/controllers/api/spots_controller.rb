class Api::SpotsController < ApplicationController
  def index
    @spots = Spot.all
    render :index
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def create
    @spot = Spot.create!(spot_params)
    render :show
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
