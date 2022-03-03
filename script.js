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

// don't display items until they are ready to be displayed
answer1BtnEl.style.display = 'none';
answer2BtnEl.style.display = 'none';
answer3BtnEl.style.display = 'none';
answer4BtnEl.style.display = 'none';
submitScoreEl.style.display = 'none';
answerCorrectWrong.style.display = 'none';
enterInitialsTextAreaEl.style.display = 'none';

let questionsObject = {
    correct: {
        0 : "Commonly used datatypes DO NOT include?",
        1 : "The condition statement if/else is enclosed with the following",
        2 : "Arrays can be used to store the following" ,
        3 : "A very useful tool to debug arrays is",
        4 : "Strings must be enclosed with:"
    }
};
let answersObject = { 
    answers: {
        0 : {
            0: "Strings",
            1: "Boolean",
            2: "Alerts",
            3: "Numbers"},
        1 : {
            0: "Parentheses",
            1: "Curly Brackets",
            2: "Quotes",
            3: "Square Brackets"},
        2 : { // Button #3
            0: "Javascript",
            1: "Terminal/bash",
            2: "For loops", 
            3: "Console.log"},      
        3 : { // Answer to question 5 --> Button #2
            0: "Commas",
            1: "Curly brackets",
            2: "Quotes", 
            3: "Parentheses"},      
        4 : { // Button #4
            0: "Number of strings",
            1: "Other arrays",
            2: "Booleans",
            3: "All of the above"},  
    }
};
//initialze the display timer at default value
htmlTimeLeft.textContent = timeLeft;

viewHighScoresBtnEl.addEventListener("click",function() {

        let quizUsers = "";
        let substringTest = "";
        let highScores = "";

        for (let i=0; i< localStorage.length; i++) {
            let  checkUserValue = [];

            quizUsers = localStorage.getItem(localStorage.key(i));
            substringTest = quizUsers.substring(0,4)
            if (substringTest === "quiz") {
                checkUserValue = quizUsers.split(",");
                let userName = checkUserValue[0]
                highScores += "User" + userName.substring(4) + "high score is:" + checkUserValue[1] + "\n";
            }
        }
        alert.apply(highScores);
});


