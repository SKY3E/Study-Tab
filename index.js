// Call initial color function
updateColor();

// Hide elements on start
document.getElementById("stopwatch-box-div").style.display = "none";
document.getElementById("text-box-div").style.display = "none";
document.getElementById("clock-box-div").style.display = "none";
document.getElementById("todo-box-div").style.display = "none";

// Movable Items Code
// Make the DIV elements draggable:
dragElement1(document.getElementById("text-box-div"));
function dragElement1(elmnt1) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("text-box-div-mouse")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("text-box-div-mouse").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt1.style.top = (elmnt1.offsetTop - pos2) + "px";
    elmnt1.style.left = (elmnt1.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement2(document.getElementById("stopwatch-box-div"));
function dragElement2(elmnt2) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("stopwatch-box-div-mouse")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("stopwatch-box-div-mouse").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt2.style.top = (elmnt2.offsetTop - pos2) + "px";
    elmnt2.style.left = (elmnt2.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement3(document.getElementById("clock-box-div"));
function dragElement3(elmnt3) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("clock-box-div-mouse")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("clock-box-div-mouse").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt3.style.top = (elmnt3.offsetTop - pos2) + "px";
    elmnt3.style.left = (elmnt3.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement4(document.getElementById("todo-box-div"));
function dragElement4(elmnt4) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("todo-box-div-mouse")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("todo-box-div-mouse").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt4.style.top = (elmnt4.offsetTop - pos2) + "px";
    elmnt4.style.left = (elmnt4.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Digital Timer Code
function Time() {

  // Creating object of the Date class
  var date = new Date();
  
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  
  // Variable to store AM / PM
  var period = "";
  
  // Assigning AM / PM according to the current hour
  if (hour >= 12) {
  period = "PM";
  } else {
  period = "AM";
  }
  
  // Converting the hour in 12-hour format
  if (hour == 0) {
  hour = 12;
  } else {
  if (hour > 12) {
  hour = hour - 12;
  }
  }
  
  // Updating hour, minute, and second
  // if they are less than 10
  hour = update(hour);
  minute = update(minute);
  second = update(second);
  
  // Adding time elements to the div
  document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
  
  // Set Timer to 1 sec (1000 ms)
  setTimeout(Time, 1000);
  }
  
  // Function to update time elements if they are less than 10
  // Append 0 before time elements if they are less than 10
function update(t) {
  if (t < 10) {
  return "0" + t;
  }
  else {
  return t;
  }
}
  
Time();

// Color Changer
var backgoundColor;
var mainColor;
var secondaryColor;
var textColor;

function updateColor(){
  textColor = document.getElementById("main-header-text-color-input").value;
  backgroundColor = document.getElementById("main-header-background-color-input").value;
  mainColor = document.getElementById("main-header-main-color-input").value;
  secondaryColor = document.getElementById("main-header-secondary-color-input").value;
  updateTextColor();
  updateBackgroundColor();
  updateMainColor();
  updateSecondaryColor();
}

function updateTextColor(){
  // Create list with all html elements to update
  textColorList = ["main-header-div", "text-box-div", "clock-box-div", "text-box-text", "todo-box-div", "todo-box-input", "todo-box-input-btn", "stopwatch-box-div", "stopwatch-btn-start", "stopwatch-btn-stop", "stopwatch-btn-reset", "main-header-credits-div"]
  //Loop through list of elements and update colors
  for (let i in textColorList){
    document.getElementById(textColorList[i]).style.color = textColor;
  }
}

function updateBackgroundColor(){
  // Create list with all html elements to update
  backgroundColorList = ["todo-box-input-btn", "stopwatch-btn-start", "stopwatch-btn-stop", "stopwatch-btn-reset"]
  //Loop through list of elements and update colors
  for (let i in backgroundColorList){
    document.getElementById(backgroundColorList[i]).style.background = backgroundColor;
  }
  //Update background color seperately
  document.body.style.background = backgroundColor;
}

function updateMainColor(){
  // Create list with all html elements to update
  mainColorList = ["main-title", "main-header-color-div", "text-box-div", "clock-box-div", "todo-box-div", "stopwatch-box-div", "main-header-item-div", "main-header-credits-div"]
  //Loop through list of elements and update colors
  for (let i in mainColorList){
    document.getElementById(mainColorList[i]).style.background = mainColor;
  }
}

function updateSecondaryColor(){
  // Create list with all html elements to update
  secondaryColorList = ["main-title", "main-header-color-div", "text-box-div", "text-box-text", "clock-box-div", "todo-box-div", "todo-box-input", "stopwatch-box-div", "main-header-item-div", "main-header-credits-div"]
  //Loop through list of elements and update colors
  for (let i in secondaryColorList){
    document.getElementById(secondaryColorList[i]).style.borderColor = secondaryColor;
  }
}

// Todo Code
todoList = [];
todoItemIndex = 0;

function addTodo(){
  tempTodo = document.getElementById("todo-box-input").value;
  if (tempTodo != ""){
    todoList.push(tempTodo);
  }
  // Create element variables
  var mainDiv = document.getElementById("todo-box-items-div");
  var tempNewDiv = document.createElement("div");
  var tempTodoText = document.createElement("div");
  var tempTodoDel = document.createElement("button");

  // Add element id's
  tempNewDiv.setAttribute("id", "todo-box-div-single-" + todoItemIndex);
  tempNewDiv.setAttribute("class", "todo-box-single-div");
  tempTodoText.setAttribute("id", "todo-box-div-single-text-" + todoItemIndex);
  tempTodoDel.setAttribute("id", "todo-box-div-single-del-" + todoItemIndex);
  textColorList.push(tempTodoDel.id);
  secondaryColorList.push(tempTodoDel.id);

  // Add other element settings
  tempTodoText.innerHTML = tempTodo;
  tempTodoDel.textContent = 'Delete';
  mainDiv.appendChild(tempNewDiv);
  tempNewDiv.appendChild(tempTodoText);
  tempNewDiv.appendChild(tempTodoDel);
  todoItemIndex++;

  // Update colors to new elements
  updateColor();

  // Reset input value
  document.getElementById("todo-box-input").value = "";

  // Add event listener to button
  tempTodoDel.addEventListener('click', function handleClick(event) {
    deleteItem(event.target.id)
  });

  function deleteItem(id) {
    // Get id info
    tempTodoName = document.getElementById(id);
    tempTodoItemIndex = id.slice(-1);

    // Delete elements with id
    let tempTodoItemSingle = document.getElementById("todo-box-div-single-" + tempTodoItemIndex);
    tempTodoItemSingle.remove();
  }
}

// Stopwatch Code
let stopwatchStartBtn = document.getElementById('stopwatch-btn-start');
let stopwatchStopBtn = document.getElementById('stopwatch-btn-stop');
let stopwatchResetBtn = document.getElementById('stopwatch-btn-reset');
  
let stopwatchHour = 00;
let stopwatchMinute = 00;
let stopwatchSecond = 00;
let stopwatchCount = 00;

var stopwatchStarted = false;
  
stopwatchStartBtn.addEventListener('click', function () {
    stopwatchTimer = true;
    if (stopwatchStarted == false) {
      stopWatch();
    } else {
      alert("Please reset stopwarch before.");
    }
    stopwatchStarted = true;
});
  
stopwatchStopBtn.addEventListener('click', function () {
    stopwatchStarted = false;
    stopwatchTimer = false;
});
  
stopwatchResetBtn.addEventListener('click', function () {
    stopwatchStarted = false;
    stopwatchTimer = false;
    stopwatchHour = 0;
    stopwatchMinute = 0;
    stopwatchSecond = 0;
    stopwatchCount = 0;
    document.getElementById('stopwatch-hr').innerHTML = "00";
    document.getElementById('stopwatch-min').innerHTML = "00";
    document.getElementById('stopwatch-sec').innerHTML = "00";
    document.getElementById('stopwatch-count').innerHTML = "00";
});
  
function stopWatch() {
    if (stopwatchTimer == true) {
        stopwatchCount++;
        console.log(stopwatchCount);
  
        if (stopwatchCount == 100) {
            stopwatchSecond++;
            stopwatchCount = 0;
        }
  
        if (stopwatchSecond == 60) {
            stopwatchMinute++;
            stopwatchSecond = 0;
        }
  
        if (stopwatchMinute == 60) {
            stopwatchHour++;
            stopwatchMinute = 0;
            stopwatchSecond = 0;
        }
  
        let hrString = stopwatchHour;
        let minString = stopwatchMinute;
        let secString = stopwatchSecond;
        let countString = stopwatchCount;
  
        if (stopwatchHour < 10) {
            hrString = "0" + hrString;
        }
  
        if (stopwatchMinute < 10) {
            minString = "0" + minString;
        }
  
        if (stopwatchSecond < 10) {
            secString = "0" + secString;
        }
  
        if (stopwatchCount < 10) {
            countString = "0" + countString;
        }
  
        document.getElementById('stopwatch-hr').innerHTML = hrString;
        document.getElementById('stopwatch-min').innerHTML = minString;
        document.getElementById('stopwatch-sec').innerHTML = secString;
        document.getElementById('stopwatch-count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}

// Switch Code
var stopwatchActive = false;
var notesActive = false;
var clockActive = false;
var todoActive = false;

function updateItemToggleStopwatch() {
  if (stopwatchActive == false) {
    stopwatchActive = true;
  } else {
    stopwatchActive = false;
  }
  updateItemToggleAll();
}

function updateItemToggleNotes() {
  if (notesActive == false) {
    notesActive = true;
  } else {
    notesActive = false;
  }
  updateItemToggleAll();
}

function updateItemToggleClock() {
  if (clockActive == false) {
    clockActive = true;
  } else {
    clockActive = false;
  }
  updateItemToggleAll();
}

function updateItemToggleTodo() {
  if (todoActive == false) {
    todoActive = true;
  } else {
    todoActive = false;
  }
  updateItemToggleAll();
}

function updateItemToggleAll() {
  if (stopwatchActive == false) {
    document.getElementById("stopwatch-box-div").style.display = "none";
  } else {
    document.getElementById("stopwatch-box-div").style.display = "block";
  }
  if (notesActive == false) {
    document.getElementById("text-box-div").style.display = "none";
  } else {
    document.getElementById("text-box-div").style.display = "block";
  }
  if (clockActive == false) {
    document.getElementById("clock-box-div").style.display = "none";
  } else {
    document.getElementById("clock-box-div").style.display = "block";
  }
  if (todoActive == false) {
    document.getElementById("todo-box-div").style.display = "none";
  } else {
    document.getElementById("todo-box-div").style.display = "block";
  }
}