<template>
  <div v-if="show" class="d-grid">
    <BingoComponent />
    <div class="d-flex m-5 mx-2 row">
      <div class="col-2 d-flex">
        <SaveButtonAtom class="w-100"/>
        <EditButtonAtom class="ps-3 w-100"/>
      </div>
      <div class="col-6">
        <EditMouseOverButtonAtom class="w-100" />
        <EditBingoGifButtonAtom  class="w-100"/>
      </div>
      <div class="col-4">
        <ShareButtonAtom class="w-100 mb-3" />
        <ImportButtonAtom class="w-100"/>
      </div>
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
import ImportButtonAtom from '@/atoms/import-button.atom.vue';
import SaveButtonAtom from '@/atoms/save-button.atom.vue';
import ShareButtonAtom from '@/atoms/share-button.atom.vue';
import BingoComponent from '@/components/bingo.component.vue';

export default {
    name: 'HomepageView',
    components: {
        BingoComponent,
        SaveButtonAtom,
        EditButtonAtom,
        EditMouseOverButtonAtom,
        EditBingoGifButtonAtom,
        ShareButtonAtom,
        ImportButtonAtom,
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
