<template>
    <input hidden 
        :data-fixed="fixed" 
        :data-selected="selected"
        :data-color="color"
        :data-multi-select-number="multiSelectNumber"
        :data-multi-select-options="multiSelectOptions"
        data-times-pressed="0"
        data-times-rounds="0"
    />
    <p :class="[fixed && 'bold big', isEditing || 'pointer-events-none']" class="center user-select-none" :contenteditable="isEditing">{{ text }}</p>
    <div class="bingo-box-multi pointer-events-none display-flex justify-content-space-between" v-if="multiSelectNumber > 0">
        <div v-for="i in multiSelectNumber" :key="i" class="bingo-box-multi--item pointer-events-none" :style="{ backgroundColor: multiSelectOptions[`color${i}`] }">
            <input hidden :data-multi-select-number="i"/>
        </div>
    </div>
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
        return {
            isEditing: true
        };
    },
    mounted() {
        this.$nextTick(() => {
            const el = this.$el;
            this.changeFontSize(el);
        });
        this.$el.nextElementSibling.nextElementSibling.addEventListener('input', () => {
            const el = this.$el;
            this.changeFontSize(el);
        });

        this.$el.parentElement.addEventListener('mouseover', () => {
            if(this.isEditing) return;
            document.body.style.cursor = `url(${require('@/assets/img/cursor.png')}) 4 12, auto`;
        });
    },
    methods: {
        changeFontSize(el) {
            const pTag = el.nextElementSibling.nextElementSibling;
            const text = pTag.innerHTML;

            if(text.length < 7) {
                pTag.style.fontSize = '2rem';
            }

            if(text.length > 30) {
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
    }
};
</script>