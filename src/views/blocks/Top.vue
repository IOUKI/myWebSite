<template>
    <blockLayout>
        <div id="Title" class="w-full h-full flex justify-center items-center">
            <h1 class="absolute text-6xl text-sky-500 animate-fade">
                你好～<br>我是Lan
            </h1>
        </div>
    </blockLayout>
</template>

<script>
import blockLayout from '../../components/blockLayout.vue'
export default {
    data() {
        return {
        }
    },

    components: {
        blockLayout,
    },

    mounted() {
        VANTA.BIRDS({
            el: "#Title",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            speedLimit: 10.00
        })
    }
}
</script>