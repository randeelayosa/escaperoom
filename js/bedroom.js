$(document).ready(function(){
  $('.doll').hide();
  $('.key').hide();
  if(sessionStorage.cabKey=="true"){
    $('.doll').show();
    $('#friend-ghost p').text("Thanks Again! Did you use the key?");
  } else if(sessionStorage.doll=="true"){
    $('.key').show();
    $('#friend-ghost p').text("You found my dolly! Thank you! I'll trade you for this key!");
    $('#friend-ghost').click( function(){
      sessionStorage.cabKey="true";
      sessionStorage.doll="false";
      $('.key').hide();
      $('.doll').show();
    })
  }
    else {
      console.log('does not have doll');
    }
})
