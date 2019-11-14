/* eslint-disable */
<template>
    <button @click="handleClick">
        sssss
    </button>
</template>

<script>
   import {before, after, around} from '@/burry/decorator'

    export default {
        name: "Button",
        methods: {
            @before('11111')
            @after('2222')
            @around('3333')
            handleClick(evt) {
                // this.$emit('click', evt);
                alert(evt);
            }
        },
    }
</script>

<style scoped>

</style>
