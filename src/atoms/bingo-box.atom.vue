<template>
    <input hidden 
        :data-selected="selected"
        :data-multi-select-number="multiSelectNumber"
        data-times-pressed="0"
        data-times-rounds="0"
        class="bingo-box-field-data d-none"
    />
    <p :class="[$root.edit || 'pointer-events-none']" class="text-center user-select-none p-0 m-0 text-uppercase fw-bold py-2" :contenteditable="$root.edit">{{ text }}</p>
    <div class="bingo-box-multi row pointer-events-none d-flex justify-content-space-between mt-3 " v-if="multiSelectNumber > 0">
        <div v-for="i in multiSelectNumber" :key="i" class="bingo-box-multi--item pointer-events-none fw-bold text-black col">
            <input hidden :data-multi-select-number="i"/>
        </div>
    </div>
</template>

<script>
import { getCookie } from '@/assets/js/cookie';

export default {
    name: 'BingoBoxAtom',
    props: {
        tableContent: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            text: this.tableContent.text,
            multiSelectNumber: this.tableContent.multiSelectNumber,
            selected: false,
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
            if (this.$root.edit) {
                document.body.style.cursor = '';
                return;
            }
            const hoverImage = getCookie('hoverImage', this.$route.query.bingo);
            document.body.style.cursor = `url(${hoverImage}) 4 12, auto`;
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
                const fontSize = 60 / text.length;
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