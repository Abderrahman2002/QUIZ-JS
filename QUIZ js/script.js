const questions = [
{
question: "Quelle est la capitale de la France ?",
answers: [
{ text: "Paris", correct: true },
{ text: "Londres", correct: false },
{ text: "Berlin", correct: false },
{ text: "Rome", correct: false }
]
},
{
question: "Quel est le plus grand océan du monde ?",
answers: [
{ text: "Océan Atlantique", correct: false },
{ text: "Océan Arctique", correct: false },
{ text: "Océan Indien", correct: false },
{ text: "Océan Pacifique", correct: true }
]
},
{
question: "Quel est l'organe principal du système respiratoire chez l'homme ?",
answers: [
{ text: "Le cœur", correct: false },
{ text: "Le poumon", correct: true },
{ text: "Le foie", correct: false },
{ text: "L'estomac", correct: false }
]
},
{
question: "Qui a peint La Joconde ?",
answers: [
{ text: "Vincent van Gogh", correct: false },
{ text: "Leonardo da Vinci", correct: true },
{ text: "Pablo Picasso", correct: false },
{ text: "Michel-Ange", correct: false }
]
},
{
question: "Quelle est la capitale du Japon ?",
answers: [
{ text: "Kyoto", correct: false },
{ text: "Hiroshima", correct: false },
{ text: "Tokyo", correct: true },
{ text: "Osaka", correct: false }
]
},
{
question: "Combien de continents y a-t-il dans le monde ?",
answers: [
{ text: "Cinq", correct: false },
{ text: "Six", correct: false },
{ text: "Sept", correct: true },
{ text: "Huit", correct: false }
]
},
{
question: "Qui a écrit 'Romeo et Juliette' ?",
answers: [
{ text: "William Shakespeare", correct: true },
{ text: "Charles Dickens", correct: false },
{ text: "Jane Austen", correct: false },
{ text: "Homer", correct: false }
]
},
{
question: "Quel est le plus grand désert du monde ?",
answers: [
{ text: "Le Sahara", correct: false },
{ text: "L'Antarctique", correct: true },
{ text: "Le Gobi", correct: false },
{ text: "Le Kalahari", correct: false }
]
},
{
question: "Qui a découvert la théorie de la relativité ?",
answers: [
{ text: "Isaac Newton", correct: false },
{ text: "Albert Einstein", correct: true },
{ text: "Stephen Hawking", correct: false },
{ text: "Galilée", correct: false }
]
},
{
question: "Quel est l'animal terrestre le plus rapide ?",
answers: [
{ text: "Le guépard", correct: true },
{ text: "L'antilope", correct: false },
{ text: "La gazelle", correct: false },
{ text: "Le lion", correct: false }
]
}
];
const quizContainer = document.querySelector('.quiz-container');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const startButton = document.querySelector('.btn-start');
const scoreDisplay = document.getElementById('score');
const scoreValueDisplay = document.getElementById('score-value');
const timerDisplay = document.getElementById('timer');
const timerValueDisplay = document.getElementById('timer-value');
const quizEndMessage = document.getElementById('quiz-end-message');

let currentQuestionIndex = 0;
let score = 0;
let timer = 0;
let interval;

function startQuiz() {
startButton.style.display = 'none';
scoreDisplay.style.display = 'block';
timerDisplay.style.display = 'block';
startTimer();
showQuestion(questions[currentQuestionIndex]);
questionContainer.style.display = 'block';
answerButtons.style.display = 'grid';
document.getElementById('submit-button').style.display = 'block';
}

function startTimer() {
interval = setInterval(() => {
    timer++;
    timerValueDisplay.innerText = timer;
}, 1000);
}

function stopTimer() {
clearInterval(interval);
}

function showQuestion(question) {
questionContainer.innerText = question.question;
answerButtons.innerHTML = '';
question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.classList.add('btn-option');
    button.dataset.correct = answer.correct;
    button.addEventListener('click', () => selectAnswer(answer.correct));
    answerButtons.appendChild(button);
});
}

function selectAnswer(correct) {
if (correct) {
    score++;
    scoreValueDisplay.innerText = score;
}
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
} else {
    stopTimer();
    quizEndMessage.innerText = "Quiz terminé ! Merci d'avoir participé. Votre score est de " + score + " et vous avez mis " + timer + " secondes.";
    quizEndMessage.style.display = 'block';
    questionContainer.style.display = 'none';
    answerButtons.style.display = 'none';
    document.getElementById('submit-button').style.display = 'none';
}
}