Rails.application.routes.draw do
  root 'locations#landing'
  resources :locations
end
