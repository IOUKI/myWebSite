<template>
    <blockLayout>
        <div id="Title" class="w-full h-full flex justify-center items-center">
            <h1 id="titleText" class="text-6xl text-sky-500 bg-gray-900 p-3">
            </h1>
        </div>
    </blockLayout>
</template>

<script>
import blockLayout from '../../components/blockLayout.vue'
import scrollSmooth from '../../modules/windowScroll/smooth.js'
import Typed from 'typed.js'

export default {
    data() {
        return {
        }
    },

    components: {
        blockLayout,
    },

    methods: {
        scrollDown() {

        }
    },

    mounted() {
        scrollSmooth()

        const typed = new Typed('#titleText', {
            strings: ['你好～<br>^1000 我是Lan<br>^1000 一個軟體工程師^1000'],
            showCursor: false,
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        })
    }
}
</script>