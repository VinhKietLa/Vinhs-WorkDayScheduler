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

//This is the current hour//

let currentTime = moment();
//currentHourTime

let currentHourTime = $("#currentTime").text(currentTime.format("HH"));


let timeSlots = document.querySelectorAll("[timedata]");

let currentHour = currentTime.format("HH");


let timedataArray = Array.from(timeSlots).map(function(timeSlot) {
  return timeSlot.getAttribute("timedata");
});

// console.log(timedataArray);


for(let i=0; i<timedataArray.length; i++) {
    let time = timedataArray[i];
    let currentDiv = $(`[timedata=${time}]`).closest('div'); //The .clostest finds the cloest ancestor div element of the seelcted element.
         // let testDiv2 = $('[timedata');//This selects all timedata attrbutes and not the ones that specficially match the hour.

    let event9 = currentDiv.siblings('#event9');//The siblings method will select the div element with the ID "event9" and will apply the css class based upon the conditions below.

    if (time === currentHour) {
        $(event9).addClass('present');
    } else if (time < currentHour) {
        $(event9).addClass('past');

    } else if (time > currentHour) {
        $(event9).addClass('future');
    }
};




