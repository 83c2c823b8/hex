function generateQuestion() {
  const hexDigits = "0123456789ABCDEF";
  const digit1 = hexDigits[Math.floor(Math.random() * hexDigits.length)];
  const digit2 = hexDigits[Math.floor(Math.random() * hexDigits.length)];

  const question = `${digit1} × ${digit2} = ?`;
  return { question, answer: (parseInt(digit1, 16) * parseInt(digit2, 16)).toString(16).toUpperCase() };
}

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const resultElement = document.getElementById("result");
const checkButton = document.getElementById("checkButton");

function displayQuestion() {
  const { question, answer } = generateQuestion();
  questionElement.textContent = question;
  answerElement.value = "";
  resultElement.textContent = "";
  correctAnswer = answer;
}

let correctAnswer;

checkButton.addEventListener("click", function() {
  const userAnswer = answerElement.value.toUpperCase();

  if (userAnswer === correctAnswer) {
    resultElement.textContent = "正解！次の問題に進んでください。";
    displayQuestion();
  } else {
    resultElement.textContent = "不正解です。もう一度試してみてください。";
  }
});

displayQuestion();
