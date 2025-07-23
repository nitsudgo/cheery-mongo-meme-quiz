// --- DOM ELEMENTS ---
const landingPage = document.getElementById("landing-page");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const resultContent = document.getElementById("result-content");

// --- QUIZ STATE ---
let currentQuestionIndex = 0;
let userAnswers = {}; // Stores counts for each result type

// --- EVENT LISTENERS ---
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

// --- FUNCTIONS ---

/**
 * Starts the quiz, hiding the landing page and showing the first question.
 */
function startQuiz() {
  landingPage.classList.add("hidden");
  quizSection.classList.remove("hidden");
  quizSection.classList.add("fade-in");
  currentQuestionIndex = 0;

  // Create dict of user answers using keys from the fake enum in quizData.js
  // Initialise all scores at 0
  userAnswers = Object.fromEntries(
    Object.keys(R).map(r => [r, 0])
  );
  showQuestion();
}

/**
 * Displays the current question and its answers.
 */
function showQuestion() {
  const question = quizData.questions[currentQuestionIndex];

  // Update progress
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.questions.length}`;
  progressBar.style.width = `${((currentQuestionIndex + 1) / quizData.questions.length) * 100}%`;

  // Display question text
  questionText.textContent = question.text;
  answersContainer.innerHTML = ""; // Clear previous answers

  // Create and display answer buttons
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.className =
      "w-full bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg hover:bg-gray-100 hover:border-indigo-500 transition-all duration-200 text-left";
    button.onclick = () => selectAnswer(answer.result);
    answersContainer.appendChild(button);
  });
}

/**
 * Handles the user's answer selection, records it, and moves to the next question or shows the result.
 * @param {string} resultType - The result category associated with the selected answer.
 */
function selectAnswer(resultType) {
  userAnswers[resultType]++;
  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.questions.length) {
    // Add a little fade out/in effect for question transition
    quizSection.style.opacity = "0";
    setTimeout(() => {
      showQuestion();
      quizSection.style.opacity = "1";
    }, 300);
  } else {
    showResult();
  }
}

/**
 * Calculates the final result and displays the corresponding result page.
 */
function showResult() {
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  resultSection.classList.add("fade-in");

  // Find the result with the highest score
  const finalResultType = Object.keys(userAnswers).reduce((a, b) =>
    userAnswers[a] > userAnswers[b] ? a : b,
  );

  const result = quizData.results[finalResultType];

  console.log(result)
  resultContent.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-900 mb-4">${result.title}</h2>
        <div class="flex flex-col items-center">
          ${result.image}
        </div>
        <p class="text-gray-600 my-4">${result.description}</p>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col">
            <b>Pros</b>
            <ul>
            ${result.pros.map(_ => "<li class='mt-2'>" + _ + "</li>").join('')}
            </ul>
          </div>
          <div class="flex flex-col">
            <b>Cons</b>
            <ul>
            ${result.cons.map(_ => "<li class='mt-2'>" + _ + "</li>").join('')}
            </ul>
          </div>
        </div>
    `;
}

/**
 * Resets the quiz state and returns to the landing page.
 */
function restartQuiz() {
  resultSection.classList.add("hidden");
  landingPage.classList.remove("hidden");
  landingPage.classList.add("fade-in");
}
