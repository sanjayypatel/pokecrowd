class AddNotesToLocation < ActiveRecord::Migration
  def change
    add_column :locations, :notes, :text
    add_column :locations, :lat, :decimal, {:precision=>10, :scale=>6}
    add_column :locations, :lng, :decimal, {:precision=>10, :scale=>6}
  end
end
