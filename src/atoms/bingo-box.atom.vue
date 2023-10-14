<template>
    <input hidden 
        :data-fixed="fixed" 
        :data-selected="selected"
        :data-color="color"
        :data-multi-select-number="multiSelectNumber"
        :data-multi-select-options="multiSelectOptions"
        data-times-pressed="0"
    />
    <p :class="[fixed ? 'bold big' : '']" class="center user-select-none pointer-events-none">{{ text }}</p>

</template>

<script>
export default {
    name: 'BingoBoxAtom',
    props: {
        fixed: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        multiSelectNumber: {
            type: Number,
            default: 0
        },
        multiSelectOptions: {
            type: String,
            default: ''
        }
    },
    data() {
        return {};
    },
};
</script>