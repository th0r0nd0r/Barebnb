class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: ["Booked!"]
    else
      render json: ["Looks like someone's already booked those dates!"],
       status: 422
    end
  end

  def index
    @bookings = Booking.includes(:guest, :spot).find_by_guest(params[:user_id])
    render :index
  end

  def show
    @booking = Booking.includes(:guest, :spot).find(params[:id])
    render :show
  end

  def update
    @booking = Booking.find(params[:id])
    if @booking.update(booking_params)
      render :show
    else
      render json: ["Looks like someone's already booked those dates!"],
      status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy!
    render :show
  end

  private

  def booking_params
    params.require(:booking).permit(
      :id,
      :checkin,
      :checkout,
      :guest_id,
      :spot_id)
  end
end
