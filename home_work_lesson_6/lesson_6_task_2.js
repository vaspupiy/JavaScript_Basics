'use strict'
// 2 *У товара может быть несколько изображений. Нужно:
// a. Реализовать функционал показа полноразмерных картинок товара в модальном окне
// b. Реализовать функционал перехода между картинками внутри модального окна ("листалка")

const catalogItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Намиенование</b>: ${good.product_name}</div>
                    <div><b>Стоимость</b>: ${good.price}</div>
                    <div><img src="images/min/${good.id_product}.png" data-full_image_url="images/max/${good.id_product}.png" 
                    alt="Картинка${good.product_name}."></div>
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

const catalogShowImage = {
    render(src) {
        return `
                    <div class="galleryWrapper__screen"></div>
                    <img  class="galleryWrapper__close" src="images/gallery/close.png" alt="">
                    <img class="galleryWrapper__image" src="${src}" alt="">
               `
    }
}

const catalogShowImageSetting = {
    previewSelector: '.mySuperGallery',
    openedImageWrapperClass: 'galleryWrapper',
    openedImageClass: 'galleryWrapper__image',
    openedImageScreenClass: 'galleryWrapper__screen',
    openedImageCloseBtnClass: 'galleryWrapper__close',
    openedImageCloseBtnSrc: 'images/gallery/close.png'

};

const catalogProduct = {
    catalogShowImageSetting,
    openedImageWrapperClass: null,
    catalogShowImage,
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

        productBasket.init()    },

    containerClickHandler(event) {
        if (event.target.className === 'catalogButton') {
            this.addProduct(event.target.dataset.id_product);
        } else if (event.target.parentElement.className === 'catalogButton') {
            this.addProduct(event.target.parentElement.dataset.id_product)
        } else if (event.target.tagName === 'IMG') {
            this.openImage(event.target.dataset.full_image_url)
        } else {
        }
    },
    openImage(src) {
        // console.log(src)
        // this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
        this.getScreenContainer(src)
    },

    getScreenContainer(src) {
        this.openedImageWrapperClass = document.querySelector('.gallery-wrapper');
        this.openedImageWrapperClass.insertAdjacentHTML('beforeend', this.catalogShowImage.render(src));
        document.querySelector('.gallery-wrapper').addEventListener('click', (event) =>
            this.openedImageClickHandler(event))
    },

    openedImageClickHandler(event) {
        console.log(event.target.className)
        if (event.target.className === 'galleryWrapper__close') {
            document.querySelector(`.gallery-wrapper`).innerHTML = '';
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
                this.basketGoodsBlock.insertAdjacentHTML('beforeend', this.basketItem.render(good))
            });
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
