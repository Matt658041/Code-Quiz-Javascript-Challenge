//Know the status of the quiz
let quizStatus = true
//Tracks questions answered
let questionNumber = 0;
//Tracks next answer to show
let answerNumber = 0;
//Max value by decreasing the wrong answer
let score = 0;
//Score add fix for ticking timer
let highScore = 50;
//if last answer is wrong it will be validated outside of the time interval and then display as enabled=1
let finalAnswerCheck = 0
//Check timer times call for function on the last question
let checkTimes = 1
//View high scores button element
let viewHighScoresBtnEl = document.getElementById('view-high-scores');
//Start quiz btn
let startQuizBtnEl = document.getElementById('start-quiz');
//answer button elements
let answer1BtnEl = document.getElementById('answer1');
let answer2BtnEl = document.getElementById('answer2');
let answer3BtnEl = document.getElementById('answer3');
let answer4BtnEl = document.getElementById('answer4');
//submit score btn
let submitScoreEl = document.getElementById('submitScore');
//Questions in the main div
let quesionsEl = document.getElementById('questions');
//Main div container for all elements
let mainDivEl = document.getElementById('mainDiv');
//display counter
let htmlTimeLeft = document.getElementById('timeLeft');
//display counter
let answerCorrectWrong = document.getElementById('answerCorrectWrong');
//create the element for display
let questionDisplayEl = document.createElement("questionDisplay");
// create element display
let finalScoreDisplayEl = document.createElement("finalScoreDisplay");
//enter initials
let enterInitialsEl = document.createElement("enterInitials");
//text area
let enterInitialsTextAreaEl = document.createElement("enterInitialsTextArea");
//test answer 1
let button1234 = document.createElement("button");
// timer counter
let timeLeft = 30;



