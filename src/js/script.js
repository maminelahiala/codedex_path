/*alrt soon*/
function alert_soon() {
    alert("Not available for now")
}
/*Open a popup*/
let popup = document.getElementById("popup");
function donThink_open() {
    popup.classList.add("open-popup");
}
/*Close popup*/
function donThink_close() {
    popup.classList.remove("open-popup");
}


/*--------------------------- MAIN CODE FOR QUIZ ---------------------------*/

let F = 0; // Counter for Front-End
let B = 0; // Counter for Back-End
let currentQuestion = 0;

const quizData = [
    {
        question: "1. Which image do you prefer?",
        image1: "content/img/front1.jpg",
        image2: "content/img/back1.jpeg"
    },
    {
        question: "2. Which image do you prefer?",
        image1: "content/img/front2.jpg",
        image2: "content/img/back2.jpg"
    },
    {
        question: "3. Which image do you prefer?",
        image1: "content/img/front3.png",
        image2: "content/img/back3.jpg"
    },
    {
        question: "4. Which image do you prefer?",
        image1: "content/img/front4.jpg",
        image2: "content/img/back4.jpg"
    },
    {
        question: "5. Which image do you prefer?",
        image1: "content/img/front5.jpg",
        image2: "content/img/back5.jpg"
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const resultElement = document.getElementById("result");

function startQuiz() {
    loadQuestion();
}

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    questionElement.innerText = questionData.question;
    answerButtons[0].querySelector("img").src = questionData.image1;
    answerButtons[1].querySelector("img").src = questionData.image2;
}

function selectAnswer(index) {
    if (index === 0) {
        F++;
    } else if (index === 1) {
        B++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let result;
    if (F > B) {
        result = "You are a frontend dev";
        // Redirect to Front-End Page
        window.location.href = "front.html";
    } else {
        result = "You are a backend dev";
        // Redirect to Back-End Page
        window.location.href = "back.html";
    }
    resultElement.innerText = result;
}

startQuiz();

