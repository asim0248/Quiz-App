//Create an array of objects
const quiz = [
    {
        question: "what is the most used programing language in 2021?",
        ansText1: "Java",
        ansText2: "C",
        ansText3: "JavaScript",
        ansText4: "Python",
        answer: "JavaScript"
    },
    {
        question: "who is the president of USA?",
        ansText1: "Bush",
        ansText2: "Joe Biden",
        ansText3: "JUbama",
        ansText4: "Trump",
        answer: "Joe Biden"
    },
    {
        question: "what does HTML Stands for?",
        ansText1: "Hyper Text Markup Language",
        ansText2: "Hyper Tex Markup Language",
        ansText3: "Cascading Language",
        ansText4: "Hyper Textual Markup Language",
        answer: "Hyper Text Markup Language"
    },
    {
        question: "what year was JavaScript launched?",
        ansText1: "1995",
        ansText2: "1996",
        ansText3: "1994",
        ansText4: "None of these",
        answer: "1995"
    },
]

//Declare submit button
const quizBtn = document.getElementById("Submit");
//Declare quiz question
const question = document.getElementById("quiz-question");
//Declare Option a
const oprion_1 = document.getElementById("text_option_a");
//Declare Option b
const oprion_2 = document.getElementById("text_option_b");
//Declare Option c
const oprion_3 = document.getElementById("text_option_c");
//Declare Option d
const oprion_4 = document.getElementById("text_option_d");
//Declare Answer 
const ansElement = document.querySelectorAll(".answer");

//Declare varibale for score
let score = 0;
//By default question is on 0 Index, mean first question is shown
let currentQuestion = 0;


question.innerText = quiz[currentQuestion].question;
oprion_1.innerText = quiz[currentQuestion].ansText1;
oprion_2.innerText = quiz[currentQuestion].ansText2;
oprion_3.innerText = quiz[currentQuestion].ansText3;
oprion_4.innerText = quiz[currentQuestion].ansText4;
quizBtn.addEventListener("click", () => {
        const checkedAnswer = document.querySelector("input[type=radio]:checked");
        if (checkedAnswer === null) {
            alert("Please Select One Option");
        }else{
            if (checkedAnswer.nextElementSibling.textContent === quiz[currentQuestion].answer) {
                score++;
            }
            currentQuestion++;
            if (currentQuestion < quiz.length) {
                question.innerText = quiz[currentQuestion].question;
                oprion_1.innerText = quiz[currentQuestion].ansText1;
                oprion_2.innerText = quiz[currentQuestion].ansText2;
                oprion_3.innerText = quiz[currentQuestion].ansText3;
                oprion_4.innerText = quiz[currentQuestion].ansText4;
                checkedAnswer.checked = false;
            }else{
                //Show score on alert 
                alert("Your Scrore is " + score + " Out of " + quiz.length);
                //Reload Window function after completing the quiz 
                location.reload();
            }
        }
        
});

//Initialize quiz timer
const quizTimer = 30;

let timeLeft = quizTimer;

function updateTimer() {
    const timeDisplay = document.getElementById("time-left");
    const minutes = Math.floor(timeLeft / 30);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}: ${seconds < 10 ? '0' : ''} ${seconds}`;
}
function startTimer() {
    updateTimer();
    const timeInterval = setInterval(()=> {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            handleTimeUp();
        }
    }, 1000)
}
function handleTimeUp() {
    alert("Your time is Up, quiz is has ended");
}

startTimer();