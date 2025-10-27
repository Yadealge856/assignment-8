// Total points for the quiz
let totalPoints = 0;

// Object to store user selections
const userAnswers = {};

// Select all question blocks
const questionBlocks = document.querySelectorAll('.question-block');

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll('.answer-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove 'selected' class from all buttons in this block
      buttons.forEach(btn => btn.classList.remove('selected'));

      // Add 'selected' class to the clicked button
      this.classList.add('selected');

      // Store the answer in userAnswers
      const questionId = `question-${index + 1}`;
      const answerValue = this.dataset.answer;
      userAnswers[questionId] = answerValue;

      // Update total points dynamically
      const points = parseInt(this.dataset.points);
      const previousPoints = block.dataset.previousPoints
        ? parseInt(block.dataset.previousPoints)
        : 0;
      totalPoints = totalPoints - previousPoints + points;
      block.dataset.previousPoints = points;

      console.log(`Selected ${answerValue} for ${questionId}`);
      console.log('User answers:', userAnswers);
      console.log('Total points:', totalPoints);
    });
  });
});

// Function to calculate and display the final result
function displayResult() {
  let resultText = '';

  // Determine result based on totalPoints
  if (totalPoints <= 6) {
    resultText =
      "You belong in <b>New York City</b> - energetic, ambitious, and always on the move!";
  } else if (totalPoints <= 10) {
    resultText =
      "You should live in <b>Paris</b> - artistic, cultured, and full of charm.";
  } else {
    resultText =
      "You’re made for <b>Los Angeles</b> - relaxed, creative, and sun-loving!";
  }

  // Display result
  const resultContainer = document.getElementById('result-container');
  const resultTextElem = document.getElementById('result-text');
  resultTextElem.innerHTML = resultText;
  resultContainer.style.display = 'block';
}

// Connect the "Show Results" button to the displayResult function
document.getElementById('show-result').addEventListener('click', displayResult);
