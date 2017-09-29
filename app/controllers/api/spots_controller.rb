class Api::SpotsController < ApplicationController
  def index
    spots = bounds ? Spot.in_bounds(bounds) : Spot.all

    @spots = spots.includes(:reviews, :host)
    render :index
  end

  def show
    @spot = Spot.includes(:reviews).find(params[:id])
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

  def update
    @spot = Spot.find(params[:id])
    if @spot.update(spot_params)
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def destroy
    @spot = Spot.find(params[:id])
    @spot.destroy!
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

  def bounds
    params[:bounds]
  end
end
