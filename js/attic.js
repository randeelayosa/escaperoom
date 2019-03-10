$(document).ready(function(){
  if(sessionStorage.inventory.indexOf('doll')>=0){
    console.log("has doll");
    $('.doll').hide();
  }
    else {
      $('.doll').click(function(){
          sessionStorage.inventory+=",doll";
          $('.doll').hide();
        })
    }
})
