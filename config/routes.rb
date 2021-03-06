Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show] do
      resources :servers, only: :create
    end
    resources :servers, only: [:show, :index, :update, :destroy] do
      get :all, on: :collection
      resources :channels
      resources :subscriptions, only: [:create, :destroy]
    end
    resource :session, only: [:create, :destroy]
  end

end
