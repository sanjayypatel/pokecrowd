class AddPokemonToLocation < ActiveRecord::Migration
  def change
    add_reference :locations, :pokemon, index: true
  end
end
