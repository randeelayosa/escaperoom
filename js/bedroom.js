$(document).ready(function(){
  $('.doll').hide();
  if(sessionStorage.inventory.indexOf('key')>=0){
    $('.doll').show();
    $('#friend-ghost p').text("Thanks Again! Did you use the key?");
  } else if(sessionStorage.inventory.indexOf('doll')>=0){
    $('#friend-ghost p').text("You found my dolly! Thank you! I'll trade you for this key!");
    $('#friend-ghost').click( function(){
      sessionStorage.inventory+=',key';
      $('.doll').show();
    })
  }
    else {
      console.log('does not have doll');
    }
})
