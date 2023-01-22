//This displays the current date at the top of the page//
let today = moment();

$("#currentDay").text(today.format("dddd, MMMM Do"));

//This is the current hour//

let currentTime = moment();

//currentHourTime

let currentHour = parseInt(currentTime.format("HH"));

//Gets all the timedata attributes in the html.

let timeSlots = document.querySelectorAll("[timedata]");

// This maps through the timeslots attributes and returns the values and stores them in an array to be used in a for loop.

let timedataArray = Array.from(timeSlots).map(function (timeSlot) {
  return timeSlot.getAttribute("timedata");
});

// console.log(timedataArray);

for (let i = 0; i < timedataArray.length; i++) {
  let time = timedataArray[i];
  let currentDiv = $(`[timedata=${time}]`).closest("div"); //The .clostest finds the cloest ancestor div element of the selected element.
  // let testDiv2 = $('[timedata');//This selects all timedata attrbutes and not the ones that specficially match the hour.
  let eventContainer = currentDiv.siblings("#eventContainer"); //The siblings method will select the div element with the ID "eventContainer" and will apply the css class based upon the conditions below.

  if (currentHour === time) {
    $(eventContainer).addClass("present");
  } else if (currentHour > time) {
    $(eventContainer).addClass("past");
  } else if (currentHour < time) {
    $(eventContainer).addClass("future");
  }
}

let saveBtn = document.querySelectorAll(".saveBtn"); //This selects all the saveBtns.

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  let currentSaveBtn = $(event.target); //This targets the button element and stores it in a variable.

  let textAreaValue = currentSaveBtn
    .closest("div.row")
    .find("textarea#eventText")
    .val(); //This methods finds the closest div with the class row and .find, finds the textarea element with the id "eventText" and retrieves the value.

  let timedataValue = currentSaveBtn
    .closest("div.row")
    .find("#timeSlot")
    .attr("timedata"); //This method finds the cloest div with the class row and .find, finds an element with the ID timeSlot with the attribute timedata and returns the values.

  let textTimeEntry = localStorage.setItem(timedataValue, textAreaValue); //This stores the entry into local storage as a timedataValue and textAreaValue pairs.
});

$(document).ready(function () { //This runs once the the html doc is ready using .ready//
  let eventText = document.querySelectorAll("#eventText"); //selects all eventText IDs
  for (let i = 0; i < timedataArray.length; i++) {
    let time = timedataArray[i];

    let storedValue = localStorage.getItem(time); //This gets the values stored in local storage. 

    $(eventText[i]).val(storedValue);//This prints the retrieved value from local storage and displays it in the textarea.
  }
});

//pseudocode//

//Should I disable save button or change it to an edit button and vice-versa?

// function showEvents() {

//     console.log(timedataArray);

//     for (let i = 0; i < timedataArray.length; i++) {
//         let time = timedataArray[i];
//         let storedEvent = localStorage.getItem(time);
//         console.log(storedEvent);
//         $('#eventText').text(storedEvent);

//     }

//     // let testArray = ["30"];
//     // let storedEvent = localStorage.getItem(testArray);
//     // console.log(storedEvent);

//     // $('#eventText').text(storedEvent);
// }

// showEvents();

//pseudocode//

//when user clicks on the events container, it should allow them to enter a text//[done]

//when the user clicks save, it should take their input and store //

// The variable needs to be stored as local storage.

// Local storage has the timedata and textvalue data, I now need to workout how to get those items and display them in the events, right now when the page loads the textareavalue is empty but the items are still in local storage.

//upon page refresh, the users saved inputs should show//.

//possibly include a delete or edit feature?//

//Present timeblocks based on the current time the page is viewed //

//Event is grey when the current time is passed.
//Event is red when the time is current.
//Event is green which in the future.

//pesudo code - compare current time to the time value in the span id current time, if it's higher than the number then it should go grey, if its equal then its green and if its higher then its red, we compare the first value HH do not include mins

// get the current time
// how to take the hours from the current time
// compare it
// display the right color

//manually solve it for each manually//

//save the input value to local storage for each event

//data-time for each button

// console.log($("#timeSlot").attr('timedata'));

// let timeSlot = $("#timeSlot").attr('timedata')

// function compareCalendarTimeAndCurrentTime () {
//     console.log(ooo);
//     console.log(timeSlot);

//     if(ooo == timeSlot){
//         $('#event9').addClass("future");
//     }

// }

// compareCalendarTimeAndCurrentTime();
