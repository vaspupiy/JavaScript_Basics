"use strict";

// 4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

alert(' 4. Присвоить переменной а значение в промежутке [0..15].\n' +
    ' С помощью оператора switch организовать вывод чисел от a до 15.');

function getRandomIntMinMax(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;  //max не вкл. min вкл.
}

function concatFoo(ser, num) {
    return ser + ' ' + num;
}

function fromAndTo(number) {
    let series = '';
    switch (number) {
        case 0:
            series = concatFoo(series, number++);
        case 1:
            series = concatFoo(series, number++);
        case 2:
            series = concatFoo(series, number++);
        case 3:
            series = concatFoo(series, number++);
        case 4:
            series = concatFoo(series, number++);
        case 5:
            series = concatFoo(series, number++);
        case 6:
            series = concatFoo(series, number++);
        case 7:
            series = concatFoo(series, number++);
        case 8:
            series = concatFoo(series, number++);
        case 9:
            series = concatFoo(series, number++);
        case 10:
            series = concatFoo(series, number++);
        case 11:
            series = concatFoo(series, number++);
        case 12:
            series = concatFoo(series, number++);
        case 13:
            series = concatFoo(series, number++);
        case 14:
            series = concatFoo(series, number++);
        case 15:
            return concatFoo(series, number++).trim();
    }
    return null;
}  // надеюсь не сильно набыдлокодил...

const MIN = 0;
const MAX = 15;

let a = getRandomIntMinMax(MIN, MAX + 1);
// console.log(a);
// console.log(fromAndTo(a));

alert('a = ' + a + ' результат ' + fromAndTo(a));
