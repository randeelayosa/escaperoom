$(document).ready(function(){
  let container = document.querySelector('.frame');
  const RADIUS = 300;

  document.addEventListener('mousemove', function (event) {
   let x = event.clientX;
   let y = event.clientY;

   let circle = `circle(${RADIUS}px at ${x}px ${y}px)`;
   container.style['-webkit-clip-path'] = circle;
   container.style['clip-path'] = circle;
  });
});
