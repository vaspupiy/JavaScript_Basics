"use strict";

// 4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

function getRandomIntMinMax(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;  //max не вкл. min вкл.
}

const MIN = 0;
const MAX = 15;

let number = getRandomIntMinMax(MIN, MAX + 1);
console.log(`random number: ${number}`);

switch (number) {
    case 0:
        console.log(number++);
    case 1:
        console.log(number++);
    case 2:
        console.log(number++);
    case 3:
        console.log(number++);
    case 4:
        console.log(number++);
    case 5:
        console.log(number++);
    case 6:
        console.log(number++);
    case 7:
        console.log(number++);
    case 8:
        console.log(number++);
    case 9:
        console.log(number++);
    case 10:
        console.log(number++);
    case 11:
        console.log(number++);
    case 12:
        console.log(number++);
    case 13:
        console.log(number++);
    case 14:
        console.log(number++);
    case 15:
        console.log(number)
}
