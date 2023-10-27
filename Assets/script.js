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
  // grabbing parent node
 var parent = this.parentNode;
//  grabbing just the id of the parent node
 var parentID = parent.id;
// grabbing the text from the typed field
var parentTextArea = document.getElementById("09text").value
console.log(parentTextArea)
var saved = localStorage.setItem(parentID,"hello")


}













  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


