'use strict'
// 1. Для практикума из занятия 7 продумать, где можно применить замыкания.

// От безысходности, создал счетчик, для подсчета очков. На большее мои мозгишки пока не прокачены. Нужен опыт...
// Как работает в игре, можно посмотреть в файле lesson_7.js

const score = {
    total: null,
    count: null,

    init(){
        function makeCounter() {
            let currentState = 0;
            return function () {
                ++currentState
                return currentState
            }
        }

        this.count = makeCounter()
    },

    getCount(){
        return this.count()
    },

    setTotal() {
        this.total = this.getCount()
    },

    getTotal() {
        return this.total
    },

    render() {
        const totalValue = document.querySelector('.score-area')
        totalValue.innerHTML = this.getTotal();
    }
};

console.log(score.init())
console.log(score.setTotal())
console.log(score.getTotal())
console.log(score.setTotal())
console.log(score.getTotal())
console.log(score.getTotal())
console.log(score.setTotal())
console.log(score.getTotal())
console.log(score.init())
console.log(score.setTotal())
console.log(score.getTotal())
console.log(score.setTotal())
console.log(score.getTotal())
console.log(score.setTotal())
console.log(score.getTotal())