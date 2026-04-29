// Quiz Data (questions)
const quizData = [
    {
        question: "What is HTML?",
        a: "Programming Language",
        b: "Markup Language",
        c: "Database",
        d: "OS",
        correct: "b"
    },
    {
        question: "CSS is used for?",
        a: "Styling",
        b: "Logic",
        c: "Database",
        d: "None",
        correct: "a"
    },
    {
        question: "JavaScript is used for?",
        a: "Design",
        b: "Structure",
        c: "Functionality",
        d: "None",
        correct: "c"
    }
];
 // Quiz Logic
let currentQuiz = 0;
let score = 0;

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");
// Load quiz
function loadQuiz() {
    deselectAnswers();
    const data = quizData[currentQuiz];

    question.innerText = data.question;
    a_text.innerText = data.a;
    b_text.innerText = data.b;
    c_text.innerText = data.c;
    d_text.innerText = data.d;
}
// Get selected answer
function getSelected() {
    const answers = document.querySelectorAll(".answer");
    let answer;

    answers.forEach((ans) => {
        if (ans.checked) {
            answer = ans.id;
        }
    });

    return answer;
}
// Deselect answers
function deselectAnswers() {
    document.querySelectorAll(".answer").forEach(ans => ans.checked = false);
}
submit.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById("quiz").innerHTML =
                `<h2>Your Score: ${score}/${quizData.length}</h2>`;
        }
    }
});

loadQuiz();
