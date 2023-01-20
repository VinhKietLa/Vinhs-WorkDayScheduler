//This displays the current date at the top of the page//
let today = moment();

$("#currentDay").text(today.format("dddd, MMMM Do"));

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

let currentTime = moment();

let doo = $("#currentTime").text(currentTime.format("HH"));

let ooo = currentTime.format("HH");

console.log($("#timeSlot").attr('timedata'));

let timeSlot = $("#timeSlot").attr('timedata')

function compareCalendarTimeAndCurrentTime () {
    console.log(ooo);
    console.log(timeSlot);

    if(ooo == timeSlot){
        $('#event9').addClass("future");
    }

}

compareCalendarTimeAndCurrentTime();


let timeSlots = document.querySelectorAll("[timedata]");
let timedataArray = Array.from(timeSlots).map(function(timeSlot) {
  return timeSlot.getAttribute("timedata");
});
console.log(timedataArray);

