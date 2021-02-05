console.log(' * Подумать над глобальными сущностями.\n' +
    '     К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога.\n' +
    '     Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,\n' +
    '     но в разных местах давал возможность вызывать разные методы.')

const product = {
    id_product: null,
    product_name: null,
    price: null,
    quantity: null,

    init(init_id, init_name, init_price, Init_quantity = null) {
        this.id_product = init_id;
        this.product_name = init_name;
        this.price = init_price;
        this.quantity = Init_quantity;
    },

    changePrice(newPrice) {
        this.price = newPrice;
    },

    addQuantity(num) {
        this.quantity += num
    },

    reduceQuantity(num) {
        if (this.quantity - num >= 0) {
            this.quantity -= num
        } else {
            console.log(`Невозможно выполнить операцию: требуется ${num} в наличии ${this.quantity}`)
        }

    },

}

// const good1 = {...product}
// const good2 = {...product}
//
// console.log(good1)
// good1.init(123, "Ноутбук", 45600, 1)
// console.log(good1)
// good1.changePrice(50000)
// console.log(good1)
//
// console.log(good2)
// good2.init(456, "Мышка", 1000, 1)
// console.log(good2)
// good2.addQuantity(3)
// console.log(good2)
// good2.reduceQuantity(5)
// good2.reduceQuantity(2)
// console.log(good2)

// каталог в таком случае будет

const productCatalog = {
    catalog: [],
    appendProduct(id_product, product_name, price) {
        const good = {...product};
        good.init(id_product, product_name, price);
        this.catalog.push(good);
    },
    deleteProduct(id_product) {
        const itemProduct = this.catalog.find(itemProduct => itemProduct.id_product === id_product);
        const index = this.catalog.indexOf(itemProduct);
        this.catalog.splice(index, 1);
    }
}

productCatalog.appendProduct(456, "Мышка", 1000,);
console.log(productCatalog.catalog);
productCatalog.deleteProduct(456,);
console.log(productCatalog.catalog);

// надеюсь когда-нибудь это проверят, и я узнаю туда ли я вообще пошел...