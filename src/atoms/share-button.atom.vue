<template>
    <div class="share-button">
        <button class="btn btn-secondary" @click="share">Share</button>
    </div>
</template>

<script>
import { getCookie } from '@/assets/js/cookie';

export default {
    name: 'ShareButtonAtom',
    methods: {
        share() {
            const saveObj = {
                hoverImage: getCookie('hoverImage', this.$route.query.bingo),
                bingoGif: getCookie('bingoGif', this.$route.query.bingo),
                bingo: getCookie('bingo', this.$route.query.bingo, true),
            };
            
            const dataString = JSON.stringify(saveObj, null, 2);
            const blob = new Blob([dataString], { type: 'application/json' });
            
            this.download(blob);
        },

        download(blob) {
            const a = document.createElement('a');
            a.download = 'bingo.json';
            a.href = URL.createObjectURL(blob);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
};
</script>