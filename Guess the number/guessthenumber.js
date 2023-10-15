let randomnum = Math.round(Math.random() * 100 + 1);
let input = document.querySelector('#input');
let preval = document.querySelector('#span1');
let guesslot = document.querySelector('#span2');
let subval = document.querySelector('#subval');
let result = document.querySelector('#h4');
const form = document.querySelector('form');


let array = [];
let play = 1;
let numofguess=1
let guessesleft = 5;
if (play == 1) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let guess = parseInt(input.value);
    checkguesses(guess);
  });
  }

else{
    end()
}

function checkguesses(guess) {  
    input.innerHTML=""
    if (isNaN(guess)) {
    display('enter a number');
  } else if (guess > 100) {
    display('Enter a number less than 100');
  } else if (guess < 1) {
    display('Enter a number greater than 100');
  } else {
    array.push(guess);
    guesslot()

    isitcorrect(guess);

  }
}

function isitcorrect(guess) {
  
    preval.innerHTML +=` ${guess}`

  if (guess == randomnum) {
    display(`you got it right,its:${randomnum}`)
    // end()
  }
  else if(guess>randomnum){
    display("Its too greter")
  }
  
  else if(guess<randomnum){
    display("Its too less")
}

}

function display(guess) {
    input.value=""
  result.innerHTML = `${guess}`
}

function guesslot(){
    let remainingguess=guessesleft-numofguess

   if(remainingguess==0){
    end()

   }
   else{
    guessesleft=--guessesleft;
    guesleft.innerHTML=`${guessesleft}`
   }

}

function end(){
    play=0
    input.setAttribute("disabled","")
    subval.setAttribute("hidden","hidden")    
    display(`The number is:${randomnum}`)

}

function start(){
    play=1
    input.removeAttribute("disabled")
    guessesleft=10


}