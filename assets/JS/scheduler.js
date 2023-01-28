// Display the current day at the top of the calender when a user opens the planner.
// start test point: console.log("calendar")   

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



/* 
$(".saveBtn").click(function(saveEvent){
    saveEvent.preventDefault();
    var textValue =$(this)
    var timeValue = $(this).

    localStorage.setItem(timeValue,textValue);

    console.log(textValue)
    console.log(timeValue)


}); */














