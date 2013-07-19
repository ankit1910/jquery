var box = $('#q');
box.val("Enter search term");
box.addClass("hint");
$('label[for="q"]').remove();
//binding focus and blur event to a single function..
box.bind('focus blur', function(e){
  $(this).toggleClass('hint');
  if(e.type == 'focus'){
    $(this).val("");
  }
  else if(e.type == 'blur' && !($(this).val()) ){
    $(this).val("Enter search term");
  }
})
