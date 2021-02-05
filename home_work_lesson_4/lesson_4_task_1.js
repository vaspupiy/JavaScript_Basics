console.log('1. Написать функцию, преобразующую число в объект.\n' +
    '     Передавая на вход число от 0 до 999, мы должны получить на выходе объект,\n' +
    '     в котором в соответствующих свойствах описаны единицы, десятки и сотни.\n' +
    '     Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.\n' +
    ' Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и ' +
    'вернуть пустой объект.')


function convertNumberObject(num) {
    if (0 <= num && num < 1000) {
        return {
            'единицы': num % 10,
            'десятки': Math.floor(num / 10) % 10,
            'сотни': Math.floor(num / 100) % 100,
        }
    } else {
        console.log('Введенное число выходит за диапазон от 0 до 999')
        return {}
    }
}

console.log(convertNumberObject(123), typeof (convertNumberObject(123)));
console.log(convertNumberObject(0), typeof (convertNumberObject(0)));
console.log(convertNumberObject(5), typeof (convertNumberObject(0)));
console.log(convertNumberObject(23), typeof (convertNumberObject(23)));
console.log(convertNumberObject(245), typeof (convertNumberObject(245)));
console.log(convertNumberObject(1999), typeof (convertNumberObject(1999)));
console.log(convertNumberObject(-1), typeof (convertNumberObject(-1)));

// добавлено после просмотра лекции № 5
function convertNumberObject_vr_lector(num) {
    const obj = {}
    if (0 <= num && num < 1000) {
        obj.units = num % 10;
        obj.tens =  Math.floor(num / 10) % 10;
        obj.hundreds =  Math.floor(num / 100) % 100;
        return obj

    } else {
        console.log('Введенное число выходит за диапазон от 0 до 999')
        return obj
    }
}

console.log(convertNumberObject_vr_lector(123))
console.log(convertNumberObject_vr_lector(12))
console.log(convertNumberObject_vr_lector(0))
console.log(convertNumberObject_vr_lector(1234))
