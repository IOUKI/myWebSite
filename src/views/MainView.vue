<template>
    <div class="select-none">
        <Top></Top>
        <About></About>
        <Skill></Skill>
        <Contact></Contact>
    </div>
</template>

<script>
import Top from './blocks/Top.vue';
import About from './blocks/About.vue';
import Skill from './blocks/Skill.vue';
import Contact from './blocks/Contact.vue';

export default {
    data() {
        return {

        }
    },

    components: {
        Top,
        About,
        Skill,
        Contact,
    }
}
</script>