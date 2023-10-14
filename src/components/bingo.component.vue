<template>
    <section class="section-bingo">
        <div class="section-bingo--animation" id="bingo-container">
            <img src="@/assets/gif/winning.gif" alt="bingo" style="visibility: hidden;"/>
            <h1>BINGO!!</h1>
            <table>
                <tr v-for="tableData in tableData" :key="tableData">
                    <td v-for="tableContent in tableData" :key="tableContent" @click="selectTarget">
                        <BingoBoxAtom 
                            :fixed="tableContent.fixed" 
                            :selected="tableContent.selected" 
                            :text="tableContent.text" 
                            :color="tableContent.color"
                            :multiSelectNumber="tableContent.multiSelectNumber"
                            :multiSelectOptions="JSON.stringify(tableContent?.multiSelectOptions)"
                        />
                    </td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
import tableData from '@/assets/json/bingo.json';
import BingoBoxAtom from '@/atoms/bingo-box.atom.vue';
export default {
    name: 'BingoComponent',
    data() {
        return {
            tableData: tableData.bingo,
        };
    },
    components: {
        BingoBoxAtom
    },
    methods: {
        selectTarget(e) {
            const target = e.target;
            const input = target.querySelector('input');
            let targetDiv;

            const fixed = input.dataset.fixed === 'true';
            if(fixed) {
                return;
            }
            
            let timesPressed = parseInt(input.dataset.timesPressed);
            let timesRounds = parseInt(input.dataset.timesRounds);

            let selected = input.dataset.selected === 'true';
            let color = input.dataset.color;
            let resetColor = false;
            let resetTimesPressed = false;

            const multiSelectNumber = parseInt(input.dataset.multiSelectNumber);
            const isMultiSelect = multiSelectNumber > 0;
            const multiSelectOptions = tableData.options;
            
            if (isMultiSelect && timesPressed > 0)  {
                color = multiSelectOptions[`color${timesRounds}`];
            }else {
                selected = !selected;
            }

            if(isMultiSelect) {
                selected = false;
                targetDiv = target.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${timesPressed + 1}"]`);
                if(!targetDiv) {
                    targetDiv = target.querySelector('.bingo-box-multi--item input[data-multi-select-number="1"]');
                    color = multiSelectOptions[`color${timesRounds + 1}`];
                    input.dataset.timesRounds = timesRounds + 1;
                    timesPressed = 0;
                }

                const nextDivExists = target.querySelector(`.bingo-box-multi--item input[data-multi-select-number="${timesPressed + 2}"]`);
                if(!nextDivExists) {
                    selected = true;
                }

                targetDiv = targetDiv.parentElement;
            }else {
                targetDiv = target;
            }

            targetDiv.style.backgroundColor = !selected && !isMultiSelect ? '' : color;
            input.dataset.selected = selected;
            input.dataset.timesPressed = resetTimesPressed ? 0 : timesPressed + 1;


            if(resetColor) {
                targetDiv.style.backgroundColor = '';
            }

            this.checkIfBingo((isBingo) => {
                if(isBingo) {
                    this.animateBingo();
                }
            });
        },

        checkIfBingo(cb) {
            const table = document.querySelector('.section-bingo table');
            const tableRows = table.querySelectorAll('tr');
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
                const columnCellsLength = columnCells.length - 1;

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

            const diagonale = () => {
                const firstCell = table.querySelector('tr:nth-child(2) td:first-child');
                const secondCell = table.querySelector('tr:nth-child(3) td:nth-child(2)');
                const thirdCell = table.querySelector('tr:nth-child(4) td:nth-child(3)');
                const fourthCell = table.querySelector('tr:nth-child(5) td:nth-child(4)');
                const fifthCell = table.querySelector('tr:nth-child(6) td:nth-child(5)');

                const firstCellSelected = firstCell.querySelector('input').dataset.selected === 'true';
                const secondCellSelected = secondCell.querySelector('input').dataset.selected === 'true';
                const thirdCellSelected = thirdCell.querySelector('input').dataset.selected === 'true';
                const fourthCellSelected = fourthCell.querySelector('input').dataset.selected === 'true';
                const fifthCellSelected = fifthCell.querySelector('input').dataset.selected === 'true';

                return firstCellSelected && secondCellSelected && thirdCellSelected && fourthCellSelected && fifthCellSelected;
            };

            cb(diagonale());
        },

        animateBingo() {
            const bingoContainer = document.querySelector('.section-bingo--animation');
            bingoContainer.classList.add('section-bingo--animation--active');

            bingoContainer.querySelector('h1').style.opacity = 1;

            setTimeout(() => {
                bingoContainer.querySelector('h1').style.opacity = 0;
                bingoContainer.classList.remove('section-bingo--animation--active');
            }, 5000);
        }
    }
};
</script>