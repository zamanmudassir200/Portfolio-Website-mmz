const startBtn = document.getElementById("startBtn");
const answer_text = document.getElementById("answer_text");

let min = 1;
let max = 100;
let answer = Math.floor(Math.random() * (max - min + 1) + min);

let attempt = 0;
let guess;
let running = true;

startBtn.onclick = function () {
  while (running) {
    guess = window.prompt(`Enter the number from ${min} - ${max} :`);
    guess = Number(guess);
    if (isNaN(guess)) {
      window.alert("Please input a valid number not word");
    } else if (guess < min || guess > max) {
      window.alert("Please input a valid number");
    } else {
      attempt++;
      if (guess < answer) {
        window.alert("TOO LOW, Try Again and Guess LARGER number");
      } else if (guess > answer) {
        window.alert("TOO HIGH, Try Again and Guess SMALLER number");
      } else {
        window.alert(
          `CORRECT you have guessed the number ${answer} and it took ${attempt} attempts`
        );
        running = false;
      }
    }
  }
};
