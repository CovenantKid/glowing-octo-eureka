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
  // load function will pull saved text and keys in proper position on page.
  load()
function load(){
for (i = 0; i < localStorage.length; i++){
  // grabbing all saved keys 
var currentKey = localStorage.key(i)
// grabbing the saved text from the key
var currentKeyText = localStorage.getItem(currentKey)
// grabbing the id equivelent of the key from part 1. This will be used to write the text that belongs to that time block.
var currentID = document.getElementById(currentKey + "text")
// setting the text content of the block to the saved text from the key.
currentID.textContent = currentKeyText

}}
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
