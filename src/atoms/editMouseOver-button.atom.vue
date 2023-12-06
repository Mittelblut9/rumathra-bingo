<template>
    <div class="mb-3 w-50">
        <label for="hoverImageInput" class="form-label">Das Hover Bild (Gebe einen Discord Link ein) (NUR png oder jpg)</label>
        <input 
            type="email" 
            class="form-control" 
            id="hoverImageInput" 
            placeholder="https://cdn.discordapp.com/attachments/xxx/xxx/YOUR_IMAGE.png" 
            :value="mouseOverImage">
        <div class="invalid-feedback">
            Please provide a discord image path
        </div>
        <div class="valid-feedback">
            Looks good! Saved the path.
        </div>
    </div>
</template>

<script>
import { getCookie, saveCookie } from '@/assets/js/cookie';

export default {
    name: 'EditMouseOverButtonAtom',
    data() {
        return {
            validExtensions: ['png', 'jpg', 'jpeg'],
            mouseOverImage: getCookie('hoverImage', this.$route.query.bingo)
        };
    },
    mounted() {
        this.$el.querySelector('input').addEventListener('focusout', this.handleFileSelect, false);
    },
    methods: {
        handleFileSelect(evt) {
            const path = evt.target.value;
            if(!path) {
                this.validation(true);
                saveCookie('hoverImage', this.$route.query.bingo, '');
                return;
            }

            const hostname = new URL(path).hostname;
            if(hostname !== 'cdn.discordapp.com') {
                this.validation(false);
                return;
            }

            const pathWithoutQuery = path.split('?')[0];
            const extension = pathWithoutQuery.split('.').pop().toLowerCase();
            if(!this.validExtensions.includes(extension)) {
                this.validation(false);
                return;
            }

            this.validation(true);
            saveCookie('hoverImage', this.$route.query.bingo, path);
        },

        validation(wasValid) {
            const inputElement = this.$el.querySelector('input');
            inputElement.classList.remove(wasValid ? 'is-invalid' : 'is-valid');
            inputElement.classList.add(wasValid ? 'is-valid' : 'is-invalid');
        },
    }
};
</script>