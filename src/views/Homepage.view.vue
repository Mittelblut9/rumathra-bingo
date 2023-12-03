<template>
  <BingoComponent />
  <div class="position-absolute left-0 bottom-0 d-flex">
    <SaveButtonAtom class="p-3"/>
    <EditButtonAtom class="p-3"/>
    <EditMouseOverButtonAtom class="p-3"/>
    <EditBingoGifButtonAtom class="p-3"/>
  </div>
</template>

<script>
import EditButtonAtom from '@/atoms/edit-button.atom.vue';
import EditBingoGifButtonAtom from '@/atoms/editBingoGif-button.atom.vue';
import EditMouseOverButtonAtom from '@/atoms/editMouseOver-button.atom.vue';
import SaveButtonAtom from '@/atoms/save-button.atom.vue';
import BingoComponent from '@/components/bingo.component.vue';

export default {
    name: 'HomepageView',
    components: {
        BingoComponent,
        SaveButtonAtom,
        EditButtonAtom,
        EditMouseOverButtonAtom,
        EditBingoGifButtonAtom
    }
};
</script>
