//selector
var buttonOutput = document.querySelector(".button-output");
var btn          =Array.from(document.querySelectorAll('.btn'));
var btnContainer = document.querySelector('.button-container');
var  calcResult = document.querySelector(".calc-result-output");
var btnChildren = btnContainer.children;
//var buttons = Array.from(document.getElementsByClassName("btn"));
//ripple effect


btn.forEach(button => {
    button.onclick = function(e){
        
        let ripple = document.createElement("div");
        ripple.classList.add("rcircle")
        let  x = e.clienX-e.target.offsetLeft;
        let  y = e.clienY-e.target.offsetTop;
        ripple.style.left = `${x}px`;
        ripple.style.left = `${y}px`;
        this.appendChild(ripple);
      
    }
});


//function

btn.map(button  => {
  button.addEventListener('click',  (e) => {

  
    switch(e.target.value){
      case "C":
        buttonOutput.innerText =""; 
        break; 
      case "x":
        buttonOutput.innerText = buttonOutput.innerText.slice(0, -1);
      
        break
      case "=":
        try{
          calcResult.innerText  =  eval(buttonOutput.innerText)

        }
        catch{
          calcResult.innerText  = "Error!";
        }

        break
      default:
        if (buttonOutput.innerText.length < 13) {
        buttonOutput.innerText += e.target.value;
        }
        break;
      
    }
  })
})


