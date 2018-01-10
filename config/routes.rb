Rails.application.routes.draw do
  devise_for :users
  resources :groups, only: :index
  #ルーティングを設定（今のところindexのみ）
  root 'groups#index'
end
