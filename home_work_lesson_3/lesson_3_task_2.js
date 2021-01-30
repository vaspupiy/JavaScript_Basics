console.log('2. С этого урока начинаем работать с функционалом интернет-магазина.\n' +
    'Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины\n' +
    'в зависимости от находящихся в ней товаров.\n' +
    'Товары в корзине хранятся в массиве. Задачи:\n' +
    '   a) Организовать такой массив для хранения товаров в корзине;\n' +
    '   b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.')

const productBasket = [
    ['fridge', 100, 1],
    ['washing machine', 150, 1],
    ['iron', 100, 3],
    ['fan', 50, 4],
    ['coffee machine', 150, 5],
    ['Hoover', 100, 2],
]

console.log(productBasket)

const countBasketPrice = (arrProductBasket) => {
    return arrProductBasket.reduce((total, product) => {
        return total + product[1] * product[2]
    }, 0)
}

console.log(`ИТОГО: ${countBasketPrice(productBasket)}`)
