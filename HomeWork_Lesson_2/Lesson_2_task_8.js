"use strict";

// 8. *С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val – заданное число, pow – степень.

alert('8. *С помощью рекурсии организовать функцию возведения числа в степень.\n' +
    'Формат: function power(val, pow), где val – заданное число, pow – степень.');

function power(val, pow) {
    if (pow === 0 && val === 0){
        return null  // принято считать, что выражения вида 0^0 и 0^(-n) не имеют смысла.
    }
    if (pow === 0) {
        return 1;
    }
    if (pow === 1) {
        return val;
    }
    if (pow < 0) {
        if (val === 0){
            return null  // принято считать, что выражения вида 0^0 и 0^(-n) не имеют смысла.
        }
        return 1 / power(val, -pow);
    }
    if (pow % 2 === 0) {
        return power(val, pow / 2) * power(val, pow / 2);  // быстрое возведение в степень
    }
    return power(val, pow - 1) * val;
}

function getRandomIntMinMax(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;  //max не вкл. min вкл.
}

function testPowerFunc(minNum, maxNum) {
    for (let count = 1; count <= 100; count++) {
        let num1 = getRandomIntMinMax(minNum, maxNum);
        let num2 = getRandomIntMinMax(minNum, maxNum);
        if (power(num1, num2) !== Math.pow(num1, num2)) {
            console.log(num1, num2, power(num1, num2), Math.pow(num1, num2));
            return false;
        }
    }
    return true;
}

const MIN = -10;
const MAX = 10;

// console.log(testPowerFunc(MIN, MAX + 1))

// тест падает, например на, на val =  -5  pow = -4   при  power = 0.0016   Math.pow = 0.0015999999999999999
// или  -5 -5 -0.00032 -0.00031999999999999997 или -6 -6 0.00002143347050754458 0.000021433470507544583
// очевидно, что это из - за округления при делении(при отрицательной степени)...

let num1 = getRandomIntMinMax(MIN, MAX);
let num2 = getRandomIntMinMax(MIN, MAX);

alert('val= ' + num1 + ' pow= ' + num2 + ' результат: ' + power(num1, num2));

alert('тест падает, например на, на val =  -5  pow = -4   при  power = 0.0016   Math.pow = 0.0015999999999999999\n' +
    'или  -5 -5 -0.00032 -0.00031999999999999997 или -6 -6 0.00002143347050754458 0.000021433470507544583\n' +
    'очевидно, что это из - за округления при делении(при отрицательной степени)...');