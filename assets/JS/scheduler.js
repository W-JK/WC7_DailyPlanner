// start test point: console.log("calendar")   


// Current date and time --------------------------------------------------------------
var todayDate = moment().format('LLLL');                  // note: default - display in local time - for certain zones use moment()UTC.format('LLLL'); or use other timezone (GMT)
$("#currentDay").html(todayDate);
// test point: console.log(todayDate) 


//---------------------------- time dependant txt area color change ---------------------------------------


var currentTime = moment().hour()
//console.log (currentTime) //test point: time of the day(hour)



$("textarea").each(function () {    
var scheduleTime = $(this).attr("id")
            // console.log(scheduleTime) // test point - schedule by hrs
        
            if (scheduleTime == currentTime){
                $(this).addClass("present");
            }

            else if (scheduleTime > currentTime){
                $(this).addClass("future");
            }

            else if (scheduleTime < currentTime){
                $(this).addClass("past"); 
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

    //test point:      console.log(localStorage.getItem("8"))
    
    // ------------------- return values from local storage ----------- // 
    // test poiint:  $("#8").val(localStorage.getItem("8"));   
    

    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));   

});








