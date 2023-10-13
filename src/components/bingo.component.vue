<template>
    <section class="section-bingo">
        <table>
            <tr v-for="tableData in tableData" :key="tableData">
                <td v-for="tableContent in tableData" :key="tableContent">
                    <input hidden :data-fixed="tableContent.fixed" :data-selected="tableContent.selected" />
                    <p :class="[tableContent.fixed ? 'bold big' : '']" class="center user-select-none">{{ tableContent.text }}</p>
                </td>
            </tr>
        </table>
    </section>
</template>

<script>
import tableData from '@/assets/json/bingo.json';
export default {
    name: 'BingoComponent',
    data() {
        return {
            tableData: tableData.bingo
        };
    }
};
</script>