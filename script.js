let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Handle button clicks
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Handle keyboard input
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (key === 'Enter' || key === '=') {
        evaluateExpression();
    } 
    else if (key === 'Backspace') {
        deleteLast();
    } 
    else if (key.toLowerCase() === 'c') { // Press 'c' to clear (like AC)
        clearAll();
    } 
    else if (key.match(/[0-9+\-*/.%()]/)) { // Valid calculator inputs
        string += key;
        input.value = string;
    }
});

// Functions for reusability
function evaluateExpression() {
    try {
        string = eval(string);
        input.value = string;
    } catch (error) {
        input.value = "Error";
        string = "";
    }
}

function clearAll() {
    string = "";
    input.value = string;
}

function deleteLast() {
    string = string.substring(0, string.length - 1);
    input.value = string;
}

function handleInput(value) {
    if (value === '=') {
        evaluateExpression();
    } else if (value === 'AC') {
        clearAll();
    } else if (value === 'DEL') {
        deleteLast();
    } else {
        string += value;
        input.value = string;
    }
}
