# group_users(中間)テーブル

|column|type|optinons|
|------|---|--------|
|user_id|integer|null:false|
|group_id|integer|null:false|

## Association
- belongs_to :group
- belongs_to :user





# messagesテーブル

|column|type|options|
|------|----|-------|
|body|text|
|image|text|
|user_id|integer|null:false, forign_key:true|
|group_id|integer|null:false, forign_key:true|

## Association
- belongs_to :group
- belongs_to :user





# groupsテーブル

|column|type|options|
|------|----|-------|
|username|string|null:false|

## Association
- has_many :users ,through: :group_users
- has_many :group_users
- has_many :messages




# usersテーブル

|column|type|options|
|------|----|-------|
|nickname|text|null :false|

## Association
- has_many :group_users
- has_many :groups through: :group_users
- has_many :messages