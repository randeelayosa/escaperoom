$(document).ready(function(){
  if(sessionStorage.cabKey=="true"){
      $('#aunt-ghost .dialogue').text("Thats the key, open the chest with it and give me what is inside.");
      $('#chest').click(function(){
        sessionStorage.cabKey="false";
        sessionStorage.letter="true";
        $('#aunt-ghost .dialogue').text("Ok, now give me that confession letter!");
      });
    }
  $('#aunt').click(function(){
    if(sessionStorage.letter=="true"){
      sessionStorage.letter="false";
      sessionStorage.crystal="true";
      $('#aunt-ghost .dialogue').text("Wow... what a confession! Use this magic crystal to ward off the demons, when the next version comes out!.");
    };
  });
  if(sessionStorage.letter=="true"){
    $('#aunt-ghost .dialogue').text("Ok, now give me that confession letter!");
  }
  if(sessionStorage.crystal=="true"){
    $('#aunt-ghost .dialogue').text("You did great! Use that crystal when the next version comes out!");
  }
})
