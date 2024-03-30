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