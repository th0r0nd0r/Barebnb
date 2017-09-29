Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create, :show] do
      resources :bookings, only: [:create, :index, :show, :update, :destroy]
    end
    resource :session, only: [:new, :create, :destroy]
    resources :spots, only: [:create, :index, :show, :update, :destroy]
    resources :reviews, only: [:create, :update, :destroy]
  end
end
