// JavaScript
// Tentarei implementar as funções sem utilizar JQuery. Depos
// que entender o processo, tentarei implementar o mesmo projeto
// utilizando ReactJS e JQuery se possível. 

var num_input = '';
var num_string = '';
var num_vector = [];
var waiting_num = 0;
var actualNum = 0;
var operation = 0;
var result = 0;
var sub = 0;
var mul = 0;
var div = 0;

function justDisplay(number) {
    var buttonDisplay = document.getElementById("Display");
    buttonDisplay.value = number;
}


function displayNumber(number) {
    num_input += number;
    num_string += number; 
    actualNum = Number(num_input);
    justDisplay(num_string); 
}

function verifyDoubleSignal(string, signal) {
    num_vector = string.split('');
    switch(num_vector[num_vector.length - 1]) {
        case '+': num_vector[num_vector.length - 1] = signal; break;
        case '-': num_vector[num_vector.length - 1] = signal; break;
        case '/': num_vector[num_vector.length - 1] = signal; break;
        case '*': num_vector[num_vector.length - 1] = signal; break;
        default: num_vector.push(signal);
    }
    num_string = num_vector.join('');
}

function makeOperation(signal) {
    if(signal == '+') {
        operation = 1;
        verifyDoubleSignal(num_string, '+');
        waiting_num += actualNum;
    }
    else if(signal == '-') { 
        operation = 2;
        verifyDoubleSignal(num_string, '-');
        if(sub < 1) {
            waiting_num = actualNum;
            sub += 1;
        } else {
            waiting_num -= actualNum;
        }
    }
    else if(signal == '*') {
        operation = 3;
        verifyDoubleSignal(num_string, '*');
        if(mul < 1) { 
            waiting_num = actualNum;
            mul += 1;
        } else {
            waiting_num *= actualNum;
        }
    } 
     else if(signal == '/') {
        operation = 4;
        verifyDoubleSignal(num_string, '/');
         if(div < 1) {
             waiting_num = actualNum;
             div += 1;
         } else {
             waiting_num /= actualNum;
         }
     }
    result = waiting_num;
    justDisplay(num_string);
    num_input = '';
}

function equal() { 
    if(operation == 1) { 
        result += actualNum;
        actualNum = 0;
    }
    else if(operation == 2) {
        result -= actualNum;
        actualNum = 0;
    }
    else if(operation == 3) {
        result *= actualNum;
        actualNum = 1;
    }
    else {
        result /= actualNum;
        actualNum = 1;
    }
    waiting_num = result;
    num_string = result.toString();
    justDisplay(result);
}


function clrButton() {
    num_input = '';
    num_string = '';
    num_vector = [];
    waiting_num = 0;
    actualNum = 0;
    operation = 0;
    result = 0;
    sub = 0;
    mul = 0;
    div = 0;
    justDisplay(num_input);
}







