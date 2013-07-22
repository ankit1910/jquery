$(function(){
  var textHint = $('label[for="q"]').remove()
                                    .text();
  $('#q') .addClass("hint")
          .val(textHint)
          .bind('focus', function(){
            if($(this).val() == textHint){
              $(this).removeClass('hint')
                     .val("");
            }
          })
          .bind('blur',function(){
            if($(this).val() == ""){
              $(this).val(textHint)
                     .addClass('hint');
            }
          })
});
