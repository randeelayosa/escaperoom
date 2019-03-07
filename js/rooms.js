$(document).ready(function(){

    let container = document.querySelector('.lights-on');
    const RADIUS = 200;

    document.addEventListener('mousemove', function (event) {
      let x = event.clientX;
      let y = event.clientY;

      let circle = `circle(${RADIUS}px at ${x}px ${y}px)`;
      container.style['-webkit-clip-path'] = circle;
      container.style['clip-path'] = circle;
    });

    // function mouseStopped(){
    //     // if mouse stop moving remove class moving
    //     // it will hide the circle with opacity transition
    //     container.removeClass('moving');
    // }
    //
    // $(document).mousemove(function(e){
    // 	// if mouse start moving add class moving
    //     // it will show the circle with opacity transition
    // 	container.addClass('moving');
    //     // if mouse stop moving clear timer and call mouseStopped function
    //     clearTimeout(timer);
    //     timer=setTimeout(mouseStopped,3000);
    // });
});
