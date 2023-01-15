const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Commonly used data types DO NOT include",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    answer: 3
  },
  {
    question:"The condition in an if/else statement is enclosed with... ?",
    choice1: "Quotes",
    choice2: "Curly Brackets",
    choice3: "Parenthesis",
    choice4: "Square Brackets",
    answer: 3
  },
  {
    question: "Arrays in JavaScript can be used to store...?",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer: 4
  },
  {
    question: "whos your Papi??",
    choice1: "I dont know",
    choice2: "You",
    choice3: "Bill Cosby",
    choice4: "R.Kelly",
    answer: 2
  },

];

//CONSTANTS
const CORRECT_BONUS = 25;
const MAX_QUESTIONS = 4;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("./finished.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if(classToApply == "correct") {
        incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame();


