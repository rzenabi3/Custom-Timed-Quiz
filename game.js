const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question:"whos your daddy",
        choice1:"your dad",
        choice2:"your mom",
        choice3:"me",
        choice4:"you",
        answer:3
    },
    {
        question:"whos your daddy",
        choice1:"your dad",
        choice2:"your mom",
        choice3:"me",
        choice4:"you",
        answer:3 
    }
    {
        question:"whos your daddy",
        choice1:"your dad",
        choice2:"your mom",
        choice3:"me",
        choice4:"you",
        answer:3
    }
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
}



