var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-input");

function myFunction(){
    console.log("Clicked");
    console.log(textInput.value);
    
};

btnTranslate.addEventListener("click", myFunction);




