'use strict'
// 1. Доработать модуль корзины.
//     a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
//     b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида


const catalogItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Намиенование</b>: ${good.product_name}</div>
                    <div><b>Стоимость</b>: ${good.price}</div>
                    <button class="catalogButton" data-id_product="${good.id_product}">
                         <p>Добваить в корзину </p>
                    </button>
                </div>`
    }
}

const basketItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Намиенование</b>: ${good.product_name}</div>
                    <div><b>Стоимость</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                </div>`
    }
}

const catalogProduct = {
    catalogItem,
    catalogListBlock: null,
    catalogButton: null,
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
        },
        {
            id_product: 100,
            product_name: 'Дзызь несусветная',
            price: 100,
        },
    ],

    init() {
        this.catalogListBlock = document.querySelector('.catalog-list');
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.catalogListBlock.insertAdjacentHTML('beforeend', this.catalogItem.render(good))
                // document.querySelector(`.catalogButton${good.id_product}`).addEventListener('click', this.addProduct.bind(this))
            });
        }
        document.querySelector('.catalog-list').addEventListener('click', (event) => {
            this.containerClickHandler(event)
        });

        productBasket.init()
    },

    containerClickHandler(event) {
        if (event.target.className === 'catalogButton') {
            this.addProduct(event.target.dataset.id_product);
        } else if (event.target.parentElement.className === 'catalogButton') {
            this.addProduct(event.target.parentElement.dataset.id_product)
        } else {
        }
    },

    addProduct(id_product) {
        const itemProduct = this.getItemProduct(id_product)
        productBasket.appendProduct(
            itemProduct.id_product,
            itemProduct.product_name,
            itemProduct.price)
        productBasket.render()

    },
    getItemProduct(id_product) {
        return this.goods.find(good => good.id_product === +id_product)
    }

}


const productBasket = {
    basketItem,
    basketBlock: null,
    basketGoodsBlock: null,
    basketInfBlock: null,
    basketButtonBlock: null,
    products: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
            quantity: 1,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
            quantity: 2,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
            quantity: 1,
        },
    ],

    init() {
        this.basketBlock = document.querySelector('.basket-block');
        this.basketGoodsBlock = document.querySelector('.basket-goods');
        this.basketInfBlock = document.querySelector('.basket-inf');
        this.basketButtonBlock = document.querySelector('.basket-button');
        this.basketButtonBlock.addEventListener('click', this.clearProduct.bind(this));

        this.render();

    },

    clearProduct() {
        this.products.length = 0;
        this.render()
    },

    render() {
        this.basketGoodsBlock.innerHTML = ''
        if (this.products.length) {

            this.products.forEach(good => {
                this.basketGoodsBlock.insertAdjacentHTML('beforeend', this.basketItem.render(good))});
            this.basketInfBlock.textContent = `В корзине: ${this.countBasketProduct()} товара(ов) на сумму ${this.countBasketPrice()} рубля(ей)`
        } else {
            this.basketInfBlock.textContent = `Корзина Пуста`
        }
    },

    countBasketProduct() {
        return this.products.reduce((total, itemProduct) => total + itemProduct.quantity, 0);
    },

    countBasketPrice() {
        return this.products.reduce((total, itemProduct) => total += itemProduct.price * itemProduct.quantity, 0);
    },
    // метод добавляет продукт в корзину, если его там нет, и увеличивает quantity - если продукт в корзине уже есть.
    appendProduct(id_product, product_name, price, quantity = 1) {
        let itemProduct = this.products.find(itemProduct => itemProduct.id_product === id_product)
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
};

catalogProduct.init()
