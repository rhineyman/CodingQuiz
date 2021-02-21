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
var intervalTime = intervalTime

const btnBtn = document.getElementById("btn");
const questionElement = document.getElementById('question');
const startButton = document.getElementById("startBtn");
const questionContainerElement = document.getElementById("questionContainer");
const answerButton = document.getElementById("answerButtons");
const highScoreElement = document.getElementById("highScore");

// change score to a # value

var currentScore = [0];
var highName = [""];

var highScoreList = [];

highScoreElement.innerHTML = highScoreList[0];


startButton.addEventListener("click", startQuiz);


let shuffledQuestions, currentQuestionIndex

function startQuiz() {
  Timer();
  scoreReset();

  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0

  setNextQuestion()

}


function scoreReset() {
  var scoreStart = 0
  currentScore = scoreStart;
  scoreElement = document.getElementById("score");
  scoreElement.innerHTML = currentScore;
    
}


function Timer() {
  var startCount = 50;
  const stopCount = 0,
    duration = 10000,
    countDownElement = document.getElementById('timer'),
    intervalTime = duration / Math.abs(startCount - stopCount);

  var countDown = setInterval(
    function () {
      if (startCount === stopCount) clearInterval(countDown)

      countDownElement.innerHTML = startCount;
      if (startCount > stopCount) {
        startCount--
      } else {
        startButton.innerText = 'Restart';
        questionElement.innerText = "GAME OVER!";
        startButton.classList.remove('hide');
        var highscoreName = prompt("Enter your initials");        
        highName = highscoreName;       
        highScoreList.push(highName + currentScore);
        highScoreElement.innerHTML = highScoreList[0];
        resetState();
      }
    },
    intervalTime
  );
}


function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    button.addEventListener('click', selectAnswer)
    answerButton.appendChild(button)

  })
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function selectAnswer() {  
  
  currentScore++;
  
  scoreElement = document.getElementById("score");
  scoreElement.innerHTML = currentScore;
  
  if (shuffledQuestions.length > currentQuestionIndex + 1) {    
    currentQuestionIndex++;
    setNextQuestion();

  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
  console.log(currentScore);

}



function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function resetState() {
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild)
  }
}



const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '6', correct: false },
      { text: '8', correct: false },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Which command will log array length',
    answers: [
      { text: 'console.log(array.length)', correct: true },
      { text: 'console.array.length', correct: false },
      { text: 'length.array', correct: false },
      { text: 'array.length', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Which school is best?',
    answers: [
      { text: 'OSU', correct: false },
      { text: 'OU', correct: true },
      { text: 'UofA', correct: false },
      { text: 'UT', correct: false }
    ]
  },
  {
    question: '5 * 5',
    answers: [
      { text: '16', correct: false },
      { text: '25', correct: true },
      { text: '23', correct: false },
      { text: '50', correct: false }
    ]
  },
  {
    question: '3 + 3',
    answers: [
      { text: '6', correct: false },
      { text: '32', correct: true },
      { text: '14', correct: false },
      { text: '222', correct: false }
    ]
  },
  {
    question: 'x = 3 + 3, x=',
    answers: [
      { text: '8', correct: false },
      { text: '6', correct: true },
      { text: '42', correct: false },
      { text: '212', correct: false }
    ]
  },
  {
    question: '11 * 2',
    answers: [
      { text: '16', correct: false },
      { text: '18', correct: false },
      { text: '14', correct: false },
      { text: '22', correct: true }
    ]
  },
]