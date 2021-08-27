// Variables for the timer live here
var counter = 75;
var timer = null;

// Variables for the questions live here
var question1 = "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?";
var question2 = "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?";
var question3 = "In JavaScript, what is a block of code called that is used to perform a specific task?";
var question4 = "In JavaScript, what element is used to store and manipulate text usually in multiples?";
var question5 = "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?";

// Variables for the answers live here
var answers1 = "Syntax*, scope, output, JSON";
var answers2 = "Events*, RegExp, Boolean, Condition";
var answers3 = "String, Declaration, Function*, Variable";
var answers4 = "Arrays, Strings*, Function, Variables";
var answers5 = "Conditional Loop, Else Loop, For Loop, While Loop*";

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
};


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
