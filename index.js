// Calcular Programa

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}

function Calcular(){
        display.value = eval(display.value);
    }

