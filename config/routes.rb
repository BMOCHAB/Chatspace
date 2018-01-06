Rails.application.routes.draw do
  devise_for :users
  #devise用のコントローラを設定
  resources :groups, only: :index
  #ルーティングを設定（今のところindexのみ）
end
