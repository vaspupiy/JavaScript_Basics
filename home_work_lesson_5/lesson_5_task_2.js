'use strict'

const basketBlockParams = {
    tagNameTitle: 'div',
    tagNameInf: 'div',
    tagNameButton: 'button',
    classNameTitle: 'basket-title',
    classNameInfBlock: 'basket-inf',
    classNameButtonBlock: 'basket-button',
    titleText: '<h4>Корзина</h4>',
    buttonText: 'Очистить корзину'
}


const productBasket = {
    basketBlockParams,
    basketBlock: null,
    basketTitle: null,
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
        this.basketTitle = document.createElement(this.basketBlockParams.tagNameTitle);
        this.basketInfBlock = document.createElement(this.basketBlockParams.tagNameInf);
        this.basketButtonBlock = document.createElement(this.basketBlockParams.tagNameButton);
        this.basketTitle.className = this.basketBlockParams.classNameTitle;
        this.basketInfBlock.className = this.basketBlockParams.classNameInfBlock;
        this.basketButtonBlock.className = this.basketBlockParams.classNameButtonBlock;
        [this.basketTitle, this.basketInfBlock, this.basketButtonBlock].forEach(elem =>
            this.basketBlock.appendChild(elem)
        )

        this.basketButtonBlock.addEventListener('click', this.clearProduct.bind(this));

        this.render();

    },

    countBasketProduct() {
        return this.products.reduce((total, itemProduct) => total + itemProduct.quantity, 0);
    },

    countBasketPrice() {
        return this.products.reduce((total, itemProduct) => total += itemProduct.price * itemProduct.quantity, 0);
    },

    render() {
        this.basketTitle.innerHTML = this.basketBlockParams.titleText
        if (this.products.length) {
            this.basketInfBlock.textContent = `В корзине: ${this.countBasketProduct()} товара(ов) на сумму ${this.countBasketPrice()} рубля(ей)`
        } else {
            this.basketInfBlock.textContent = `Корзина Пуста`
        }
        this.basketButtonBlock.textContent = this.basketBlockParams.buttonText
    },

    clearProduct() {
        this.products.length = 0;

        this.render()
    },
};

productBasket.init()

