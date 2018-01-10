Rails.application.routes.draw do
  devise_for :users
  #userコントローラにルーティングを指定(deviseの自動のやつ)

  resource :user, only: [:edit, :update]
  #userコントローラに対してeditとupdateのみ設定
  
  resources :groups, only: :index
  #ルーティングを設定（今のところindexのみ）

  root 'groups#index'
  #ルートパスを設定
end
