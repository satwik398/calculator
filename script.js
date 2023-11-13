let display = document.getElementById('display');
let currentValue = '';
let previousValue = '';
let operator = '';

function appendNumber(number) {
    currentValue += number;
    updateDisplay();
}

function appendDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        updateDisplay();
    }
}

function appendOperator(op) {
    if (currentValue) {
        previousValue = currentValue;
        operator = op;
        currentValue = '';
        updateDisplay();
    }
}

function calculate() {
    if (currentValue && previousValue && operator) {
        let result = eval(`${previousValue} ${operator} ${currentValue}`);
        currentValue = result;
        previousValue = '';
        operator = '';
        updateDisplay();
    }
}

function negateNumber() {
    if (currentValue) {
        currentValue *= -1;
        updateDisplay();
    }
}

function backspace() {
    if (currentValue) {
        currentValue = currentValue.slice(0, -1);
        updateDisplay();
    }
}

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentValue || '0';
}
