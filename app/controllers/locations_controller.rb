class LocationsController < ApplicationController

  def index
    @locations = Location.includes(:pokemon).order(created_at: :desc).limit(3)
  end

# Locations#landing will be used to create a new location entry, 
# search for the nearest of a particular pokemon,
# and view closest sightings.
# Much of the work is done by the JS scripts accessing Mapbox

  def landing
    @pokemon = Pokemon.all
  end

  def show
    if params[:id] = nil
      @location = Location.where()
    end
  end


  def create
    @location = Location.new(location_params)
    @location.save
    redirect_to locations_path
  end

  private

  def location_params
    params.require(:location).permit(:lat, :lng, :notes, :pokemon_id)
  end
end
