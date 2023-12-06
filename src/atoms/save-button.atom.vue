<template>
    <div class="save-button">
        <button class="btn btn-success" @click="save">Save</button>
    </div>
</template>

<script>
import { saveCookie } from '@/assets/js/cookie';

export default {
    name: 'SaveButtonAtom',
    methods: {
        save() {
            const table = document.querySelector('table');
            const rows = table.querySelectorAll('tr');
            const data = [];
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const cols = row.querySelectorAll('td');
                const rowData = [];
                for (let j = 0; j < cols.length; j++) {
                    const col = cols[j];
                    rowData.push({
                        text: col.innerText.trim(),
                        multiSelectNumber: parseInt(col.querySelector('.bingo-box-field-data').dataset.multiSelectNumber),
                    });
                }
                data.push(rowData);
            }
            //remove the first data in the array, cause its the header
            data.shift();
            saveCookie('bingo', this.$route.query.bingo, JSON.stringify(data));
            alert('Successfully saved!');
        },
    }
};
</script>