$(document).ready(function(){
  var showInventory= function(){
      if(sessionStorage.inventory.indexOf('doll')>=0){
        $('.doll').hide();
        $('#inv-doll').show();
      }
    }
      showInventory();
      setInterval(showInventory,1000);
});
