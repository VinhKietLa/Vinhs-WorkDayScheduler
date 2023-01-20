//This displays the current date at the top of the page//
let today = moment();

$("#currentDay").text(today.format("dddd, MMMM Do"));



//This is the current hour//

let currentTime = moment();

//currentHourTime

let currentHour = currentTime.format("HH");



//Gets all the timedata attributes in the html.

let timeSlots = document.querySelectorAll("[timedata]");

// This maps through the timeslots attributes and returns the values and stores them in an array to be used in a for loop. 

let timedataArray = Array.from(timeSlots).map(function(timeSlot) {
  return timeSlot.getAttribute("timedata");
});

// console.log(timedataArray);


for(let i=0; i<timedataArray.length; i++) {
    let time = timedataArray[i];
    let currentDiv = $(`[timedata=${time}]`).closest('div'); //The .clostest finds the cloest ancestor div element of the seelcted element.
         // let testDiv2 = $('[timedata');//This selects all timedata attrbutes and not the ones that specficially match the hour.

    let eventContainer = currentDiv.siblings('#eventContainer');//The siblings method will select the div element with the ID "event9" and will apply the css class based upon the conditions below.

    if (time === currentHour) {
        $(eventContainer).addClass('present');
    } else if (time < currentHour) {
        $(eventContainer).addClass('past');

    } else if (time > currentHour) {
        $(eventContainer).addClass('future');
    }
};


function saveBtnText(event) {
    event.preventDefault();
    let currentSaveBtn = event.target;

    $(currentSaveBtn).closest('text-area');

    console.log($(currentSaveBtn).closest('text-area'));

}

let saveBtn = document.querySelectorAll(".saveBtn");


$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let currentSaveBtn = $(event.target);//This targets the button element and stores it in a variable.
    let textAreaValue = currentSaveBtn.closest('div.row').find('textarea#eventText').val();//This methods finds the closest div with the class row and .find, finds the textarea element with the id "eventText" and retrieves the value.
    console.log(textAreaValue);
});



//pseudocode//


//when user clicks on the events container, it should allow them to enter a text//[done]

//when the user clicks save, it should take their input and store this into local storage//

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