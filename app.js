var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-div");

function myFunction(){
   
    outputDiv.innerText= "this is trnaslated "+ textInput.value;
}

btnTranslate.addEventListener("click", myFunction);




