var quiz = [
  {
    question: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
    answers: ["Syntax", "scope", "output", "JSON"],
    correctAnswer: "Syntax"
  },
  {
    question: "In JavaScript, what is used in conjunction with HTML to “react” to certain elements?",
    answers: ["Events", "RegExp", "Boolean", "Condition"],
    correctAnswer: "Events"
  },
  {
    question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
    answers:   ["String", "Declaration", "Function", "Variable"],
    correctAnswer: "Function"
  },
  {
    question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
    answers:   ["Arrays", "Strings", "Function", "Variables"],
    correctAnswer: "Strings"
  },
  {
    question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
    answers:   ["Conditional Loop", "Else Loop", "For Loop", "While Loop"],
    correctAnswer: "While loop"
  }
];

var goodJob = function () {
  document.getElementById("correct").style.display = "block";
};

var tryAgain = function () {
  document.getElementById("wrong").style.display = "block";
  timeleft -= 10;
};

var answerButtons = document.getElementsByClassName("answer-btn");

var nextQuestion = function() {
  document.getElementById("correct").style.display = "none";
  document.getElementById("wrong").style.display = "none";
};

var questionCount = 0;

// This hides the sections at page load until called upon
window.onload = function () {
  document.getElementById("section-2").style.display = "none";
  document.getElementById("section-3").style.display = "none";
  document.getElementById("section-4").style.display = "none";
  document.getElementById("correct").style.display = "none";
  document.getElementById("wrong").style.display = "none";
};

// Show sections
var showSection2 = function () {
  document.getElementById("section-2").style.display = "block";
};
var showSection3 = function () {
  document.getElementById("section-3").style.display = "";
};
var showSection4 = function () {
  document.getElementById("section-4").style.display = "";
};

// Start timer
var timeleft = 75;
var countDown = function () {
  setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(countDown);
      document.getElementById("clock").innerHTML = "Time's up!";
    } else {
      document.getElementById("clock").innerHTML = timeleft;
    }
    timeleft -= 1;
  }, 1000);
};

//When the start button is clicked this simultaneously calls up the quiz section and starts the timer
function startQuiz() {
  showSection2();
  countDown();
  document.getElementById("section-1").style.display = "none";
  showQuestion();
};

// This gets a question to populate the h2 tag
var showQuestion = function() {
    document.getElementById("question").textContent = quiz[questionCount].question;
    console.log(document.getElementsByClassName("answer-btn"));

    for (var i = 0; i < quiz[questionCount].answers.length; i++) {
        answerButtons[i].textContent = quiz[questionCount].answers[i];
    }
};

// This gets a set of answers to populate the answer buttons
for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", function(e){
        console.log(e.target.textContent);
        if(quiz[questionCount].correctAnswer === e.target.textContent) {
          // right
            quiz[i] === true;
            goodJob();
            questionCount++;
            showQuestion();
            // wrong
        } else {
            quiz[i] === !true;
            tryAgain();
            questionCount++;
            showQuestion();
          };
        })
    };
    // nextQuestion();


// This stops the quiz after the array finishes and calls up the final sections --> needs fix
/* var quizComplete = function() {
if (answerButtons.length > 5)
  return;
  showSection3();
  showSection4();
};

// Clicking View Highscores takes you to leaderboard

// Set timer subtraction for incorrect answers

// Set timer 0 game over

// Set initials/high score

// README (get screenshots to populate without link)*/