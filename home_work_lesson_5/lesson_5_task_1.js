'use strict'
console.log('1. Создать функцию, генерирующую шахматную доску. ' +
    'При этом можно использовать любые html-теги по своему желанию. ' +
    'Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. ' +
    'Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.')

const setting = {
    rowCount: 10,
    cellCount: 10,
    blackCellColor: '#555',
    whiteCellColor: '#ccc',
    cellIndex: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', '',],
}

const chessboard = {
    setting,
    containerElement: null,

    run() {
        this.init();
    },

    init() {
        this.containerElement = document.getElementById('chessBoard');

        this.initCells();
    },

    initCells() {
        this.containerElement.textContent = '';
        this.cellElements = [];

        let isWhite = false
        for (let row = 0; row < this.setting.rowCount; row++) {
            const trElement = document.createElement("tr")
            this.containerElement.appendChild(trElement)
            isWhite = !(isWhite);
            for (let col = 0; col < this.setting.cellCount; col++) {
                const cell = document.createElement('td')
                if (isWhite || col === 0 || col === 9 || row === 0 || row === 9) {
                    cell.style.backgroundColor = this.setting.whiteCellColor
                } else {
                    cell.style.backgroundColor = this.setting.blackCellColor
                }
                if ((col === 0 || col === 9) && row !== 0 && row !== 9) {
                    cell.textContent = '' + (9 - row);

                }
                if (row === 0 || row === 9){
                    cell.textContent = this.setting.cellIndex[col];
                }
                trElement.appendChild(cell);

                this.cellElements.push(cell);
                isWhite = !(isWhite);
            }
        }
    },
}

chessboard.run()

