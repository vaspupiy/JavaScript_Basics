console.log(' 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.')

const MAXIMUM = 100;

let arr = [false, false];  // 0 и 1 не являются простыми числами
let index = 2;

while (index <= MAXIMUM) {
    arr.push(true);
    index++;
}

index = 2
while (index <= MAXIMUM) {
    if (arr[index]) {
        console.log(index);
        let hole = index * index;
        while (hole <= MAXIMUM) {
            arr[hole] = false;
            hole += index;
        }
    }
    index++;
}
