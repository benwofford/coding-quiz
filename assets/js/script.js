// Variables for the timer live here
var counter = 75;
var timer = null;

// Variables for the questions and answers live here
var question1 = ""

// This function initiates the timer --> needs big fix :(
function countDown() {
    $("#clock").html(counter);
        timer= setInterval("countDown()", 1000);
        counter--;
        function timer() {
            if (count == 0) {
                countDown.stop();
                return;
            }
        }
}


// This hides the sections at page load until called upon
$("#section-2").hide(); $("#section-3").hide(); $("#section-4").hide();

//When the start button is clicked this simultaneously calls up the quiz section and starts the timer
$("#start-btn").click(function() {
    $("#section-1").hide();
        $("#section-2").show();
            $(function() {
                countDown();
            })
    $("section-2")
});

// Questions for the quiz will populate from the following lists
