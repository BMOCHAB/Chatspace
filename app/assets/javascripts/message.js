
$(function(){
  function new_messageformat(data){
   var src = data.image
   var html = $(  '<div class="message">'
                  '<div class="upper-message">'
                  '<div class="user-name">'+data.user.name+
                  '</div>'
                  '<div class="date">'+data.created_at+
                  '</div>'
                  '</div>'
                  '<div class="lower-message">'
                  '<p class="content">'+data.content+'</p>'
                  '<img class="image" src="%{src}">'
                  '</div>'
                  '</div>'
                );
   
   return new_messageformat;
  }
  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
  var html = new_messageformat(data);
  $('chat__messages').append(html);
  $('form__message').val('');
  $('.form__submit').prop('disabled', false);
  $("html,body").animate({scrollTop:$('message').offset().top});
    })
  .fail(function(message){
  console.log('error!');
    })
    })
  });