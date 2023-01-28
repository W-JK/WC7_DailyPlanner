// Display the current day at the top of the calender when a user opens the planner.
console.log("calendar")   // start test point

// Current date and time --------------------------------------------------------------
var todayDate = moment().format('LLLL');                  // note: default - display in local time - for certain zones use moment()UTC.format('LLLL'); or use other timezone (GMT)
$("#currentDay").html(todayDate);
console.log(todayDate) // test point

//-------------------------------------------------------------------





