# group_users(中間)テーブル

|column|type|optinons|
|------|---|--------|
|user_id|integer|null:false|
|group_id|integer|null:false|

## Association
- belongs_to :groups
- belongs_to :users





# messagesテーブル

|column|type|options|
|------|----|-------|
|body|text|
|image|text|
|user_id|integer|null:false, forign_key:true|
|group_id|integer|null:false, forign_key:true|

## Association
- belongs_to :group
- belongs_to :users





# groupsテーブル

|column|type|options|
|------|----|-------|
|nickname|string|null:false|
|message|taxt|

## Association
- has_many :users ,through: :group_users
- has_many :group_users
- has_many :messages




# usersテーブル

|column|type|options|
|------|----|-------|
|nickname|text|null :false|
|id|integer|null :false|

## Association
- has_many :group_users
- has_many :groups through: :group_users
- has_many :messages