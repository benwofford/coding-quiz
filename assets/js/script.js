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

// Show sections
var showSection2 = function() {
    document.getElementById("section-2").style.display='block';
};
var showSection3 = function() {
    document.getElementById("section-3").style.display='';
};
var showSection4 = function() {
    document.getElementById("section-4").style.display='';
};

// Start timer
var timeleft = 75;
var countDown = setInterval(function(){
    
    if(timeleft <= 0){
        clearInterval(countDown);
    document.getElementById("clock").innerHTML = "Time's up!";
    } else {
        document.getElementById("clock").innerHTML = timeleft;
    }
    timeleft -= 1;
}, 1000);


// This hides the sections at page load until called upon
window.onload = function() {
    document.getElementById("section-2").style.display='none';
    document.getElementById("section-3").style.display='none';
    document.getElementById("section-4").style.display='none';
};

//When the start button is clicked this simultaneously calls up the quiz section and starts the timer
function startQuiz() {
    document.getElementById("start-btn").showSection2();
    document.getElementById("start-btn").countDown();
};

// Questions for the quiz will populate from the following lists

