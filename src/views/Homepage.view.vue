<template>
  <BingoComponent />
  <SaveButtonAtom />
  <EditButtonAtom />
</template>

<script>
import EditButtonAtom from '@/atoms/edit-button.atom.vue';
import SaveButtonAtom from '@/atoms/save-button.atom.vue';
import BingoComponent from '@/components/bingo.component.vue';

export default {
    name: 'HomepageView',
    components: {
        BingoComponent,
        SaveButtonAtom,
        EditButtonAtom,
    }
};
</script>
