Rails.application.routes.draw do
  namespace :api do
    resources :todos, only: [:index, :create, :show, :update, :destroy]
  end
end
