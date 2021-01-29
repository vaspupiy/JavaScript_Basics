"use strict";

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

alert(' 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.\n' +
    ' Обязательно использовать оператор return.');

function getRandomIntMinMax(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;  //max не вкл. min вкл.
}

function myAddition(num1, num2) {
    return num1 + num2;
}

function mySubtraction(num1, num2) {
    return num1 - num2;
}

function myMultiplication(num1, num2) {
    return num1 * num2;
}

function myDivision(num1, num2) {
    return num1 / num2;
}

const MIN = -5;
const MAX = 5;

let a, b;
a = getRandomIntMinMax(MIN, MAX);
b = getRandomIntMinMax(MIN, MAX);
// console.log(a, b)
// console.log(myAddition(a, b))
// console.log(mySubtraction(a, b))
// console.log(myMultiplication(a, b))
// console.log(myDivision(a, b))

alert('a= ' + a + ' b= ' + b +
    '\n сумма ' + myAddition(a, b) +
    '\n разность ' + mySubtraction(a, b) +
    '\n произведение ' +  myMultiplication(a, b) +
    '\n частное ' + myDivision(a, b));