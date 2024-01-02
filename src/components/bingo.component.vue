<template>
    <section class="section-bingo">
        <div class="section-bingo--animation" id="bingo-container">
            <img :src="bingoGif" style="visibility: hidden;"/>
            <h1>{{ snippets.bingoTriggered }}</h1>
            <table class="bg-white show">
                <tr class="user-select-none text-center fs-3">
                    <th data-fixed="true">B</th>
                    <th data-fixed="true">I</th>
                    <th data-fixed="true">N</th>
                    <th data-fixed="true">G</th>
                    <th data-fixed="true">O</th>
                </tr>
                <tr v-for="(tableData, trIndex) in tableData" :key="tableData" class="bingo-content">
                    <td v-for="(tableContent, tdIndex) in tableData" :key="tableContent" @click="selectTarget" @contextmenu="rightClickHandler($event)">
                        <div class="multi-select-inputs d-flex" :class="[$root.edit || 'd-none']">
                            <input 
                                class="form-check-input multi-select-check-input" 
                                :class="`multiSelect-${trIndex}-${tdIndex}`" 
                                type="checkbox"
                                @click="triggerMulitSelect"
                                :data-trindex="trIndex"
                                :data-tdindex="tdIndex"
                                :checked="tableContent.multiSelectNumber > 0"
                                />
                            <input 
                                class="form-control multi-select-text-input" 
                                :class="`multiSelect-${trIndex}-${tdIndex}`" 
                                type="text" 
                                :value="tableContent.multiSelectNumber || 2"
                                :data-trindex="trIndex"
                                :data-tdindex="tdIndex"
                                min="1" 
                                max="11"
                                @change="updateMultiSelectNumber"
                                />
                        </div>
                        <div class="d-flex flex-column h-100 " :class="[tableContent.multiSelectNumber > 0 ? 'justify-content-end' : 'justify-content-center']">
                            <BingoBoxAtom :tableContent="tableContent" />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </section>
</template>

<script>
import { getCookie } from '@/assets/js/cookie';
import { animateBingo, checkIfBingo } from '@/assets/js/bingo';
import tableData from '@/assets/json/bingo.json';
import BingoBoxAtom from '@/atoms/bingo-box.atom.vue';
export default {
    name: 'BingoComponent',
    data() {
        return {
            tableData: getCookie('bingo', this.$route.query.bingo, true) || tableData.bingo,
            bingoTriggered: false,
            snippets: {
                bingoTriggered: 'BINGO!!'
            },
            bingoGif: getCookie('bingoGif', this.$route.query.bingo),
            colorOptions: {
                color0: 'yellow',
                color1: 'red',
                color2: 'purple',
                color3: 'blue',
                color4: 'green',
            }
        };
    },
    mounted() {
        this.getBingo();
        setInterval(() => {
            this.getBingo();
        }, 2000);
        
        // this.listenToUpdates();
        this.resizeBingoGif();
    },    
    components: {
        BingoBoxAtom
    },
    methods: {
        getBingo() {
            if(!this.$root.socket) {
                return;
            }
            this.$root.socket.emit('Server:GetProject', this.$route.query.bingo.replaceAll(' ', ''));

            this.$root.socket.on('Client:GetProject:Success', (data) => {
                this.tableData = data.data.bingo;
            });

            this.$root.socket.on('Client:GetProject:Error', (err) => {
                console.error(err);
            });
        },
        //todo
        // listenToUpdates() {
        //     this.$root.socket.on('Client:UpdateAll', (data) => {
        //         this.tableData = data.data.bingo;
        //     });
        // },
        resizeBingoGif() {
            //set image gif width as the same as the table width
            const bingoContainer = document.getElementById('bingo-container');
            const bingoGif = bingoContainer.querySelector('img');
            const bingoTable = bingoContainer.querySelector('table');
            bingoGif.style.width = `${bingoTable.offsetWidth - 50}px`;

            //set image gif height as the same as the table height
            bingoGif.style.height = `${bingoTable.offsetHeight}px`;
        },
        rightClickHandler(e) {
            e.preventDefault();
            const target = e.target;
            const input = target.firstElementChild;

            if(input.dataset.fixed === 'true') {
                return;
            }

            input.dataset.selected = false;
            input.dataset.timesPressed = 0;
            input.dataset.timesRounds = 0;
            target.style.backgroundColor = '';

            const isMultiSelect = input.dataset.multiSelectNumber > 0;
            if(!isMultiSelect) {
                return;
            }

            target.querySelectorAll('.bingo-box-multi--item').forEach(div => {
                div.style.backgroundColor = '';
            });
        },
        selectTarget(e) {
            if(this.$root.edit) {
                return;
            }
            
            const target = e.target;
            const input = target.querySelector('.bingo-box-field-data');
            
            const fixed = input.dataset.fixed === 'true';
            if (fixed) {
                return;
            }
            
            let timesPressed = parseInt(input.dataset.timesPressed);
            let timesRounds = parseInt(input.dataset.timesRounds);

            let selected = input.dataset.selected === 'true';
            let color;

            const multiSelectNumber = parseInt(input.dataset.multiSelectNumber);
            const isMultiSelect = multiSelectNumber > 0;
            const multiSelectOptions = this.colorOptions;

            if (isMultiSelect && timesPressed > 0)  {
                color = multiSelectOptions[`color${timesRounds}`];
            } else {
                color = multiSelectOptions['color0'];
                selected = !selected;
            }

            let targetDiv = null;

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
            input.dataset.timesPressed = timesPressed + 1;

            checkIfBingo((isBingo) => {
                if(isBingo) {
                    if(this.bingoTriggered) {
                        return;
                    }
                    this.bingoTriggered = true;
                    animateBingo();
                }
            });
        },
        // eslint-disable-next-line no-unused-vars
        triggerMulitSelect(el) {
            const target = el.target;
            const checked = target.checked;
            const trIndex = target.dataset.trindex;
            const tdIndex = target.dataset.tdindex;

            const newObjWithMulti = {
                text: this.tableData[trIndex][tdIndex].text,
                multiSelectNumber: 2,
            };

            const newObjWithoutMulti = {
                text: this.tableData[trIndex][tdIndex].text,
            };

            this.tableData[trIndex][tdIndex] = checked ? newObjWithMulti : newObjWithoutMulti;
        },

        updateMultiSelectNumber(el) {
            const target = el.target;
            const trIndex = target.dataset.trindex;
            const tdIndex = target.dataset.tdindex;
            const multiSelectNumber = parseInt(target.value);

            const newObjWithMulti = {
                text: this.tableData[trIndex][tdIndex].text,
                multiSelectNumber,
            };

            this.tableData[trIndex][tdIndex] = newObjWithMulti;
        }
    }
};
</script>