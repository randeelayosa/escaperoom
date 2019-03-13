$(document).ready(function(){
  $('#chest .dialogue').hide();
  $('#chest').click(function(){
    if(sessionStorage.cabKey=="false"){
      $('#chest .dialogue').show();
    }
    if(sessionStorage.cabKey=="true"){
      $('#chest .dialogue').text("You unlocked the chest, and found a letter. It describes the plot to murder your great aunt. Maybe now she will help?");
      $('#chest .dialogue').show();
      sessionStorage.cabKey=="false";
      sessionStorage.letter=="true";
    }
  })
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
