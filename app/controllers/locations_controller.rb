class LocationsController < ApplicationController

  def index
    @locations = Location.all
  end

  def landing
  end

  def create
    @location = Location.new(location_params)
    @location.save
    redirect_to locations_path
  end

  private

  def location_params
    params.require(:location).permit(:lat, :lng, :notes)
  end
end
