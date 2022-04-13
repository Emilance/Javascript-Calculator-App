//selector
var buttonOutput = document.querySelector(".button-output");
var btn          =document.querySelectorAll('.btn');
var btnContainer = document.querySelector('.button-container');
var  calcResult = document.querySelector(".calc-result-output");
var btnChildren = btnContainer.children;
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
       clickedButton(e);
    }
});


//eventlistener




processedArray = "";

//function
const clickedButton = (event) =>
{
    for(let i = 0; i < btnChildren.length ;i++){
        let btnvalue = btnChildren[i].value;
      
    if( btnChildren[i] == event.target){
     console.log(btnvalue);
          if(btnvalue == "C" ){
               buttonOutput.innerText = "";
               processedArray = "";
             }
             else if(btnvalue == "x"){
              //   console.log(buttonOutput.innerText)
           //   buttonOutput.innerHTML[buttonOutput.innerHTML.length-1] = "";
              //buttonOutput.innerText -=   buttonOutput.innerText[buttonOutput.innerText.length -1];
             /// processedArray.slice(processedArray.length - 2 )
             processedArray.replace(processedArray[processedArray.length - 1]) 
             //buttonOutput.innerText.slice(buttonOutput.innerText + 1, )
            }
             else {
            //    buttonOutput.innerText += btnvalue ;
                processedArray += btnvalue ;

             }

             buttonOutput.innerText = processedArray;
    }
  }
}

var splittedValue = [];

function getAnswer(){
    subtract()
}


    

function add(){
    let result = 0;
 splittedValue = processedArray.split('+');
 for(i = 0 ; i < splittedValue.length; i++)
   result += parseInt(splittedValue[i]);
 console.log(result);
 calcResult.innerText = result;
}


 function subtract(){
      var result = 0;
  splittedValue = processedArray.split('-');

      for(i = 1 ; i < splittedValue.length; i++){
        result = parseInt(splittedValue[0]) - parseInt(splittedValue[i]);
        console.log(result)
        calcResult.innerText = result;
      }
    }
//btn.addEventListener('click', clickedButton());