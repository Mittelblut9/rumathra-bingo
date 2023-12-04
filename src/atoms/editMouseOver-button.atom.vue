<template>
    <div class="mb-3 w-50">
        <label for="hoverImageInput" class="form-label">Das Hover Bild (Gebe einen Discord Link ein) (NUR png oder jpg)</label>
        <input type="email" class="form-control" id="hoverImageInput" placeholder="https://cdn.discordapp.com/attachments/xxx/xxx/YOUR_IMAGE.png" :value="getImage()">
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
            validExtensions: ['png', 'jpg', 'jpeg']
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
            const currentQuery = this.$route.query.bingo;
            const now = new Date();
            const expirationDate = new Date();
            expirationDate.setFullYear(now.getFullYear() + 1);
            const expires = expirationDate.toUTCString();
            document.cookie = `hoverImage${currentQuery}=${path}; expires=${expires}; path=/; sameSite=strict;`;
        },

        getImage() {
            const currentQuery = this.$route.query.bingo;
            const value = `; ${document.cookie}`;
            const parts = value.split(`; hoverImage${currentQuery}=`);
            const hoverImageValue = parts.pop().split(';').shift();
            return hoverImageValue;
        }
    }
};
</script>