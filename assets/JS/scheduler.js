// Display the current day at the top of the calender when a user opens the planner.

console.log("calendar")   // test point


var todayDate = moment().format('LLLL');                  // note: default - display in local time - for certain zones use moment()UTC.format('LLLL'); or use other timezone (GMT)
$("#currentDay").html(todayDate);
console.log(todayDate) // test point







/*
const store = window.localStorage;

const now = moment.utc();


 const currentTime = {
    text: moment.utc().format(LLLL),

}; 

$("#currentDay").text(now.format(LLLL));

*/ 
