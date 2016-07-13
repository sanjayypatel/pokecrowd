class Pokemon < ActiveRecord::Base
  has_many :locations
end
