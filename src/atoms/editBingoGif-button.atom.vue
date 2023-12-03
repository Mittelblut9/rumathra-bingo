<template>
    <div class="mb-3 w-50">
        <label for="bingoGifInput" class="form-label">Das Bingo Gif (Gebe einen Discord Link ein) (NUR gif)</label>
        <input type="email" class="form-control" id="bingoGifInput" placeholder="https://cdn.discordapp.com/attachments/xxx/xxx/YOUR_GIF.png" :value="getImage()">
        <div class="invalid-feedback">
            Please provide a discord image path
        </div>
        <div class="valid-feedback">
            Looks good! Saved the path.
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditMouseOverButtonAtom',
    data() {
        return {
            validExtensions: ['gif']
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
                this.saveImage('');
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
            this.saveImage(pathWithoutQuery);
        },

        validation(wasValid) {
            if(wasValid) {
                this.$el.querySelector('input').classList.remove('is-invalid');
                this.$el.querySelector('input').classList.add('is-valid');
            } else {
                this.$el.querySelector('input').classList.remove('is-valid');
                this.$el.querySelector('input').classList.add('is-invalid');
            }
        },

        saveImage(path) {
            const currentPath = window.location.pathname;
            const now = new Date();
            const expirationDate = new Date();
            expirationDate.setFullYear(now.getFullYear() + 1);
            const expires = expirationDate.toUTCString();
            document.cookie = `bingoGif=${path}; expires=${expires}; path=${currentPath}; sameSite=strict;`;
        },

        getImage() {
            const value = `; ${document.cookie}`;
            const parts = value.split('; bingoGif=');
            const bingoGifValue = parts.pop().split(';').shift();
            return bingoGifValue;
        }
    }
};
</script>