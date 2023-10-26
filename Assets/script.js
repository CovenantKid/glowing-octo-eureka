// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){
// display time at top of page
  const CurrentTime = document.getElementById("currentDay");
  CurrentTime.textContent = dayjs().format("dddd h:mmA MMM DD");


// grab current hour
var hour = dayjs().format("HH");
console.log("current hour is",hour);


// change class of time-blocks based on hour 
// first interate through all items with class of time-block.
 for (i = 0; i < 9; i++ ){
  var IDS = document.getElementsByClassName("time-block")[i].id;

  // past
  if (IDS < hour){
    activeID = document.getElementById(IDS).classList.add("past")
  // future
  } else if(IDS > hour){
    document.getElementById(IDS).classList.add("future")
  // present
  } else{
    document.getElementById(IDS).classList.add("present")
  }}



// save text entry in time block to local storage

// when page loads, also load saved data.
});















  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

