Rails.application.routes.draw do
  resources :groups, only: :index
  #ルーティングを設定（今のところindexのみ）
end
