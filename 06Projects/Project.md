# PROJECTS

## Project 1 -- BACKGROUND COLOR SELECTOR

```javascript
const buttons = document.querySelectorAll(".button");
// console.log(buttons);

const body =  document.querySelector("body");

buttons.forEach( (btn)=>{
  console.log(btn);
  btn.addEventListener("click", (e)=>{
    // if(e.target.id == "grey"){
    //   body.style.backgroundColor = e.target.id;
    // }
    switch(e.target.id){
      case "grey":
        body.style.backgroundColor = e.target.id;
      case "white":
        body.style.backgroundColor = e.target.id;
      case "blue":
        body.style.backgroundColor = e.target.id;
      case "yellow":
        body.style.backgroundColor = e.target.id;
      case "pink":
        body.style.backgroundColor = e.target.id;
      case "green":
        body.style.backgroundColor = e.target.id;
      
    }

  })
} )

```

## Project 2 -- BMI CALCULATOR

```javascript
  const form = document.querySelector("form");
// post or get type sumission gets added in URL, to prevent(hide) this we use "preventDefault"

// const height = parseInt(document.querySelector("#height").value); 
// taking height/weight globally will inject it with empty value as the xcript is loaded immediately when a awebpage is loaded
form.addEventListener("submit", function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result =  document.getElementById("results");
  const wtCheck = document.getElementById("wtCheck");

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Enter Valid Height`;
  } else if ((weight === '' || weight < 0 || isNaN(weight))){
    result.innerHTML = `Enter Valid weight`;
  } else{
    const bmi = (weight / ( (height*height)/10000)).toFixed(3);
    result.innerHTML = `${bmi}`
    
    if(bmi>24.9){
      wtCheck.innerHTML = "Overweight";
    } else if (bmi<18.6){
      wtCheck.innerHTML = "Underweight";
    } else {
        wtCheck.innerHTML = "Normal Nigga";
    }
  }
})
```

## Project 3 -- CLOCK

```javascript
const clock =  document.getElementById('clock');
// let date = new Date();
// console.log(date.toLocaleTimeString());

// for running this like a clock(continously), use -> setInterval(method, interval(in ms))
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4 -- NUMBER GUESSER

```javascript
let number = parseInt(Math.random() * 100) + 1;
// console.log(number);
// console.log(parseInt(number * 100) + 1);

const userInput = document.getElementById('guessField');
const submit = document.getElementById('subt');

const startOver = document.querySelector('.resultParas')
const userGuess = document.querySelector('.guesses');

const count = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')

const p = document.createElement('p');

//showing user its prev guesses in an array
let prevGuess = [];
let countGuess = 1;
// play again button
let play = true;

if(play){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const gues = parseInt(userInput.value);
    // console.log(gues)
    validateGuess(gues)
  })
}

function validateGuess(guess){
  if(isNaN(guess) || guess < 1 || guess > 100 ){
    alert("Enter valid number")
  } else{
    prevGuess.push(guess);
      if(countGuess>10){
        displayGuess(guess);
        displayMsg(`Game over, answer was : ${number}` )
        endGame();
      } else{
        displayGuess(guess);
        checkGuess(guess)
      }
  }
}

function checkGuess(guess){
  if(guess == number){
    displayMsg(`You win`)
    endGame();
  } else if(guess < number){
    displayMsg(`NUmber is low`)
  } else{
    displayMsg(`NUmber is high`)
  }
}

function displayGuess(guess){
userInput.value = '';
userGuess.innerHTML += ` ${guess} `;
countGuess++;
count.innerHTML = `${11-countGuess}`;
  // userGuess.textcontent = prevGuess.push(userInput);
} 

function displayMsg(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame(){
  const neGameButton = document.querySelector('#newGame');
  neGameButton.addEventListener('click', function(e){
    number = parseInt(Math.random() * 100) + 1;
    prevGuess = [];
    countGuess = 1;
    count.innerHTML = `${11-countGuess}`;
    userGuess.innerHTML += '';
    userInput.removeAttribute('disabled')

    startOver.removeChild(p)
    play = true;

  })
}

function endGame(){
  userInput.value = '';
  prevGuess = []
  userInput.setAttribute('disabled', '')
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame"> Start new game </h2>`
  userGuess.innerHTML = ''
  startOver.appendChild(p)
  play = false;
  newGame()
}


```

## Project 6 -- RANDOM COLOR GENERATOR (CONTINUOS)

```javascript

const randomColor = function (){
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

const setColor = function (){
  document.body.style.backgroundColor = randomColor();
}

let newColor;

document.querySelector('#start').addEventListener('click', function(){
  if(!newColor) { // if newcolor is null then only new setinterval works
    newColor = setInterval(setColor, 2000)
  console.log('Start');
  }
});

document.querySelector('#stop').addEventListener('click', function(){
  clearInterval(newColor);
  newColor = null; // flush out the memory after use, increase space complexity
  console.log('Stopped');
})

```


## Project 6 -- KEYBOARD KEY PRESS CHECK

```javascript

let insert = document.getElementById('insert');
window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  `
})

```