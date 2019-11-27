<template>
    <div class="home-wrapper">
        <Button />
        <img alt="Vue logo" src="@/assets/logo.png">

        <button @click="handleClick">
            redirect view
        </button>
    </div>
</template>

<script>
    // import HelloWorld from '@/components/HelloWorld.vue'
    import Button from '@/components/Button.vue'

    export default {
        name: "home",
        components: {
            Button
        },
        methods: {
            handleClick() {
                this.$router.push({
                    path: '/segmentation',
                });
            },
        },
    }
</script>

<style scoped>

</style>
