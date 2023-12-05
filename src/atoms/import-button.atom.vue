<template>
    <div class="import-button">
        <button class="btn btn-secondary" @click="importBingo">Import</button>
    </div>
</template>

<script>
export default {
    name: 'ImportButtonAtom',
    methods: {
        importBingo() {
            //todo
            // - add a file upload html object
            // - add a fiel upload handler
            // - read the json file
            // - check if its valid
            // - -  if valid, read the data and loop through the table and insert all data
            // - - (dont save it. the user has to save it manually)
            // - - if not valid, output the error
        },
    }
};
</script>