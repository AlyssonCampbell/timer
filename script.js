// grabbing the timer display = $(".timer").html(0);
//for the start-> when the button is clicked increase the time displayed by 1
//each time one second passes until infinity unless the pause or reset button is pressed
let time = 0;

$(".start").click(evt => {
  evt.preventDefault();
  // need to fix so it doesn't speed up when pressed
  startTimer = setInterval(function() {
    timer(time);
  }, 1000);
});

function timer() {
  time++;
  $(".timer").html(time);
}

$(".reset").click(evt => {
  evt.preventDefault();
  clearInterval(startTimer);
  time = 0;
  $(".timer").html(0);
});

$(".pause").click(evt => {
  evt.preventDefault();
  // clearInterval(startTimer);
  //if already paused, start the function again when clicked--not quite figured out yet
  clearInterval(startTimer);
  // }
});
