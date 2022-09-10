'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const scoreNode = document.querySelector('.score');

// 如果可以有明確的數值，而不是依賴選取 DOM 會更好
let score = 20;
// let score = scoreNode.textContent;

let highScore = 0;

// 顯示 message 裡的文字
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.btn.check').addEventListener('click', function () {
  let guessValue = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guessValue) {
    displayMessage('⛔️ No number!');

    // when player wins
  } else if (guessValue === secretNumber) {
    displayMessage('🎉 Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // 確認新分數有比 highScore 還高，就更換 highScore 為現在的分數
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      displayMessage(guessValue > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      scoreNode.textContent = score;
    } else {
      displayMessage('You lost the game!');
      scoreNode.textContent = 0;
    }
  }
});

// 'again' class and attach click event
document.querySelector('.again').addEventListener('click', function () {
  let guessNode = document.querySelector('.guess');
  let body = document.querySelector('body');
  let number = document.querySelector('.number');

  // restore the initial values of the score and secretNumber variables
  scoreNode.textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // restore the initial conditions of the message, number, score and guess input field
  displayMessage('Start guessing...');
  guessNode.value = '';
  guessNode.textContent = '';

  // restore the original bg color (#222) and number width (15rem)
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
});
