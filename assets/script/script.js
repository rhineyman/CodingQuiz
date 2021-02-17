console.log("You linked that shit brah")

// variables that call to id questions to input questions after prompting quiz start

//event listeners for all buttons 
//this includes answers start quiz 

//conditional statements for correct and inccorect answers

//statements that increase score/ decrease time based on boolean responses

//create a timer for quiz. doesnt have to be special just has to work

// site starts at default state of questinon being blank and answers being blank

//on start quiz click.event start function to push first question --reset score to 000 --reset timer to 99

// if (answer===false) { clear question/answers -- run next question --score --time}
// if (answer===true) { clear qustion/answers -- run next question ++score}

//when last question is answered prompt to add 3 character initials to highscore

//if (x < 3 || x > 3) { yo dawg i said only 3}
//after input post new highscore input *initials + score* to highscore alert 

//post highest score from prompt to bottom right

// highScores[0] will help


// function questionOne () {
//     maybe we fill functions with questions that are callled on to fill parameters?
//     no randomisation should have to happen 
// }
const StartButton = document.getElementById("startBtn");
const qustionElement = document.getElementById("question-container");

StartButton.addEventListener("click", startQuiz);


function startQuiz () {
    console.log("started");
    StartButton.classList.add("hide");
    qustionElement.classList.remove("hide");
}

function nextQuestion() {

}

function selectAnswer() {

}