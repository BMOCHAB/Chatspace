$(function(){ 
  function new_messageformat(data){
   var html = $(  '<div class="message">' +
                  '<div class="upper-message">'+
                  '<div class="message__upper-message__user-name">'+data.name+
                  '</div>'+
                  '<div class="message__upper-message__date">'+data.created_at+
                  '</div>'+
                  '</div>'+
                  '<div class="lower-message">'+
                  '<p class="lower-message__content">'+data.text+'</p>'+
                  '</div>'+
                  '</div>'+
                  '</div>'
                );
  
    return html;
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
    $('.chat__messages.chat__js-messages').append(html);
    $('.form__message').val('');
    $('.form__submit').prop('disabled', false);
    })
    .fail(function(message){
      console.log('error!');
    });
  });
});