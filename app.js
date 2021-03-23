// Values
let max = 10,
    min = 1,
    winNumber = Math.floor((Math.random()*(max-min))+min),
    guessesLeft = 3;
    console.log(winNumber);

// UI Elements
const guessInput = document.querySelector('#guess'),
      btn = document.querySelector('#btn'),
      emoji = document.querySelector('#emoji'),
      result = document.querySelector('#result'),
      bodyresult = document.querySelector('body'),
      reloader = document.querySelector('.input-area');

reloader.addEventListener('mousedown', function(e) {
  if(e.target.className == 'play-again') {
    window.location.reload();
  }
  e.preventDefault();
});

// Listen to the event
btn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  guessInput.value = '';
  if(isNaN(guess) || guess < min || guess > max) {
    emoji.innerHTML = '🤔';
    result.innerHTML =`Please enter a number between ${min} and ${max}`;
    result.style.color = 'rgb(253, 59, 0)';
    setTimeout(function() {
      if(emoji.innerHTML == '🤔') {
        emoji.innerHTML = '';
        result.innerHTML = '';
      }
    }, 2500);
  } 
  else {
    if(guess == winNumber) {
      guessInput.disabled = true;
      bodyresult.style.backgroundColor = 'rgb(194, 253, 224)';
      guessInput.placeholder = 'Good Job';
      emoji.innerHTML = '🏆';
      result.innerHTML = `${winNumber} is correct. YOU WON!`;
      btn.value = 'Play Again';
      btn.className += 'play-again';
    } 
    else {
      guessesLeft -= 1;
      guessInput.placeholder = `${guessesLeft} try left`;
      emoji.innerHTML = '😔';
      result.innerHTML = 'Your guess is WRONG!';
      result.style.color = 'red';
      bodyresult.style.backgroundColor = 'rgb(255, 233, 233)';
      setTimeout(function() {
        if(guessesLeft != 0) {
          emoji.innerHTML = '';
          result.innerHTML = '';
          bodyresult.style.backgroundColor = 'rgb(241, 254, 255)';
        }
      }, 2500);
      if(guessesLeft === 0) {
        document.querySelector('h1').style.color = 'rgb(104, 104, 104)';
        guessInput.disabled = true;
        emoji.innerHTML = '⛔';
        guessInput.style.backgroundColor = 'lightGrey';
        guessInput.placeholder = 'Game Over';
        guessInput.style.cursor = 'not-allowed';
        result.innerHTML = `YOU LOST. Correct Number was ${winNumber} !`;
        result.style.color = 'white';
        bodyresult.style.backgroundColor = 'grey';
        btn.value = 'Play Again';
        btn.className += 'play-again';
      }
    }
  }
});


