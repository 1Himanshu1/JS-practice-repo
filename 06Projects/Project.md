# PROJECTS

## Project 1

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

## Project 2

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

## Project 3

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