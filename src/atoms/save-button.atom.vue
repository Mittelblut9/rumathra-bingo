<template>
    <div class="save-button">
        <button class="btn btn-success" @click="save">Save</button>
    </div>
</template>

<script>
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
                    rowData.push(col.innerText.trim());
                }
                data.push(rowData);
            }
            //remove the first data in the array, cause its the header
            data.shift();
            this.saveCookie(data);
            alert('Successfully saved!');
        },

        saveCookie(data) {
            const currentPath = window.location.pathname;
            const now = new Date();
            const expirationDate = new Date().setFullYear(now.getFullYear() + 1);
            const expires = expirationDate.toUTCString();
            document.cookie = `bingo=${JSON.stringify(data)}; expires=${expires}; path=${currentPath}; sameSite=strict;`;
        }
    }
};
</script>