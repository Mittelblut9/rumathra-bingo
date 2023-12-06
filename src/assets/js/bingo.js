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

    tableRows.forEach(row => {
        if(isBingo) {
            return;
        }
        const rowCells = row.querySelectorAll('td');
        const rowCellsLength = rowCells.length;

        let rowCellsSelected = 0;
        rowCells.forEach(cell => {
            const input = cell.querySelector('input');
            const selected = input.dataset.selected === 'true';
            if(selected) {
                rowCellsSelected++;
            }
        });

        isBingo = rowCellsSelected === rowCellsLength;

        cb(isBingo);
    });

    tableColumns.forEach(column => {
        if(isBingo) {
            return;
        }
        const columnCells = table.querySelectorAll(`td:nth-child(${column.cellIndex + 1})`);
        const columnCellsLength = columnCells.length;

        let columnCellsSelected = 0;
        columnCells.forEach(cell => {
            const input = cell.querySelector('input');
            const selected = input.dataset.selected === 'true';
            if(selected) {
                columnCellsSelected++;
            }
        });

        isBingo = columnCellsSelected === columnCellsLength;
        cb(isBingo);
    });

    const checkDiagonal = (startRow, cellIndices) => {
        const cells = cellIndices.map((index, i) =>
            table.querySelector(`.bingo-content:nth-child(${startRow + i}) td:nth-child(${index})`)
        );

        return cells.every((cell) => cell.querySelector('input').dataset.selected === 'true');
    };

    const diagonale = () => checkDiagonal(2, [1, 2, 3, 4, 5]);
    const diagonale2 = () => checkDiagonal(2, [5, 4, 3, 2, 1]);

    cb(diagonale());
    cb(diagonale2());
}
