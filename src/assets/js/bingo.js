export function animateBingo() {
    const bingoContainer = document.querySelector('.section-bingo--animation');
    bingoContainer.classList.add('section-bingo--animation--active');

    bingoContainer.querySelector('h1').style.opacity = 1;

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    let colorIndex = 0;
    const colorInterval = setInterval(() => {
        bingoContainer.querySelector('h1').style.color = colors[colorIndex];
        colorIndex++;
        if(colorIndex === colors.length) {
            colorIndex = 0;
        }
    }, 100);


    setTimeout(() => {
        bingoContainer.querySelector('h1').style.opacity = 0;
        bingoContainer.classList.remove('section-bingo--animation--active');
        clearInterval(colorInterval);
    }, 5000);
}

export function checkIfBingo(cb) {
    const table = document.querySelector('.section-bingo table');
    const tableRows = table.querySelectorAll('.bingo-content');
    const tableColumns = table.querySelectorAll('td');

    let isBingo = false;


    const isBingoCheck = function (tableElements) {
        tableElements.forEach(function (element) {
            if(isBingo) {
                return false;
            }

            const isVerticalRow = typeof element.cellIndex === 'number';
            const elementCells = isVerticalRow ? table.querySelectorAll(`td:nth-child(${element.cellIndex + 1})`) : element.querySelectorAll('td');
            const elementCellsLength = elementCells.length;
            let elementCellsSelected = 0;

            elementCells.forEach(function (cell) {
                if(cell.querySelector('.bingo-box-field-data').dataset.selected === 'true') {
                    elementCellsSelected++;
                }
            });

            return cb(elementCellsSelected === elementCellsLength && elementCellsSelected >= 5);
        });
    };

    isBingoCheck(tableRows);
    isBingoCheck(tableColumns);

    const checkDiagonal = (startRow, cellIndices) => {
        const cells = cellIndices.map((index, i) =>
            table.querySelector(`.bingo-content:nth-child(${startRow + i}) td:nth-child(${index})`)
        );

        return cells.every((cell) => cell.querySelector('.bingo-box-field-data').dataset.selected === 'true');
    };

    const diagonale = () => checkDiagonal(2, [1, 2, 3, 4, 5]);
    const diagonale2 = () => checkDiagonal(2, [5, 4, 3, 2, 1]);

    cb(diagonale());
    cb(diagonale2());
}
