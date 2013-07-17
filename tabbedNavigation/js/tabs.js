var divModule = $('div.module');
$(document).ready(function(){
  divModule.hide();
  divModule.first().before('<ul id="append">Apended list</ul>');
  divModule.each(function(){
    $('#append').append("<li name='" + this.id + "'>" + $(this).children("h2").text() + "</li>");
  })  
  divModule.first().show();
  listItemCLick();
})
// list click event handler
function listItemCLick(){
  $('#append li').bind('click', function(){
    $(this).addClass('current').siblings().removeClass('current');
    var moduleId = $(this).attr('name');
    $('div[id="' + moduleId + '"]').show().siblings("div.module").hide();
  })
}
