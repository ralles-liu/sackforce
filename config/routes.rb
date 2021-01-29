Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # not too sure how this works, but it seems like 'root' is in to mean '/'
  # and it tells to go to the controller at static_pages
  # then the controller default renders the root.html.erb view  
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] 
    resources :channels, only: [:index, :create, :destroy, :update]    

    resources :messages, only: [:index, :create]
    resource :session, only: [:create, :destroy]
  end

end 
  