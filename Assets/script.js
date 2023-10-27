$(document).ready(function(){
// display time at top of page using day.js in 12 hour format plus the day, month.
  const CurrentTime = document.getElementById("currentDay");
  CurrentTime.textContent = dayjs().format("dddd h:mmA MMM DD");

// grab current hour in 24 hour format from day.js
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
// first grab all save buttons from the HTML doc.
// And apply an event listener to all buttons that call the same function.
  saveButtons = document.getElementsByClassName("saveBtn")
  for( i of saveButtons){
    i.addEventListener("click",save,this)
  }

});

// in the save function, we first get the parent node id we are saving to.
// we use this to identify the text block that will be saved and where. 
function save(){
  // grabbing parent nodes ID
 var parent = this.parentNode.id;
// grabbing the text from the typed field
var parentTextArea = document.getElementById(parent + "text").value
// save the text using the parents ID, and the text entered by the user.
var saved = localStorage.setItem(parent,parentTextArea)
}


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


