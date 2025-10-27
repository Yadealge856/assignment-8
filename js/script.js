let totalPoints = 0;

// Add event listeners to all answer buttons
const buttons = document.querySelectorAll(".answer-btn");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    const points = parseInt(this.dataset.points);
    totalPoints += points;

    // Disable other buttons in same question block
    const parent = this.closest(".question-block");
    parent.querySelectorAll(".answer-btn").forEach(btn => {
      btn.disabled = true;
      btn.classList.add("btn-secondary");
      btn.classList.remove("btn-outline-primary");
    });

    this.classList.add("btn-primary");
  });
});

document.getElementById("show-result").addEventListener("click", function() {
  let resultText = "";
  
  // Simple point system
  // 5 questions × max 3 points = 15 possible points
  if (totalPoints <= 6) {
    resultText = "🏙️ You belong in **New York City** – energetic, ambitious, and always on the move!";
  } else if (totalPoints <= 10) {
    resultText = "🎨 You should live in **Paris** – artistic, cultured, and full of charm.";
  } else {
    resultText = "🌴 You’re made for **Los Angeles** – relaxed, creative, and sun-loving!";
  }

  document.getElementById("result-text").innerHTML = resultText;
  document.getElementById("result-container").style.display = "block";
});
