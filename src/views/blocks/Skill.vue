<template>
    <blockLayoutVue>
        <div id="Skill" class="w-full h-full flex justify-center items-center">
            <ContentLayout>
                <h1 class="text-3xl text-sky-500 animate-fade">
                    Skill
                </h1>
            </ContentLayout>
        </div>
    </blockLayoutVue>
</template>

<script>
import blockLayoutVue from "../../components/blockLayout.vue";
import ContentLayout from "../../components/ContentLayout.vue";

export default {
    components: {
        blockLayoutVue,
        ContentLayout,
    }
}
</script>