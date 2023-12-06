<template>
    <div class="edit-button">
        <button class="btn btn-secondary" @click="triggerEditEvent()">Edit</button>
    </div>
</template>

<script>
export default {
    name: 'EditButtonAtom',
    methods: {
        triggerEditEvent() {
            const button = this.$el.firstChild;
            button.innerHTML = this.$root.edit ? 'Edit' : 'Editting';
            button.classList.toggle('btn-danger');
            this.$root.edit = !this.$root.edit;
            
            document.querySelectorAll('.multi-select-inputs').forEach((element) => {
                element.classList.toggle('d-none');
            });

            document.cursor = '';
            document.dispatchEvent(new CustomEvent('editBingo'));
        }
    }
};
</script>