<template>
    <div class="edit-button">
        <button class="btn btn-secondary" @click="triggerEditEvent()">Edit</button>
    </div>
</template>

<script>
export default {
    name: 'EditButtonAtom',
    data() {
        return {
            edit: false
        };
    },
    methods: {
        triggerEditEvent() {
            const button = this.$el.firstChild;
            button.innerHTML = this.edit ? 'Edit' : 'Editting';
            button.classList.toggle('btn-danger');

            this.edit = !this.edit;
            document.dispatchEvent(new CustomEvent('editBingo'));
        }
    }
};
</script>