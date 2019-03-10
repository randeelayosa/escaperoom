$(document).ready(function(){
  var showInventory= function(){
      if (sessionStorage.doll=="true"){
        $('#inv-doll').show();
      }
      if (sessionStorage.cabKey=="true"){
        $('#inv-key').show();
      }
      if (sessionStorage.letter=="true"){
        $('#inv-letter').show();
      }
      if (sessionStorage.amulet=="true"){
        $('#inv-amulet').show();
      }
    }
      showInventory();
      setInterval(showInventory,1000);
});
