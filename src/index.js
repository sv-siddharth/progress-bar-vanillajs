let elem = document.getElementById("myBar");
let toolTip = document.getElementById("tool-tip");

let width = 0; // initial width, width == %

let id = setInterval(start, 10); // run "start" function after each 10 millisecond.
let id2; // declaration for the interval in "end" function

// function start() {
//   if (width >= 100) {
//     clearInterval(id); //when the progress bar reaches to 100%
//   } else {
//     width++;
//     elem.style.width = width + "%"; // increase bar width;
//     elem.innerHTML = width + "%"; // also show percentage on the bar
//     toolTip.innerHTML = width + "%";
//   }
// }

function start() {
  if (width >= 100) {
    clearInterval(id); // when the progress bar reaches 100%
    id2 = setInterval(end, 10); // start the "end" function
  } else {
    width++;
    elem.style.width = width + "%"; // increase bar width;
    elem.innerHTML = width + "%"; // also show percentage on the bar
    toolTip.innerHTML = width + "%";
  }
}

function end() {
  if (width <= 0) {
    clearInterval(id2); // when the progress bar reaches 0%
    id = setInterval(start, 10); // start the "start" function again
  } else {
    width--;
    elem.style.width = width + "%"; // decrease bar width
    elem.innerHTML = width + "%"; // update the percentage on the bar
    toolTip.innerHTML = width + "%";
  }
}
