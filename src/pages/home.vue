<template>
    <div class="home-wrapper">
        <Button />
        <img alt="Vue logo" src="@/assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        Hello World
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'
    import Button from '@/components/Button.vue'

    export default {
        name: "home",
        components: {
            HelloWorld, Button
        }
    }
</script>

<style scoped>

</style>
