$(function(){
  function buildMESSAGE(message) {
    var html = $(   '<div class="message">' +
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
    $('.chat__messages.chat__js-messages').append(html);
  }
});

$(function(){
  $(function(){
    setInterval(update, 5000);
    //10000ミリ秒ごとにupdateという関数を実行する
  });

  function update(){
     if($('.messages')[0]){ //もし'messages'というクラスがあったら
      var message_id = $('.messages:last').data('id'); //一番最後にある'messages'というクラスの'id'というデータ属性を取得し、'message_id'という変数に代入
    } else { //ない場合は
      var message_id = 0 //0を代入
    }
      var message_id = $('.message:last').data('id'); 
    $.ajax({
      url: location.href,
      type: 'GET', 
      dataType: 'json' 
    })
    .done(function(data){ //通信したら、成功しようがしまいが受け取ったデータを引数にとって以下のことを行う
    $.each(data, function(i, data){ //'data'を'data'に代入してeachで回す
      console.log(data)
    })
    });
  };

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
    .fail(function(data){
      console.log('error!');
    })
   })
  });
});
