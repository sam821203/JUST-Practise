'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const scoreNode = document.querySelector('.score');

// 如果可以有明確的數值，而不是依賴選取 DOM 會更好
let score = 20;
// let score = scoreNode.textContent;
console.log(secretNumber);
document.querySelector('.btn.check').addEventListener('click', function () {
  let message = document.querySelector('.message');
  let guessValue = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guessValue) {
    message.textContent = '⛔️ No number!';

    // when player wins
  } else if (guessValue === secretNumber) {
    message.textContent = '🎉 Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // when guess is too high
  } else if (guessValue > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too high! Pls try again!';
      score--;
      scoreNode.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      scoreNode.textContent = 0;
    }

    // when guess is too low
  } else if (guessValue < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too low! Pls try again!';
      score--;
      scoreNode.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      scoreNode.textContent = 0;
    }
  }
});

// 'again' class and attach click event
document.querySelector('.again').addEventListener('click', function () {
  let message = document.querySelector('.message');
  let guessNode = document.querySelector('.guess');
  let body = document.querySelector('body');
  let number = document.querySelector('.number');

  // restore the initial values of the score and secretNumber variables
  scoreNode.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // restore the initial conditions of the message, number, score and guess input field
  message.textContent = 'Start guessing...';
  guessNode.value = '';
  guessNode.textContent = '';

  // restore the original bg color (#222) and number width (15rem)
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
});
