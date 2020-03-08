/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet (time){
  var new_time = parseInt(time,10);
  
  if (new_time < 12){
    return "Good Morning"
  } else if (new_time > 17){
    return "Good Evening"
  } else {
    return "Good Afternoon"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}