/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hr = time.split(':')[0];
  let parseHr = parseInt(hr, 10);
  if (parseHr < 12)
    return "Good Morning";
  else if (parseHr > 12 && parseHr < 17)
    return "Good Afternoon";
  else if (parseHr > 17)
    return "Good Evening";
};

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  document.querySelector('#greeting').innerText = string
}