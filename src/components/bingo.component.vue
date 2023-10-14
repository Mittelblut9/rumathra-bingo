<template>
    <section class="section-bingo">
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

            const fixed = input.dataset.fixed === 'true';
            if(fixed) {
                return;
            }
            
            const timesPressed = parseInt(input.dataset.timesPressed);
            let selected = input.dataset.selected === 'true';
            let color = input.dataset.color;
            let resetColor = false;
            let resetTimesPressed = false;

            const multiSelectNumber = parseInt(input.dataset.multiSelectNumber);
            let multiSelectOptions = [];

            if(multiSelectNumber > 0) {
                multiSelectOptions = JSON.parse(input.dataset?.multiSelectOptions);
            }
            
            if (multiSelectNumber > 0 && timesPressed > 0)  {
                color = multiSelectOptions[`color${timesPressed}`];
               
                if(!color) {
                    selected = false;
                    resetColor = true;
                    resetTimesPressed = true;
                }
            }else {
                selected = !selected;
            }

            input.dataset.selected = selected;
            input.dataset.timesPressed = resetTimesPressed ? 0 : timesPressed + 1;

            if(resetColor) {
                target.style.backgroundColor = '';
            }else {
                target.style.backgroundColor = !selected && multiSelectNumber === 0 ? '' : color;	
            }

            this.checkIfBingo((isBingo) => {
                if(isBingo) {
                    console.log('BINGO!');
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

        }
    }
};
</script>