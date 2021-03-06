Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:index, :create, :update, :destroy]
    resources :cards, only: [:index, :create, :update, :destroy]
  end

  root to: 'static_pages#root'
end
