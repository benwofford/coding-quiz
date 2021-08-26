var counter = 75;
var timer = null;

// This function initiates the timer
function countDown() {
    counter--;
    $("#clock").html(counter);
        timer= setInterval("countDown()", 1000);
}


// This hides the sections at page load until called upon
$("#section-2").hide(); $("#section-3").hide(); $("#section-4").hide();

//When the start button is clicked this simultaneously calls up the quiz section and starts the timer
$("#start-btn").click(function() {
    $("#section-1").hide();
        $("#section-2").show();
});