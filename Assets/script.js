// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function(){
// display time at top of page
  const CurrentTime = document.getElementById("currentDay");
  CurrentTime.textContent = dayjs().format("dddd h:mm MMM DD");
// create the logic for making the 9am-5pm blocks.
// defining all children of the blocks.
const TimeBlock = document.createElement("div");
const TimeBlockhour = document.createElement("div");
const Timeblockfield = document.createElement("textarea");
const Timeblockbutton = document.createElement("button")
const Timeblockicon = document.createElement("i")
// adding classes and attributes to children.
  TimeBlock.classList.add("row", "time-block", "past");
  TimeBlockhour.classList.add("col-2", "col-md-1", "hour", "text-center", "py-3")
  Timeblockfield.classList.add("col-8","col-md-10", "description");
  Timeblockfield.setAttribute("rows", "3");
  Timeblockbutton.classList.add("btn", "saveBtn", "col-2", "col-md-1");
  Timeblockbutton.setAttribute("aria-label","save");
  Timeblockicon.classList.add("fas", "fa-save")
  Timeblockicon.setAttribute("aria-hidden", "true")
// appending them to eachother and displaying the block.
    document.body.appendChild(TimeBlock)
    TimeBlock.appendChild(TimeBlockhour)
    TimeBlock.appendChild(Timeblockfield)
    TimeBlock.appendChild(Timeblockbutton)
    Timeblockbutton.appendChild(Timeblockicon)

// create the blocks for respective hour.

// read ID of time block and adjust class based on current hour

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

