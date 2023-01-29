// Display the current day at the top of the calender when a user opens the planner.
// start test point: console.log("calendar")   
const localStore = window.localStorage;

// Current date and time --------------------------------------------------------------
var todayDate = moment().format('LLLL');                  // note: default - display in local time - for certain zones use moment()UTC.format('LLLL'); or use other timezone (GMT)
$("#currentDay").html(todayDate);
console.log(todayDate) // test point


//---------------------------- time dependant txt area color change ---------------------------------------


var currentTime = moment().hour()
//console.log (currentTime) //test point: time of the day(hour)



$("textarea").each(function () {    //  textarea .event-descryption  .time-block   (may need change)
var scheduleTime = $(this).attr("id")
            // console.log(scheduleTime) // test point - schedule by hrs
        
            if (scheduleTime == currentTime){
                $(this).addClass("present");
            }

            else if (scheduleTime > currentTime){
                $(this).addClass("future");
            }

            else if (scheduleTime < currentTime){
                $(this).addClass("past"); // ".descryption"
            }       
        
});

// ------------------ save button function ------------------------ //

saveEvent = e => {
    console.log("clicked save button")
    e.preventDefault();
    
    console.log("event function trigger");

  var eventTime = document.querySelector('textarea').id
    console.log(eventTime); // test point timeValue read
  var textValue = document.querySelector('.descryption').value;
    console.log(textValue); // test point textValue read


    // test point:
    // localStore.setItem(eventTime,textValue);
     $("#8 .desryption").val(localStore.setItem(eventTime,textValue))
     $("#9 .desryption").val(localStore.setItem(eventTime,textValue))
    // localStore.setItem(timeValue,textValue);


};






/* alternative solution
var saveEventButton = document.querySelector("#saveEventBtn");
console.log("saveEvent");



saveEventButton.addEventListener("click", function(event) {
    event.preventDefault();

  var timeValue = document.querySelector('.hour').value;
    console.log(timeValue); // test point timeValue read
  var textValue = document.querySelector('.descryption').value;
    console.log(textValue); // test point textValue read

    ///  displayMessage(".future", "Registered successfully");

    localStore.setItem(timeValue,textValue);


}); 

// ---------------------------------------------

    const scheduleEvent = {
        eventTime : hour.value,
        eventText : descryption.value
    }; */ // oryginal
















