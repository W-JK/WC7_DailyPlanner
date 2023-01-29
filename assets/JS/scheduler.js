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

$(document).ready(function(){
    
    $(".saveBtn").on("click",function(){
        console.log("save event")
        var eventTime = $(this).siblings("textarea").attr("id");
        var eventText = $(this).siblings(".descryption").val();
        
        localStorage.setItem(eventTime, eventText); // save value into local storage as key,value pair
        
    })


    
   





});




       
        // localStorage.setItem("scheduleEvent",JSON.stringify([]));
        // console.log(JSON.parse(localStorage.getItem("SheduleEvent")));





