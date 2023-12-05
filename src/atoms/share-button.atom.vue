<template>
    <div class="share-button">
        <button class="btn btn-secondary" @click="share">Share</button>
    </div>
</template>

<script>
export default {
    name: 'ShareButtonAtom',
    methods: {
        share() {
            const table = document.querySelector('table');
            const rows = table.querySelectorAll('tr');
            const data = [];
            for (let i = 0; i < rows.length; i++) {
                const row = rows[i];
                const cols = row.querySelectorAll('td');
                const rowData = [];
                for (let j = 0; j < cols.length; j++) {
                    const col = cols[j];
                    rowData.push(col.innerText.trim());
                }
                data.push(rowData);
            }
            //remove the first data in the array, cause its the header
            data.shift();
            
            const dataString = JSON.stringify(data, null, 2);
            const blob = new Blob([dataString], { type: 'application/json' });

            const a = document.createElement('a');
            a.download = 'bingo.json';
            a.href = URL.createObjectURL(blob);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        },
    }
};
</script>