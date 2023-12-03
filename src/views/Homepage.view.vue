<template>
  <div v-if="show">
    <BingoComponent />
    <div class="position-absolute left-0 bottom-0 d-flex">
      <SaveButtonAtom class="p-3"/>
      <EditButtonAtom class="p-3"/>
      <EditMouseOverButtonAtom class="p-3"/>
      <EditBingoGifButtonAtom class="p-3"/>
    </div>
  </div>
  <div v-else>
    <h1>Erstelle ein neues Bingo. Füge der URL einfach ein ?bingo=BINGO_NAME hinzu um ein neues Bingo hinzuzufügen. <br />
    Wenn du ein existierendes Bingo bearbeiten möchtest, gebe einfach den Namen des Bingos in die URL ein anstatt BINGO_NAME.
    </h1>
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
    },
    data() {
        return {
            show: false,
        };
    },
    mounted() {
        const isQueries = this.$route.query.bingo;
        if (isQueries) {
            this.show = true;
        }
    },
};
</script>
