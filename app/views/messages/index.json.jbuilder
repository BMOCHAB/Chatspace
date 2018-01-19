if @jsmessagesa.present? 
  json.text  @jsmessagesa.content
  json.image  @jsmessagesa.image.url
  json.name @jsmessagesa.user.name
  json.id @jsmessagesa.id
  json.created_at @jsmessagesa.created_at.strftime("%Y/%m/%d/ %H:%M")
end