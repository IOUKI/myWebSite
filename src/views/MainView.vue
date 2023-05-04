<template>
    <div class="w-full select-none absolute z-20">
        <Top></Top>
        <About></About>
        <Skill></Skill>
        <Contact></Contact>
        <Community></Community>
    </div>
    <div id="background" class="w-full h-screen fixed top-0 left-0 z-10"></div>
</template>

<script>
import Top from './blocks/Top.vue';
import About from './blocks/About.vue';
import Skill from './blocks/Skill.vue';
import Community from './blocks/Community.vue';

export default {
    data() {
        return {

        }
    },

    components: {
        Top,
        About,
        Skill,
        Community,
    },

    mounted() {

        const backgroundTypeCode = Math.floor(Math.random() * (4 - 1) + 1)

        if (backgroundTypeCode == 1) {
            VANTA.GLOBE({
                el: "#background",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x5097ff,
                backgroundColor: 0x1025
            })
        } else if (backgroundTypeCode == 2) {
            VANTA.FOG({
                el: "#background",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                highlightColor: 0x3264,
                midtoneColor: 0x5dc0,
                lowlightColor: 0x49738c,
                baseColor: 0x1641
            })
        } else {
            VANTA.NET({
                el: "#background",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3fbbff,
                backgroundColor: 0x19193e
            })
        }
    }
}
</script>