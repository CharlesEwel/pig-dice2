var tempScore = 0;

//Business Logic
function roll () {
  var rollResult = Math.ceil(6*Math.random());
  if (rollResult === 1) {
  tempScore = 0;
  return rollResult;
  } else {
  tempScore += rollResult;
  return rollResult;
  }
}


//UI Logic
$(document).ready(function() {
  // event.preventDefault()
  $("button#roll").click(function() {
  rollResult=roll();
  $("#rollResult").text("Your roll was " + rollResult);
  $("#tempScore").text("Your current score is " + tempScore);
  })
});
