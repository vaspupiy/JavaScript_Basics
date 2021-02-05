console.log(' 2.Продолжить работу с интернет-магазином:\n' +
    '       2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. ' +
    'Какими объектами можно заменить их элементы?\n' +
    '       2.2. Реализуйте такие объекты.\n' +
    '       2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.')


const productBasket = {
    products:[],
    countBasketPrice() {
        return this.products.reduce((total, itemProduct) => total += itemProduct.price * itemProduct.quantity, 0);
    },
    // метод добавляет продукт в корзину, если его там нет, и увеличивает quantity - если продукт в корзине уже есть.
    appendProduct(id_product, product_name, price, quantity=1) {
        let itemProduct = this.products.find(itemProduct => itemProduct.id_product === id_product)
        if (itemProduct){
            itemProduct.quantity += quantity;
        }else this.products.push(
            {
                id_product: id_product,
                product_name: product_name,
                price: price,
                quantity: quantity,
            }
        )
    },
    // метод уменьшает quantity или удаляет продукт, если quantity становится <= 0
    reduceProduct(id_product, quantity=1){
        let itemProduct = this.products.find(itemProduct => itemProduct.id_product === id_product)
        if (itemProduct){
          if (itemProduct.quantity > quantity ){
              itemProduct.quantity -= quantity;
          }else {
              let index = this.products.indexOf(itemProduct)
              this.products.splice(index, 1)
          }
        }

    }
};
console.log(productBasket.products)
productBasket.appendProduct(123, 'продукт1', 14)
console.log(productBasket.products)
productBasket.appendProduct(123, 'продукт1', 14, 3)
console.log(productBasket.products)
productBasket.appendProduct(124, 'продукт2', 24, 2)
console.log(productBasket.products)
console.log(`Общая стоимость товаров: ${productBasket.countBasketPrice()}`)
productBasket.reduceProduct(124, 1)
console.log(productBasket.products)
productBasket.reduceProduct(124, 1)
console.log(productBasket.products)