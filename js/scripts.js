// $(document).ready(function(){
//   var house=$('#house');
//   var playState='animation-play-state';
//
// function playOnScroll(){
//   house.css(playState, function(){
//     return 'running';
// });
//
//
//
// $(window).scroll(function(){
//   console.log("test");
//   // playOnScroll();
// });
//
//
// })


var intro =new ScrollMagic.Controller();

var walkToHouse =new ScrollMagic.Scene({
  duration: 100,
  offset:50,
}).setPin('#house').addTo(intro);

console.log("intro"+intro);

console.log('scene'+walkToHouse);
