let randomnum = Math.round(Math.random() * 100 + 1);
let input = document.querySelector('#input');
let preval = document.querySelector('#span1');
let guesleft = document.querySelector('#span2');
const subval = document.querySelector('#subval');
let result = document.querySelector('#h4');
const form = document.querySelector('form');

let array = [];
const play = 1;
const guessesleft = 10;
console.log(randomnum);
if (play == 1) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let guess = parseInt(input.value);
    checkguesses(guess);
  });
}

function checkguesses(guess) {
  if (isNaN(guess)) {
    // alert('Enter a number');
    display('enter a number');
  } else if (guess > 100) {
    display('Enter a number less than 100');
  } else if (guess < 1) {
    display('Enter a number greater than 100');
  } else {
    array.push(guess);
    isitcorrect(guess);
    display();
  }
}

function isitcorrect(guess) {
  if (guess == randomnum) {
    display('you got it right');
  }
}

function display(guess) {
  result.innerHTML = `<h3>  ${guess}</h3>`;
}
