<template>
    <div class="import-button">
        <div class="input-group">
            <div class="d-grid w-100">
                <span>Importiere ein Bingo</span>
                <input type="file" class="form-control w-100" @change="importBingo" aria-describedby="inputGroupFileAddon04" aria-label="Upload" ref="file">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImportButtonAtom',
    methods: {
        importBingo() {
            const file = this.$refs.file.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const json = JSON.parse(e.target.result);
                const isJSONType = file.type === 'application/json' || typeof json === 'object' || json.bingo[0].length === 5;
                if (!isJSONType) {
                    alert('Invalid file type or invalid JSON File. Please upload a JSON file.');
                    return;
                }
                const bingo = json.bingo;

                const table = document.querySelector('table');
                const rows = table.querySelectorAll('tr:not(:first-child)');
                for (let i = 0; i < rows.length; i++) {
                    const row = rows[i];
                    const cols = row.querySelectorAll('td');
                    for (let j = 0; j < cols.length; j++) {
                        const col = cols[j];
                        const pTag = col.querySelector('p');
                        pTag.innerText = bingo[i][j].text;
                        const bingoBoxFieldData = col.querySelector('.bingo-box-field-data');
                        bingoBoxFieldData.dataset.multiSelectNumber = bingo[i][j].multiSelectNumber || 0;
                    }
                }
            };

            alert('Successfully imported! Please save your bingo and reload the page to see all changes.');
            reader.readAsText(file);
        },
    }
};
</script>