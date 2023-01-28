// Display the current day at the top of the calender when a user opens the planner.
console.log("calendar")   // start test point

// Current date and time --------------------------------------------------------------
var todayDate = moment().format('LLLL');                  // note: default - display in local time - for certain zones use moment()UTC.format('LLLL'); or use other timezone (GMT)
$("#currentDay").html(todayDate);
console.log(todayDate) // test point

//-------------------------------------------------------------------


var currentTime = moment().hour()
console.log (currentTime) //test point: time of the day(hour)

function timeTracker() {


}










    
       
       



/*

$(".time-block").each( function() {
    if (currentTime = $ (label.dataset ["number"]) ) {                // 
       
       console.log(currentTime)

       $(this).addClass("present");
       //note: if txt color change is required:-  (this).children(".textcolor").addClass("color-textu");
    }


})





$ ("#textarea").change(classToApply(){
      


});  */




 // const classToApply = currentTime ? "past" : "future";        "present" 








// moment().hour(Number); or moment().hour(); - get or set date 
// moment().hours(Number); or moment().hours(); 
