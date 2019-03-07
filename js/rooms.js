$(document).ready(function(){
  setTimeout(function(){
    
  },10000)
  let container = document.querySelector('.lights-out');
  const RADIUS = 200;

  document.addEventListener('mousemove', function (event) {
   let x = event.clientX;
   let y = event.clientY;

   let circle = `circle(${RADIUS}px at ${x}px ${y}px)`;
   container.style['-webkit-clip-path'] = circle;
   container.style['clip-path'] = circle;
  });
});
