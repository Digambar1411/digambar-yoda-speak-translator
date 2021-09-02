var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output-div");

var url="https://api.funtranslations.com/translate/yoda.json";

function urlConstruct(text){
    return url+"?text="+text
}

function errorHandler(error){
    console.log("error occured"+ error);
    alert("someting went wrong..! try again after sometimes");
}

function myFunction(){
    var inputText=textInput.value;
    fetch(urlConstruct(inputText))
    .then(response=> response.json())
    .then(json=>outputDiv.innerText=json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", myFunction);




