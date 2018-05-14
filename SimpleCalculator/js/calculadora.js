// JavaScript
// Tentarei implementar as funções sem utilizar JQuery. Depos
// que entender o processo, tentarei implementar o mesmo projeto
// utilizando ReactJS e JQuery se possível. 

var num_displayed = '';
var waiting_num = 0;
var result = 0;
var operation = 0;
var a = 0;

function justDisplay(number) {
    var buttonDisplay = document.getElementById("Display");
    buttonDisplay.value = number;
}

function displayNumber(number) {
    var buttonDisplay = document.getElementById("Display");
    num_displayed += number;
    justDisplay(num_displayed); 
}

function makeOperation(op) {
    if(op == '1') {
        result = waiting_num + Number(num_displayed);
    }
    else if(op == '2') {
        result = waiting_num - Number(num_displayed);
    }
    waiting_num = result;
    num_displayed = '';
    justDisplay(result);
}

function soma() {
    operation = '1';
    makeOperation(operation);
}

function sub() {
    operation = '2';
    if(a >= 1) {
        makeOperation(operation);
    }
    else { 
        waiting_num = Number(num_displayed);
        num_displayed = '';
        a += 1;
        justDisplay(num_displayed);
    }
}

function equal() { 
    if(operation == '1') { 
        result = waiting_num + Number(num_displayed);
    }
    else if(operation == '2') {
        result = waiting_num - Number(num_displayed);
    }
    waiting_num = result; 
    justDisplay(result);
}

function clrButton() {
    var buttonDisplay = document.getElementById("Display");
    var buttonClr = document.getElementById("ClrButton");
    num_displayed = '';
    waiting_num = 0;
    numAdd = 0;
    op = 0;
    justDisplay(num_displayed);
}







