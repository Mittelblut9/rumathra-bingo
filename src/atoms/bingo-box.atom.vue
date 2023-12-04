<template>
    <input hidden 
        :data-selected="selected"
        :data-multi-select-number="multiSelectNumber"
        :data-multi-select-options="multiSelectOptions"
        data-times-pressed="0"
        data-times-rounds="0"
    />
    <p :class="[isEditing || 'pointer-events-none']" class="text-center user-select-none p-0 m-0 text-uppercase fw-bold py-2" :contenteditable="isEditing">{{ text }}</p>
    <div class="bingo-box-multi pointer-events-none d-flex justify-content-space-between mt-3 " v-if="multiSelectNumber > 0">
        <div v-for="i in multiSelectNumber" :key="i" class="bingo-box-multi--item pointer-events-none fw-bold text-black" :style="{ backgroundColor: multiSelectOptions[`color${i}`] }">
            <input hidden :data-multi-select-number="i"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BingoBoxAtom',
    props: {
        selected: {
            type: Boolean,
            default: false
        },
        text: {
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
        return {
            isEditing: false,
            editBingoClicked: false
        };
    },
    mounted() {
        document.addEventListener('editBingo', () => {
            this.editBingoClicked = true;
            if (this.editBingoClicked && this.isEditing !== !this.isEditing) {
                this.isEditing = !this.isEditing;
            }
        });

        this.$nextTick(() => {
            const el = this.$el;
            this.changeFontSize(el);
        });
        this.$el.nextElementSibling.nextElementSibling.addEventListener('input', () => {
            const el = this.$el;
            this.changeFontSize(el);
        });

        this.$el.parentElement.addEventListener('mouseover', () => {
            if (this.isEditing) {
                document.body.style.cursor = '';
                return;
            }
            document.body.style.cursor = `url(${this.getHoverImage()}) 4 12, auto`;
        });
    },
    methods: {
        changeFontSize(el) {
            const pTag = el.nextElementSibling.nextElementSibling;
            const text = pTag.innerHTML;

            if(text.length < 7) {
                pTag.style.fontSize = '2rem';
            }

            if(text.length > 40) {
                const fontSize = 50 / text.length;
                pTag.style.fontSize = `${fontSize}rem`;
            }

            text.split(' ').forEach(word => {
                const wordLength = word.length;
                
                if(wordLength > 11) {
                    const fontSize = 15 / wordLength;
                    pTag.style.fontSize = `${fontSize}rem`;
                }
            });
        },

        getHoverImage() {
            const currentQuery = this.$route.query.bingo;
            const value = `; ${document.cookie}`;
            const parts = value.split(`; hoverImage${currentQuery}=`);
            const hoverImageValue = parts.pop().split(';').shift().replaceAll('\\', '/');
            return hoverImageValue;
        }
    }
};
</script>