// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Safely evaluating the expression
        display.value = new Function('return ' + display.value)();
    } catch (error) {
        display.value = 'Error';
    }
}
