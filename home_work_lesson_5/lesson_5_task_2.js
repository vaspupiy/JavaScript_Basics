'use strict'


const productBasket = {
    products: [],
    countBasketProduct() {
        return this.products.reduce((total, itemProduct) => total + itemProduct.quantity, 0);
    },
    countBasketPrice() {
        return this.products.reduce((total, itemProduct) => total += itemProduct.price * itemProduct.quantity, 0);
    },
    showBasketOnWebsite() {
        if (this.countBasketProduct()) {
            return `В корзине: ${this.countBasketProduct()} товара(ов) на сумму ${this.countBasketPrice()} рубля(ей)`
        } else {
            return `Корзина Пуста`
        }
    },
    clearProduct(){
        this.products.length = 0;
    },
    // метод добавляет продукт в корзину, если его там нет, и увеличивает quantity - если продукт в корзине уже есть.
    appendProduct(id_product, product_name, price, quantity = 1) {
        let itemProduct = this.products.find(itemProduct => itemProduct.id_product === id_product);
        if (itemProduct) {
            itemProduct.quantity += quantity;
        } else this.products.push(
            {
                id_product: id_product,
                product_name: product_name,
                price: price,
                quantity: quantity,
            }
        )
    },
    // метод уменьшает quantity или удаляет продукт, если quantity становится <= 0
    reduceProduct(id_product, quantity = 1) {
        let itemProduct = this.products.find(itemProduct => itemProduct.id_product === id_product);
        if (itemProduct) {
            if (itemProduct.quantity > quantity) {
                itemProduct.quantity -= quantity;
            } else {
                let index = this.products.indexOf(itemProduct);
                this.products.splice(index, 1);
            }
        }

    }
};

productBasket.appendProduct(123, 'продукт1', 14);
productBasket.appendProduct(123, 'продукт1', 14, 3);
productBasket.appendProduct(124, 'продукт2', 24, 2);
productBasket.reduceProduct(124, 1);
productBasket.reduceProduct(124, 1);

// productBasket.clearProduct()

const basket = document.createElement('div');
const basketTitle = document.createElement('div');
const basketShowCount = document.createElement('div');
const emptyBasket = document.createElement('div');


basket.className = 'productBasket';

basketTitle.className = 'basketTitle';
basketTitle.innerHTML = '<h4>Корзина</h4>';

basketShowCount.className = 'basketShowCount';
basketShowCount.innerHTML = productBasket.showBasketOnWebsite();

emptyBasket.className = 'emptyBasket';
emptyBasket.innerHTML = '<a href="#">Очистить корзину</a>';

product_Basket.appendChild(basket);
basket.appendChild(basketTitle);
basket.appendChild(basketShowCount);
basket.appendChild(emptyBasket);

const aTag = document.querySelector('a');
function clearBasket(){
    productBasket.clearProduct()
    basketShowCount.innerHTML = productBasket.showBasketOnWebsite();
}

aTag.onclick = clearBasket;
