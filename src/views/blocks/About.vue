<template>
    <blockLayoutVue>
        <div id="About" class="w-full h-full flex justify-center items-center">
            <ContentLayout>
                <div class="w-full h-full bg-gray-900 p-5 rounded-xl">
                    <h1 class="text-3xl text-sky-500 animate-fade" data-aos="zoom-out-right">
                        「關於」
                    </h1>
                </div>
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
    },
}
</script>