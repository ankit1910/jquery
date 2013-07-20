$(function(){
  var textHint = $('label[for="q"]').text();
  $('label[for="q"]').remove();
  $('#q') .addClass("hint")
          .val(textHint)
          .bind('focus', function(){
            $(this).addClass('hint');
            if($(this).val() == textHint){
              $(this).val("");
            }
          })
          .bind('blur',function(){
            if($(this).val() == ""){
              $(this).val(textHint);
            }else{
              $(this).removeClass('hint');
            }
          })
})
