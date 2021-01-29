"use strict";

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
//     Затем написать скрипт, который работает по следующему принципу:
//     если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

alert('3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.\n' +
    '     Затем написать скрипт, который работает по следующему принципу:\n' +
    '     если a и b положительные, вывести их разность;\n' +
    ' если а и b отрицательные, вывести их произведение;\n' +
    ' если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.');

function getRandomIntMinMax(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;  //max не вкл. min вкл.
}

function conditionMathOperation(a, b) {
    if (a >= 0 && b >= 0) {
        return a - b;
    } else if (a < 0 && b < 0) {
        return a * b;
    } else {
        return a + b;
    }
}

const MIN = -5;
const MAX = 5;

let a, b;
a = getRandomIntMinMax(MIN, MAX + 1);
b = getRandomIntMinMax(MIN, MAX + 1);
// console.log(a, b);
// console.log(conditionMathOperation(a, b))
let res = conditionMathOperation(a, b)
alert('a= ' + a + ' b= ' + b + ' результат выплнения ф-ии= ' + res);
