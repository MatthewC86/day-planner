// ready event 
$(document).ready(function () {

    var currentDay = $('#current-day');

    $('#currentDay').text(dayjs().format('MMM DD, YYYY'));

// now we'll need to track hours to determine past/present/future.
function hourUpdate() {
  var currentHour = dayjs().hour();
  console.log(currentHour);


$('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    if (blockHour < currentHour) {
        // add class
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        // remove class
        $(this).removeClass('past');
        $(this).addClass('present');

      } else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
      }
    });
} 
      hourUpdate();


    // save description to local storage
     $(".saveBtn").on("click", function () {
      var textInput = $(this).siblings(".description").val()
      var timeStamp = $(this).parent().attr("id")

      localStorage.setItem(timeStamp, textInput);
     });
     
     $("#hour-9 .description").val(localStorage.getItem("hour-9"));
     $("#hour-10 .description").val(localStorage.getItem("hour-10"));
     $("#hour-11 .description").val(localStorage.getItem("hour-11"));
     $("#hour-12 .description").val(localStorage.getItem("hour-12"));
     $("#hour-13 .description").val(localStorage.getItem("hour-13"));
     $("#hour-14 .description").val(localStorage.getItem("hour-14"));
     $("#hour-15 .description").val(localStorage.getItem("hour-15"));
     $("#hour-16 .description").val(localStorage.getItem("hour-16"));
     $("#hour-17 .description").val(localStorage.getItem("hour-17"));

     var timeCheck = setInterval(hourUpdate, 15000);
    
});