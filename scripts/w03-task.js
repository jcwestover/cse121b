/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

/* Function Declaration - Add Numbers from HTML Form */
function addNumbers() {
    let number1 = Number(document.querySelector("#add1").value);
    let number2 = Number(document.querySelector("#add2").value);
    
    document.querySelector('#sum').value = add(number1, number2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    let number1 = Number(document.querySelector("#subtract1").value);
    let number2 = Number(document.querySelector("#subtract2").value);

    document.querySelector('#difference').value = subtract(number1, number2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
    return number1 * number2;
};

const multiplyNumbers = () => {
    let number1 = Number(document.querySelector("#factor1").value);
    let number2 = Number(document.querySelector("#factor2").value);
    document.querySelector('#product').value = multiply(number1, number2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
    return number1 / number2;
};

const divideNumbers = () => {
    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(number1, number2);
};

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    let subtotal = Number(document.querySelector('#subtotal').value);
    let membershipCheckbox = document.querySelector('#member');
    let total;

    if (membershipCheckbox.checked) {
        total = subtotal * 0.8;
    } else {
        total = subtotal;
    }

    document.querySelector('#total').textContent = `Total Due: $${total.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector('#array').textContent = numbersArray;

const oddsArray = numbersArray.filter(number => number % 2 !== 0);

document.querySelector('#odds').textContent = oddsArray;

document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue);

document.querySelector('#sumOfArray').textContent = sumOfArray;

const multipliedArray = numbersArray.map(number => number * 2);

document.querySelector('#multiplied').textContent = multipliedArray;

const multipliedAndSummed = numbersArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue);

document.querySelector('#sumOfMultiplied').textContent = multipliedAndSummed;

/* Output Source Array */

/* Output Odds Only Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
