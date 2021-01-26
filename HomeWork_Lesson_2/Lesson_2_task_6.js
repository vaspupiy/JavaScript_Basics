"use strict";

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

alert(' 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),\n' +
    ' где arg1, arg2 – значения аргументов, operation – строка с названием операции.\n' +
    ' В зависимости от переданного значения операции выполнить одну из арифметических операций\n' +
    ' (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).');

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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            return myAddition(arg1, arg2);
        case 'subtraction':
            return mySubtraction(arg1, arg2);
        case 'multiplication':
            return myMultiplication(arg1, arg2);
        case 'division':
            return myDivision(arg1, arg2);
        default:
            return null;
    }
}

const MIN = -5;
const MAX = 5;

let a, b;
a = getRandomIntMinMax(MIN, MAX);
b = getRandomIntMinMax(MIN, MAX);
// console.log(a, b)
// console.log(mathOperation(a, b, 'addition'))
// console.log(mathOperation(a, b, 'subtraction'))
// console.log(mathOperation(a, b, 'multiplication'))
// console.log(mathOperation(a, b, 'division'))
// console.log(mathOperation(a, b, 'vsykayaDich'))

alert('a= ' + a + ' b= ' + b +
    '\n сумма ' + mathOperation(a, b, 'addition') +
    '\n разность ' + mathOperation(a, b, 'subtraction') +
    '\n произведение ' +  mathOperation(a, b, 'multiplication') +
    '\n частное ' + mathOperation(a, b, 'division') + '' +
    '\n неверные параметры ' + mathOperation(a, b, 'vsykayaDich'));