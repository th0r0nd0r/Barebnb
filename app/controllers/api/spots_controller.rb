class Api::SpotsController < ApplicationController
  def create
  end

  def index
    @spots = Spot.all
    render :index
  end
end
