NewReader::Application.routes.draw do

  resource :session, :only => [:create, :destroy]
  resources :users, :only => :create

  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index]
  end

  root to: "feeds#index"
end
