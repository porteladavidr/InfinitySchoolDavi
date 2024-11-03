const questions = [
    {
        question: "Quem foi o primeiro presidente dos EUA?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Theodore Roosevelt"],
        correctAnswer: "George Washington"
    },
    {
        question: "Qual é a capital da França?",
        options: ["Paris", "Londres", "Roma", "Madri"],
        correctAnswer: "Paris"
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Qual é o maior planeta do sistema solar?",
        options: ["Terra", "Júpiter", "Saturno", "Marte"],
        correctAnswer: "Júpiter"
    }
];

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback');
const reloadButton = document.getElementById('reload-btn');

function displayRandomQuestion() {
    feedbackContainer.textContent = '';
    reloadButton.style.display = 'none';

    const randomIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[randomIndex];

    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.className = 'option';
        optionButton.addEventListener('click', () => checkAnswer(option, currentQuestion.correctAnswer));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        feedbackContainer.textContent = "Acertou!!!";
    } else {
        feedbackContainer.textContent = `Errado! A resposta correta é: ${correctAnswer}`;
    }

    reloadButton.style.display = 'inline-block';
}

reloadButton.addEventListener('click', () => {
    displayRandomQuestion();
});

displayRandomQuestion();
